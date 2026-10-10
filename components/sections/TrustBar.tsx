import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FilterAltRounded from '@mui/icons-material/FilterAltRounded'
import LocalShippingRounded from '@mui/icons-material/LocalShippingRounded'
import PlaceRounded from '@mui/icons-material/PlaceRounded'
import PlumbingRounded from '@mui/icons-material/PlumbingRounded'
import { site } from '@/lib/site'

type TrustItem = { icon: React.ReactNode; title: string; detail: string; href?: string }

const items: TrustItem[] = [
  { icon: <PlumbingRounded />, title: 'Conexión estándar', detail: 'Rosca de 1/2" y 3/4"' },
  { icon: <FilterAltRounded />, title: 'Retención desde 5 micras', detail: 'Lodo, tierra, arena y óxido' },
  { icon: <LocalShippingRounded />, title: 'Envío a todo México', detail: 'Lo recibes en la puerta de tu casa' },
  {
    icon: <PlaceRounded />,
    title: `Instalación en ${site.installCity.name}`,
    detail: 'Lo instalamos por ti',
    href: '#instalacion',
  },
]

export default function TrustBar() {
  return (
    <Box
      component="section"
      aria-label="Por qué elegir PuriTinaco"
      sx={{ bgcolor: 'background.paper', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          }}
        >
          {items.map((item, i) => (
            <Box
              component="li"
              key={item.title}
              sx={{
                borderColor: 'divider',
                borderStyle: 'solid',
                borderWidth: 0,
                // 1 columna: línea arriba. 2 columnas: línea al centro y entre filas. 4 columnas: línea a la izquierda.
                borderTopWidth: { xs: i > 0 ? 1 : 0, sm: i >= 2 ? 1 : 0, md: 0 },
                borderLeftWidth: { xs: 0, sm: i % 2 === 1 ? 1 : 0, md: i > 0 ? 1 : 0 },
              }}
            >
              <Box
                component={item.href ? 'a' : 'div'}
                href={item.href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  height: '100%',
                  py: { xs: 2.5, md: 3.5 },
                  px: { sm: 3 },
                  color: 'inherit',
                  textDecoration: 'none',
                  '&[href]:hover .trust-title': { color: 'primary.main' },
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'accent.light',
                    color: 'primary.main',
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography className="trust-title" variant="subtitle2" component="p" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.detail}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
