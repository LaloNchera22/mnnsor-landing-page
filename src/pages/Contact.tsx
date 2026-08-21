import { CalendarClock, Briefcase, ShieldCheck, LifeBuoy, FlaskConical, Mail, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { CONTACT, SALES_EMAIL, type CTAIntent } from '../lib/contact';
import { useConversion } from '../components/conversion/context';
import { trackCTA } from '../lib/analytics';

const SECTION = 'contacto';

interface Option {
  icon: LucideIcon;
  title: string;
  body: string;
  intent: CTAIntent;
  cta: string;
}

const options: Option[] = [
  {
    icon: CalendarClock,
    title: 'Agendar una demo',
    body: 'Una sesión de 30 minutos con tu propia documentación. Verás a los agentes trabajando sobre datos reales.',
    intent: CONTACT.demo,
    cta: 'Elegir horario',
  },
  {
    icon: Briefcase,
    title: 'Hablar con ventas',
    body: 'Precios, alcance y modelo de despliegue para tu organización.',
    intent: CONTACT.sales,
    cta: 'Contactar a ventas',
  },
  {
    icon: FlaskConical,
    title: 'Proponer un piloto',
    body: 'Una prueba de concepto acotada sobre una obra real, con una línea base tuya.',
    intent: CONTACT.pilot,
    cta: 'Proponer un piloto',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y cumplimiento',
    body: 'Documentación SOC 2, tratamiento de datos y sesión técnica con tu equipo de TI.',
    intent: CONTACT.security,
    cta: 'Solicitar documentación',
  },
  {
    icon: LifeBuoy,
    title: 'Soporte',
    body: '¿Ya usas mnnsor y necesitas ayuda? Nuestro equipo de soporte responde.',
    intent: CONTACT.support,
    cta: 'Contactar a soporte',
  },
  {
    icon: Mail,
    title: 'Consulta general',
    body: 'Cualquier otra pregunta sobre la plataforma o los agentes.',
    intent: CONTACT.general,
    cta: 'Enviar un mensaje',
  },
];

const cardCls =
  'group flex flex-col rounded-none border border-line bg-paper/50 p-7 text-left transition-colors hover:bg-paper';

export default function Contact() {
  const { openScheduler, openLeadForm } = useConversion();

  const trigger = (intent: CTAIntent) => {
    trackCTA(intent.event, SECTION);
    if (intent.action === 'scheduler') openScheduler(intent, SECTION);
    else openLeadForm(intent, SECTION);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
        title={
          <>
            Hablemos de tu obra,
            <span className="text-muted"> no de un caso genérico.</span>
          </>
        }
        description={
          <>
            Elige cómo quieres avanzar: agenda una demo, propón un piloto o
            cuéntanos tu caso. Respondemos desde{' '}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-medium text-ink underline underline-offset-4"
            >
              {SALES_EMAIL}
            </a>
            .
          </>
        }
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((o, i) => {
              const Icon = o.icon;
              const inner = (
                <>
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-none bg-ink text-paper transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mb-2 text-lg font-semibold tracking-tight text-ink">{o.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{o.body}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {o.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </>
              );

              const style = { transitionDelay: `${i * 70}ms` };

              // Soporte: el correo es el canal real → enlace mailto.
              if (o.intent.action === 'mailto') {
                return (
                  <a
                    key={o.title}
                    href={o.intent.mailtoFallback}
                    onClick={() => trackCTA(o.intent.event, SECTION)}
                    data-reveal
                    style={style}
                    className={cardCls}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <button
                  key={o.title}
                  type="button"
                  onClick={() => trigger(o.intent)}
                  data-reveal
                  style={style}
                  className={cardCls}
                >
                  {inner}
                </button>
              );
            })}
          </div>

          <div
            data-reveal
            className="mt-10 flex flex-col items-center justify-between gap-4 rounded-none border border-line bg-paper/50 px-7 py-6 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-ink" />
              <div>
                <p className="text-sm font-semibold text-ink">Correo directo</p>
                <p className="text-sm text-muted">Escríbenos cuando lo prefieras.</p>
              </div>
            </div>
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-mono text-sm font-medium text-ink underline underline-offset-4"
            >
              {SALES_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
