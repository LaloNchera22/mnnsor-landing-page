import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  blurb?: string;
  children: React.ReactNode;
  /** Ancho máximo del panel (por defecto, tamaño de formulario). */
  wide?: boolean;
}

/**
 * Cascarón de modal reutilizable: overlay oscuro, panel centrado, cierre
 * con Escape / clic fuera, bloqueo de scroll y foco inicial. Conserva el
 * lenguaje visual del sitio (bordes rectos, tipografía sans/mono).
 */
export default function Modal({ open, onClose, title, blurb, children, wide }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Enfoca el panel al abrir para accesibilidad de teclado.
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/70 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`relative my-8 w-full ${
          wide ? 'max-w-3xl' : 'max-w-lg'
        } rounded-none border border-line-strong bg-paper shadow-[0_40px_90px_-40px_rgba(0,0,0,0.55)] outline-none`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-none border border-line bg-paper text-ink transition-colors hover:bg-panel"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="border-b border-line px-7 pb-6 pt-7 pr-16">
          <h2 className="font-sans text-2xl tracking-tight text-ink">{title}</h2>
          {blurb && <p className="mt-2 text-sm leading-relaxed text-muted">{blurb}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
