/**
 * Asset path helper - resolves paths relative to src
 */
export function getAssetUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href
}
