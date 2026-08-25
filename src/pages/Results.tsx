import { useCountUp } from '../hooks/useCountUp';
import { TrendingUp, Clock, ScanLine, ShieldAlert } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { CONTACT } from '../lib/contact';

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
      className="pt-6"
    >
      <div className="font-sans text-5xl tracking-tight text-paper sm:text-6xl">
        {metric.prefix}
        <span ref={ref}>{value}</span>
        {metric.suffix}
      </div>
      <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-paper/55">{metric.label}</p>
    </div>
  );
}

const scenarios = [
  {
    icon: Clock,
    tag: 'Cronograma',
    title: 'Re-programación tras una desviación',
    before: 'Un planner tardaba medio día en re-secuenciar el programa cuando una fase se atrasaba.',
    after: 'Cronos propone la re-secuencia con su impacto estimado en minutos; el planner solo valida.',
  },
  {
    icon: ScanLine,
    tag: 'Materiales',
    title: 'Cuantificación desde el modelo',
    before: 'El equipo de costos cuantificaba partidas a mano desde planos, con horas de captura.',
    after: 'Cubic extrae cantidades del IFC con un nivel de confianza por partida; el equipo revisa las dudosas.',
  },
  {
    icon: ShieldAlert,
    tag: 'Auditoría',
    title: 'Revisión de estimaciones',
    before: 'Las estimaciones se aprobaban con muestreo; los cobros anticipados se detectaban tarde.',
    after: 'Vero dictamina cada estimación contra contrato y avance; control de costos decide con evidencia.',
  },
];

export default function Results() {
  return (
    <>
      <PageHeader
        /* CAMINO A: eyebrow="El impacto" */
        eyebrow="Objetivos de diseño"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Resultados' }]}
        title={
          <>
            Cambia la economía de cada proyecto,
            <span className="text-muted"> optimizando las operaciones de construcción.</span>
          </>
        }
        description="Los agentes multiplican la capacidad de tu plantilla de supervisión. Escala más obras con el mismo equipo senior, con decisiones que llegan a tiempo."
      />

      {/* Métricas */}
      <section className="bg-ink py-24 text-paper lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p data-reveal className="mb-12 label-mono text-paper/45">
            {/* CAMINO A: Rangos observados en despliegues */}
            Objetivos de diseño
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Stat key={m.label} metric={m} index={i} />
            ))}
          </div>
          {/* CAMINO A:
          <p data-reveal className="mt-12 max-w-xl font-mono text-[11px] leading-relaxed text-paper/40">
            Fuente: Piloto Torre X, 2025
          </p>
          */}
          {/* CAMINO B: */}
          <p data-reveal className="mt-12 max-w-xl font-mono text-[11px] leading-relaxed text-paper/40">
            Rangos ilustrativos; los resultados varían por proyecto.
          </p>
        </div>
      </section>

      {/* Escenarios antes / después */}
      <section className="bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Antes y después
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
            >
              Dónde se nota la diferencia.
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {scenarios.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="grid grid-cols-1 gap-6 rounded-none bg-paper/50 p-7 lg:grid-cols-[0.8fr_1fr_1fr] lg:items-center lg:p-9"
                >
                  <div>
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-none bg-ink text-paper">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="label-mono text-muted-soft">{s.tag}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                  </div>
                  <div className="rounded-none bg-paper p-5">
                    <p className="mb-2 label-mono text-muted-soft">Antes</p>
                    <p className="text-sm leading-relaxed text-muted">{s.before}</p>
                  </div>
                  <div className="rounded-none bg-ink p-5 text-paper">
                    <p className="mb-2 label-mono text-paper/50">Con mnnsor</p>
                    <p className="text-sm leading-relaxed text-paper/85">{s.after}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo se mide */}
      <section className="bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p data-reveal className="mb-5 label-mono text-muted-soft">
                Cómo lo medimos
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: '80ms' }}
                className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
              >
                Empezamos por una línea base tuya.
              </h2>
            </div>
            <div data-reveal style={{ transitionDelay: '120ms' }} className="space-y-4">
              {[
                { icon: TrendingUp, k: 'Definimos el indicador', v: 'Tiempo de re-programación, horas de captura, desvío por estimación… el que importe para tu obra.' },
                { icon: Clock, k: 'Medimos tu punto de partida', v: 'Registramos cómo se hace hoy, sin la plataforma, para tener una comparación honesta.' },
                { icon: ScanLine, k: 'Corremos un piloto acotado', v: 'Sobre una obra real y un alcance definido, con el agente que aplique a tu reto.' },
                { icon: ShieldAlert, k: 'Comparamos con evidencia', v: 'Tú ves el antes y el después con tus propios datos, desde el primer minuto.' },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.k} className="flex items-start gap-4 rounded-none bg-paper p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-ink text-paper">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{row.k}</p>
                      <p className="text-sm leading-relaxed text-muted">{row.v}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Mide el impacto sobre tu propia obra."
        description="Proponemos un piloto acotado con una línea base tuya, para que los resultados sean tuyos y verificables."
        primaryHref={CONTACT.pilot}
        primaryLabel="Proponer un piloto"
        secondaryHref={CONTACT.demo}
        secondaryLabel="Agendar demo"
      />
    </>
  );
}
