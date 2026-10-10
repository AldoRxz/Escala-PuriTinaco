import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckRounded from '@mui/icons-material/CheckRounded'
import CloseRounded from '@mui/icons-material/CloseRounded'
import TankIllustration from '@/components/illustrations/TankIllustration'
import Section, { SectionHeader } from '@/components/ui/Section'

const columns = [
  {
    variant: 'dirty' as const,
    title: 'Agua de la red directa',
    items: [
      'Lodo acumulado en el fondo del tinaco',
      'Regaderas tapadas por residuos y costras',
      'Sedimento en el boiler que le resta eficiencia',
      'Lavar el tinaco cada pocos meses',
    ],
  },
  {
    variant: 'clean' as const,
    title: 'Con PuriTinaco',
    items: [
      'Agua cristalina en toda la casa',
      'Flujo constante en regaderas y llaves',
      'Tinaco limpio por meses',
      'Boiler y lavadora protegidos del sedimento',
    ],
  },
]

export default function ProblemSolution() {
  return (
    <Section id="problema">
      <SectionHeader
        sectionId="problema"
        title="Lo que entra a tu tinaco, sale por tus regaderas"
        subtitle="La red trae tierra y arena, sobre todo después de lluvias o cortes de agua. Todo eso termina asentado en tu tinaco."
      />
      <Grid container spacing={3}>
        {columns.map((col) => {
          const clean = col.variant === 'clean'
          return (
            <Grid key={col.variant} size={{ xs: 12, md: 6 }}>
              <Card
                component="article"
                sx={{
                  height: '100%',
                  borderColor: clean ? 'primary.main' : 'divider',
                  borderWidth: clean ? 1.5 : 1,
                }}
              >
                <Box sx={{ bgcolor: clean ? 'accent.light' : '#F1F5F9', px: { xs: 4, md: 8 }, pt: 4, pb: 2 }}>
                  <Box sx={{ maxWidth: 340, mx: 'auto' }}>
                    <TankIllustration variant={col.variant} />
                  </Box>
                </Box>
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h3" component="h3" sx={{ color: clean ? 'secondary.main' : 'text.primary' }}>
                    {col.title}
                  </Typography>
                  <Stack component="ul" spacing={1.75} sx={{ listStyle: 'none', m: 0, p: 0, mt: 3 }}>
                    {col.items.map((item) => (
                      <Stack key={item} component="li" direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 26,
                            height: 26,
                            flexShrink: 0,
                            borderRadius: '50%',
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: clean ? 'accent.light' : '#F1F5F9',
                            color: clean ? 'primary.main' : 'text.secondary',
                            '& svg': { fontSize: 18 },
                          }}
                        >
                          {clean ? <CheckRounded /> : <CloseRounded />}
                        </Box>
                        <Typography sx={{ pt: 0.1 }}>{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Section>
  )
}
