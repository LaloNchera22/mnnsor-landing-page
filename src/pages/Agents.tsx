import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, GitPullRequestArrow, ScanText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { AGENTS } from '../data/agents';

const honesty = [
  {
    icon: ScanText,
    title: 'Trabajan sobre datos, no sobre magia',
    body: 'Un agente solo conoce lo que le entregas. Su lectura es tan buena como la documentación y los reportes que recibe.',
  },
  {
    icon: GitPullRequestArrow,
    title: 'Proponen; tú decides',
    body: 'Ninguna acción con impacto financiero o de ruta crítica se ejecuta sin la aprobación explícita de tu equipo.',
  },
  {
    icon: ShieldCheck,
    title: 'Confianza explícita',
    body: 'Cada dato viene con su nivel de confianza y su evidencia. Donde el modelo duda, lo dice y pide validación humana.',
  },
];

export default function Agents() {
  return (
    <>
      <PageHeader
        eyebrow="Los agentes"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Agentes' }]}
        title={
          <>
            Una fuerza de trabajo digital,
            <span className="text-muted"> especializada por oficio.</span>
          </>
        }
        description="Cuatro agentes pre-entrenados para las tareas más críticas —y más tediosas— del ciclo de construcción. Cada uno con un alcance acotado, honesto y auditable."
      />

      {/* Filosofía honesta */}
      <section className="border-b border-line bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-3">
            {honesty.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="bg-paper p-7 lg:p-8"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-none border border-line text-ink">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-ink">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{h.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listado de agentes */}
      <section className="bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {AGENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.slug}
                  to={`/agentes/${a.slug}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="group grid grid-cols-1 gap-8 rounded-none border border-line bg-paper p-7 transition-colors hover:bg-paper/60 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:p-10"
                >
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2.5 rounded-none border border-line bg-paper px-3 py-1.5">
                      <Icon className="h-3.5 w-3.5 text-ink" />
                      <span className="label-mono text-ink">{a.discipline}</span>
                      <span className="font-mono text-[11px] text-muted-soft">· {a.code}</span>
                    </div>
                    <h2 className="mb-3 font-sans text-3xl tracking-tight text-ink">{a.name}</h2>
                    <p className="max-w-xl leading-relaxed text-muted">{a.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Ver capacidades y límites
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="rounded-none border border-line bg-paper/50 p-6">
                    <div className="font-sans text-5xl tracking-tight text-ink">{a.metric.value}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{a.metric.label}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {a.integrations.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-none border border-line bg-paper px-2 py-1 font-mono text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        section="agentes_cta"
        title="¿Cuál agente resolvería tu cuello de botella hoy?"
        description="Cuéntanos tu reto principal y te decimos con franqueza qué agente aplica, qué esperar y qué queda fuera de su alcance."
        primaryLabel="Agendar demo"
        secondaryLabel="Hablar con ventas"
      />
    </>
  );
}
