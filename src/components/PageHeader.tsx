import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}

/**
 * Encabezado editorial consistente para las páginas internas. Reutiliza
 * el sistema monocromático: eyebrow mono, título serif, rejilla ambiental.
 */
export default function PageHeader({ eyebrow, title, description, crumbs, children }: PageHeaderProps) {
  return (
    <section className="relative border-b border-line pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Ruta" className="mb-8 flex items-center gap-1.5 text-xs text-muted-soft">
            {crumbs.map((c, i) => (
              <span key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-line-strong" />}
                {c.to ? (
                  <Link to={c.to} className="font-mono transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-mono text-muted">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <p data-reveal className="mb-5 label-mono text-muted-soft">
          {eyebrow}
        </p>
        <h1
          data-reveal
          style={{ transitionDelay: '80ms' }}
          className="max-w-4xl font-sans text-4xl leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        {description && (
          <p
            data-reveal
            style={{ transitionDelay: '160ms' }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {description}
          </p>
        )}
        {children && (
          <div data-reveal style={{ transitionDelay: '240ms' }} className="mt-9">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
