import { ArrowUpRight } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'solid-light' | 'outline-light' | 'link';

interface MailButtonProps {
  /** Enlace `mailto:` predefinido (ver src/lib/contact.ts). */
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Muestra la flecha ↗ (activada por defecto salvo en `link`). */
  arrow?: boolean;
  full?: boolean;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition-transform duration-300 hover:-translate-y-0.5';

const variants: Record<Variant, string> = {
  solid: 'bg-ink px-6 py-3.5 text-paper',
  outline: 'border border-line-strong bg-paper px-6 py-3.5 text-ink hover:bg-panel',
  'solid-light': 'bg-paper px-7 py-3.5 text-ink',
  'outline-light': 'border border-white/25 px-7 py-3.5 text-paper hover:bg-white/10',
  link: 'text-sm font-semibold text-ink hover:translate-y-0',
};

/**
 * Botón de acción que abre un correo predefinido a support@mnnsor.com.
 * Centraliza el estilo de CTA para que todos los "botones de mandar
 * correo" del sitio se vean y comporten igual.
 */
export default function MailButton({
  href,
  children,
  variant = 'solid',
  className = '',
  arrow,
  full,
}: MailButtonProps) {
  const showArrow = arrow ?? variant !== 'link';
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${full ? 'w-full sm:w-auto' : ''} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
