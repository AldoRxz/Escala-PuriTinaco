import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import HeroIllustration from '@/components/illustrations/HeroIllustration'

export default function Hero() {
  return (
    <Box
      component="section"
      aria-labelledby="hero-titulo"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(60% 70% at 85% 35%, rgba(0, 180, 216, 0.10), transparent 70%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }} className="pt-rise">
            <Typography variant="overline" component="p" sx={{ color: 'primary.main' }}>
              Filtro de entrada para tinaco y cisterna
            </Typography>
            <Typography id="hero-titulo" variant="h1" sx={{ mt: 1.5, maxWidth: '17ch' }}>
              Detén el lodo, tierra y sarro antes de que toquen tu tinaco.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 3, color: 'text.secondary', maxWidth: '50ch' }}>
              Sistemas de microfiltración de entrada residencial. Agua limpia para regaderas, boiler y toda la casa sin
              lavar el tinaco a cada rato.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
              <Button href="#sistemas" variant="contained" size="large" endIcon={<ArrowForwardRounded />}>
                Ver modelos
              </Button>
              <Button href="#calculador" variant="outlined" size="large">
                ¿Qué tamaño necesito?
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: { xs: 440, md: 'none' }, mx: 'auto' }}>
              <HeroIllustration />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
