import { FileWarning, Timer, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: FileWarning,
    kicker: 'Fricción',
    title: 'Datos atrapados en el papel',
    description:
      'Bitácoras, estimaciones y planos as-built viven en PDF y Excel. Tu equipo se convierte en un puente humano que copia y reconcilia cifras en lugar de dirigir la obra.',
  },
  {
    icon: Timer,
    kicker: 'Latencia',
    title: 'Decisiones que llegan tarde',
    description:
      'Cuando un desvío se detecta en la junta semanal, ya cuesta dinero. El procesamiento manual retrasa cada decisión sobre la ruta crítica y el flujo de caja.',
  },
  {
    icon: TrendingDown,
    kicker: 'Margen',
    title: 'Errores que erosionan la utilidad',
    description:
      'Una cantidad mal capturada se propaga hasta el cierre de obra. Los pequeños errores humanos se acumulan en sobrecostos que nadie presupuestó.',
  },
];

export default function ProblemCards() {
  return (
    <section className="bg-paper-warm py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            El problema
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            La construcción no falla por falta de talento.
            <span className="italic text-muted"> Falla por falta de datos a tiempo.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                data-reveal
                style={{ transitionDelay: `${idx * 110}ms` }}
                className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-panel/50 lg:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-paper-warm transition-colors duration-500 group-hover:border-ink group-hover:bg-ink">
                    <Icon className="h-5 w-5 text-ink transition-colors duration-500 group-hover:text-paper" />
                  </div>
                  <span className="font-mono text-xs text-muted-soft">0{idx + 1}</span>
                </div>
                <p className="mb-2 label-mono text-muted-soft">{p.kicker}</p>
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
