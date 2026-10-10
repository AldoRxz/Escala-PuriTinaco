# PuriTinaco — Landing y tienda

Landing + e-commerce de filtros de sedimentos para tinacos y cisternas (México). Stack: Next.js 16 (exportación estática) + MUI v9 + TypeScript. Tráfico principal esperado: móvil.

@AGENTS.md

## Documentación de referencia obligatoria

- [docs/BRANDBOOK.md](docs/BRANDBOOK.md): esencia, tono de voz, claims responsables, paleta, tipografía y principios de UI. **Fuente de verdad para todo lo visual y el copy.**

## Reglas rápidas

- Colores, sombras y radios salen de `lib/tokens.ts` / `lib/theme.ts`. No escribir hex sueltos en componentes; si hace falta uno nuevo, agregarlo primero al brandbook y a los tokens.
- Texto secundario sobre fondos `accent.light` usa `colors.slateMutedOnTint`, no `text.secondary` (contraste AA).
- MUI v9 eliminó los *system props* (`<Box mt={2}>`, `<Typography fontWeight=...>`): todo va en `sx`. Las props deprecadas (`PaperProps`, `inputProps`, `TransitionProps`...) se reemplazan por `slotProps`.
- Las secciones son Server Components; solo lo interactivo lleva `'use client'`. En Server Components el `sx` debe ser serializable (sin funciones ni `keyframes` de Emotion; las animaciones globales viven en `MuiCssBaseline`).
- Copy en español de México, tuteando. Sin "agua potable", sin "100% libre de sedimentos" y cuidado con prometer que se quita el sarro (ver *Claims responsables* en el brandbook).
- Dominio canónico sin www: se resuelve en `next.config.mjs` (`NEXT_PUBLIC_SITE_URL` o dominio de producción de Vercel) y se lee como `site.url`.
- La instalación a domicilio solo se ofrece en Guadalajara (`site.installCity`); fuera de ahí, envío + guía por WhatsApp.
- Antes de commitear: `pnpm lint`, `pnpm typecheck` y `pnpm build`.
