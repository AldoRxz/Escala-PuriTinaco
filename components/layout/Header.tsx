'use client'

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import CloseRounded from '@mui/icons-material/CloseRounded'
import MenuRounded from '@mui/icons-material/MenuRounded'
import Logo from '@/components/brand/Logo'
import { nav } from '@/lib/site'
import { headerHeight } from '@/lib/tokens'

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 })

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'divider' : 'transparent',
        transition: 'border-color 200ms ease-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: headerHeight.xs, md: headerHeight.md }, gap: 2 }}>
          <Box
            component="a"
            href="#inicio"
            aria-label="PuriTinaco, ir al inicio"
            sx={{ display: 'inline-flex', textDecoration: 'none', mr: 'auto', py: 1 }}
          >
            <Logo />
          </Box>

          <Box component="nav" aria-label="Principal" sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box component="ul" sx={{ display: 'flex', gap: 0.5, listStyle: 'none', m: 0, p: 0 }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Button
                    href={item.href}
                    color="inherit"
                    sx={{ fontWeight: 500, color: 'text.primary', px: 1.5, '&:hover': { color: 'primary.main' } }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </Box>
          </Box>

          <Button
            href="#sistemas"
            variant="contained"
            sx={{ display: { xs: 'none', sm: 'inline-flex' }, ml: { lg: 1 }, whiteSpace: 'nowrap' }}
          >
            Comprar filtro
          </Button>

          <IconButton
            aria-label="Abrir menú"
            aria-controls="menu-movil"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            sx={{ display: { lg: 'none' }, color: 'text.primary', mr: -1 }}
          >
            <MenuRounded />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        id="menu-movil"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { sx: { width: 'min(320px, 86vw)', borderRadius: 0 } } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, py: 1.5 }}>
          <Logo size={24} />
          <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)} sx={{ mr: -1 }}>
            <CloseRounded />
          </IconButton>
        </Box>
        <Divider />
        <Box component="nav" aria-label="Menú móvil">
          <List sx={{ px: 1, py: 1.5 }}>
            {nav.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{ borderRadius: 1, py: 1.25 }}
              >
                <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 500 } } }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box sx={{ px: 2.5, pb: 3, mt: 'auto' }}>
          <Button href="#sistemas" variant="contained" size="large" fullWidth onClick={() => setOpen(false)}>
            Comprar filtro
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}
