import type { Metadata, Viewport } from 'next'
import { Google_Sans, Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import Providers from '@/components/Providers'
import { colors } from '@/lib/tokens'
import { keywords, site } from '@/lib/site'

const googleSans = Google_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-google-sans',
  // Next no tiene métricas de Google Sans para generar la fuente de respaldo ajustada.
  adjustFontFallback: false,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Filtro para tinaco y cisterna`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.name,
    title: `${site.name} | Agua limpia antes de que entre a tu hogar`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Agua limpia antes de que entre a tu hogar`,
    description: site.description,
  },
  formatDetection: { telephone: false },
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
