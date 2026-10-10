'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import AddShoppingCartRounded from '@mui/icons-material/AddShoppingCartRounded'
import CheckRounded from '@mui/icons-material/CheckRounded'
import { useCart } from '@/components/cart/CartProvider'
import ProductIllustration from '@/components/illustrations/ProductIllustration'
import Section, { SectionHeader } from '@/components/ui/Section'
import { formatMXN, products, unitPrice, type Product, type PurchaseMode } from '@/lib/products'
import { shadows } from '@/lib/tokens'

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()
  const [mode, setMode] = useState<PurchaseMode>('unica')
  const featured = Boolean(product.badge)
  const price = unitPrice(product, mode)
  const titleId = `producto-${product.id}`

  return (
    <Card
      component="article"
      aria-labelledby={titleId}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        borderColor: featured ? 'primary.main' : 'divider',
        borderWidth: featured ? 1.5 : 1,
        transition: 'box-shadow 200ms ease-out, border-color 200ms ease-out',
        '&:hover': { boxShadow: shadows.cardHover, borderColor: featured ? 'primary.main' : 'accent.main' },
      }}
    >
      {product.badge && (
        <Chip
          label={product.badge}
          size="small"
          sx={{
            position: 'absolute',
            top: -13,
            left: 24,
            bgcolor: 'secondary.main',
            color: '#FFFFFF',
            fontWeight: 600,
            px: 0.5,
          }}
        />
      )}
      <Box sx={{ bgcolor: 'accent.light', px: { xs: 8, sm: 6 }, pt: 4, pb: 2, borderRadius: '13px 13px 0 0' }}>
        <ProductIllustration art={product.art} title={`Ilustración de ${product.name}`} />
      </Box>

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography id={titleId} variant="h4" component="h3">
          {product.name}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems: 'center' }}>
          <Rating
            value={product.rating.value}
            precision={0.1}
            readOnly
            size="small"
            getLabelText={(v) => `Calificación de ${v} de 5`}
          />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.rating.value} ({product.rating.count} reseñas)
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
          {product.description}
        </Typography>

        <Stack component="ul" direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', listStyle: 'none', m: 0, p: 0, mt: 2 }}>
          {product.specs.map((spec) => (
            <li key={spec}>
              <Chip label={spec} size="small" sx={{ bgcolor: 'accent.light', color: 'secondary.main' }} />
            </li>
          ))}
        </Stack>

        <Typography variant="subtitle2" component="h4" sx={{ mt: 3, fontWeight: 600 }}>
          Incluye
        </Typography>
        <Stack component="ul" spacing={0.75} sx={{ listStyle: 'none', m: 0, p: 0, mt: 1 }}>
          {product.includes.map((item) => (
            <Stack key={item} component="li" direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
              <CheckRounded aria-hidden="true" sx={{ fontSize: 18, mt: 0.25, color: 'primary.main' }} />
              <Typography variant="body2">{item}</Typography>
            </Stack>
          ))}
        </Stack>

        <Box sx={{ mt: 'auto', pt: 3 }}>
          {product.subscription && (
            <ToggleButtonGroup
              value={mode}
              exclusive
              fullWidth
              size="small"
              onChange={(_, next: PurchaseMode | null) => next && setMode(next)}
              aria-label={`Tipo de compra de ${product.name}`}
              sx={{ mb: 2 }}
            >
              <ToggleButton value="unica">Compra única</ToggleButton>
              <ToggleButton value="suscripcion">Suscripción</ToggleButton>
            </ToggleButtonGroup>
          )}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'baseline' }}>
            <Typography variant="h3" component="p" sx={{ color: 'secondary.main' }}>
              {formatMXN(price)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              MXN{mode === 'suscripcion' && product.subscription ? `, ${product.subscription.interval}` : ''}
            </Typography>
          </Stack>
          {product.subscription && (
            <Typography variant="body2" sx={{ color: 'success.dark', mt: 0.5, minHeight: '1.5em' }}>
              {mode === 'suscripcion'
                ? `Ahorras ${formatMXN(product.price - product.subscription.price)} en cada envío`
                : `Con suscripción: ${formatMXN(product.subscription.price)} ${product.subscription.interval}`}
            </Typography>
          )}
          <Button
            variant={featured ? 'contained' : 'outlined'}
            size="large"
            fullWidth
            startIcon={<AddShoppingCartRounded />}
            onClick={() => add(product.id, mode)}
            sx={{ mt: 2 }}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default function ProductCatalog() {
  return (
    <Section id="sistemas">
      <SectionHeader
        sectionId="sistemas"
        title="Elige tu sistema"
        subtitle={'Todos usan carcasa jumbo de 10" e incluyen conexiones para tubería de 1/2", 3/4" o 1".'}
      />
      <Grid container spacing={3} sx={{ pt: 1.5 }}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
