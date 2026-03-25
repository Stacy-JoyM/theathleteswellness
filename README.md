# TAWC - The Athletes Wellness Club

Project guidelines and technical overview for the TAWC website.

---

## Frontend Technologies

| Technology      | Version | Purpose              |
|----------------|---------|----------------------|
| React          | 19.2    | UI library           |
| React Router DOM | 7.13  | Client-side routing  |
| Vite           | 7.3     | Dev server, bundling, HMR |
| ESLint         | 9.x     | Linting              |

---

## Frontend Architecture

### Routing

- **Layout:** `Layout.jsx` wraps all routes with header, nav, footer, and `<Outlet />`.
- **Routes:**

| Path             | Page           |
|------------------|----------------|
| `/`              | Home           |
| `/apply-now`     | Apply form     |
| `/faq`           | FAQ            |
| `/insurance-deals` | Deals overview |
| `/product`       | Wellness packages |
| `/privacy-policy` | Privacy policy |
| `/contact-us`    | Contact page   |
| `*`              | Redirect to `/` |

### Data Flow

- **Constants:** Located at `src/constants/index.js` — single source of truth for:
  - Contact info & social links
  - Partner info & navigation links
  - Insurance packages (Suswa, Longonot, Elgon, Kenya)
  - Wealth Management Services & comparison tables
- **No API:** All data is static and imported from constants.

### Assets & Styling

- **Assets:** Stored in `src/assets/`. Use `getAssetUrl(path)` in `utils/assets.js` to resolve paths.
- **Styling:** Plain CSS (no CSS-in-JS).
- **Design tokens:** Defined in `index.css` (e.g. `--color-primary`, `--gradient-cta`, `--max-content-width: 1120px`).

---

## Backend (Server)

### Current State

- **Dependencies:** express, cors, dotenv, nodemon
- **Status:** Entry point (`index.js`) is missing; `package.json` has no `start` or `dev` scripts
- **Vite proxy:** `vite.config.js` proxies `/api` requests to `http://localhost:5000`

---

## Development Guide

### Running the Project

#### 1. Frontend

```bash
cd Frontend
npm install
npm run dev
```

- **Local URL:** http://localhost:5173
- **Build:** `npm run build`
- **Preview build:** `npm run preview`

#### 2. Backend

Ensure the server runs on `http://localhost:5000` to align with the frontend proxy.

### Configuration Mapping

| Area           | Location              | Notes                          |
|----------------|-----------------------|--------------------------------|
| Contact info   | `constants/index.js`  | Email, phone, links            |
| Package details| `constants/index.js`  | Prices, benefits, tiers        |
| Navigation     | `constants/index.js`  | URLs and labels                |
| Design tokens  | `src/index.css`       | Colors, spacing, typography    |

---

## Backend Integration TODOs

- [ ] Add `Server/index.js` with Express setup
- [ ] Create `POST /api/applications` for form submissions
- [ ] Replace alert in `ApplyNowPage.jsx` with `fetch` call to the API
- [ ] Create `.env` files for sensitive keys (see `.env.example`)

---

## Summary

| Aspect          | Status                    |
|-----------------|---------------------------|
| Frontend        | Implemented (React + Vite) |
| Backend         | No entry point            |
| API             | None; proxy configured    |
| Form submission | Client-side logging only  |
| Data source     | Static constants          |
