'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddRounded from '@mui/icons-material/AddRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'
import DeleteOutlineRounded from '@mui/icons-material/DeleteOutlineRounded'
import RemoveRounded from '@mui/icons-material/RemoveRounded'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import WhatsApp from '@mui/icons-material/WhatsApp'
import ProductIllustration from '@/components/illustrations/ProductIllustration'
import { MAX_QTY } from '@/lib/cartStore'
import { formatMXN } from '@/lib/products'
import { whatsappUrl } from '@/lib/site'
import { useCart, type CartItem } from './CartProvider'

function modeLabel(item: CartItem) {
  if (item.mode === 'suscripcion' && item.product.subscription) return `Suscripción, ${item.product.subscription.interval}`
  return item.product.subscription ? 'Compra única' : null
}

function orderMessage(items: CartItem[], subtotal: number) {
  const lines = items.map((item) => {
    const mode = modeLabel(item)
    return `- ${item.qty} x ${item.product.name}${mode ? ` (${mode})` : ''}: ${formatMXN(item.total)}`
  })
  return [
    'Hola, quiero hacer este pedido en PuriTinaco:',
    '',
    ...lines,
    '',
    `Subtotal: ${formatMXN(subtotal)} MXN`,
    '',
    '¿Me confirman el envío y la forma de pago? Mi código postal es: ',
  ].join('\n')
}

export default function CartDrawer() {
  const { items, count, subtotal, setQty, remove, isOpen, closeCart } = useCart()

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeCart}
      slotProps={{
        paper: {
          component: 'aside',
          'aria-labelledby': 'carrito-titulo',
          sx: { width: 'min(420px, 100vw)', borderRadius: 0, display: 'flex', flexDirection: 'column' },
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 3, py: 2 }}>
        <Typography id="carrito-titulo" variant="h5" component="h2">
          Tu carrito {count > 0 && `(${count})`}
        </Typography>
        <IconButton aria-label="Cerrar carrito" onClick={closeCart} sx={{ mr: -1 }}>
          <CloseRounded />
        </IconButton>
      </Box>
      <Divider />

      {items.length === 0 ? (
        <Stack spacing={2} sx={{ flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 4 }}>
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              bgcolor: 'accent.light',
              color: 'primary.main',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ShoppingCartOutlined fontSize="large" />
          </Box>
          <Typography variant="h5" component="p">
            Tu carrito está vacío
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Elige el kit para tu tinaco y aparecerá aquí.</Typography>
          <Button href="#sistemas" variant="contained" onClick={closeCart}>
            Ver modelos
          </Button>
        </Stack>
      ) : (
        <>
          <Stack component="ul" divider={<Divider component="li" />} sx={{ listStyle: 'none', m: 0, p: 0, flex: 1, overflowY: 'auto' }}>
            {items.map((item) => {
              const mode = modeLabel(item)
              return (
                <Box component="li" key={`${item.productId}:${item.mode}`} sx={{ display: 'flex', gap: 2, px: 3, py: 2.5 }}>
                  <Box sx={{ width: 76, flexShrink: 0, bgcolor: 'accent.light', borderRadius: 1, p: 0.75 }}>
                    <ProductIllustration art={item.product.art} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="subtitle2" component="p" sx={{ fontWeight: 600 }}>
                          {item.product.name}
                        </Typography>
                        {mode && (
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {mode}
                          </Typography>
                        )}
                      </Box>
                      <IconButton
                        size="small"
                        aria-label={`Quitar ${item.product.name} del carrito`}
                        onClick={() => remove(item.productId, item.mode)}
                        sx={{ mt: -0.5, mr: -1, color: 'text.secondary' }}
                      >
                        <DeleteOutlineRounded fontSize="small" />
                      </IconButton>
                    </Stack>
                    <Stack direction="row" sx={{ mt: 1.5, alignItems: 'center', justifyContent: 'space-between' }}>
                      <Stack
                        direction="row"
                        role="group"
                        aria-label={`Cantidad de ${item.product.name}`}
                        sx={{ alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 1 }}
                      >
                        <IconButton
                          size="small"
                          aria-label="Quitar uno"
                          disabled={item.qty <= 1}
                          onClick={() => setQty(item.productId, item.mode, item.qty - 1)}
                        >
                          <RemoveRounded fontSize="small" />
                        </IconButton>
                        <Typography component="span" aria-live="polite" sx={{ minWidth: 28, textAlign: 'center', fontWeight: 500 }}>
                          {item.qty}
                        </Typography>
                        <IconButton
                          size="small"
                          aria-label="Agregar uno"
                          disabled={item.qty >= MAX_QTY}
                          onClick={() => setQty(item.productId, item.mode, item.qty + 1)}
                        >
                          <AddRounded fontSize="small" />
                        </IconButton>
                      </Stack>
                      <Typography sx={{ fontWeight: 600 }}>{formatMXN(item.total)}</Typography>
                    </Stack>
                  </Box>
                </Box>
              )
            })}
          </Stack>

          <Box sx={{ borderTop: '1px solid', borderColor: 'divider', px: 3, pt: 2.5, pb: 3, bgcolor: 'background.default' }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Typography sx={{ fontWeight: 500 }}>Subtotal</Typography>
              <Typography variant="h5" component="p">
                {formatMXN(subtotal)} <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>MXN</Typography>
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
              El envío se calcula con tu código postal al confirmar el pedido.
            </Typography>
            <Button
              href={whatsappUrl(orderMessage(items, subtotal))}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              fullWidth
              startIcon={<WhatsApp />}
              sx={{ mt: 2.5 }}
            >
              Finalizar pedido por WhatsApp
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  )
}
