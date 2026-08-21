import { ArrowUpRight } from 'lucide-react';
import { ctaClasses, type ButtonVariant } from './buttonStyles';
import { useConversion } from './conversion/context';
import { trackCTA } from '../lib/analytics';
import type { CTAIntent } from '../lib/contact';

interface CTAButtonProps {
  /** Intent de conversión (define flujo, evento y fallback). */
  intent: CTAIntent;
  /** Sección de origen para la analítica (p. ej. "hero", "navbar"). */
  section: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
  full?: boolean;
  /** Sobrescribe el nombre del evento de analítica si hace falta. */
  eventName?: string;
}

/**
 * CTA principal del sitio. Conserva el sistema de estilos de `MailButton`
 * pero, en vez de abrir un `mailto:`, dispara el flujo real de conversión
 * (scheduler o formulario de lead) y registra el evento de analítica.
 *
 * Para el intent de soporte —cuyo canal real es el correo— se comporta
 * como enlace `mailto:` de todas formas.
 */
export default function CTAButton({
  intent,
  section,
  children,
  variant = 'solid',
  className = '',
  arrow,
  full,
  eventName,
}: CTAButtonProps) {
  const { openScheduler, openLeadForm } = useConversion();
  const showArrow = arrow ?? variant !== 'link';
  const event = eventName ?? intent.event;

  const arrowEl = showArrow && (
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );

  // Soporte: el correo ES el canal, no un fallback. Enlace directo.
  if (intent.action === 'mailto') {
    return (
      <a
        href={intent.mailtoFallback}
        onClick={() => trackCTA(event, section)}
        className={ctaClasses(variant, { full, className })}
      >
        {children}
        {arrowEl}
      </a>
    );
  }

  const handleClick = () => {
    trackCTA(event, section);
    if (intent.action === 'scheduler') {
      openScheduler(intent, section);
    } else {
      openLeadForm(intent, section);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={ctaClasses(variant, { full, className })}
    >
      {children}
      {arrowEl}
    </button>
  );
}
