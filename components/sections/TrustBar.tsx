import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import FilterAltRounded from '@mui/icons-material/FilterAltRounded'
import LocalShippingRounded from '@mui/icons-material/LocalShippingRounded'
import PlumbingRounded from '@mui/icons-material/PlumbingRounded'

const items = [
  { icon: <PlumbingRounded />, title: 'Instalación estándar', detail: 'Rosca de 1/2" y 3/4"' },
  { icon: <FilterAltRounded />, title: 'Retención desde 5 micras', detail: 'Lodo, tierra, arena y óxido' },
  { icon: <LocalShippingRounded />, title: 'Envío a todo México', detail: 'Lo recibes en la puerta de tu casa' },
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
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          }}
        >
          {items.map((item, i) => (
            <Box
              component="li"
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                py: { xs: 2.5, md: 3.5 },
                px: { sm: 3 },
                borderTop: { xs: i > 0 ? '1px solid' : 'none', sm: 'none' },
                borderLeft: { sm: i > 0 ? '1px solid' : 'none' },
                borderColor: { xs: 'divider', sm: 'divider' },
                justifyContent: { sm: 'center' },
              }}
            >
              <Box
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
                <Typography variant="subtitle2" component="p" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.detail}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
