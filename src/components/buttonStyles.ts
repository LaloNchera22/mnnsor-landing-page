/* ------------------------------------------------------------------ *
 *  Sistema de estilos de los CTA
 *
 *  Se extrae aquí para que tanto `MailButton` (enlace de fallback) como
 *  `CTAButton` (dispara scheduler / formulario) compartan exactamente el
 *  mismo aspecto y comportamiento visual.
 * ------------------------------------------------------------------ */

export type ButtonVariant =
  | 'solid'
  | 'outline'
  | 'solid-light'
  | 'outline-light'
  | 'link';

export const buttonBase =
  'group inline-flex items-center justify-center gap-2 rounded-none text-base font-medium transition-transform duration-300 hover:-translate-y-0.5';

export const buttonVariants: Record<ButtonVariant, string> = {
  solid: 'bg-ink px-6 py-3.5 text-paper',
  outline: 'border border-line-strong bg-paper px-6 py-3.5 text-ink hover:bg-panel',
  'solid-light': 'bg-paper px-7 py-3.5 text-ink',
  'outline-light': 'border border-white/25 px-7 py-3.5 text-paper hover:bg-white/10',
  link: 'text-sm font-semibold text-ink hover:translate-y-0',
};

/**
 * Compone las clases de un CTA a partir de su variante y modificadores.
 */
export function ctaClasses(
  variant: ButtonVariant,
  { full, className = '' }: { full?: boolean; className?: string } = {},
): string {
  return `${buttonBase} ${buttonVariants[variant]} ${full ? 'w-full sm:w-auto' : ''} ${className}`.trim();
}
