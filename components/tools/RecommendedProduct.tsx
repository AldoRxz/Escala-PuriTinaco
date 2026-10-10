'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddShoppingCartRounded from '@mui/icons-material/AddShoppingCartRounded'
import { useCart } from '@/components/cart/CartProvider'
import ProductIllustration from '@/components/illustrations/ProductIllustration'
import { formatMXN, getProduct, type ProductId } from '@/lib/products'

type RecommendedProductProps = {
  productId: ProductId
  /** Apila el botón debajo, para columnas angostas. */
  compact?: boolean
}

/** Bloque de "kit recomendado" con miniatura, precio y botón de compra. */
export default function RecommendedProduct({ productId, compact = false }: RecommendedProductProps) {
  const { add } = useCart()
  const product = getProduct(productId)

  return (
    <Stack
      direction={compact ? 'column' : { xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{
        alignItems: compact ? 'stretch' : { sm: 'center' },
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}>
        <Box sx={{ width: 64, flexShrink: 0, bgcolor: 'accent.light', borderRadius: 1, p: 0.5 }}>
          <ProductIllustration art={product.art} />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Te recomendamos
          </Typography>
          <Typography variant="h5" component="p">
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>
            {formatMXN(product.price)} MXN
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        startIcon={<AddShoppingCartRounded />}
        onClick={() => add(product.id)}
        sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
      >
        Agregar al carrito
      </Button>
    </Stack>
  )
}
