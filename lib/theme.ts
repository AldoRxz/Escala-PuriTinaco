'use client'

import { createTheme } from '@mui/material/styles'
import { colors, headerHeight, radius, shadows } from './tokens'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true
  }
}

const headingFont =
  'var(--font-google-sans), "Google Sans", "Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif'
const bodyFont = 'var(--font-roboto), "Roboto", "Helvetica", "Arial", sans-serif'

const { breakpoints } = createTheme()
const md = breakpoints.up('md')

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.aquaPrimary,
      light: colors.aquaPrimaryLight,
      dark: colors.aquaPrimaryDark,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: colors.deepHydro,
      light: colors.deepHydroLight,
      dark: colors.deepHydroDark,
      contrastText: '#FFFFFF',
    },
    accent: {
      main: colors.freshCyan,
      light: colors.freshCyanLight,
      dark: colors.freshCyanDark,
      contrastText: colors.deepHydro,
    },
    success: {
      main: colors.mint,
      light: colors.mintLight,
      dark: colors.mintDark,
      contrastText: '#FFFFFF',
    },
    background: { default: colors.iceWhite, paper: colors.paper },
    text: { primary: colors.slateCharcoal, secondary: colors.slateMuted },
    divider: colors.border,
  },
  shape: { borderRadius: radius },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.12,
      fontSize: '2.25rem',
      [md]: { fontSize: '3.25rem' },
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.18,
      fontSize: '1.875rem',
      [md]: { fontSize: '2.5rem' },
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.25,
      fontSize: '1.5rem',
      [md]: { fontSize: '1.75rem' },
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 600,
      lineHeight: 1.3,
      fontSize: '1.25rem',
      [md]: { fontSize: '1.375rem' },
    },
    h5: { fontFamily: headingFont, fontWeight: 600, lineHeight: 1.35, fontSize: '1.125rem', [md]: { fontSize: '1.25rem' } },
    h6: { fontFamily: headingFont, fontWeight: 600, lineHeight: 1.4, fontSize: '1rem', [md]: { fontSize: '1.125rem' } },
    subtitle1: { fontSize: '1.0625rem', lineHeight: 1.6, [md]: { fontSize: '1.1875rem' } },
    subtitle2: { fontWeight: 500, fontSize: '0.9375rem' },
    body1: { lineHeight: 1.6, fontSize: '1rem', [md]: { fontSize: '1.0625rem' } },
    body2: { lineHeight: 1.55, fontSize: '0.875rem', [md]: { fontSize: '0.9375rem' } },
    overline: { fontWeight: 600, letterSpacing: '0.12em', fontSize: '0.75rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollPaddingTop: headerHeight.md + 16,
          '@media (prefers-reduced-motion: no-preference)': { scrollBehavior: 'smooth' },
        },
        body: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' },
        ':focus-visible': { outline: `2px solid ${colors.aquaPrimary}`, outlineOffset: 2 },
        // Animaciones globales: se referencian por nombre desde componentes de servidor y SVG.
        '@keyframes pt-flow': { to: { strokeDashoffset: -28 } },
        '@keyframes pt-rise': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'none' },
        },
        '@keyframes pt-bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        '.pt-flow': { strokeDasharray: '6 8' },
        '@media (prefers-reduced-motion: no-preference)': {
          '.pt-flow': { animation: 'pt-flow 1.1s linear infinite' },
          '.pt-rise': { animation: 'pt-rise 600ms cubic-bezier(0.16, 1, 0.3, 1) both' },
          '.pt-bob': { animation: 'pt-bob 4s ease-in-out infinite' },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: radius,
          transition: 'background-color 200ms ease-out, border-color 200ms ease-out, transform 120ms ease-out',
          '&:active': { transform: 'scale(0.98)' },
        },
        sizeSmall: { padding: '6px 14px' },
        sizeMedium: { padding: '10px 22px', fontSize: '0.9375rem' },
        sizeLarge: { padding: '13px 28px', fontSize: '1rem' },
        outlined: { borderWidth: 1.5, '&:hover': { borderWidth: 1.5 } },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: radius } },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: { boxShadow: shadows.paper },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${colors.border}`,
          boxShadow: shadows.card,
          borderRadius: radius,
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: 'inherit' },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0 },
      styleOverrides: {
        root: {
          border: `1px solid ${colors.border}`,
          borderRadius: radius,
          '&::before': { display: 'none' },
          '&:first-of-type, &:last-of-type': { borderRadius: radius },
          '& + &': { marginTop: 12 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: { padding: '4px 20px', minHeight: 64 },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '0 20px 20px' },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
    },
    MuiTooltip: {
      styleOverrides: { tooltip: { fontSize: '0.8125rem' } },
    },
  },
})
