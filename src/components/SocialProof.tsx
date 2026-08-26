import { useCountUp } from '../hooks/useCountUp';
import {
  clientLogos,
  testimonials,
  tractionStats,
  type TractionStat,
  type Testimonial,
} from '../data/socialProof';

/* ------------------------------------------------------------------ *
 *  Prueba social reutilizable — 3 modos independientes.
 *
 *  Cada modo (logos, testimonios, cifras) se renderiza SÓLO si tiene
 *  datos reales en src/data/socialProof.ts. Si los tres están vacíos,
 *  la sección completa no aparece: cero placeholders falsos.
 * ------------------------------------------------------------------ */

/** Iniciales de respaldo cuando no hay foto (evita avatares inventados). */
function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

/* ---------------------------- Modo A: logos ---------------------------- */
function LogoStrip() {
  // Duplicamos para el marquee sólo si hay suficientes logos para que
  // el desplazamiento tenga sentido; con pocos, se muestran centrados.
  const marquee = clientLogos.length >= 5;
  const items = marquee ? [...clientLogos, ...clientLogos] : clientLogos;

  const Logo = ({ logo }: { logo: (typeof clientLogos)[number] }) => {
    const img = (
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className="h-8 w-auto max-w-[150px] object-contain opacity-60 grayscale"
      />
    );
    return logo.href ? (
      <a href={logo.href} target="_blank" rel="noopener noreferrer" className="shrink-0">
        {img}
      </a>
    ) : (
      <span className="shrink-0">{img}</span>
    );
  };

  return (
    <div className="mb-20">
      <p data-reveal className="mb-8 text-center label-mono text-muted-soft">
        Quienes ya confían en mnnsor
      </p>
      {marquee ? (
        <div className="marquee-mask relative overflow-hidden" data-reveal>
          <div className="flex w-max items-center gap-14 pr-14">
            {items.map((logo, i) => (
              <div key={`${logo.name}-${i}`} aria-hidden={i >= clientLogos.length}>
                <Logo logo={logo} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          data-reveal
          className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8"
        >
          {clientLogos.map((logo) => (
            <Logo key={logo.name} logo={logo} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------- Modo B: testimonios ------------------------- */
function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <figure
      data-reveal
      style={{ transitionDelay: `${index * 110}ms` }}
      className="relative flex flex-col bg-paper p-8 lg:p-10"
    >
      <blockquote className="flex-1 text-lg leading-relaxed tracking-tight text-ink sm:text-xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 pt-6">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            loading="lazy"
            className="h-11 w-11 rounded-none object-cover grayscale"
          />
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-none bg-panel font-mono text-xs font-medium text-muted">
            {initials(t.name)}
          </span>
        )}
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-ink">{t.name}</span>
          <span className="block text-sm text-muted">
            {t.role}
            {t.company ? ` · ${t.company}` : ''}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  return (
    <div className="mb-20">
      <div
        className={`grid grid-cols-1 gap-8 ${ testimonials.length > 1 ? 'md:grid-cols-2' : '' }`}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Modo C: cifras --------------------------- */
function StatValue({ stat }: { stat: TractionStat }) {
  // La animación de conteo sólo aplica a cifras enteras. Cuando se
  // aporta `display` (p. ej. '$4.2M'), se muestra tal cual.
  const { ref, value } = useCountUp(stat.value ?? 0);
  return (
    <div className="font-sans text-5xl tracking-tight text-ink sm:text-6xl">
      {stat.display ? (
        stat.display
      ) : (
        <>
          {stat.prefix}
          <span ref={ref}>{value}</span>
          {stat.suffix}
        </>
      )}
    </div>
  );
}

function TractionStats() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {tractionStats.map((stat, i) => (
        <div
          key={stat.label}
          data-reveal
          style={{ transitionDelay: `${i * 90}ms` }}
          className="pt-6"
        >
          <StatValue stat={stat} />
          <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- Sección ----------------------------- */
export default function SocialProof() {
  const hasLogos = clientLogos.length > 0;
  const hasTestimonials = testimonials.length > 0;
  const hasStats = tractionStats.length > 0;

  // Sin datos reales en ningún modo, no renderizamos nada.
  if (!hasLogos && !hasTestimonials && !hasStats) return null;

  return (
    <section
      id="prueba-social"
      className="bg-paper py-4 lg:py-6"
      aria-label="Prueba social"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {(hasTestimonials || hasStats) && (
          <div className="mb-14 max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Prueba social
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Resultados reales en obra,
              <span className="text-muted"> avalados por métricas reales en campo.</span>
            </h2>
          </div>
        )}

        {hasLogos && <LogoStrip />}
        {hasTestimonials && <Testimonials />}
        {hasStats && <TractionStats />}
      </div>
    </section>
  );
}
