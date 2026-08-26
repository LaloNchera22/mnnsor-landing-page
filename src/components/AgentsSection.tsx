import { ArrowUpRight, Check, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENTS } from '../data/agents';
import { CONTACT } from '../lib/contact';
import { trackCTA } from '../lib/analytics';

/* Los agentes que se "suman" al protagonista, en el orden del catálogo
 * (todos menos Atlas, que va destacado arriba). */
const SECONDARY_AGENTS = AGENTS.filter((a) => a.slug !== 'atlas');

export default function AgentsSection() {
  return (
    <section id="agentes" className="bg-paper py-4 lg:py-6">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            El agente con el que empiezas
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Atlas ordena tu documentación técnica,
            <span className="text-muted"> desde el primer día.</span>
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: '160ms' }}
            className="mt-6 leading-relaxed text-muted"
          >
            Aterriza en el dolor más tedioso de la oficina técnica —el caos de
            planos, especificaciones y RFIs— y mide el resultado. Los demás
            agentes se suman módulo por módulo cuando tenga sentido.
          </p>
        </div>

        {/* Protagonista — Atlas, a todo el ancho y con más peso visual */}
        <FlagshipAgent />

        {/* Y además, cuando tenga sentido, suma… */}
        <div className="mt-8">
          <p data-reveal className="mb-6 label-mono text-muted-soft">
            Y cuando tenga sentido, suma…
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {SECONDARY_AGENTS.map((a, i) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.slug}
                  to={`/agentes/${a.slug}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group flex flex-col rounded-none p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-none text-ink">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[11px] text-muted-soft">{a.code}</span>
                  </div>
                  <h3 className="mb-1.5 font-sans text-xl tracking-tight text-ink">{a.name}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted">{a.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Conocerlo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div data-reveal className="mt-5 flex justify-center">
          <Link
            to="/agentes"
            className="group inline-flex items-center gap-2 rounded-none bg-paper px-6 py-3 text-sm font-medium text-ink"
          >
            Conoce los 4 agentes y su alcance real
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FlagshipAgent() {
  const bullets = [
    'Cruza planos, especificaciones y RFIs para hallar contradicciones entre disciplinas',
    'Rastrea cada RFI y submittal con su estado, responsable y vencimiento',
    'Redacta el primer borrador de respuesta citando el plano o cláusula pertinente',
  ];
  return (
    <div
      data-reveal
      className="mt-6 grid grid-cols-1 items-center gap-10 rounded-none bg-paper p-6 sm:p-9 lg:grid-cols-2 lg:gap-14 lg:p-12"
    >
      <div>
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-none bg-ink px-3 py-1.5">
          <FileText className="h-3.5 w-3.5 text-paper" />
          <span className="label-mono text-paper">Empieza aquí · Documentación</span>
          <span className="font-mono text-[11px] text-paper/50">· ATL-03</span>
        </div>
        <h3 className="mb-4 font-sans text-3xl tracking-tight text-ink sm:text-4xl">Agente Atlas</h3>
        <p className="mb-7 max-w-md leading-relaxed text-muted">
          Ordena el volumen documental de la obra —cientos de planos, especificaciones,
          RFIs y submittals— y encuentra las contradicciones antes de que lleguen a campo.
          La decisión técnica sigue siendo de tu ingeniero; Atlas le ahorra la búsqueda y
          el primer borrador.
        </p>
        <ul className="mb-8 space-y-3.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-ink">
                <Check className="h-3 w-3 text-paper" />
              </span>
              <span className="text-sm text-ink">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <a
            href={CONTACT.demoAtlas}
            onClick={() => trackCTA('Agenda una demo de Atlas', 'AgentsSection')}
            className="group inline-flex items-center justify-center gap-2 rounded-none bg-ink px-5 py-3 text-sm font-medium text-paper"
          >
            Agenda una demo de Atlas
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to="/agentes/atlas"
            onClick={() => trackCTA('Ver capacidades y límites - Atlas', 'AgentsSection')}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
          >
            Ver capacidades y límites
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <AtlasMock />
    </div>
  );
}

function AtlasMock() {
  return (
    <div className="rounded-none p-5">
      <div className="mb-4 flex items-center justify-between pb-4">
        <span className="text-sm font-semibold text-ink">Revisión del expediente técnico</span>
        <span className="inline-flex items-center gap-1.5 rounded-none bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">
          <span className="h-1.5 w-1.5 rounded-none bg-paper" />
          Cruzando
        </span>
      </div>
      <div className="space-y-3">
        {/* Discrepancia — alta jerarquía: relleno ink */}
        <div className="rounded-none bg-ink p-4 text-paper">
          <div className="mb-2 flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
              <AlertTriangle className="h-3 w-3" /> Discrepancia
            </span>
            <span className="font-mono text-[11px] text-paper/60">Eje 4 · nivel N+3</span>
          </div>
          <p className="text-sm text-paper/85">
            Cota entre disciplinas no coincide: Arquitectura{' '}
            <span className="font-medium text-paper">6.20 m</span> · Estructura{' '}
            <span className="font-medium text-paper">6.05 m</span>{' '}
            <span className="text-paper/60">(Δ 15 cm)</span>
          </p>
        </div>
        {/* Borrador — baja jerarquía: outline */}
        <div className="rounded-none bg-panel p-4">
          <div className="mb-2 flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              <Check className="h-3 w-3" /> Borrador de RFI listo
            </span>
            <span className="font-mono text-[11px] text-muted-soft">RFI-084</span>
          </div>
          <p className="text-sm text-muted">
            Respuesta redactada con cita a plano <span className="font-medium text-ink">E-12 rev. C</span>.
            Pendiente de revisión y firma del ingeniero.
          </p>
        </div>
      </div>
    </div>
  );
}
