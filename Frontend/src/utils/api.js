/**
 * API configuration. Leave VITE_API_BASE_URL unset for local (same-origin).
 * Set when frontend and backend are deployed separately (e.g. Fly.io).
 */
const base = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')

export const API_BASE = base

export function applicationsUrl() {
  if (base) return `${base}/applications`
  return '/api/applications'
}
