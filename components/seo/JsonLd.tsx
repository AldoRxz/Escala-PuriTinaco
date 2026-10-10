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
        // PNG cuadrado de 512 px: Google pide un logo rastreable de al menos 112 x 112 px.
        logo: `${site.url}/icon-512.png`,
        image: `${site.url}/opengraph-image.png`,
        slogan: site.slogan,
        email: site.email,
        areaServed: { '@type': 'Country', name: 'México' },
      },
      {
        '@type': 'Service',
        '@id': `${site.url}/#instalacion`,
        name: `Instalación de filtro para tinaco en ${site.installCity.name}`,
        serviceType: 'Instalación de filtro de sedimentos para tinaco y cisterna',
        provider: { '@id': `${site.url}/#organizacion` },
        areaServed: {
          '@type': 'City',
          name: site.installCity.name,
          containedInPlace: { '@type': 'State', name: site.installCity.region },
        },
        url: `${site.url}/#instalacion`,
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
