import { isProductId, type ProductId, type PurchaseMode } from './products'

export type CartLine = { productId: ProductId; mode: PurchaseMode; qty: number }

export const MAX_QTY = 10
const STORAGE_KEY = 'puritinaco:carrito:v1'
const EMPTY: CartLine[] = []

let lines: CartLine[] = EMPTY
let hydrated = false
const listeners = new Set<() => void>()

function clampQty(qty: number) {
  return Math.min(MAX_QTY, Math.max(1, Math.round(qty)))
}

function sanitize(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return EMPTY
  return value.flatMap((item) => {
    if (!item || typeof item !== 'object') return []
    const { productId, mode, qty } = item as Record<string, unknown>
    if (!isProductId(productId) || (mode !== 'unica' && mode !== 'suscripcion') || typeof qty !== 'number') return []
    return [{ productId, mode, qty: clampQty(qty) }]
  })
}

function hydrate() {
  if (hydrated || typeof window === 'undefined') return
  hydrated = true
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) lines = sanitize(JSON.parse(raw))
  } catch {
    // Almacenamiento bloqueado o datos corruptos: se empieza con el carrito vacío.
  }
}

function commit(next: CartLine[]) {
  lines = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Sin persistencia (modo privado, cuota llena): el carrito sigue funcionando en memoria.
  }
  listeners.forEach((listener) => listener())
}

const sameLine = (productId: ProductId, mode: PurchaseMode) => (line: CartLine) =>
  line.productId === productId && line.mode === mode

export const cartStore = {
  subscribe(listener: () => void) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
  getSnapshot() {
    hydrate()
    return lines
  },
  getServerSnapshot() {
    return EMPTY
  },
  add(productId: ProductId, mode: PurchaseMode, qty = 1) {
    const existing = lines.find(sameLine(productId, mode))
    commit(
      existing
        ? lines.map((line) => (line === existing ? { ...line, qty: clampQty(line.qty + qty) } : line))
        : [...lines, { productId, mode, qty: clampQty(qty) }],
    )
  },
  setQty(productId: ProductId, mode: PurchaseMode, qty: number) {
    commit(lines.map((line) => (sameLine(productId, mode)(line) ? { ...line, qty: clampQty(qty) } : line)))
  },
  remove(productId: ProductId, mode: PurchaseMode) {
    commit(lines.filter((line) => !sameLine(productId, mode)(line)))
  },
  clear() {
    commit(EMPTY)
  },
}
