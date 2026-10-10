import type { Metadata, Viewport } from 'next'
import { Google_Sans, Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import Providers from '@/components/Providers'
import { colors } from '@/lib/tokens'
import { site } from '@/lib/site'

const googleSans = Google_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-google-sans',
  // Next no tiene métricas de Google Sans para generar la fuente de respaldo ajustada.
  adjustFontFallback: false,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Filtro de sedimentos para tinaco y cisterna`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
}

export const viewport: Viewport = {
  themeColor: colors.aquaPrimary,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${googleSans.variable} ${roboto.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
