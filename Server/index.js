require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const MSA_BASE = process.env.MSA_API_BASE_URL || 'http://api.liaisongroup.net/api';
const MSA_USERNAME = process.env.MSA_API_USERNAME || 'msa';
const MSA_PASSWORD = process.env.MSA_API_PASSWORD || '';

app.use(cors({ origin: true })); // Allow all origins (dev + prod)
app.use(express.json());

// Log every request to verify connectivity
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'API is reachable' });
});

const TOKEN_TIMEOUT_MS = 30_000;
const SUBMIT_TIMEOUT_MS = Number(process.env.SUBMIT_TIMEOUT_MS) || 90_000; // M-Pesa flow can take 60+ seconds

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeoutId);
    return res;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      const timeoutErr = new Error(`Request timed out after ${timeoutMs / 1000} seconds. The API may be slow or waiting for M-Pesa confirmation.`);
      timeoutErr.cause = err;
      throw timeoutErr;
    }
    throw err;
  }
}

async function getMsToken() {
  const body = new URLSearchParams({
    grant_type: 'password',
    username: MSA_USERNAME,
    password: MSA_PASSWORD,
  });
  const res = await fetchWithTimeout(`${MSA_BASE}/v1/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  }, TOKEN_TIMEOUT_MS);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token request failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  const token = data.token ?? data.accessToken ?? data.access_token ?? data.data?.token;
  if (!token) throw new Error('No token in response');
  return token;
}

// Serve frontend static files (when built) - API routes above take precedence
const frontendDist = path.join(__dirname, '../Frontend/dist');

// Valid Safaricom (M-Pesa) prefixes - M-Pesa is Safaricom only
const SAFARICOM_PREFIXES = new Set([
  '701', '702', '703', '704', '705', '706', '707', '708', '709',
  '710', '711', '712', '713', '714', '715', '716', '717', '718', '719',
  '720', '721', '722', '723', '724', '725', '726', '727', '728', '729',
  '740', '741', '742', '743', '745', '746', '748',
  '757', '758', '759',
  '768', '769',
  '790', '791', '792', '793', '794', '795', '796', '797', '798', '799',
  '110', '111', '112', '113', '114', '115',
])

function validateMpesaNumber(mpesa) {
  if (!mpesa || typeof mpesa !== 'string') return false
  const digits = mpesa.replace(/\D/g, '')
  if (digits.length !== 12 || !digits.startsWith('254')) return false
  const prefix = digits.slice(3, 6)
  return SAFARICOM_PREFIXES.has(prefix)
}

function extractApiError(body, fallback) {
  const msg = body?.StatusMessage ?? body?.statusMessage ?? body?.Message ?? body?.message ?? body?.error ?? body?.detail ?? body?.Description ?? body?.description ?? (Array.isArray(body?.errors) ? body.errors[0] : body?.errors);
  let result = (typeof msg === 'string' ? msg : JSON.stringify(body || {})) || fallback;
  const extra = body?.ErrorCode ?? body?.errorCode ?? body?.Reason ?? body?.reason;
  if (extra && typeof extra === 'string' && !result.toLowerCase().includes(extra.toLowerCase())) {
    result += ` (${extra})`;
  }
  return result;
}

app.all('/api/applications', (req, res, next) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', message: 'Use POST to submit applications' });
  }
  next();
});

app.post('/api/applications', async (req, res) => {
  const payload = req.body
  const mpesaNumber = payload?.mpesaNumber || payload?.principal?.[0]?.phoneNumber
  console.log('[Submit] Request received | productType:', payload?.productType, '| orderNumber:', payload?.orderNumber, '| instalments:', payload?.instalments, '| M-Pesa:', mpesaNumber || 'N/A')

  if (!validateMpesaNumber(mpesaNumber)) {
    return res.status(200).json({
      success: false,
      message: 'Invalid M-Pesa number. M-Pesa works only with Safaricom numbers (e.g. 0712, 0722, 0745). Airtel (073) and Telkom (077) are not supported.',
    })
  }

  try {
    const token = await getMsToken()
    const submitUrl = `${MSA_BASE}/msa1/submitApplication`;
    console.log('[Submit] Calling Liaison API:', submitUrl, '| M-Pesa:', payload?.mpesaNumber || payload?.principal?.[0]?.phoneNumber || 'N/A');
    console.log('[Submit] Payload sent:', JSON.stringify(payload, null, 2));
    const submitRes = await fetchWithTimeout(submitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }, SUBMIT_TIMEOUT_MS);
    const body = await submitRes.json().catch(() => ({}));
    const statusCode = Number(body.statusCode ?? body.StatusCode ?? body.status ?? submitRes.status);
    const statusMsg = (body.StatusMessage ?? body.statusMessage ?? body.message ?? '').toLowerCase();
    const hasErrorInMessage = /invalid|error|failed|reject|decline/.test(statusMsg);
    const isSuccess = (body.success === true || body.Success === true || statusCode === 100 || statusCode === 200 || statusCode === 201) && !hasErrorInMessage;

    if (isSuccess) {
      console.log('[Submit] Success:', statusCode, JSON.stringify(body));
      return res.status(200).json({ success: true, message: 'Application submitted successfully. Thank you for your payment.' });
    }

    const msg = extractApiError(body, 'Application submission failed. Please try again.');
    console.error('Liaison API error:', submitRes.status, 'message:', msg);
    console.error('Liaison API full response:', JSON.stringify(body, null, 2));
    return res.status(200).json({ success: false, message: msg });
  } catch (err) {
    console.error('Application submit error:', err.message || err);
    const msg = err.message || 'Submission failed';
    res.status(200).json({ success: false, message: msg });
  }
});

// Static files + SPA fallback (only if dist exists)
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get(/\/(?!api)/, (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
  console.log('Serving frontend from', frontendDist);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT} (also http://127.0.0.1:${PORT})`);
});
