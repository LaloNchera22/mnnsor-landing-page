import { Play, LayoutGrid, GanttChartSquare, Boxes, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';
import { CONTACT } from '../lib/contact';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28" id="plataforma">
      {/* Ambient monochrome wash — restrained, not a gradient soup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.05),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(to_right,var(--color-line)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(70%_50%_at_50%_0%,#000,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-[600px] overflow-hidden"
      >
        <div className="hero-beam" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <h1
          data-reveal
          className="mx-auto max-w-3xl font-sans text-[2.9rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.1rem]"
        >
          La inteligencia que
          <br className="hidden sm:block" /> construye{' '}
          <span className="font-serif font-normal italic tracking-normal">el mañana</span>
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: '160ms' }}
          className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted"
        >
          Agentes de IA que planifican, coordinan y auditan tus obras con el
          criterio de un ingeniero senior —y la constancia de un sistema que
          nunca deja de vigilar el proyecto.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: '240ms' }}
          className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <CTAButton intent={CONTACT.demo} section="hero" variant="solid" full>
            Agendar demo
          </CTAButton>
          <Link
            to="/plataforma"
            className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-line-strong bg-paper px-6 py-3.5 text-base font-medium text-ink transition-colors duration-300 hover:bg-panel sm:w-auto"
          >
            <Play className="h-4 w-4" /> Ver la plataforma en acción
          </Link>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: '300ms' }}
          className="mx-auto mt-8 flex max-w-fit items-center gap-2.5 border border-line bg-paper/60 px-4 py-2 text-sm text-muted"
        >
          <ShieldCheck className="h-4 w-4 shrink-0 text-ink" />
          <span>
            La IA propone, tu equipo senior autoriza —
            <span className="font-medium text-ink"> cada decisión, auditable</span>.
          </span>
        </div>

        <p
          data-reveal
          style={{ transitionDelay: '360ms' }}
          className="mt-6 text-sm text-muted-soft"
        >
          Sin migrar tus herramientas. Implementación en días, no en trimestres.
        </p>
      </div>

      {/* Product surface */}
      <div
        data-reveal
        style={{ transitionDelay: '200ms' }}
        className="animate-drift mx-auto mt-16 max-w-5xl px-4 sm:mt-20 sm:px-6"
      >
        <ProductMock />
      </div>
    </section>
  );
}

function ProductMock() {
  const kpis = [
    { label: 'Avance físico', value: '68.4%', delta: '+2.1% sem', ok: true },
    { label: 'Desvío presupuestal', value: '−1.8%', delta: 'bajo control', ok: true },
    { label: 'Riesgos en ruta crítica', value: '2', delta: 'requiere acción', ok: false },
  ];
  const phases = [
    { name: 'Cimentación', pct: 100, note: 'Completado' },
    { name: 'Estructura metálica', pct: 74, note: 'En proceso' },
    { name: 'Instalaciones MEP', pct: 32, note: 'Programado' },
    { name: 'Acabados', pct: 8, note: 'Pendiente' },
  ];

  return (
    <div className="sweep relative overflow-hidden rounded-none border border-line-strong bg-paper shadow-[0_40px_90px_-40px_rgba(0,0,0,0.35)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-panel/60 px-4 py-3">
        <span className="h-3 w-3 rounded-none border border-line-strong bg-paper" />
        <span className="h-3 w-3 rounded-none border border-line-strong bg-paper" />
        <span className="h-3 w-3 rounded-none border border-line-strong bg-paper" />
        <div className="mx-auto flex items-center gap-2 rounded-none border border-line bg-paper px-3 py-1">
          <ShieldCheck className="h-3 w-3 text-muted" />
          <span className="font-mono text-[11px] text-muted">app.mnnsor.io / torre-central</span>
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden flex-col gap-1 border-r border-line bg-panel/30 p-4 md:flex">
          {[
            { icon: LayoutGrid, label: 'Panel', active: true },
            { icon: GanttChartSquare, label: 'Cronograma' },
            { icon: Boxes, label: 'Materiales' },
            { icon: ShieldCheck, label: 'Auditoría' },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-none px-3 py-2 text-sm ${
                active ? 'bg-ink text-paper' : 'text-muted'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
          <div className="mt-auto rounded-none border border-line bg-paper p-3">
            <div className="label-mono mb-1.5 text-muted-soft">Agentes activos</div>
            <div className="flex items-center gap-2 text-sm font-medium text-ink">
              <span className="animate-pulse-dot h-2 w-2 rounded-none bg-ink" />
              3 en ejecución
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="col-span-12 p-5 md:col-span-9 md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="label-mono text-muted-soft">Proyecto</div>
              <div className="text-lg font-semibold text-ink">Torre Central · Fase 2</div>
            </div>
            <div className="hidden items-center gap-2 rounded-none border border-line bg-panel/50 px-3 py-1 text-xs font-medium text-muted sm:flex">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-none bg-ink" />
              Sincronizado hace 40 s
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {kpis.map((k) => (
              <div key={k.label} className="relative rounded-none border border-line bg-paper/60 p-4">
                <span className="absolute -top-px -left-px h-1.5 w-1.5 border-t border-l border-ink/40" />
                <span className="absolute -top-px -right-px h-1.5 w-1.5 border-t border-r border-ink/40" />
                <span className="absolute -bottom-px -left-px h-1.5 w-1.5 border-b border-l border-ink/40" />
                <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-ink/40" />
                <div className="mb-2 text-xs font-medium text-muted">{k.label}</div>
                <div className="text-2xl font-semibold tracking-tight text-ink">{k.value}</div>
                <div
                  className={`mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium ${
                    k.ok ? 'text-muted' : 'text-ink'
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-none ${k.ok ? 'bg-muted-soft' : 'bg-ink'}`} />
                  {k.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="relative mt-4 rounded-none border border-line bg-paper p-4">
            <span className="absolute -top-px -left-px h-1.5 w-1.5 border-t border-l border-ink/40" />
            <span className="absolute -top-px -right-px h-1.5 w-1.5 border-t border-r border-ink/40" />
            <span className="absolute -bottom-px -left-px h-1.5 w-1.5 border-b border-l border-ink/40" />
            <span className="absolute -bottom-px -right-px h-1.5 w-1.5 border-b border-r border-ink/40" />
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Ruta crítica · avance por fase</span>
              <span className="label-mono text-muted-soft">Gantt</span>
            </div>
            <div className="space-y-3">
              {phases.map((p) => (
                <div key={p.name} className="grid grid-cols-12 items-center gap-3">
                  <span className="col-span-4 truncate text-xs font-medium text-muted">{p.name}</span>
                  <div className="col-span-6 h-2 overflow-hidden rounded-none bg-panel-2">
                    <div
                      className="h-full rounded-none bg-ink"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                  <span className="col-span-2 text-right font-mono text-[11px] text-muted-soft">{p.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
