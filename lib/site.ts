// Datos generales del sitio. Los valores marcados con TODO son provisionales y deben
// reemplazarse con los datos reales del negocio antes de publicar.

export const site = {
  name: 'PuriTinaco',
  slogan: 'Agua limpia antes de que entre a tu hogar.',
  description:
    'Sistemas de filtración de sedimentos para la entrada de tinacos y cisternas. Detén lodo, tierra y arena antes de que lleguen a tu casa. Envío a todo México.',
  // Dominio canónico sin www.
  url: 'https://puritinaco.com', // TODO: confirmar dominio definitivo.
  locale: 'es_MX',
  email: 'hola@puritinaco.com', // TODO: correo real.
  whatsapp: {
    number: '5215500000000', // TODO: número real en formato internacional, sin "+" ni espacios.
    display: '55 0000 0000', // TODO
  },
  hours: 'Lunes a sábado, 9:00 a 19:00 h',
} as const

export const nav = [
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Compatibilidad', href: '#compatibilidad' },
  { label: 'Calculador de filtro', href: '#calculador' },
  { label: 'Contacto', href: '#contacto' },
] as const

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
