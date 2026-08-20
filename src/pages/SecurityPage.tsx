import {
  ShieldCheck,
  KeyRound,
  EyeOff,
  Lock,
  Server,
  ScrollText,
  UserCheck,
  Building2,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import MailButton from '../components/MailButton';
import { CONTACT } from '../lib/contact';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'SOC 2 Tipo II',
    body: 'Infraestructura y controles operativos auditados de forma independiente y continua, con reporte disponible bajo NDA.',
  },
  {
    icon: KeyRound,
    title: 'Cifrado extremo a extremo',
    body: 'AES-256 en reposo y TLS 1.3 en tránsito para cada plano, estimación, modelo y bitácora que ingresa a la plataforma.',
  },
  {
    icon: EyeOff,
    title: 'Cero retención en modelos',
    body: 'Los LLM no se entrenan con tus datos. La información sensible se anonimiza automáticamente antes de cualquier procesamiento.',
  },
  {
    icon: Server,
    title: 'Residencia de datos',
    body: 'Tus datos se alojan en la región que elijas, bajo tus políticas de retención y borrado.',
  },
  {
    icon: UserCheck,
    title: 'Control de acceso',
    body: 'Roles y permisos granulares, SSO/SAML y registro de cada acceso a documentos sensibles.',
  },
  {
    icon: ScrollText,
    title: 'Auditoría completa',
    body: 'Cada acción de un agente —propuesta, aprobada o rechazada— queda en una bitácora inmutable y exportable.',
  },
];

const dataFlow = [
  {
    k: 'Ingesta',
    v: 'Los documentos se cifran al cargarse. La información personal o sensible se detecta y anonimiza antes de procesarse.',
  },
  {
    k: 'Procesamiento',
    v: 'Los modelos operan sobre datos aislados por cliente. No hay entrenamiento con tu contenido ni cruce entre organizaciones.',
  },
  {
    k: 'Salida',
    v: 'Los resultados quedan en tu instancia. Toda acción con impacto pasa por aprobación humana y queda registrada.',
  },
  {
    k: 'Retención',
    v: 'Tú defines cuánto tiempo se conservan los datos y puedes solicitar su borrado verificable en cualquier momento.',
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Seguridad y cumplimiento"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Seguridad' }]}
        title={
          <>
            Tus proyectos son tu activo.
            <span className="text-muted"> Los tratamos como tal.</span>
          </>
        }
        description="mnnsor se construyó desde los cimientos con protocolos estrictos de seguridad, para que tus datos, presupuestos y planos permanezcan bajo tu control en todo momento."
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <MailButton href={CONTACT.security} variant="solid">
            Solicitar documentación de seguridad
          </MailButton>
          <div className="inline-flex items-center gap-3 rounded-none border border-line bg-paper px-4 py-2.5">
            <Lock className="h-4 w-4 text-ink" />
            <span className="text-sm font-medium text-ink">Datos en tu región, bajo tus políticas</span>
          </div>
        </div>
      </PageHeader>

      {/* Pilares */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group bg-paper p-7 transition-colors duration-500 hover:bg-paper lg:p-8"
                >
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-none border border-line text-ink transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flujo de datos */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p data-reveal className="mb-5 label-mono text-muted-soft">
              El ciclo de vida de tus datos
            </p>
            <h2
              data-reveal
              style={{ transitionDelay: '80ms' }}
              className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
            >
              Transparencia en cada etapa.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-4">
            {dataFlow.map((d, i) => (
              <div
                key={d.k}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="bg-paper p-7"
              >
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-none bg-ink font-mono text-[11px] font-bold text-paper">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-sm font-semibold tracking-tight text-ink">{d.k}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gobernanza empresarial */}
      <section className="border-b border-line bg-paper py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p data-reveal className="mb-5 label-mono text-muted-soft">
                Para el área de TI y seguridad
              </p>
              <h2
                data-reveal
                style={{ transitionDelay: '80ms' }}
                className="font-sans text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
              >
                Pensado para pasar tu revisión de seguridad.
              </h2>
              <p
                data-reveal
                style={{ transitionDelay: '160ms' }}
                className="mt-6 max-w-md leading-relaxed text-muted"
              >
                Ponemos a disposición de tu equipo la documentación necesaria para
                evaluar la plataforma con el rigor que exige tu organización.
              </p>
              <div data-reveal style={{ transitionDelay: '240ms' }} className="mt-8">
                <MailButton href={CONTACT.security} variant="solid">
                  Escribir a seguridad
                </MailButton>
              </div>
            </div>
            <div
              data-reveal
              style={{ transitionDelay: '160ms' }}
              className="rounded-none border border-line bg-paper/50 p-7 sm:p-9"
            >
              <div className="mb-6 flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-ink" />
                <span className="label-mono text-ink">Disponible bajo NDA</span>
              </div>
              <ul className="space-y-3.5">
                {[
                  'Reporte SOC 2 Tipo II',
                  'Arquitectura de seguridad y diagrama de flujo de datos',
                  'Política de tratamiento y retención de datos',
                  'Cuestionario de seguridad (SIG / CAIQ) respondido',
                  'Acuerdo de procesamiento de datos (DPA)',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-none border border-line bg-paper p-4"
                  >
                    <ScrollText className="mt-0.5 h-4.5 w-4.5 shrink-0 text-ink" />
                    <span className="text-sm text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Tu equipo de seguridad tiene preguntas?"
        description="Escríbenos y coordinamos una sesión técnica con la documentación de cumplimiento que tu organización requiera."
        primaryHref={CONTACT.security}
        primaryLabel="Contactar a seguridad"
        secondaryHref={CONTACT.demo}
        secondaryLabel="Agendar demo"
      />
    </>
  );
}
