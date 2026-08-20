import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  X,
  ArrowRight,
  Download,
  Plug,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import MailButton from '../components/MailButton';
import { AGENTS, getAgent } from '../data/agents';
import { agentEnquiry, CONTACT } from '../lib/contact';

export default function AgentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const agent = slug ? getAgent(slug) : undefined;

  if (!agent) {
    return <Navigate to="/agentes" replace />;
  }

  const Icon = agent.icon;
  const others = AGENTS.filter((a) => a.slug !== agent.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${agent.discipline} · ${agent.code}`}
        crumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Agentes', to: '/agentes' },
          { label: agent.name },
        ]}
        title={
          <span className="inline-flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-none bg-ink text-paper">
              <Icon className="h-7 w-7" />
            </span>
            {agent.name}
          </span>
        }
        description={agent.tagline}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <MailButton href={agentEnquiry(agent.name)} variant="solid">
            Solicitar información del {agent.code}
          </MailButton>
          <MailButton href={CONTACT.demo} variant="outline" arrow={false}>
            Ver en una demo
          </MailButton>
        </div>
      </PageHeader>

      {/* Intro + métrica */}
      <section className="border-b border-line bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <p
              data-reveal
              className="max-w-2xl font-sans text-2xl leading-[1.35] tracking-tight text-ink sm:text-[1.7rem]"
            >
              {agent.intro}
            </p>
            <div
              data-reveal
              style={{ transitionDelay: '120ms' }}
              className="rounded-none border border-line bg-paper/50 p-8"
            >
              <div className="font-sans text-6xl tracking-tight text-ink">{agent.metric.value}</div>
              <p className="mt-3 leading-relaxed text-muted">{agent.metric.label}</p>
              <p className="mt-4 font-mono text-[11px] text-muted-soft">
                Rango ilustrativo observado en despliegues; los resultados varían por proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades vs Límites — el alcance honesto */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Alcance real
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
            >
              Lo que hace —y lo que deliberadamente no hace.
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 leading-relaxed text-muted"
            >
              Preferimos ser explícitos sobre los límites. Un agente confiable es
              aquel cuyo alcance conoces con precisión.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Capacidades */}
            <div data-reveal className="rounded-none border border-line bg-paper p-7 sm:p-9">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-none border border-line bg-paper px-3 py-1.5">
                <Check className="h-3.5 w-3.5 text-ink" />
                <span className="label-mono text-ink">Capacidades</span>
              </div>
              <ul className="space-y-4">
                {agent.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-ink">
                      <Check className="h-3 w-3 text-paper" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Límites */}
            <div
              data-reveal
              style={{ transitionDelay: '100ms' }}
              className="rounded-none border border-line bg-paper p-7 sm:p-9"
            >
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-none border border-line bg-paper px-3 py-1.5">
                <X className="h-3.5 w-3.5 text-ink" />
                <span className="label-mono text-ink">Límites y supervisión</span>
              </div>
              <ul className="space-y-4">
                {agent.limits.map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-none border border-line-strong">
                      <X className="h-3 w-3 text-muted" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Entradas / Salidas */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p data-reveal className="mb-6 label-mono text-muted-soft">
                <Download className="mr-2 inline h-3.5 w-3.5" /> Qué necesita (entradas)
              </p>
              <div className="space-y-4">
                {agent.inputs.map((inp, i) => (
                  <div
                    key={inp.label}
                    data-reveal
                    style={{ transitionDelay: `${i * 80}ms` }}
                    className="rounded-none border border-line bg-paper/50 p-5"
                  >
                    <p className="mb-1 text-sm font-semibold text-ink">{inp.label}</p>
                    <p className="text-sm leading-relaxed text-muted">{inp.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p data-reveal className="mb-6 label-mono text-muted-soft">
                <ArrowUpRight className="mr-2 inline h-3.5 w-3.5" /> Qué entrega (salidas)
              </p>
              <ul className="space-y-3.5">
                {agent.outputs.map((o, i) => (
                  <li
                    key={o}
                    data-reveal
                    style={{ transitionDelay: `${i * 80}ms` }}
                    className="flex items-start gap-3 rounded-none border border-line bg-paper p-5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-ink">
                      <ArrowRight className="h-3 w-3 text-paper" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flujo de trabajo */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Cómo trabaja
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
            >
              Cinco pasos, con un humano en el último.
            </h2>
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {agent.workflow.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="bg-paper p-6"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-none bg-ink font-mono text-xs font-bold text-paper">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-sm font-semibold tracking-tight text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.description}</p>
              </li>
            ))}
          </ol>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 label-mono text-muted-soft">
              <Plug className="h-3.5 w-3.5" /> Integra con
            </span>
            {agent.integrations.map((t) => (
              <span
                key={t}
                className="rounded-none border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Otros agentes */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p data-reveal className="mb-8 label-mono text-muted-soft">
            Otros agentes
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((a, i) => {
              const OtherIcon = a.icon;
              return (
                <Link
                  key={a.slug}
                  to={`/agentes/${a.slug}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group rounded-none border border-line bg-paper/50 p-6 transition-colors hover:bg-paper"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-none bg-ink text-paper">
                    <OtherIcon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mb-1 font-sans text-xl tracking-tight text-ink">{a.name}</h3>
                  <p className="text-sm text-muted">{a.discipline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Ver agente
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Pon a {agent.name} a trabajar sobre tu obra.</>}
        description="Agenda una demo con tu propia documentación y verás exactamente qué detecta, qué propone y dónde te pide decidir."
        primaryHref={agentEnquiry(agent.name)}
        primaryLabel={`Solicitar el ${agent.code}`}
      />
    </>
  );
}
