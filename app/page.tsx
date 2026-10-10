import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { site } from '@/lib/site'

export default function Home() {
  return (
    <main>
      <Container sx={{ py: 12 }}>
        <Typography variant="h1">{site.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {site.slogan}
        </Typography>
      </Container>
    </main>
  )
}
