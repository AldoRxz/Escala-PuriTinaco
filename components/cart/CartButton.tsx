'use client'

import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import { useCart } from './CartProvider'

export default function CartButton() {
  const { count, openCart } = useCart()
  const label = count > 0 ? `Abrir carrito, ${count} ${count === 1 ? 'producto' : 'productos'}` : 'Abrir carrito'

  return (
    <IconButton aria-label={label} onClick={openCart} sx={{ color: 'text.primary' }}>
      <Badge badgeContent={count} color="primary" max={99}>
        <ShoppingCartOutlined />
      </Badge>
    </IconButton>
  )
}
