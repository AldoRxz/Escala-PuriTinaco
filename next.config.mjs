// URL canónica del sitio (sin www y sin "/" final). Prioridad:
// 1. NEXT_PUBLIC_SITE_URL, si se define a mano.
// 2. En Vercel, el dominio de producción del proyecto (dominio propio o *.vercel.app).
// 3. Valor por defecto para desarrollo local.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://puritinaco.com')
).replace(/\/+$/, '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    SITE_URL: siteUrl,
  },
}

export default nextConfig
