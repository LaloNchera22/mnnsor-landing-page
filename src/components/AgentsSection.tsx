import { ArrowUpRight, Check, CalendarClock, Boxes, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AgentsSection() {
  return (
    <section id="agentes" className="border-t border-line bg-paper-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            Los agentes
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-serif text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Una fuerza de trabajo digital,
            <span className="italic text-muted"> especializada por oficio.</span>
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: '160ms' }}
            className="mt-6 leading-relaxed text-muted"
          >
            Agentes pre-entrenados que se despliegan desde el primer día en las
            tareas más críticas —y más tediosas— del ciclo de construcción.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {/* Cronos */}
          <AgentRow
            reversed={false}
            eyebrow="Planificación"
            icon={CalendarClock}
            name="Agente Cronos"
            code="CRN-01"
            description="Sincroniza el Gantt con la realidad de campo y anticipa cuellos de botella en la ruta crítica antes de que se conviertan en retrasos."
            bullets={[
              'Analiza programas de obra complejos en segundos',
              'Re-programa dinámicamente ante cada desviación',
              'Alerta de riesgos en la ruta crítica en tiempo real',
            ]}
            cta="Ver capacidades de Cronos"
            to="/agentes/cronos"
            mock={<CronosMock />}
          />

          {/* Cubic */}
          <AgentRow
            reversed
            eyebrow="Materiales"
            icon={Boxes}
            name="Agente Cubic"
            code="CBC-02"
            description="Extrae cantidades directo del modelo BIM y concilia lo comprado contra lo instalado, cerrando la fuga de margen por desperdicio."
            bullets={[
              'Extracción automatizada de cantidades desde IFC/BIM',
              'Conciliación de estimaciones contra avance real',
              'Prevención de sobrecostos por desperdicio de material',
            ]}
            cta="Descubrir Cubic"
            to="/agentes/cubic"
            mock={<CubicMock />}
          />
        </div>

        <div data-reveal className="mt-10 flex justify-center">
          <Link
            to="/agentes"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-panel"
          >
            Conoce los 4 agentes y su alcance real
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

interface AgentRowProps {
  reversed: boolean;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  code: string;
  description: string;
  bullets: string[];
  cta: string;
  to: string;
  mock: React.ReactNode;
}

function AgentRow({ reversed, eyebrow, icon: Icon, name, code, description, bullets, cta, to, mock }: AgentRowProps) {
  return (
    <div
      data-reveal
      className="grid grid-cols-1 items-center gap-10 rounded-[26px] border border-line bg-paper p-6 sm:p-9 lg:grid-cols-2 lg:gap-14 lg:p-12"
    >
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-warm px-3 py-1.5">
          <Icon className="h-3.5 w-3.5 text-ink" />
          <span className="label-mono text-ink">{eyebrow}</span>
          <span className="font-mono text-[11px] text-muted-soft">· {code}</span>
        </div>
        <h3 className="mb-4 font-serif text-3xl tracking-tight text-ink">{name}</h3>
        <p className="mb-7 max-w-md leading-relaxed text-muted">{description}</p>
        <ul className="mb-8 space-y-3.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink">
                <Check className="h-3 w-3 text-paper" />
              </span>
              <span className="text-sm text-ink">{b}</span>
            </li>
          ))}
        </ul>
        <Link
          to={to}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className={reversed ? 'lg:order-1' : ''}>{mock}</div>
    </div>
  );
}

function CronosMock() {
  const rows = [
    { name: 'Cimentación', state: 'done', note: 'Completado' },
    { name: 'Estructura metálica', state: 'warn', note: 'Retraso de 3 días' },
    { name: 'Instalaciones', state: 'idle', note: 'Pendiente' },
  ];
  return (
    <div className="rounded-2xl border border-line bg-paper-warm/50 p-5">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
        <span className="text-sm font-semibold text-ink">Estado del cronograma</span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-paper">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-paper" />
          Re-calculando
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-lg border border-line bg-paper px-3 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-line font-mono text-[10px] font-bold text-muted">
                {r.name.slice(0, 3).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-ink">{r.name}</span>
            </div>
            <div className="flex items-center gap-2">
              {r.state === 'warn' ? (
                <AlertTriangle className="h-3.5 w-3.5 text-ink" />
              ) : (
                <span
                  className={`h-2 w-2 rounded-full ${
                    r.state === 'done' ? 'bg-ink' : 'bg-line-strong'
                  }`}
                />
              )}
              <span className="font-mono text-[11px] text-muted-soft">{r.note}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CubicMock() {
  return (
    <div className="rounded-2xl border border-line bg-paper-warm/50 p-5">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
        <span className="text-sm font-semibold text-ink">Análisis de materiales</span>
        <span className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          Actualizado
        </span>
      </div>
      <div className="space-y-3">
        {/* Deviation — high emphasis: filled ink */}
        <div className="rounded-lg bg-ink p-4 text-paper">
          <div className="mb-2 flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
              <AlertTriangle className="h-3 w-3" /> Desviación
            </span>
            <span className="font-mono text-[11px] text-white/60">Acero de refuerzo</span>
          </div>
          <p className="text-sm text-white/85">
            Modelo BIM: <span className="font-medium text-paper">120 t</span> · Real en
            avance: <span className="font-medium text-paper">128 t</span>{' '}
            <span className="text-white/60">(+6.7%)</span>
          </p>
        </div>
        {/* Validated — low emphasis: outline */}
        <div className="rounded-lg border border-line bg-paper p-4">
          <div className="mb-2 flex items-start justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              <Check className="h-3 w-3" /> Validado
            </span>
            <span className="font-mono text-[11px] text-muted-soft">Concreto premezclado</span>
          </div>
          <p className="text-sm text-muted">
            El volumen extraído del modelo coincide con las órdenes de compra.
          </p>
        </div>
      </div>
    </div>
  );
}
