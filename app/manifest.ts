import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { colors } from '@/lib/tokens'

export const dynamic = 'force-static'

// Los PNG de /public y app/favicon.ico se rasterizan desde app/icon.svg; regenerarlos si cambia el isotipo.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: filtro para tinaco y cisterna`,
    short_name: site.name,
    description: site.description,
    lang: 'es-MX',
    start_url: '/',
    display: 'browser',
    background_color: colors.iceWhite,
    theme_color: colors.aquaPrimary,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
