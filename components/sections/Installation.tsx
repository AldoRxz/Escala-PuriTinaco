import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import BuildRounded from '@mui/icons-material/BuildRounded'
import HomeRounded from '@mui/icons-material/HomeRounded'
import PlaceRounded from '@mui/icons-material/PlaceRounded'
import SchoolRounded from '@mui/icons-material/SchoolRounded'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Section from '@/components/ui/Section'
import { site, whatsappUrl } from '@/lib/site'
import { colors } from '@/lib/tokens'

const city = site.installCity.name

const included = [
  { icon: <HomeRounded />, text: 'Vamos a tu domicilio con tu kit' },
  { icon: <BuildRounded />, text: 'Lo conectamos en tu tubería de subida de 1/2", 3/4" o 1"' },
  { icon: <SchoolRounded />, text: 'Te explicamos cómo lavar y cambiar el cartucho' },
]

export default function Installation() {
  return (
    <Section id="instalacion">
      <Box
        sx={{
          borderRadius: 1,
          border: '1.5px solid',
          borderColor: 'primary.main',
          overflow: 'hidden',
        }}
      >
        <Grid container>
          <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 4, md: 6 }, bgcolor: 'background.paper' }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'primary.main' }}>
              <PlaceRounded fontSize="small" />
              <Typography component="p" sx={{ fontWeight: 600 }}>
                {city}, {site.installCity.region}
              </Typography>
            </Stack>
            <Typography id="instalacion-titulo" variant="h2" component="h2" sx={{ mt: 1.5 }}>
              Instalación de filtro para tinaco en {city}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, color: 'text.secondary', maxWidth: '52ch' }}>
              Si estás en {city}, nosotros lo instalamos. Agenda por WhatsApp y te cotizamos según tu tubería.
            </Typography>
            <Button
              href={whatsappUrl(`Hola, quiero agendar la instalación de mi filtro PuriTinaco en ${city}. Mi colonia es: `)}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              sx={{ mt: 4 }}
            >
              Agenda tu instalación
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ bgcolor: 'accent.light', p: { xs: 3, sm: 4, md: 6 } }}>
            <Typography variant="h5" component="h3" sx={{ color: 'secondary.main' }}>
              Qué incluye
            </Typography>
            <Stack component="ul" spacing={2.5} sx={{ listStyle: 'none', m: 0, p: 0, mt: 3 }}>
              {included.map((item) => (
                <Stack key={item.text} component="li" direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'background.paper',
                      color: 'primary.main',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography>{item.text}</Typography>
                </Stack>
              ))}
            </Stack>
            <Typography variant="body2" sx={{ mt: 3, color: colors.slateMutedOnTint }}>
              ¿Estás en otra ciudad? Te lo enviamos y te guiamos por WhatsApp para que lo instale tu plomero.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Section>
  )
}
