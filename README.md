# mnnsor — Sitio

Sitio de **mnnsor**, una plataforma de agentes de IA para la industria
de la construcción. Construido con React 19, TypeScript, Vite, Tailwind CSS v4
y React Router. Diseño minimalista y monocromático: tipografía sobria, mucho
espacio en blanco y cero adornos superfluos.

## Páginas

Sitio multi-página con enrutamiento del lado del cliente (`react-router-dom`):

| Ruta                | Contenido                                                        |
| ------------------- | --------------------------------------------------------------- |
| `/`                 | Home: hero, problema, plataforma, impacto, agentes, seguridad.  |
| `/plataforma`       | Cómo funciona, principios de diseño, módulos, despliegue.       |
| `/agentes`          | Listado de los 4 agentes con su alcance.                         |
| `/agentes/:slug`    | Detalle por agente: capacidades, **límites reales**, flujo, I/O. |
| `/seguridad`        | Pilares, ciclo de vida de datos y gobernanza empresarial.       |
| `/resultados`       | Métricas, escenarios antes/después y metodología de medición.   |
| `/contacto`         | Opciones de contacto (cada una abre un correo predefinido).     |

Los agentes se describen con **alcances honestos**: lo que hacen con fiabilidad
y, con la misma franqueza, dónde termina su autonomía y empieza la supervisión
humana. Ver `src/data/agents.ts`.

## Contacto por correo

Todos los botones de acción abren un borrador de correo a **support@mnnsor.com**
con asunto y cuerpo predefinidos según el contexto (demo, ventas, piloto,
seguridad, soporte, general). La lógica está centralizada en `src/lib/contact.ts`
y se usa vía `MailButton` / `CTASection`.

## Enrutamiento en producción

El sitio es una SPA. Para hosting estático se incluye fallback a `index.html`:
`public/_redirects` (Netlify) y `vercel.json` (Vercel).

## Diseño

- **Sistema monocromático** (blanco y negro cálido) definido con tokens en
  `src/index.css` bajo `@theme`.
- **Tipografía**: Inter (texto y titulares) e IBM Plex Mono (etiquetas
  técnicas). Sin fuentes decorativas.
- **Animaciones sobrias**: hero con fondo *lava lamp* (WebGL, `LavaLamp`) y
  titular con efecto *typewriter* (`Typewriter`); reveal on-scroll
  (`src/hooks/useReveal.ts`) y contadores animados (`src/hooks/useCountUp.ts`).
  Todo respeta `prefers-reduced-motion`.
- **Accesibilidad**: landmarks semánticos, `skip link`, estados de foco
  visibles y `aria-label` en controles.

## SEO

`index.html` incluye meta description, Open Graph, Twitter Card, `canonical`,
`theme-color`, favicon monocromático y datos estructurados JSON-LD
(`SoftwareApplication`). La imagen social se genera con:

```bash
node scripts/make-og.mjs   # → public/og-cover.png (1200×630)
```

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # typecheck + build de producción
npm run lint      # oxlint
npm run preview   # sirve el build
```

## Estructura

```
src/
  App.tsx            # definición de rutas (BrowserRouter)
  layouts/           # SiteLayout (navbar + outlet + footer + reveal)
  pages/             # Home, Platform, Agents, AgentDetail, SecurityPage,
                     # Results, Contact, NotFound
  components/        # Navbar, Hero, Footer, PageHeader, MailButton,
                     # CTASection, ScrollToTop, + secciones de la home
  data/agents.ts     # catálogo de agentes con alcances y límites reales
  lib/contact.ts     # correos predefinidos a support@mnnsor.com
  hooks/             # useReveal (re-ejecutable por ruta), useCountUp
  index.css          # design system + keyframes
```
