require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MSA_BASE = process.env.MSA_API_BASE_URL || 'http://api.liaisongroup.net/api';
const MSA_USERNAME = process.env.MSA_API_USERNAME || 'msa';
const MSA_PASSWORD = process.env.MSA_API_PASSWORD || '';

app.use(cors());
app.use(express.json());

async function getMsToken() {
  const body = new URLSearchParams({
    grant_type: 'password',
    username: MSA_USERNAME,
    password: MSA_PASSWORD,
  });
  const res = await fetch(`${MSA_BASE}/v1/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token request failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  const token = data.token ?? data.accessToken ?? data.access_token ?? data.data?.token;
  if (!token) throw new Error('No token in response');
  return token;
}

app.get('/', (req, res) => {
  res.json({ message: 'TAWC Server is running' });
});

function extractApiError(body, fallback) {
  const msg = body?.StatusMessage ?? body?.statusMessage ?? body?.message ?? body?.error ?? body?.detail ?? (Array.isArray(body?.errors) ? body.errors[0] : body?.errors);
  return (typeof msg === 'string' ? msg : JSON.stringify(body || {})) || fallback;
}

app.post('/api/applications', async (req, res) => {
  const payload = req.body;
  try {
    const token = await getMsToken();
    const submitRes = await fetch(`${MSA_BASE}/msa1/submitApplication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const body = await submitRes.json().catch(() => ({}));
    const statusCode = Number(body.statusCode ?? body.StatusCode ?? body.status ?? submitRes.status);

    if (statusCode === 200) {
      return res.status(200).json({ success: true, message: 'Application submitted successfully. Please complete the M-Pesa prompt on your phone.' });
    }

    const msg = extractApiError(body, 'Application submission failed. Please try again.');
    console.error('Liaison API error:', submitRes.status, 'body:', JSON.stringify(body));
    const httpStatus = (statusCode === 100 || submitRes.ok) ? 400 : submitRes.status;
    return res.status(httpStatus).json({ success: false, message: msg });
  } catch (err) {
    console.error('Application submit error:', err);
    res.status(500).json({ success: false, message: err.message || 'Submission failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
