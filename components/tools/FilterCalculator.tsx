'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { calculate, formatWeeks, LITERS_PER_PERSON, waterSources, type WaterSource } from '@/lib/recommend'
import RecommendedProduct from './RecommendedProduct'

const liters = new Intl.NumberFormat('es-MX')

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        bgcolor: 'background.paper',
        // En móvil cada dato es una fila: etiqueta a la izquierda, valor a la derecha.
        display: { xs: 'flex', sm: 'block' },
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 2,
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
      <Typography variant="h6" component="p" sx={{ mt: { sm: 0.5 }, color: 'secondary.main', textAlign: { xs: 'right', sm: 'left' } }}>
        {value}
      </Typography>
    </Box>
  )
}

export default function FilterCalculator() {
  const [people, setPeople] = useState(4)
  const [source, setSource] = useState<WaterSource>('red')
  const [chlorine, setChlorine] = useState(false)
  const result = calculate({ people, source, chlorine })

  return (
    <Card component="article" id="calculador" aria-labelledby="calculador-titulo" sx={{ height: '100%', p: { xs: 3, md: 4 } }}>
      <Typography variant="overline" component="p" sx={{ color: 'primary.main' }}>
        Calculador de filtro
      </Typography>
      <Typography id="calculador-titulo" variant="h3" component="h3" sx={{ mt: 0.5 }}>
        ¿Qué kit necesito y cada cuánto le doy mantenimiento?
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Typography id="personas-label" component="span" sx={{ fontWeight: 500 }}>
            Personas en tu casa
          </Typography>
          <Typography aria-hidden="true" variant="h4" component="span" sx={{ color: 'primary.main' }}>
            {people}
          </Typography>
        </Stack>
        <Slider
          value={people}
          onChange={(_, v) => setPeople(v as number)}
          min={1}
          max={10}
          step={1}
          marks
          aria-labelledby="personas-label"
          getAriaValueText={(v) => `${v} ${v === 1 ? 'persona' : 'personas'}`}
          sx={{ mt: 1 }}
        />
      </Box>

      <Box component="fieldset" sx={{ border: 0, p: 0, m: 0, mt: 2 }}>
        <Typography component="legend" sx={{ fontWeight: 500, mb: 1.5 }}>
          ¿De dónde llega el agua?
        </Typography>
        <RadioGroup
          value={source}
          onChange={(e) => setSource(e.target.value as WaterSource)}
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5 }}
        >
          {waterSources.map((option) => {
            const selected = option.value === source
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio size="small" />}
                label={
                  <Box sx={{ py: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {option.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}>
                      {option.detail}
                    </Typography>
                  </Box>
                }
                sx={{
                  m: 0,
                  pr: 1.5,
                  alignItems: 'flex-start',
                  border: '1.5px solid',
                  borderColor: selected ? 'primary.main' : 'divider',
                  bgcolor: selected ? 'accent.light' : 'transparent',
                  borderRadius: 1,
                  transition: 'border-color 150ms ease-out, background-color 150ms ease-out',
                  '& .MuiRadio-root': { mt: 0.5 },
                }}
              />
            )
          })}
        </RadioGroup>
      </Box>

      <FormControlLabel
        control={<Switch checked={chlorine} onChange={(e) => setChlorine(e.target.checked)} />}
        label="El agua huele o sabe a cloro"
        sx={{ mt: 2, ml: -1 }}
      />

      <Box aria-live="polite" sx={{ mt: 3, p: { xs: 2, sm: 2.5 }, borderRadius: 1, bgcolor: 'accent.light' }}>
        <Typography>{result.reason}</Typography>
        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: { xs: 1, sm: 1.5 } }}>
          <Stat label="Agua al día" value={`${liters.format(result.litersPerDay)} L`} />
          <Stat label={result.maintenance.task} value={`Cada ${formatWeeks(result.maintenance.weeks)}`} />
          <Stat
            label={result.cartridgesLabel}
            value={`${result.cartridgesPerYear} ${result.cartridgesPerYear === 1 ? 'cartucho' : 'cartuchos'}`}
          />
        </Box>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'text.secondary' }}>
          {result.note} Estimación con {LITERS_PER_PERSON} L por persona al día; si el tinaco tarda más en llenarse, toca darle
          mantenimiento antes.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <RecommendedProduct productId={result.productId} />
        </Box>
      </Box>
    </Card>
  )
}
