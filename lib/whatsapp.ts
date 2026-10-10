import { site } from './site'

// Mensajes predefinidos de WhatsApp. Todos abren con "les escribo desde su página web" y un código
// de referencia por botón, para identificar en el chat que el cliente viene del sitio y desde dónde.
// El código va en la primera línea para que lo que el cliente escriba (colonia, código postal) quede al final.

export const whatsappRefs = {
  contacto: 'WEB-CONTACTO', // Número de WhatsApp en el footer
  asesoria: 'WEB-ASESORIA', // Botón "Escríbenos por WhatsApp" del footer
  duda: 'WEB-DUDA', // Botón de la sección de preguntas frecuentes
  tuberia: 'WEB-TUBERIA', // Enlace "mándanos una foto" de la herramienta de compatibilidad
  instalacion: 'WEB-INSTALACION', // Botón "Agenda tu instalación"
  pedido: 'WEB-PEDIDO', // Botón "Finalizar pedido por WhatsApp" del carrito
} as const

export type WhatsappRef = keyof typeof whatsappRefs

export function webIntro(ref: WhatsappRef) {
  return `Hola PuriTinaco, les escribo desde su página web (ref. ${whatsappRefs[ref]}).`
}

const messages: Record<Exclude<WhatsappRef, 'pedido'>, string> = {
  contacto: webIntro('contacto'),
  asesoria: `${webIntro('asesoria')} Quiero ayuda para elegir el filtro para mi tinaco.`,
  duda: `${webIntro('duda')} Tengo una duda sobre sus filtros: `,
  tuberia: `${webIntro('tuberia')} Les mando una foto de mi tubería de subida para saber qué kit necesito.`,
  instalacion: `${webIntro('instalacion')} Quiero agendar la instalación de mi filtro en ${site.installCity.name}. Mi colonia es: `,
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

/** Enlace de WhatsApp con el mensaje predefinido del botón indicado. */
export function whatsappLink(ref: Exclude<WhatsappRef, 'pedido'>) {
  return whatsappUrl(messages[ref])
}
