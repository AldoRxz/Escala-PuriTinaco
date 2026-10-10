'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import PlumbingRounded from '@mui/icons-material/PlumbingRounded'
import { pipeRecommendations, pipeSizes, type PipeSize } from '@/lib/recommend'
import RecommendedProduct from './RecommendedProduct'

export default function CompatibilityTool() {
  const [size, setSize] = useState<PipeSize | null>(null)
  const result = size ? pipeRecommendations[size] : null

  return (
    <Card component="article" id="compatibilidad" aria-labelledby="compatibilidad-titulo" sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="overline" component="p" sx={{ color: 'primary.main' }}>
        Compatibilidad
      </Typography>
      <Typography id="compatibilidad-titulo" variant="h3" component="h3" sx={{ mt: 0.5 }}>
        ¿Qué medida es tu tubería de subida?
      </Typography>
      <Typography sx={{ mt: 1.5, color: 'text.secondary' }}>
        Es el tubo que sube del medidor o la bomba hasta el flotador del tinaco.
      </Typography>

      <ToggleButtonGroup
        value={size}
        exclusive
        fullWidth
        onChange={(_, next: PipeSize | null) => next && setSize(next)}
        aria-label="Medida de la tubería de subida"
        sx={{ mt: 3 }}
      >
        {pipeSizes.map((option) => (
          <ToggleButton
            key={option.value}
            value={option.value}
            sx={{
              py: 1.5,
              fontSize: '1.125rem',
              fontWeight: 600,
              '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'primary.main', color: '#FFFFFF' },
            }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Box aria-live="polite" sx={{ mt: 3 }}>
        {result ? (
          <Stack spacing={2}>
            <Typography>{result.reason}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {result.connection}
            </Typography>
            <RecommendedProduct productId={result.productId} compact />
          </Stack>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', p: 2.5, borderRadius: 1, border: '1px dashed', borderColor: 'divider' }}
          >
            <PlumbingRounded sx={{ color: 'primary.main' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Elige una medida para ver qué kit te queda. ¿No la sabes? Viene impresa en el tubo, o{' '}
              <Link href="#contacto">mándanos una foto</Link>.
            </Typography>
          </Stack>
        )}
      </Box>
    </Card>
  )
}
