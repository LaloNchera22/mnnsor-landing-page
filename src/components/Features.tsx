import { Workflow, Zap, ScanText, GitPullRequestArrow } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Lee tu obra tal como es',
    description:
      'Planos, catálogos de conceptos y programas existentes se ingieren sin reformatear nada. El sistema se ajusta naturalmente a tus formatos existentes.',
  },
  {
    icon: ScanText,
    title: 'Extracción con criterio',
    description:
      'Interpreta datos no estructurados —bitácoras, estimaciones en PDF, correos con contratistas— y los convierte en información accionable con fiabilidad de nivel humano.',
  },
  {
    icon: Zap,
    title: 'Operativo en días',
    description:
      'Sin proyectos de TI de meses. Cargas tu información y los agentes aprenden la estructura del proyecto en horas, listos para reportar desde el primer día.',
  },
  {
    icon: GitPullRequestArrow,
    title: 'La última palabra es humana',
    description:
      'Cada decisión financiera o de ruta crítica pasa por un flujo de aprobación. La IA propone y ejecuta lo tedioso; tu equipo autoriza lo que importa.',
  },
];

export default function Features() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              La plataforma
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3.25rem]"
            >
              Construida para la realidad de la obra,
              <span className="text-muted"> no para el laboratorio.</span>
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 max-w-md leading-relaxed text-muted"
            >
              La construcción no corre sobre APIs modernas. Corre sobre PDF,
              hojas de cálculo y decisiones de campo. mnnsor está diseñado para
              dominar ese terreno.
            </p>
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((f, idx) => {
              return (
                <article
                  key={f.title}
                  data-reveal
                  style={{ transitionDelay: `${idx * 90}ms` }}
                  className="group bg-paper p-7 lg:p-8"
                >
                  <h3 className="mb-2.5 text-xl font-bold tracking-tight text-ink">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{f.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
