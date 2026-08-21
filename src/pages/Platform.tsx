import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  FileStack,
  Cpu,
  GitPullRequestArrow,
  Workflow,
  ScanText,
  Zap,
  ShieldCheck,
  Boxes,
  CheckCircle2,
  Scale,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import MailButton from '../components/MailButton';
import { AGENTS } from '../data/agents';
import { CONTACT } from '../lib/contact';

const pipeline = [
  {
    icon: FileStack,
    step: '01',
    title: 'Ingesta de tu documentación',
    body: 'Planos en PDF, modelos IFC, cronogramas P6/MS Project, catálogos de conceptos, estimaciones y bitácoras. Se cargan tal como existen; no se reformatea nada.',
  },
  {
    icon: ScanText,
    step: '02',
    title: 'Comprensión con contexto',
    body: 'Los modelos interpretan documentos no estructurados y los conectan al contexto de tu proyecto: fases, partidas, contratos y responsables.',
  },
  {
    icon: Cpu,
    step: '03',
    title: 'Trabajo de los agentes',
    body: 'Cada agente ejecuta su especialidad —cronograma, materiales, documentación, auditoría— de forma continua, señalando desviaciones con su evidencia.',
  },
  {
    icon: GitPullRequestArrow,
    step: '04',
    title: 'Aprobación humana',
    body: 'Toda acción con impacto financiero o de ruta crítica se propone para revisión. Tu equipo autoriza; el sistema ejecuta y deja bitácora.',
  },
];

const principles = [
  {
    icon: Workflow,
    title: 'Lee tu obra tal como es',
    body: 'La construcción no corre sobre APIs modernas, sino sobre PDF, hojas de cálculo y decisiones de campo. La plataforma está diseñada para dominar ese terreno.',
  },
  {
    icon: ScanText,
    title: 'Extracción con criterio',
    body: 'Interpreta bitácoras, estimaciones en PDF y correspondencia técnica, y las convierte en datos accionables con un nivel de confianza explícito por dato.',
  },
  {
    icon: Zap,
    title: 'Operativo en días',
    body: 'Sin proyectos de TI de meses. Cargas tu información y los agentes aprenden la estructura del proyecto en horas.',
  },
  {
    icon: GitPullRequestArrow,
    title: 'La última palabra es humana',
    body: 'La IA propone y ejecuta lo tedioso; tu equipo autoriza lo que importa. Cada decisión queda registrada y es auditable.',
  },
];

export default function Platform() {
  const [flagship, ...rest] = AGENTS;
  return (
    <>
      <PageHeader
        eyebrow="La plataforma"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Plataforma' }]}
        title={
          <>
            Una capa de agentes sobre el stack que ya usas,
            <span className="text-muted"> no una herramienta más que administrar.</span>
          </>
        }
        description="mnnsor no reemplaza tu Procore, tu P6 ni tu Excel: corre encima de ellos. Conecta la documentación que ya generas con una fuerza de trabajo de agentes de IA especializados que opera bajo la supervisión de tu equipo senior."
      >
        <div>
          <div className="flex flex-col gap-3.5 sm:flex-row">
            <MailButton href={CONTACT.demo} variant="solid">
              Agendar demo
            </MailButton>
            <Link
              to="/agentes"
              className="group inline-flex items-center justify-center gap-2 rounded-none border border-line-strong bg-paper px-6 py-3.5 text-base font-medium text-ink transition-colors duration-300 hover:bg-panel"
            >
              Ver los agentes
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-muted-soft">
            Sin instalar nada · Sin migrar tus herramientas · Lo ves sobre tu propia obra
          </p>
        </div>
      </PageHeader>

      {/* Cómo funciona */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Cómo funciona
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              De documentos dispersos a decisiones con evidencia.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.step}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="group bg-paper p-7 transition-colors duration-500 hover:bg-paper lg:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-none bg-ink text-paper transition-transform duration-500 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-soft">{p.step}</span>
                  </div>
                  <h3 className="mb-2.5 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principios de diseño */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p data-reveal className="mb-5 label-mono text-muted-soft">
                Principios de diseño
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: '80ms' }}
                className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[3rem]"
              >
                Construida para la realidad de la obra,
                <span className="text-muted"> no para el laboratorio.</span>
              </h2>
              <p
                data-reveal
                style={{ transitionDelay: '160ms' }}
                className="mt-6 max-w-md leading-relaxed text-muted"
              >
                Cuatro decisiones de diseño que separan a mnnsor de un chatbot genérico
                conectado a tus archivos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-2">
              {principles.map((f, i) => {
                const Icon = f.icon;
                return (
                  <article
                    key={f.title}
                    data-reveal
                    style={{ transitionDelay: `${i * 90}ms` }}
                    className="group bg-paper p-7 transition-colors duration-500 hover:bg-paper lg:p-8"
                  >
                    <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-none bg-ink text-paper transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2.5 text-lg font-semibold tracking-tight text-ink">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{f.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Los agentes como módulos */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Módulos de la plataforma
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Empieza por Atlas, tu oficina técnica en piloto automático.
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 leading-relaxed text-muted"
            >
              Atlas ordena el caos documental de la obra desde el primer día. Mídelo, y
              suma cronograma, materiales y auditoría cuando tenga sentido —cada agente es
              un módulo independiente, con un alcance acotado y honesto.
            </p>
          </div>

          {/* Protagonista — Atlas, tarjeta destacada a todo el ancho */}
          {flagship && (
            <Link
              to={`/agentes/${flagship.slug}`}
              data-reveal
              className="group mt-14 grid grid-cols-1 gap-8 rounded-none border border-line-strong bg-paper p-8 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.35)] transition-colors hover:bg-paper/70 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:p-12"
            >
              <div>
                <div className="mb-5 inline-flex items-center gap-2.5 rounded-none bg-ink px-3 py-1.5">
                  <flagship.icon className="h-3.5 w-3.5 text-paper" />
                  <span className="label-mono text-paper">Empieza aquí · {flagship.discipline}</span>
                </div>
                <h3 className="mb-3 font-sans text-3xl tracking-tight text-ink sm:text-4xl">{flagship.name}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  Ver capacidades y límites
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <p className="mb-6 leading-relaxed text-muted">{flagship.intro}</p>
                <div className="flex flex-wrap gap-2">
                  {flagship.integrations.slice(0, 5).map((t) => (
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
          )}

          {/* Y además, cuando tenga sentido, suma… */}
          <p data-reveal className="mt-16 mb-6 label-mono text-muted-soft">
            Y además, cuando tenga sentido, suma…
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {rest.map((a, i) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.slug}
                  to={`/agentes/${a.slug}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group flex flex-col rounded-none border border-line bg-paper/50 p-7 transition-colors hover:bg-paper"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-line text-ink">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-mono text-[11px] text-muted-soft">{a.code}</span>
                  </div>
                  <h3 className="mb-1.5 font-sans text-xl tracking-tight text-ink">{a.name}</h3>
                  <p className="mb-4 label-mono text-muted-soft">{a.discipline}</p>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{a.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Ver alcance real
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Despliegue + gobernanza */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p data-reveal className="mb-5 label-mono text-muted-soft">
                Despliegue y gobernanza
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: '80ms' }}
                className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
              >
                Adopción sin fricción, control sin sorpresas.
              </h2>
              <ul data-reveal style={{ transitionDelay: '160ms' }} className="mt-8 space-y-4">
                {[
                  'Implementación en días sobre tu documentación real, no sobre un ejemplo genérico.',
                  'Sin migrar tus herramientas: los agentes trabajan sobre P6, Revit, Procore y Excel.',
                  'Flujo de aprobación configurable por tipo de decisión y por responsable.',
                  'Bitácora auditable de cada acción propuesta, aprobada o rechazada.',
                  'Escala módulo por módulo y obra por obra, a tu ritmo.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
                    <span className="text-sm leading-relaxed text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <div
                data-reveal
                style={{ transitionDelay: '240ms' }}
                className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <MailButton href={CONTACT.pilot} variant="solid">
                  Proponer un piloto
                </MailButton>
                <Link
                  to="/#objeciones"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                >
                  Ver las objeciones frecuentes
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="rounded-none border border-line bg-paper p-7 sm:p-9"
            >
              <div className="mb-6 flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-ink" />
                <span className="label-mono text-ink">Modelo de operación</span>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Boxes, k: 'Tus datos', v: 'Alojados en tu región, bajo tus políticas.' },
                  { icon: Cpu, k: 'Los agentes', v: 'Proponen; no ejecutan acciones críticas sin aprobación.' },
                  { icon: GitPullRequestArrow, k: 'Tu equipo', v: 'Autoriza cada decisión financiera o de ruta crítica.' },
                  { icon: ShieldCheck, k: 'Cero entrenamiento', v: 'Los modelos no se entrenan con tu información.' },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.k}
                      className="flex items-start gap-4 rounded-none border border-line bg-paper/50 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none border border-line text-ink">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{row.k}</p>
                        <p className="text-sm text-muted">{row.v}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué esto es defendible */}
      <section className="border-b border-line bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              Por qué esto es defendible
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Tres cosas que no se copian con otra suscripción.
            </h2>
            <p
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="mt-6 leading-relaxed text-muted"
            >
              No competimos por ser el enésimo tablero. Corremos encima de lo que ya
              tienes y, con el tiempo, la ventaja se vuelve tuya.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Nadie firma a ciegas',
                body: 'Cada acción de los agentes se propone, tu equipo la aprueba o rechaza, y todo queda en bitácora. Tienes la trazabilidad que exigen tu cliente, tu contraloría y una auditoría —sin depender de la memoria de nadie.',
              },
              {
                icon: Scale,
                title: 'Tu historial, cada obra',
                body: 'Cruzamos lo proyectado, lo comprado y lo realmente instalado, partida por partida. Ese registro se acumula obra tras obra: mientras más operas, antes detectamos los desvíos —una ventaja que un recién llegado no puede improvisar.',
              },
              {
                icon: FileStack,
                title: 'Empiezas con lo que ya usas',
                body: 'No te pedimos cambiar a Procore ni migrar nada. Los agentes leen tus PDF, cronogramas P6, modelos IFC y hojas de Excel tal como existen hoy. Sin un proyecto de TI de meses de por medio.',
              },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className="group bg-paper p-7 lg:p-8"
                >
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-none bg-ink text-paper transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2.5 text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{c.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ve la plataforma sobre tu propia obra.
          </>
        }
        description="En una demo de 30 minutos cargamos un fragmento de tu documentación real y verás a los agentes trabajando sobre ella."
      />
    </>
  );
}
