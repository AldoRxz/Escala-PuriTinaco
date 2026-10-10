// Datos generales del sitio. Los valores marcados con TODO son provisionales y deben
// reemplazarse con los datos reales del negocio antes de publicar.

export const site = {
  name: 'PuriTinaco',
  slogan: 'Agua limpia antes de que entre a tu hogar.',
  description:
    'Filtro de sedimentos para tinaco y cisterna: detén lodo, tierra y arena antes de que entren a tu casa. Envío a todo México e instalación en Guadalajara.',
  // Dominio canónico sin www; se resuelve en next.config.mjs (NEXT_PUBLIC_SITE_URL o dominio de producción en Vercel).
  url: process.env.SITE_URL ?? 'https://puritinaco.com',
  locale: 'es_MX',
  email: 'hola@puritinaco.com', // TODO: correo real.
  whatsapp: {
    // Formato internacional para wa.me: 52 + 10 dígitos, sin "+" ni espacios.
    number: '523311474711',
    display: '33 1147 4711',
    tel: '+52 33 1147 4711',
  },
  hours: 'Lunes a sábado, 9:00 a 19:00 h',
  // Ciudad donde también ofrecemos instalación a domicilio.
  installCity: { name: 'Guadalajara', region: 'Jalisco' },
} as const

// Google ignora la meta keywords; estas frases sirven de guía para títulos, textos y anuncios,
// y se publican en la meta para otros buscadores.
export const keywords = [
  'filtro para tinaco',
  'filtro de sedimentos para tinaco',
  'filtro para cisterna',
  'filtro de agua para casa',
  'filtro de entrada de agua',
  'filtro para tinaco en Guadalajara',
  'instalación de filtro para tinaco en Guadalajara',
  'filtro para agua con lodo',
  'lodo en el tinaco',
  'filtro jumbo 10 pulgadas',
  'cartucho de sedimentos 5 micras',
  'filtro de carbón activado para cloro',
]

export const nav = [
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Compatibilidad', href: '#compatibilidad' },
  { label: 'Calculador de filtro', href: '#calculador' },
  { label: 'Instalación', href: '#instalacion' },
  { label: 'Contacto', href: '#contacto' },
] as const
