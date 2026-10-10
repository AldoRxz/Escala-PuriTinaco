import { products } from '@/lib/products'
import { site } from '@/lib/site'

// Las calificaciones de producto no se publican aquí mientras sean de ejemplo
// (ver TODO en lib/products.ts): Google penaliza reseñas no verificables.
export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organizacion`,
        name: site.name,
        url: `${site.url}/`,
        logo: `${site.url}/icon.svg`,
        slogan: site.slogan,
        email: site.email,
        areaServed: 'MX',
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#sitio`,
        url: `${site.url}/`,
        name: site.name,
        inLanguage: 'es-MX',
        publisher: { '@id': `${site.url}/#organizacion` },
      },
      ...products.map((product) => ({
        '@type': 'Product',
        '@id': `${site.url}/#${product.id}`,
        name: product.name,
        description: product.description,
        brand: { '@type': 'Brand', name: site.name },
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'MXN',
          url: `${site.url}/#sistemas`,
          seller: { '@id': `${site.url}/#organizacion` },
        },
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      // El contenido es estático y generado por nosotros; se escapa "<" por seguridad.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
