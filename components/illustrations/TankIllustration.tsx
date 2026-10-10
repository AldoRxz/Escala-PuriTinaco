import { colors } from '@/lib/tokens'

const pipe = '#CBD5E1'

type TankIllustrationProps = {
  variant: 'dirty' | 'clean'
}

/** Corte simplificado de un tinaco: sin filtro (sedimento) o con PuriTinaco (agua clara). */
export default function TankIllustration({ variant }: TankIllustrationProps) {
  const clean = variant === 'clean'
  const gradientId = `tank-water-${variant}`
  const label = clean
    ? 'Tinaco con PuriTinaco: el agua pasa por el filtro y llega clara, sin sedimento en el fondo.'
    : 'Tinaco sin filtro: el agua entra turbia y deja una capa de lodo en el fondo.'

  return (
    <svg viewBox="0 0 280 200" role="img" aria-label={label} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          {clean ? (
            <>
              <stop offset="0" stopColor={colors.freshCyan} stopOpacity="0.8" />
              <stop offset="1" stopColor={colors.aquaPrimary} />
            </>
          ) : (
            <>
              <stop offset="0" stopColor={colors.murkyWater} stopOpacity="0.85" />
              <stop offset="1" stopColor={colors.sediment} stopOpacity="0.9" />
            </>
          )}
        </linearGradient>
      </defs>

      {/* Tubería de subida */}
      <path d="M30 196V24h80v24" fill="none" stroke={pipe} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      {clean ? (
        <>
          <path className="pt-flow" d="M30 196v-60" fill="none" stroke={colors.sediment} strokeWidth="3" strokeLinecap="round" />
          <path
            className="pt-flow"
            d="M30 92V24h80v24"
            fill="none"
            stroke={colors.freshCyan}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Carcasa */}
          <rect x="18" y="96" width="24" height="42" rx="7" fill={colors.aquaPrimaryLight} fillOpacity="0.45" stroke={colors.aquaPrimary} strokeWidth="1.5" />
          <rect x="25" y="101" width="10" height="32" rx="3" fill="#FFFFFF" />
          <rect x="13" y="88" width="34" height="11" rx="3" fill={colors.aquaPrimary} />
        </>
      ) : (
        <path
          className="pt-flow"
          d="M30 196V24h80v24"
          fill="none"
          stroke={colors.sediment}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Tinaco */}
      <path d="M70 172V64c0-18 31-28 70-28s70 10 70 28v108a8 8 0 0 1-8 8H78a8 8 0 0 1-8-8Z" fill="#475569" />
      <ellipse cx="140" cy="38" rx="16" ry="4" fill="#334155" />
      <rect x="66" y="180" width="148" height="10" rx="3" fill="#94A3B8" />

      {/* Corte */}
      <rect x="86" y="70" width="108" height="98" rx="10" fill={clean ? '#F1F9FC' : '#F1F5F9'} />
      <path
        className="pt-flow"
        d="M110 72v24"
        fill="none"
        stroke={clean ? colors.freshCyan : colors.sediment}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M86 96c18-5 36 5 54 0s36-5 54 0v62a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10Z" fill={`url(#${gradientId})`} />

      {clean ? (
        <g fill="#FFFFFF" opacity="0.75">
          <circle cx="160" cy="128" r="3.5" />
          <circle cx="174" cy="112" r="2" />
          <circle cx="104" cy="140" r="2.5" />
          <circle cx="136" cy="152" r="2" />
        </g>
      ) : (
        <>
          <g fill={colors.sedimentLight}>
            <circle cx="104" cy="118" r="2" />
            <circle cx="128" cy="108" r="1.6" />
            <circle cx="150" cy="124" r="2.2" />
            <circle cx="174" cy="114" r="1.8" />
            <circle cx="118" cy="134" r="1.6" />
            <circle cx="164" cy="138" r="2" />
          </g>
          <path
            d="M86 146c14-6 26 2 40-2s28-6 40-1 18 3 28 1v14a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10Z"
            fill={colors.sediment}
          />
        </>
      )}
    </svg>
  )
}
