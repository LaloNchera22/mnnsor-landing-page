# mnnsor — Landing

Landing page de **mnnsor**, una plataforma de agentes de IA para la industria
de la construcción. Construida con React 19, TypeScript, Vite y Tailwind CSS v4.

## Diseño

- **Sistema monocromático** (blanco y negro cálido) definido con tokens en
  `src/index.css` bajo `@theme`.
- **Tipografía**: Instrument Serif (display editorial), Inter (texto) e
  IBM Plex Mono (etiquetas técnicas).
- **Animaciones sobrias**: reveal on-scroll (`src/hooks/useReveal.ts`),
  contadores animados (`src/hooks/useCountUp.ts`), micro-interacciones y un
  grano de papel sutil. Todo respeta `prefers-reduced-motion`.
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
  App.tsx            # composición de secciones + reveal global
  components/        # Navbar, Hero, TrustBar, ProblemCards, Features,
                     # ImpactMetrics, AgentsSection, Security, CTA, Footer, Logo
  hooks/             # useReveal, useCountUp
  index.css          # design system + keyframes
```
