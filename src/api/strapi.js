// ─────────────────────────────────────────────────────────────────────────
//  Configurare API Strapi
//  LOCAL: http://localhost:1337
//  PRODUCȚIE (după deploy pe Strapi Cloud): https://nume-proiect.strapiapp.com
//  Schimbă valoarea de mai jos cu URL-ul tău de Strapi Cloud când urci backend-ul.
// ─────────────────────────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'

// Construiește URL-ul complet al unei imagini din Strapi
export function getImageUrl(imgField) {
  if (!imgField) return null
  // câmpul media single returnează un obiect cu .url
  const url = imgField.url || imgField?.data?.attributes?.url
  if (!url) return null
  // dacă url-ul e relativ (local), îi adăugăm domeniul Strapi
  return url.startsWith('http') ? url : `${API_URL}${url}`
}

// Funcție generică de fetch către Strapi
async function strapiFetch(endpoint) {
  const res = await fetch(`${API_URL}/api/${endpoint}`)
  if (!res.ok) throw new Error(`Strapi error: ${res.status}`)
  const json = await res.json()
  return json.data
}

// ── PRODUSE ────────────────────────────────────────────────────────────────
export async function getProduse() {
  // populate=img aduce și imaginile
  return await strapiFetch('produses?populate=img')
}

export async function getProdusBySlug(slug) {
  const data = await strapiFetch(`produses?filters[slug][$eq]=${slug}&populate=img`)
  return data?.[0] || null
}

// ── ARTICOLE ─────────────────────────────────────────────────────────────────
export async function getArticole() {
  return await strapiFetch('articols?populate=img&sort=data:desc')
}

export async function getArticolBySlug(slug) {
  const data = await strapiFetch(`articols?filters[slug][$eq]=${slug}&populate=img`)
  return data?.[0] || null
}

// ── DESPRE (Single Type) ─────────────────────────────────────────────────────
export async function getDespre() {
  return await strapiFetch('despre?populate=img')
}
