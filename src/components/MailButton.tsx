import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTA } from '../lib/analytics';

type Variant = 'solid' | 'outline' | 'solid-light' | 'outline-light' | 'link';

interface MailButtonProps {
  /** Enlace a donde redirige. */
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  /** Muestra la flecha ↗ (activada por defecto salvo en `link`). */
  arrow?: boolean;
  full?: boolean;
  /** Nombre del CTA para analíticas. Si se omite, se intentará usar el texto del children. */
  ctaName?: string;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-none text-base font-medium transition-transform duration-300 hover:-translate-y-0.5';

const variants: Record<Variant, string> = {
  solid: 'bg-ink px-6 py-3.5 text-paper',
  outline: 'border border-line-strong bg-paper px-6 py-3.5 text-ink hover:bg-panel',
  'solid-light': 'bg-paper px-7 py-3.5 text-ink',
  'outline-light': 'border border-white/25 px-7 py-3.5 text-paper hover:bg-white/10',
  link: 'text-sm font-semibold text-ink hover:translate-y-0',
};

/**
 * Botón de acción que centraliza el estilo de CTA del sitio.
 * Emite eventos de analítica al hacer clic.
 */
export default function MailButton({
  href,
  children,
  variant = 'solid',
  className = '',
  arrow,
  full,
  ctaName,
}: MailButtonProps) {
  const showArrow = arrow ?? variant !== 'link';
  const name = ctaName || (typeof children === 'string' ? children : 'CTA Button');

  const handleClick = () => {
    trackCTA(name);
  };

  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link
        to={href}
        className={`${base} ${variants[variant]} ${full ? 'w-full sm:w-auto' : ''} ${className}`}
        onClick={handleClick}
      >
        {children}
        {showArrow && (
          <ArrowUpRight className="h-4 w-4" />
        )}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${full ? 'w-full sm:w-auto' : ''} ${className}`}
      onClick={handleClick}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4" />
      )}
    </a>
  );
}
