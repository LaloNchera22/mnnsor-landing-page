/* ------------------------------------------------------------------ *
 *  Prueba social — datos REALES, aportados por el equipo.
 *
 *  Este archivo es el único lugar que debes editar para activar la
 *  prueba social. La estructura visual ya está construida; sólo espera
 *  datos verificables. Reglas:
 *
 *    · Si un arreglo queda vacío, ese modo NO se renderiza (sin
 *      placeholders ni logos/cifras inventadas).
 *    · No inventes nombres, logos ni números. Todo lo que pongas aquí
 *      se muestra como hecho verificable.
 *
 *  Qué necesito de ti para cada bloque está anotado arriba de cada
 *  interfaz y arreglo.
 * ------------------------------------------------------------------ */

/* ================================================================== *
 *  1a) FRANJA DE LOGOS — clientes y/o pilotos
 *  ------------------------------------------------------------------
 *  Necesito de ti, por cada logo:
 *    · name  → nombre de la empresa (se usa como texto alternativo).
 *    · src   → archivo del logo colocado en /public/logos/…
 *              Preferible SVG o PNG monocromo/transparente; se muestra
 *              en escala de grises para respetar el sistema visual.
 *    · kind  → 'cliente' o 'piloto' (opcional; sólo agrupa la etiqueta).
 *    · href  → enlace al sitio del cliente (opcional).
 * ================================================================== */
export interface ClientLogo {
  name: string;
  src: string;
  kind?: 'cliente' | 'piloto';
  href?: string;
}

export const clientLogos: ClientLogo[] = [
  // Ejemplo de la forma esperada (déjalo comentado hasta tener el logo real):
  // { name: 'Constructora Acme', src: '/logos/acme.svg', kind: 'piloto' },
];

/* ================================================================== *
 *  1b) TESTIMONIOS — 1 o 2 citas atribuibles
 *  ------------------------------------------------------------------
 *  Necesito de ti, por cada testimonio:
 *    · quote   → la cita textual (autorizada por la persona).
 *    · name    → nombre y apellido.
 *    · role    → cargo (p. ej. 'Director de Proyectos').
 *    · company → empresa.
 *    · avatar  → foto en /public/team/… (opcional; si falta, se
 *                muestran las iniciales).
 * ================================================================== */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  // { quote: '…', name: '…', role: '…', company: '…' },
];

/* ================================================================== *
 *  1c) TIRA DE CIFRAS DE TRACCIÓN — números REALES
 *  ------------------------------------------------------------------
 *  Necesito de ti, por cada cifra:
 *    · value   → número (entero) que anima de 0 hasta ese valor.
 *    · prefix  → símbolo antes del número (p. ej. '$'); opcional.
 *    · suffix  → texto después del número (p. ej. 'M', '+', ' obras');
 *                opcional.
 *    · label   → qué mide la cifra (p. ej. 'Presupuesto vigilado').
 *
 *  Si una cifra NO es entera y no encaja con la animación (p. ej.
 *  '$4.2M'), usa `display` con el texto ya formateado y omite `value`.
 *
 *  Ejemplos que mencionaste:
 *    'N obras'                    → { value: 12, suffix: ' obras', label: 'Proyectos monitoreados' }
 *    '$X en presupuesto vigilado' → { value: 480, prefix: '$', suffix: 'M', label: 'Presupuesto vigilado (MXN)' }
 *    'N estimaciones auditadas'   → { value: 1200, suffix: '+', label: 'Estimaciones auditadas' }
 * ================================================================== */
export interface TractionStat {
  /** Valor entero para la animación de conteo. Omítelo si usas `display`. */
  value?: number;
  /** Texto ya formateado; anula la animación (para cifras no enteras). */
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const tractionStats: TractionStat[] = [
  // { value: 12, suffix: ' obras', label: 'Proyectos monitoreados' },
];

/* ================================================================== *
 *  2) EQUIPO / FUNDADORES — en etapa temprana, el equipo ES la prueba
 *  ------------------------------------------------------------------
 *  Necesito de ti, por cada persona:
 *    · name        → nombre y apellido.
 *    · role        → rol o cargo (p. ej. 'Cofundador y CEO').
 *    · photo       → foto en /public/team/… (cuadrada, ≥400px de lado).
 *                    Si falta, se muestran las iniciales.
 *    · credentials → 1 a 3 credenciales cortas y verificables. Justo lo
 *                    que pediste: años en construcción / en IA, títulos,
 *                    obras dirigidas, empresas donde trabajó, etc.
 *                    Ej.: ['12 años en construcción', '6 años en IA']
 *    · linkedin    → URL de LinkedIn (opcional).
 * ================================================================== */
export interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  credentials: string[];
  linkedin?: string;
}

export const team: TeamMember[] = [
  // {
  //   name: '…',
  //   role: 'Cofundador y CEO',
  //   photo: '/team/…jpg',
  //   credentials: ['12 años en construcción', '6 años en IA'],
  //   linkedin: 'https://www.linkedin.com/in/…',
  // },
];
