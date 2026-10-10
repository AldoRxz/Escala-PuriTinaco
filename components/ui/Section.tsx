import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

type SectionProps = {
  id: string
  children: React.ReactNode
  /** Fondo de la sección: blanco (paper) o Ice White (default). */
  tone?: 'paper' | 'default'
  sx?: SxProps<Theme>
}

export default function Section({ id, children, tone = 'default', sx }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={`${id}-titulo`}
      sx={[
        { py: { xs: 8, md: 12 }, bgcolor: tone === 'paper' ? 'background.paper' : 'background.default' },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}

type SectionHeaderProps = {
  /** Debe coincidir con el `id` de la sección para enlazar `aria-labelledby`. */
  sectionId: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
}

export function SectionHeader({ sectionId, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: align, mx: centered ? 'auto' : 0, maxWidth: 720 }}>
      <Typography id={`${sectionId}-titulo`} variant="h2" component="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" sx={{ mt: 2, color: 'text.secondary', maxWidth: '60ch', mx: centered ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
