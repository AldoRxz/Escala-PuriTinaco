import Box from '@mui/material/Box'
import { colors } from '@/lib/tokens'

type LogoProps = {
  variant?: 'color' | 'white'
  /** Altura del isotipo en px. El wordmark escala en proporción. */
  size?: number
  /** Oculta el wordmark y deja solo la gota. */
  iconOnly?: boolean
}

export function LogoMark({ size = 28, variant = 'color' }: Pick<LogoProps, 'size' | 'variant'>) {
  const drop = variant === 'white' ? '#FFFFFF' : colors.aquaPrimary
  const water = colors.freshCyan
  const line = variant === 'white' ? colors.deepHydro : '#FFFFFF'

  return (
    <svg width={(size * 24) / 30} height={size} viewBox="0 0 24 30" aria-hidden="true" focusable="false">
      <path d="M12 1.2C12 1.2 3 12.2 3 19.2a9 9 0 0 0 18 0C21 12.2 12 1.2 12 1.2Z" fill={drop} />
      <path d="M4.6 20.6c2.4-1.3 4.9-1.3 7.4 0s5 1.3 7.4 0a7.5 7.5 0 0 1-14.8 0Z" fill={water} />
      <path d="M4.6 20.6c2.4-1.3 4.9-1.3 7.4 0s5 1.3 7.4 0" fill="none" stroke={line} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8.4 12.6c-.9 1.4-1.5 2.9-1.6 4.4" fill="none" stroke={line} strokeOpacity=".55" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Logo({ variant = 'color', size = 28, iconOnly = false }: LogoProps) {
  const white = variant === 'white'

  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
      <LogoMark size={size} variant={variant} />
      {!iconOnly && (
        <Box
          component="span"
          sx={{
            fontFamily: 'var(--font-google-sans), "Google Sans", sans-serif',
            fontWeight: 700,
            fontSize: size * 0.8,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          <Box component="span" sx={{ color: white ? '#FFFFFF' : 'secondary.main' }}>
            Puri
          </Box>
          <Box component="span" sx={{ color: white ? 'accent.main' : 'primary.main' }}>
            Tinaco
          </Box>
        </Box>
      )}
    </Box>
  )
}
