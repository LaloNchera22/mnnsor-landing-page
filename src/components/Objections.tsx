import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Zap,
  Lock,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

/* ------------------------------------------------------------------ *
 *  Objeciones reales de un director de proyecto o de control de costos.
 *
 *  Respuestas cortas y verificables: cada una remite a una página del
 *  sitio donde el claim puede comprobarse (plataforma, seguridad,
 *  agentes). No se añade nada que no podamos sustentar con el resto
 *  del contenido.
 * ------------------------------------------------------------------ */

interface Objection {
  icon: LucideIcon;
  question: string;
  answer: string;
  proof?: { label: string; to: string };
}

const objections: Objection[] = [
  {
    icon: Layers,
    question: '¿Por qué no usar solo el Procore/Autodesk que ya tengo?',
    answer:
      'Porque mnnsor no los reemplaza. Es una capa de agentes que trabaja encima de tu stack: lee la documentación que esas herramientas ya generan y opera sobre P6, Revit, Procore y Excel. Sigues usando lo que tienes; los agentes le suman una capa de análisis continuo.',
    proof: { label: 'Cómo se despliega sobre tu stack', to: '/plataforma' },
  },
  {
    icon: ShieldCheck,
    question: '¿Y si la IA se equivoca en una obra de millones?',
    answer:
      'Los agentes proponen; no ejecutan acciones con impacto financiero o de ruta crítica sin aprobación humana. Cada propuesta llega con su evidencia, tu equipo autoriza o rechaza, y toda decisión —aprobada o no— queda en una bitácora auditable.',
    proof: { label: 'Ver el modelo de gobernanza', to: '/plataforma' },
  },
  {
    icon: Zap,
    question: '¿Cuánto tarda implementar?',
    answer:
      'Días, no meses. Cargas tu documentación real —planos, cronogramas, estimaciones— y los agentes aprenden la estructura del proyecto en horas. Sin proyecto de TI y sin migrar tus herramientas actuales.',
    proof: { label: 'Ver el proceso de ingesta', to: '/plataforma' },
  },
  {
    icon: Lock,
    question: '¿Qué pasa con mis datos?',
    answer:
      'Se alojan en tu región, bajo tus políticas. Los modelos no se entrenan con tu información y los datos sensibles se anonimizan de forma automática. Tus planos, presupuestos y bitácoras permanecen bajo tu control.',
    proof: { label: 'Ver seguridad', to: '/seguridad' },
  },
  {
    icon: Boxes,
    question: '¿Tengo que comprar los 4 agentes?',
    answer:
      'No. Cada agente es un módulo independiente con un alcance acotado. Empieza por uno, mide los resultados sobre tu propia obra y suma los demás cuando tenga sentido, a tu ritmo.',
    proof: { label: 'Ver los agentes', to: '/agentes' },
  },
];

export default function Objections() {
  return (
    <section id="objeciones" className="border-t border-line bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="mb-5 label-mono text-muted-soft">
            Objeciones
          </p>
          <h2
            data-reveal
            style={{ transitionDelay: '80ms' }}
            className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Las preguntas difíciles,
            <span className="text-muted"> respondidas sin marketing.</span>
          </h2>
          <p
            data-reveal
            style={{ transitionDelay: '160ms' }}
            className="mt-6 leading-relaxed text-muted"
          >
            Lo que un director de proyecto o control de costos pregunta antes de
            aprobar un piloto. Respuestas cortas y verificables, sin promesas que
            no podamos sostener.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-2">
          {objections.map((o, i) => {
            const Icon = o.icon;
            const isLast = i === objections.length - 1;
            return (
              <article
                key={o.question}
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
                className={`group flex flex-col bg-paper p-7 transition-colors duration-500 hover:bg-panel/50 lg:p-9 ${
                  isLast ? 'md:col-span-2' : ''
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-line text-ink transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-soft">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-ink">
                  {o.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{o.answer}</p>
                {o.proof && (
                  <Link
                    to={o.proof.to}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                  >
                    {o.proof.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
