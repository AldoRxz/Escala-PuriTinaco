'use client'

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import { cartStore, type CartLine } from '@/lib/cartStore'
import { getProduct, unitPrice, type Product, type ProductId, type PurchaseMode } from '@/lib/products'
import CartDrawer from './CartDrawer'

export type CartItem = CartLine & { product: Product; unitPrice: number; total: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  add: (productId: ProductId, mode?: PurchaseMode) => void
  setQty: (productId: ProductId, mode: PurchaseMode, qty: number) => void
  remove: (productId: ProductId, mode: PurchaseMode) => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot)
  const [isOpen, setOpen] = useState(false)
  // El mensaje se conserva al cerrar para que no desaparezca durante la animación de salida.
  const [toast, setToast] = useState({ open: false, message: '' })

  const items = useMemo<CartItem[]>(
    () =>
      lines.map((line) => {
        const product = getProduct(line.productId)
        const price = unitPrice(product, line.mode)
        return { ...line, product, unitPrice: price, total: price * line.qty }
      }),
    [lines],
  )

  const add = useCallback((productId: ProductId, mode: PurchaseMode = 'unica') => {
    cartStore.add(productId, mode)
    setToast({ open: true, message: `${getProduct(productId).name} se agregó al carrito` })
  }, [])

  const openCart = useCallback(() => {
    setToast((t) => ({ ...t, open: false }))
    setOpen(true)
  }, [])
  const closeCart = useCallback(() => setOpen(false), [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.qty, 0),
      subtotal: items.reduce((sum, item) => sum + item.total, 0),
      add,
      setQty: cartStore.setQty,
      remove: cartStore.remove,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, add, isOpen, openCart, closeCart],
  )

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
      <Snackbar
        open={toast.open}
        onClose={(_, reason) => reason !== 'clickaway' && setToast((t) => ({ ...t, open: false }))}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={toast.message}
        action={
          <Button size="small" onClick={openCart} sx={{ color: 'accent.main', fontWeight: 600 }}>
            Ver carrito
          </Button>
        }
        slotProps={{ content: { sx: { borderRadius: 1, bgcolor: 'text.primary' } } }}
      />
    </CartContext.Provider>
  )
}
