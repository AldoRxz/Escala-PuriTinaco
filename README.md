# PuriTinaco — Landing y tienda

Landing page y tienda de **PuriTinaco**, sistemas de filtración de sedimentos para la entrada de tinacos y cisternas residenciales en México. Diseño limpio inspirado en Google / Material Design, con catálogo, carrito persistente y cierre de pedido por WhatsApp.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router + Turbopack) con **exportación estática** (`out/`)
- [React 19](https://react.dev/) + TypeScript 5.9
- [Material UI v9](https://mui.com/material-ui/) + Emotion, tema en `lib/theme.ts`
- Íconos Material *Rounded* (`@mui/icons-material`) y logos de pago de [Simple Icons](https://simpleicons.org/)
- Google Sans + Roboto vía `next/font` (autoalojadas en el build)
- pnpm

## Desarrollo

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build        # genera el sitio estático en out/
pnpm start        # sirve out/ localmente
```

## Estructura

```
app/                 layout, página, robots, sitemap, íconos e imágenes sociales
components/
  brand/             logo (isotipo + wordmark)
  layout/            header (menú móvil) y footer (contacto, pagos)
  sections/          secciones de la landing, en orden de aparición
  tools/             compatibilidad por tubería y calculador de mantenimiento
  cart/              provider, botón y drawer del carrito
  illustrations/     ilustraciones SVG técnicas (tinaco, carcasas, cartuchos)
  seo/               JSON-LD
lib/
  tokens.ts          colores, sombras y radios de marca
  theme.ts           tema MUI
  products.ts        catálogo y precios
  recommend.ts       lógica de recomendación de kits
  cartStore.ts       estado del carrito (localStorage)
  site.ts            datos de contacto, dominio y navegación
docs/BRANDBOOK.md    manual de marca (fuente de verdad visual y de tono)
```

## Dominio y SEO

La URL canónica (canonical, sitemap, robots, Open Graph y JSON-LD) se resuelve en `next.config.mjs`:

1. `NEXT_PUBLIC_SITE_URL`, si se define (por ejemplo `https://puritinaco.com`, sin www).
2. En Vercel, el dominio de producción del proyecto (`VERCEL_PROJECT_PRODUCTION_URL`), sea dominio propio o `*.vercel.app`.
3. `https://puritinaco.com` como valor local.

Íconos: `app/favicon.ico` (16/32/48 px), `app/icon.svg`, `app/apple-icon.png` y los PNG del manifest en `public/` se rasterizan desde `app/icon.svg`; si cambia el isotipo hay que regenerarlos.

Para aparecer en Google: dar de alta el dominio en [Search Console](https://search.google.com/search-console), enviar `/sitemap.xml` y pedir la indexación de la página principal.

## Pendiente antes de publicar

Los valores marcados con `TODO` en el código son provisionales:

- **`lib/site.ts`**: número de WhatsApp y correo.
- **`lib/products.ts`**: precios reales y calificaciones. Las reseñas actuales son de ejemplo y no se publican en el JSON-LD.
- **`components/layout/Footer.tsx`**: métodos de pago que acepte la pasarela elegida.
- **Imágenes de producto**: las tarjetas usan ilustraciones SVG; conviene reemplazarlas por fotos reales del producto.
- **Pago en línea**: el carrito cierra el pedido por WhatsApp; falta integrar una pasarela (Mercado Pago, Stripe, etc.).
