import { ArrowUpRight } from 'lucide-react';
import { ctaClasses, type ButtonVariant } from './buttonStyles';

interface MailButtonProps {
  /** Enlace `mailto:` de fallback (ver src/lib/contact.ts). */
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Muestra la flecha ↗ (activada por defecto salvo en `link`). */
  arrow?: boolean;
  full?: boolean;
  /** Se dispara al hacer clic (p. ej. analítica). */
  onClick?: () => void;
}

/**
 * Enlace de acción que abre un correo `mailto:`. Hoy se usa sólo como
 * fallback (p. ej. soporte, o cuando el scheduler/endpoint no está
 * configurado). Comparte el sistema de estilos con `CTAButton`.
 */
export default function MailButton({
  href,
  children,
  variant = 'solid',
  className = '',
  arrow,
  full,
  onClick,
}: MailButtonProps) {
  const showArrow = arrow ?? variant !== 'link';
  return (
    <a href={href} onClick={onClick} className={ctaClasses(variant, { full, className })}>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
