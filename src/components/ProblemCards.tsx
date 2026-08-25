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
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            El problema
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-sans text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            La construcción requiere herramientas que escalen con tu talento.
            <span className="text-muted"> Falla por falta de datos a tiempo.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((p, idx) => {
            return (
              <article
                key={p.title}
                data-reveal
                style={{ transitionDelay: `${idx * 110}ms` }}
                className="group relative bg-paper p-8 lg:p-10"
              >
                <p className="mb-2 label-mono text-muted-soft">{p.kicker}</p>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
                <p className="leading-relaxed text-muted">{p.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
