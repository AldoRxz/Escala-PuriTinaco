# 📘 Brandbook — PuriTinaco

Este documento es la **fuente de verdad** para todo lo visual y de comunicación de PuriTinaco. Cualquier pantalla, componente, anuncio o pieza de contenido debe respetar estas reglas para que la marca se vea y suene igual en todos lados.

---

## 1. Esencia de marca

| | |
|---|---|
| **Nombre** | PuriTinaco |
| **Qué hacemos** | Sistemas de filtración de sedimentos que se instalan en la entrada de agua de tinacos y cisternas residenciales. |
| **Propósito** | Dar tranquilidad y salud al hogar filtrando lodo, tierra y sedimentos **antes** de que el agua entre al tinaco o la cisterna. |
| **Slogan principal** | **"Agua limpia antes de que entre a tu hogar."** |
| **Mercado** | Hogares en México con tinaco en azotea y/o cisterna, abastecidos por red municipal, pipa o pozo. |

### Tono de voz

| Atributo | Cómo se escucha | Ejemplo |
|---|---|---|
| **Confiable** | Hablamos con datos concretos, sin exagerar. | "Retiene partículas desde 5 micras." |
| **Accesible** | Lenguaje de casa, no de laboratorio. Tuteamos. | "Ya no tendrás que lavar el tinaco a cada rato." |
| **Técnico pero fácil** | Si usamos un término técnico, lo explicamos en la misma frase. | "5 micras: unas 14 veces más delgado que un cabello." |
| **Higiénico** | Palabras limpias y frescas: *cristalina, limpia, protegida, flujo constante*. | "Agua cristalina en regaderas, boiler y lavadora." |
| **Moderno** | Frases cortas, directas, sin signos de exclamación en exceso. | "Se instala en una tarde. Dura meses." |

**Sí:** frases cortas, verbos de acción (detén, protege, instala), números reales, español de México.
**No:** alarmismo ("¡tu familia está en peligro!"), tecnicismos sin explicar, mayúsculas sostenidas, promesas médicas.

### Claims responsables

Un filtro de sedimentos es un producto técnico y los clientes (y PROFECO) toman las promesas al pie de la letra. Reglas:

- **No decir "agua potable" ni "agua para beber".** El sistema filtra sedimentos y (en el Kit Dual Pro) reduce cloro, olor y sabor. No purifica para consumo.
- **No usar "100% libre de sedimentos".** Usar la cifra real: *"retiene partículas desde 5 micras"* (o 20 micras en el Kit Básico).
- **Sobre el sarro:** el sarro (calcio y magnesio disueltos) **no** lo retiene un cartucho de sedimentos ni uno de carbón. Lo que sí evitamos es la tierra y el lodo que se pegan y forman costras en regaderas y boiler. Si se mantiene "sarro" en un titular, debe respaldarse con un cartucho antisarro (polifosfato) en el producto o matizarse en el texto de apoyo.
- **Presión:** el filtro va en la entrada, así que afecta la velocidad de llenado del tinaco, no la presión de la casa (que depende de la altura del tinaco). Decirlo así.

### Glosario de marca

| Usar | Evitar |
|---|---|
| tinaco, cisterna | depósito, contenedor |
| cartucho | filtro de repuesto, "la pieza" |
| carcasa jumbo 10" | vaso, contenedor del filtro |
| sedimentos (lodo, tierra, arena, óxido) | impurezas, suciedad (son vagos) |
| micras | micrones |
| tubería de subida / de entrada | toma, tubo |

---

## 2. Logotipo

Logotipo **wordmark + isotipo**:

- **Isotipo:** gota de agua estilizada con una línea de "filtro" horizontal en su interior (agua que pasa limpia). Relleno en degradado `Aqua Primary → Fresh Cyan`.
- **Wordmark:** `Puri` en **Deep Hydro** + `Tinaco` en **Aqua Primary**, ambos en la tipografía de títulos, peso 700, sin espacio entre palabras.

```
 💧 PuriTinaco
    └──┘└────┘
  Deep   Aqua
  Hydro  Primary
```

| Versión | Uso |
|---|---|
| Color sobre fondo claro | Header, documentos, empaques. |
| Inversa sobre Deep Hydro (`Puri` blanco + `Tinaco` Fresh Cyan, gota blanca) | Footer, fondos oscuros, redes sociales. |
| Isotipo solo | Favicon, avatar de redes, sellos. |

**Área de protección:** dejar alrededor del logo un espacio libre equivalente a la altura de la gota.
**Tamaño mínimo:** 24 px de alto en pantalla (isotipo: 16 px).
**No:** deformar, cambiar colores fuera de la paleta, poner sombras, usarlo sobre fotos sin contraste.

Implementación: `components/brand/Logo.tsx`.

---

## 3. Paleta de color

Inspirada en el agua limpia, la pureza sanitaria y la sobriedad técnica de Google / Material Design.

### Colores de marca

| Rol | Nombre | Hex | Uso en UI |
|---|---|---|---|
| **Primary** | Aqua Primary | `#0077C2` | Botones de acción (CTA), enlaces, headers principales. |
| **Secondary** | Deep Hydro | `#003E6B` | Footer, badges técnicos, texto destacado, contrastes de seguridad. |
| **Accent** | Fresh Cyan | `#00B4D8` | Indicadores de pureza, íconos de verificación, hover states, ilustración. |
| **Surface / Background** | Ice White / Cloud | `#F8FAFC` | Fondo general de la web, contenedores de tarjetas. |
| **Text Primary** | Slate Charcoal | `#1E293B` | Títulos y cuerpo de texto (nunca `#000000` puro). |
| **Success / Purity** | Clean Aqua Mint | `#10B981` | Sellos de garantía, estados de éxito, "agua limpia". |

### Tonos extendidos (tema MUI)

| Token | Light | Main | Dark | Contraste |
|---|---|---|---|---|
| `primary` | `#4BA3E3` | `#0077C2` | `#004C8B` | `#FFFFFF` |
| `secondary` | `#1D6899` | `#003E6B` | `#001E3D` | `#FFFFFF` |
| `accent` | `#E0F7FC` | `#00B4D8` | `#0090AD` | `#003E6B` |
| `success` | `#D1FAE5` | `#10B981` | `#047857` | `#FFFFFF` |
| `text.secondary` | — | `#64748B` | — | — |
| `divider` / bordes | — | `#E2E8F0` | — | — |
| `background.paper` | — | `#FFFFFF` | — | — |

### Reglas de contraste (WCAG AA)

| Combinación | Ratio | Uso permitido |
|---|---|---|
| Slate Charcoal sobre blanco | ~14.6 : 1 | Todo texto. |
| Aqua Primary sobre blanco | ~4.7 : 1 | Texto normal, botones, enlaces. ✅ |
| Blanco sobre Deep Hydro | ~11 : 1 | Footer, badges. ✅ |
| `#64748B` sobre blanco | ~4.8 : 1 | Texto secundario. ✅ |
| `#64748B` sobre `accent.light` | ~4.3 : 1 | ❌ Sobre fondos tintados usar `#475569` (~7 : 1). |
| Fresh Cyan sobre blanco | ~2.5 : 1 | ❌ Nunca para texto. Solo íconos decorativos, ilustración, bordes de hover. |
| Clean Aqua Mint sobre blanco | ~2.5 : 1 | ❌ Nunca para texto. Para texto de éxito usar `success.dark` `#047857`. |
| Fresh Cyan sobre Deep Hydro | ~4.5 : 1 | Íconos y texto grande en el footer. |

### Colores de ilustración

Solo dentro de ilustraciones (nunca en UI): sedimento `#A47551`, sedimento claro `#D6B89A`, agua turbia `#C7B49A`. Sirven para contrastar "agua sin filtro" contra "agua con PuriTinaco".

---

## 4. Tipografía

| Rol | Familia | Peso | Notas |
|---|---|---|---|
| **Headlines / títulos** | **Google Sans** (alternativas: Plus Jakarta Sans, Inter) | 600 Semi-Bold (h1/h2 a 700) | `letter-spacing: -0.02em` en h1/h2. |
| **Body / lectura** | **Roboto** | 400 Regular | Interlineado 1.6 en párrafos. |
| **Etiquetas, botones, formularios** | **Roboto** | 500 Medium (botones 600) | Sin mayúsculas sostenidas (`textTransform: none`). |

Stack CSS: `"Google Sans", "Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif`.

### Escala (responsive)

| Estilo | Móvil | Escritorio | Uso |
|---|---|---|---|
| h1 | 2.25rem | 3.25rem | Titular del hero (uno por página, máximo 2-3 líneas). |
| h2 | 1.875rem | 2.5rem | Título de sección. |
| h3 | 1.5rem | 1.75rem | Subtítulo, tarjetas destacadas. |
| h4–h6 | 1.25–1rem | 1.375–1.125rem | Títulos de tarjeta, etiquetas. |
| body1 | 1rem | 1.0625rem | Párrafos. |
| body2 | 0.875rem | 0.9375rem | Descripciones, specs. |
| overline | 0.75rem | 0.75rem | Etiqueta sobre títulos de sección (`letter-spacing: 0.12em`). |

Máximo ~65 caracteres por línea en párrafos.

---

## 5. Principios de interfaz (UI)

1. **Elevación sutil ("papel limpio" de Google)**
   - Base: `box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`.
   - Tarjetas: `border: 1px solid #E2E8F0` + `box-shadow: 0 4px 20px rgba(0,119,194,0.05)`.
   - Hover de tarjeta: sombra a `0 8px 30px rgba(0,119,194,0.10)` y borde Fresh Cyan suave. Sin "saltos" grandes.
2. **Bordes suaves:** `border-radius` de **14 px** en tarjetas, Paper, diálogos y botones (rango permitido 12–16 px). Chips y badges: totalmente redondeados.
3. **Mucho espacio en blanco:** secciones con padding vertical de 64–96 px (`py: 8` a `12` en MUI). Una idea por sección.
4. **Una acción principal por bloque:** un botón *contained* Aqua Primary; las acciones secundarias van *outlined* o como texto.
5. **Movimiento discreto:** transiciones de 150–250 ms con `ease-out`. Las animaciones (flujo de agua en ilustraciones) se desactivan con `prefers-reduced-motion`.
6. **Accesibilidad:** HTML semántico, foco visible (outline Aqua Primary), áreas táctiles ≥ 44 px, textos alternativos en ilustraciones con información.

### Componentes clave

| Componente | Especificación |
|---|---|
| **Botón primario** | `contained`, Aqua Primary, texto blanco 600, `disableElevation`, radio 14 px, padding `12px 24px`. Hover: `primary.dark`. |
| **Botón secundario** | `outlined`, borde Aqua Primary, texto Aqua Primary. Hover: fondo `rgba(0,119,194,0.06)`. |
| **Tarjeta de producto** | Fondo blanco, borde `#E2E8F0`, sombra de tarjeta, ilustración arriba sobre fondo `accent.light`, precio en MXN en h4, chips de specs, estrellas, CTA "Agregar al carrito". |
| **Chip de spec** | `outlined` o `filled` en `accent.light` con texto Deep Hydro, tamaño `small`. |
| **Badge "Más popular"** | Fondo Deep Hydro, texto blanco, esquina superior de la tarjeta. |
| **Trust badge** | Ícono Fresh Cyan/Aqua Primary + texto Slate Charcoal 500. |
| **Acordeón (FAQ)** | Sin sombra, separado por bordes `#E2E8F0`, radio 14 px en el contenedor. |

---

## 6. Iconografía e ilustración

- **Íconos:** Material Icons versión *Rounded* (`@mui/icons-material`, sufijo `Rounded`). Trazo uniforme, sin mezclar estilos.
- **Ilustraciones:** vectoriales, planas, con degradados suaves de agua (Aqua Primary → Fresh Cyan), líneas limpias y mucho aire. Cortes transversales ("cutaway") para mostrar el interior del tinaco y la carcasa.
- **Fotografía (cuando exista):** luz natural, azoteas y baños reales de México, producto limpio y bien instalado. Evitar stock genérico de "gotas de agua" y vasos de agua (sugiere agua para beber).

---

## 7. Implementación técnica

- Tema MUI: `lib/theme.ts` (paleta, tipografía, forma y overrides de componentes de este documento).
- Fuentes: `next/font/google` (Google Sans + Roboto) en `app/layout.tsx`, autoalojadas en el build.
- Logo: `components/brand/Logo.tsx`.
- Cualquier color, sombra o radio nuevo se agrega primero aquí y en `lib/theme.ts`; no se escriben valores sueltos en componentes.
