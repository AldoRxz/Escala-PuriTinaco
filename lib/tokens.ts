// Tokens de marca (docs/BRANDBOOK.md). Fuente única para el tema MUI y las ilustraciones SVG.

export const colors = {
  aquaPrimary: '#0077C2',
  aquaPrimaryLight: '#4BA3E3',
  aquaPrimaryDark: '#004C8B',
  deepHydro: '#003E6B',
  deepHydroLight: '#1D6899',
  deepHydroDark: '#001E3D',
  freshCyan: '#00B4D8',
  freshCyanLight: '#E0F7FC',
  freshCyanDark: '#0090AD',
  iceWhite: '#F8FAFC',
  paper: '#FFFFFF',
  slateCharcoal: '#1E293B',
  slateMuted: '#64748B',
  border: '#E2E8F0',
  mint: '#10B981',
  mintLight: '#D1FAE5',
  mintDark: '#047857',
  // Solo para ilustración (nunca en UI).
  sediment: '#A47551',
  sedimentLight: '#D6B89A',
  murkyWater: '#C7B49A',
} as const

export const shadows = {
  paper: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  card: '0 4px 20px rgba(0, 119, 194, 0.05)',
  cardHover: '0 8px 30px rgba(0, 119, 194, 0.10)',
} as const

export const radius = 14

export const headerHeight = { xs: 64, md: 72 } as const
