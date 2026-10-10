import { colors } from '@/lib/tokens'

const pipe = '#CBD5E1'
const tank = '#475569'
const tankShade = '#334155'
const font = 'var(--font-roboto), Roboto, sans-serif'

/**
 * Corte de una azotea: el agua de la red sube por la tubería, pasa por la carcasa
 * PuriTinaco (que retiene el sedimento) y entra limpia al tinaco.
 */
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 470"
      role="img"
      aria-labelledby="hero-ilustracion-titulo"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <title id="hero-ilustracion-titulo">
        Diagrama: el agua de la red sube, pasa por el filtro PuriTinaco que retiene el sedimento y entra limpia al tinaco.
      </title>
      <defs>
        <linearGradient id="hero-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={colors.freshCyan} stopOpacity="0.85" />
          <stop offset="1" stopColor={colors.aquaPrimary} />
        </linearGradient>
        <linearGradient id="hero-housing" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={colors.aquaPrimaryLight} stopOpacity="0.55" />
          <stop offset="0.5" stopColor={colors.aquaPrimaryLight} stopOpacity="0.25" />
          <stop offset="1" stopColor={colors.aquaPrimaryLight} stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Fondo */}
      <circle cx="372" cy="250" r="186" fill={colors.freshCyanLight} />
      <circle cx="372" cy="250" r="128" fill="#FFFFFF" opacity="0.55" />

      {/* Azotea */}
      <rect x="24" y="392" width="512" height="18" rx="4" fill="#CBD5E1" />
      <rect x="36" y="410" width="488" height="60" fill="#E2E8F0" />

      {/* Tubería de entrada (agua de la red) */}
      <path d="M84 470V186h52" fill="none" stroke={pipe} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className="pt-flow"
        d="M84 470V186h52"
        fill="none"
        stroke={colors.sediment}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tubería de salida (agua filtrada) */}
      <path d="M228 186h34V100h84v40" fill="none" stroke={pipe} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className="pt-flow"
        d="M228 186h34V100h84v40"
        fill="none"
        stroke={colors.freshCyan}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Carcasa PuriTinaco */}
      <path d="M146 200h72v142a14 14 0 0 1-14 14h-44a14 14 0 0 1-14-14V200Z" fill="url(#hero-housing)" stroke={colors.aquaPrimary} strokeWidth="2" />
      <rect x="164" y="210" width="36" height="134" rx="5" fill="#FFFFFF" stroke="#E2E8F0" />
      <g stroke="#E2E8F0" strokeWidth="1.5">
        <path d="M170 214v126M176 214v126M182 214v126M188 214v126M194 214v126" />
      </g>
      {/* Sedimento retenido */}
      <g fill={colors.sediment}>
        <circle cx="168" cy="300" r="2" />
        <circle cx="179" cy="312" r="2.4" />
        <circle cx="194" cy="296" r="1.8" />
        <circle cx="172" cy="326" r="2.6" />
        <circle cx="189" cy="322" r="2" />
        <circle cx="196" cy="334" r="2.2" />
        <circle cx="181" cy="282" r="1.6" />
      </g>
      <path d="M150 340c10-5 20 3 32-1s22-2 32 2v2a14 14 0 0 1-14 14h-44a14 14 0 0 1-14-14Z" fill={colors.sedimentLight} />
      <rect x="132" y="170" width="100" height="32" rx="8" fill={colors.aquaPrimary} />
      <rect x="132" y="196" width="100" height="6" fill={colors.aquaPrimaryDark} opacity="0.35" />
      <circle cx="182" cy="186" r="6" fill="#FFFFFF" opacity="0.9" />

      {/* Base y tinaco */}
      <rect x="288" y="376" width="176" height="16" rx="3" fill="#94A3B8" />
      <path
        d="M292 366V176c0-30 38-48 84-48s84 18 84 48v190a10 10 0 0 1-10 10H302a10 10 0 0 1-10-10Z"
        fill={tank}
      />
      <g stroke={tankShade} strokeWidth="3">
        <path d="M292 186h168M292 372h168" />
      </g>
      <ellipse cx="376" cy="131" rx="28" ry="7" fill={tankShade} />

      {/* Corte del tinaco */}
      <rect x="312" y="198" width="128" height="164" rx="12" fill="#F1F9FC" />
      <path
        className="pt-flow"
        d="M346 202v52"
        fill="none"
        stroke={colors.freshCyan}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M312 254c21-6 43 6 64 0s43-6 64 0v96a12 12 0 0 1-12 12H324a12 12 0 0 1-12-12Z" fill="url(#hero-water)" />
      <g fill="#FFFFFF" opacity="0.7">
        <circle cx="398" cy="300" r="4" />
        <circle cx="414" cy="282" r="2.5" />
        <circle cx="336" cy="320" r="3" />
        <circle cx="372" cy="336" r="2" />
      </g>
      <path d="M328 266c10-3 18 2 26 0" fill="none" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />

      {/* Etiquetas del diagrama */}
      <g fontFamily={font} fontSize="14" fontWeight="500" fill={colors.slateCharcoal}>
        <rect x="104" y="422" width="140" height="32" rx="16" fill="#FFFFFF" stroke="#E2E8F0" />
        <circle cx="122" cy="438" r="5" fill={colors.sediment} />
        <text x="134" y="443">Agua de la red</text>

        <rect x="262" y="52" width="132" height="32" rx="16" fill="#FFFFFF" stroke="#E2E8F0" />
        <circle cx="280" cy="68" r="5" fill={colors.freshCyan} />
        <text x="292" y="73">Agua filtrada</text>
      </g>
    </svg>
  )
}
