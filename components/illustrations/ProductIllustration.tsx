import type { ProductArt } from '@/lib/products'
import { colors } from '@/lib/tokens'

const fitting = '#CBD5E1'
const bracket = '#94A3B8'
const carbon = '#334155'

function Pleats({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const lines = []
  for (let px = x + 4; px < x + w - 2; px += 4) lines.push(`M${px} ${y + 3}v${h - 6}`)
  return <path d={lines.join('')} stroke="#E2E8F0" strokeWidth="1.2" />
}

/** Carcasa jumbo 10": tapa azul, vaso translúcido y cartucho visible. */
function Housing({ cx, cartridge }: { cx: number; cartridge: 'pleated' | 'carbon' }) {
  const top = 34
  const body = 112
  return (
    <g>
      <rect x={cx - 41} y={top + 5} width="12" height="8" rx="2" fill={fitting} />
      <rect x={cx + 29} y={top + 5} width="12" height="8" rx="2" fill={fitting} />
      <path
        d={`M${cx - 23} ${top + 16}h46v${body - 12}a11 11 0 0 1-11 11h-24a11 11 0 0 1-11-11Z`}
        fill={colors.aquaPrimaryLight}
        fillOpacity="0.32"
        stroke={colors.aquaPrimary}
        strokeWidth="1.5"
      />
      {cartridge === 'pleated' ? (
        <>
          <rect x={cx - 12} y={top + 22} width="24" height={body - 22} rx="3" fill="#FFFFFF" stroke="#E2E8F0" />
          <Pleats x={cx - 12} y={top + 22} w={24} h={body - 22} />
        </>
      ) : (
        <rect x={cx - 12} y={top + 22} width="24" height={body - 22} rx="3" fill={carbon} />
      )}
      <rect x={cx - 30} y={top} width="60" height="19" rx="5" fill={colors.aquaPrimary} />
      <rect x={cx - 30} y={top + 15} width="60" height="4" fill={colors.aquaPrimaryDark} opacity="0.35" />
    </g>
  )
}

type ProductIllustrationProps = { art: ProductArt; title?: string }

export default function ProductIllustration({ art, title }: ProductIllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 180"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <ellipse cx="120" cy="164" rx={art === 'single' ? 52 : 92} ry="7" fill="#0F172A" opacity="0.06" />

      {art === 'single' && (
        <>
          <rect x="82" y="24" width="76" height="6" rx="2" fill={bracket} />
          <Housing cx={120} cartridge="pleated" />
        </>
      )}

      {art === 'dual' && (
        <>
          <rect x="46" y="24" width="148" height="6" rx="2" fill={bracket} />
          <path d="M115 43h10" stroke={fitting} strokeWidth="8" />
          <Housing cx={85} cartridge="pleated" />
          <Housing cx={155} cartridge="carbon" />
        </>
      )}

      {art === 'cartridges' && (
        <>
          {/* Cartucho de sedimentos plisado */}
          <rect x="70" y="40" width="44" height="116" rx="5" fill="#FFFFFF" stroke="#E2E8F0" />
          <Pleats x={70} y={40} w={44} h={116} />
          <rect x="68" y="34" width="48" height="10" rx="3" fill={colors.aquaPrimary} />
          <rect x="68" y="152" width="48" height="10" rx="3" fill={colors.aquaPrimary} />
          {/* Bloque de carbón activado */}
          <rect x="128" y="40" width="44" height="116" rx="5" fill={carbon} />
          <rect x="126" y="34" width="48" height="10" rx="3" fill="#E2E8F0" />
          <rect x="126" y="152" width="48" height="10" rx="3" fill="#E2E8F0" />
          <ellipse cx="150" cy="39" rx="7" ry="2.5" fill={carbon} />
        </>
      )}
    </svg>
  )
}
