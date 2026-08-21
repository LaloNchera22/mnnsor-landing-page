import { useCountUp } from '../hooks/useCountUp';

interface Metric {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const metrics: Metric[] = [
  { end: 10, suffix: '×', label: 'Más rápido en planeación y re-programación' },
  { end: 85, suffix: '%', label: 'Menos captura manual de datos' },
  { end: 30, suffix: '%', prefix: '−', label: 'Reducción de desvíos presupuestales' },
  { end: 24, suffix: '/7', label: 'Vigilancia continua de la ruta crítica' },
];

function Stat({ metric, index }: { metric: Metric; index: number }) {
  const { ref, value } = useCountUp(metric.end);
  return (
    <div
      data-reveal
      style={{ transitionDelay: `${index * 90}ms` }}
      className="border-t border-white/15 pt-6"
    >
      <div className="font-sans text-5xl tracking-tight text-paper sm:text-6xl">
        {metric.prefix}
        <span ref={ref}>{value}</span>
        {metric.suffix}
      </div>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-paper/55">
        {metric.label}
      </p>
    </div>
  );
}

export default function ImpactMetrics() {
  return (
    <section id="resultados" className="bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p data-reveal className="mb-5 label-mono text-paper/45">
              Objetivos de diseño
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Cambia la economía de cada proyecto,
              <span className="text-paper/60"> no solo el flujo de trabajo.</span>
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 max-w-md leading-relaxed text-paper/55"
            >
              Los agentes no engrosan tu plantilla de supervisión: la
              multiplican. Escala más obras con el mismo equipo senior.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-12">
              {metrics.map((m, i) => (
                <Stat key={m.label} metric={m} index={i} />
              ))}
            </div>
            <p
              data-reveal
              className="mt-10 border-t border-white/15 pt-5 text-xs leading-relaxed text-paper/45"
            >
              Rangos ilustrativos que orientan el diseño de los agentes; los
              resultados varían por proyecto y aún no representan una garantía.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
