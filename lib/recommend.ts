import type { ProductId } from './products'

// ---------------------------------------------------------------------------
// Compatibilidad por medida de tubería
// ---------------------------------------------------------------------------

export type PipeSize = '1/2' | '3/4' | '1'

export const pipeSizes: { value: PipeSize; label: string }[] = [
  { value: '1/2', label: '1/2"' },
  { value: '3/4', label: '3/4"' },
  { value: '1', label: '1"' },
]

export type PipeRecommendation = { productId: ProductId; reason: string; connection: string }

export const pipeRecommendations: Record<PipeSize, PipeRecommendation> = {
  '1/2': {
    productId: 'kit-basico',
    reason: 'Es la medida más común en casas abastecidas por la red. El Kit Básico retiene lodo y arena y su cartucho se lava.',
    connection: 'Se instala con las conexiones de 1/2" incluidas. Si te molesta el olor a cloro, el Kit Dual Pro también es compatible.',
  },
  '3/4': {
    productId: 'kit-dual-pro',
    reason: 'Por 3/4" sube más agua y también más sedimento. El Kit Dual Pro lo filtra en dos etapas: 5 micras y carbón activado.',
    connection: 'Se instala con las conexiones de 3/4" incluidas, sin cambiar tu tubería.',
  },
  '1': {
    productId: 'kit-dual-pro',
    reason: 'Es la medida típica de cisternas y casas con mucho consumo. Las carcasas jumbo tienen entrada de 1".',
    connection: 'Se conecta directo a tu tubería de 1", sin reducciones.',
  },
}

// ---------------------------------------------------------------------------
// Calculador de mantenimiento
// ---------------------------------------------------------------------------

export type WaterSource = 'red' | 'tierra' | 'pipa'

export const waterSources: { value: WaterSource; label: string; detail: string }[] = [
  { value: 'red', label: 'Red municipal', detail: 'Casi siempre llega clara' },
  { value: 'tierra', label: 'Red con tierra', detail: 'Se ensucia con lluvias o cortes' },
  { value: 'pipa', label: 'Pipa o pozo', detail: 'Llega con arena o lodo' },
]

/** Litros por persona al día usados como referencia para el consumo doméstico. */
export const LITERS_PER_PERSON = 150

// Semanas entre mantenimientos para una casa de 4 personas; se escala por número de personas.
const sedimentChangeWeeks: Record<WaterSource, number> = { red: 26, tierra: 16, pipa: 8 }
const washWeeks: Record<WaterSource, number> = { red: 12, tierra: 8, pipa: 4 }

export type CalculatorInput = { people: number; source: WaterSource; chlorine: boolean }

export type CalculatorResult = {
  productId: ProductId
  reason: string
  litersPerDay: number
  /** Tarea principal de mantenimiento y su frecuencia en semanas. */
  maintenance: { task: string; weeks: number }
  /** Cartuchos nuevos al año y a qué se refiere el conteo. */
  cartridgesPerYear: number
  cartridgesLabel: string
  note: string
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))

export function calculate({ people, source, chlorine }: CalculatorInput): CalculatorResult {
  const scale = 4 / clamp(people, 1, 10)
  const litersPerDay = clamp(people, 1, 10) * LITERS_PER_PERSON
  // Con pipa o pozo un cartucho de 5 micras se saturaría en semanas: siempre va primero el lavable.
  const dualPro = source !== 'pipa' && (chlorine || source === 'tierra')

  if (dualPro) {
    const weeks = Math.round(clamp(sedimentChangeWeeks[source] * scale, 8, 26))
    return {
      productId: 'kit-dual-pro',
      reason: chlorine
        ? 'El carbón activado de la segunda etapa reduce el olor y sabor a cloro, y el cartucho de 5 micras detiene el sedimento fino.'
        : 'Cuando la red trae tierra, el cartucho de 5 micras atrapa el sedimento fino que pasa por filtros más abiertos.',
      litersPerDay,
      maintenance: { task: 'Cambio del cartucho de sedimentos', weeks },
      cartridgesPerYear: Math.ceil(52 / weeks),
      cartridgesLabel: 'Cartuchos de sedimentos al año',
      note: 'El bloque de carbón se cambia cada 6 meses.',
    }
  }

  const weeks = Math.round(clamp(washWeeks[source] * scale, 2, 16))
  return {
    productId: 'kit-basico',
    reason:
      source !== 'pipa'
        ? 'Para agua de red que llega clara, el cartucho lavable de 20 micras es suficiente para detener lodo y arena.'
        : chlorine
          ? 'Con agua de pipa o pozo empieza con el cartucho lavable, que aguanta mucha arena. Para el cloro puedes sumar después el Kit Dual Pro como segunda etapa.'
          : 'Con agua de pipa o pozo conviene un cartucho lavable: aguanta mucha arena y lo reutilizas después de enjuagarlo.',
    litersPerDay,
    maintenance: { task: 'Lavado del cartucho', weeks },
    cartridgesPerYear: 1,
    cartridgesLabel: 'Cartuchos al año',
    note: 'El cartucho lavable se reemplaza una vez al año.',
  }
}

export function formatWeeks(weeks: number) {
  if (weeks < 8) return `${weeks} semanas`
  const months = Math.round(weeks / 4.33)
  return months === 1 ? '1 mes' : `${months} meses`
}
