import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FilterAltRounded from '@mui/icons-material/FilterAltRounded'
import PlumbingRounded from '@mui/icons-material/PlumbingRounded'
import ShowerRounded from '@mui/icons-material/ShowerRounded'
import Section, { SectionHeader } from '@/components/ui/Section'
import { colors } from '@/lib/tokens'

const steps = [
  {
    icon: <PlumbingRounded />,
    title: 'Se conecta en la subida',
    body: 'Va en la tubería que sube al tinaco o entra a la cisterna, antes del flotador.',
  },
  {
    icon: <FilterAltRounded />,
    title: 'Retiene el sedimento',
    body: 'El cartucho atrapa lodo, tierra, arena y óxido. Tú solo lo lavas o lo cambias.',
  },
  {
    icon: <ShowerRounded />,
    title: 'Llega limpia a tu casa',
    body: 'El tinaco se llena sin sedimento y regaderas, boiler y lavadora lo agradecen.',
  },
]

// Tamaños de referencia aproximados; 1 micra = 0.001 mm.
const scale = [
  { size: 100, label: 'Arena fina', detail: '100 micras', color: colors.sedimentLight },
  { size: 70, label: 'Cabello humano', detail: '70 micras', color: '#CBD5E1' },
  { size: 20, label: 'Retiene Kit Básico', detail: '20 micras', color: colors.aquaPrimaryLight },
  { size: 5, label: 'Retiene Kit Dual Pro', detail: '5 micras', color: colors.aquaPrimary },
]
// Píxeles por micra en móvil y escritorio.
const pxPerMicron = { xs: 0.62, sm: 1.1 }
const dot = (microns: number, k: number) => Math.max(microns * k, 6)

export default function HowItWorks() {
  return (
    <Section id="como-funciona" tone="paper">
      <SectionHeader
        sectionId="como-funciona"
        title="Se instala en la entrada y filtra todo lo que sube"
        subtitle="No cambia tu plomería: el filtro se intercala en la tubería que ya tienes."
      />

      <Box
        component="ol"
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 4, md: 5 },
          position: 'relative',
          // Línea que conecta los pasos en escritorio.
          '&::before': {
            content: '""',
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: 28,
            left: 28,
            // Del centro del primer ícono al centro del tercero (gap de 40px entre columnas).
            right: 'calc((100% - 80px) / 3 - 28px)',
            borderTop: '2px dashed',
            borderColor: 'accent.main',
            opacity: 0.6,
          },
        }}
      >
        {steps.map((step) => (
          <Box
            component="li"
            key={step.title}
            sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 2.5, md: 3 } }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: 56,
                height: 56,
                flexShrink: 0,
                borderRadius: '50%',
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'primary.main',
                color: '#FFFFFF',
                boxShadow: '0 0 0 6px #FFFFFF, 0 0 0 7px #E2E8F0',
                position: 'relative',
              }}
            >
              {step.icon}
            </Box>
            <Box sx={{ maxWidth: '34ch' }}>
              <Typography variant="h4" component="h3">
                {step.title}
              </Typography>
              <Typography sx={{ mt: 1, color: 'text.secondary' }}>{step.body}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          borderRadius: 1,
          bgcolor: 'accent.light',
          p: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h3" component="h3" sx={{ color: 'secondary.main' }}>
              ¿Qué tan pequeño es 5 micras?
            </Typography>
            <Typography sx={{ mt: 2, color: 'text.primary', maxWidth: '44ch' }}>
              Una micra es la milésima parte de un milímetro. El cartucho de 5 micras detiene partículas unas 14 veces más
              delgadas que un cabello.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="ul"
              aria-label="Comparación de tamaños en micras"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                columnGap: { xs: 1, sm: 2 },
                alignItems: 'start',
              }}
            >
              {scale.map((item) => (
                <Box component="li" key={item.label} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      height: { xs: dot(100, pxPerMicron.xs), sm: dot(100, pxPerMicron.sm) },
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: { xs: dot(item.size, pxPerMicron.xs), sm: dot(item.size, pxPerMicron.sm) },
                        height: { xs: dot(item.size, pxPerMicron.xs), sm: dot(item.size, pxPerMicron.sm) },
                        borderRadius: '50%',
                        bgcolor: item.color,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    sx={{ mt: 2, fontWeight: 600, color: 'secondary.main', whiteSpace: 'nowrap', fontSize: { xs: '0.8125rem', sm: '0.9375rem' } }}
                  >
                    {item.detail}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}
