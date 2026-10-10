import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AccessTimeRounded from '@mui/icons-material/AccessTimeRounded'
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { siAmericanexpress, siMastercard, siMercadopago, siPaypal, siVisa, type SimpleIcon } from 'simple-icons'
import Logo from '@/components/brand/Logo'
import { nav, site } from '@/lib/site'
import { whatsappLink } from '@/lib/whatsapp'

// TODO: confirmar los métodos de pago que acepta la pasarela elegida.
const paymentMethods: SimpleIcon[] = [siVisa, siMastercard, siAmericanexpress, siMercadopago, siPaypal]

const helpLinks = [
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: '¿Qué medida es mi tubería?', href: '#compatibilidad' },
  { label: 'Cada cuánto cambiar el cartucho', href: '#calculador' },
]

function PaymentBadge({ icon }: { icon: SimpleIcon }) {
  return (
    <Box
      component="li"
      title={icon.title}
      sx={{
        width: 60,
        height: 38,
        borderRadius: 1,
        bgcolor: '#FFFFFF',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" width="40" height="26" fill={`#${icon.hex}`}>
        <path d={icon.path} />
      </svg>
    </Box>
  )
}

const linkSx = { color: 'rgba(255,255,255,0.78)', '&:hover': { color: '#FFFFFF' } } as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" id="contacto" sx={{ bgcolor: 'secondary.main', color: '#FFFFFF' }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 10 }, pb: 4 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" component="h2" sx={{ color: '#FFFFFF', maxWidth: '18ch' }}>
              ¿Dudas con tu instalación?
            </Typography>
            <Typography sx={{ mt: 2, color: 'rgba(255,255,255,0.82)', maxWidth: '52ch' }}>
              Mándanos una foto de tu tubería de subida y te decimos qué kit necesitas y cómo instalarlo.
            </Typography>
            <Button
              href={whatsappLink('asesoria')}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              sx={{
                mt: 4,
                bgcolor: '#FFFFFF',
                color: 'secondary.main',
                '&:hover': { bgcolor: 'accent.light' },
              }}
            >
              Escríbenos por WhatsApp
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack
              component="address"
              spacing={2.5}
              sx={{
                fontStyle: 'normal',
                p: { xs: 3, md: 4 },
                borderRadius: 1,
                border: '1px solid rgba(255,255,255,0.14)',
                bgcolor: 'rgba(255,255,255,0.04)',
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <WhatsApp sx={{ color: 'accent.main' }} />
                <Link href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" sx={linkSx}>
                  WhatsApp {site.whatsapp.display}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <MailOutlineRounded sx={{ color: 'accent.main' }} />
                <Link href={`mailto:${site.email}`} sx={linkSx}>
                  {site.email}
                </Link>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <AccessTimeRounded sx={{ color: 'accent.main' }} />
                <Typography component="span" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                  {site.hours}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ my: { xs: 6, md: 8 }, borderTop: '1px solid rgba(255,255,255,0.14)' }} />

        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Logo variant="white" />
            <Typography sx={{ mt: 2, color: 'rgba(255,255,255,0.78)', maxWidth: '38ch' }}>
              {site.slogan} Filtros de sedimentos para la entrada de tinacos y cisternas, con envío a todo México.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }} component="nav" aria-label="Secciones">
            <Typography variant="subtitle2" component="h3" sx={{ color: '#FFFFFF', mb: 2 }}>
              Secciones
            </Typography>
            <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="body2" sx={linkSx}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }} component="nav" aria-label="Ayuda">
            <Typography variant="subtitle2" component="h3" sx={{ color: '#FFFFFF', mb: 2 }}>
              Ayuda
            </Typography>
            <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {helpLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} variant="body2" sx={linkSx}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.14)',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1.5 }}>
              Pagos seguros con
            </Typography>
            <Stack component="ul" direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', listStyle: 'none', m: 0, p: 0 }}>
              {paymentMethods.map((icon) => (
                <PaymentBadge key={icon.slug} icon={icon} />
              ))}
            </Stack>
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {year} {site.name}. Todos los derechos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
