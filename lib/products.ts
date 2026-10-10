export type ProductId = 'kit-basico' | 'kit-dual-pro' | 'pack-repuestos'
export type PurchaseMode = 'unica' | 'suscripcion'
export type ProductArt = 'single' | 'dual' | 'cartridges'

export type Product = {
  id: ProductId
  name: string
  description: string
  price: number
  subscription?: { price: number; interval: string }
  specs: string[]
  includes: string[]
  // TODO(contenido): calificaciones de ejemplo. Reemplazar con reseñas reales antes de publicar.
  rating: { value: number; count: number }
  badge?: string
  art: ProductArt
}

// TODO(precios): precios provisionales en MXN; confirmar con el negocio.
export const products: Product[] = [
  {
    id: 'kit-basico',
    name: 'Kit Básico Sedimentos',
    description: 'Primera línea contra lodo y arena. El cartucho se lava con agua a presión y vuelve a usarse.',
    price: 1290,
    specs: ['Carcasa 10" jumbo', '20 micras', 'Cartucho lavable'],
    includes: [
      'Carcasa jumbo de 10"',
      'Cartucho plisado lavable de 20 micras',
      'Conexiones para 1/2", 3/4" y 1"',
      'Soporte de pared y llave de carcasa',
    ],
    rating: { value: 4.7, count: 86 },
    art: 'single',
  },
  {
    id: 'kit-dual-pro',
    name: 'Kit Dual Pro',
    description: 'Sedimentos finos en la primera etapa y carbón activado en la segunda para reducir cloro y olor.',
    price: 2490,
    specs: ['2 etapas', '5 micras', 'Carbón activado'],
    includes: [
      '2 carcasas jumbo de 10" en soporte doble',
      'Cartucho de sedimentos de 5 micras',
      'Bloque de carbón activado para cloro y olor',
      'Conexiones para 1/2", 3/4" y 1"',
    ],
    rating: { value: 4.9, count: 212 },
    badge: 'Más popular',
    art: 'dual',
  },
  {
    id: 'pack-repuestos',
    name: 'Pack Repuestos Semestrales',
    description: 'Los cartuchos del Kit Dual Pro para seis meses. Cómpralos una vez o recíbelos en suscripción.',
    price: 690,
    subscription: { price: 590, interval: 'cada 6 meses' },
    specs: ['Sedimentos 5 micras', 'Bloque de carbón', 'Jumbo 10"'],
    includes: ['1 cartucho de sedimentos de 5 micras', '1 bloque de carbón activado', 'Para carcasas jumbo de 10"'],
    rating: { value: 4.8, count: 64 },
    art: 'cartridges',
  },
]

export function getProduct(id: ProductId) {
  const product = products.find((p) => p.id === id)
  if (!product) throw new Error(`Producto desconocido: ${id}`)
  return product
}

export function isProductId(value: unknown): value is ProductId {
  return products.some((p) => p.id === value)
}

export function unitPrice(product: Product, mode: PurchaseMode) {
  return mode === 'suscripcion' && product.subscription ? product.subscription.price : product.price
}

const mxn = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })

export function formatMXN(amount: number) {
  return mxn.format(amount)
}
