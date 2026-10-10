import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <>
      <Header />
      <Box component="main" id="inicio">
        <Container sx={{ py: 12 }}>
          <Typography variant="h1">{site.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {site.slogan}
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}
