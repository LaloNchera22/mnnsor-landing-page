import { CalendarClock, Briefcase, ShieldCheck, LifeBuoy, FlaskConical, Mail, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { CONTACT, SUPPORT_EMAIL } from '../lib/contact';

const options = [
  {
    icon: CalendarClock,
    title: 'Agendar una demo',
    body: 'Una sesión de 30 minutos con tu propia documentación. Verás a los agentes trabajando sobre datos reales.',
    href: CONTACT.demo,
    cta: 'Escribir para agendar',
  },
  {
    icon: Briefcase,
    title: 'Hablar con ventas',
    body: 'Precios, alcance y modelo de despliegue para tu organización.',
    href: CONTACT.sales,
    cta: 'Contactar a ventas',
  },
  {
    icon: FlaskConical,
    title: 'Proponer un piloto',
    body: 'Una prueba de concepto acotada sobre una obra real, con una línea base tuya.',
    href: CONTACT.pilot,
    cta: 'Proponer un piloto',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y cumplimiento',
    body: 'Documentación SOC 2, tratamiento de datos y sesión técnica con tu equipo de TI.',
    href: CONTACT.security,
    cta: 'Escribir a seguridad',
  },
  {
    icon: LifeBuoy,
    title: 'Soporte',
    body: '¿Ya usas mnnsor y necesitas ayuda? Nuestro equipo de soporte responde.',
    href: CONTACT.support,
    cta: 'Contactar a soporte',
  },
  {
    icon: Mail,
    title: 'Consulta general',
    body: 'Cualquier otra pregunta sobre la plataforma o los agentes.',
    href: CONTACT.general,
    cta: 'Enviar un mensaje',
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        crumbs={[{ label: 'Inicio', to: '/' }, { label: 'Contacto' }]}
        title={
          <>
            Hablemos de tu obra,
            <span className="italic text-muted"> no de un caso genérico.</span>
          </>
        }
        description={
          <>
            Cada botón abre un correo listo para enviar a{' '}
            <a href={CONTACT.general} className="font-medium text-ink underline underline-offset-4">
              {SUPPORT_EMAIL}
            </a>{' '}
            con el contexto ya redactado. Solo completas tus datos y lo envías.
          </>
        }
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((o, i) => {
              const Icon = o.icon;
              return (
                <a
                  key={o.title}
                  href={o.href}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="group flex flex-col rounded-[22px] border border-line bg-paper-warm/50 p-7 transition-colors hover:bg-paper-warm"
                >
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mb-2 text-lg font-semibold tracking-tight text-ink">{o.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted">{o.body}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {o.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              );
            })}
          </div>

          <div
            data-reveal
            className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[22px] border border-line bg-paper-warm/50 px-7 py-6 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-ink" />
              <div>
                <p className="text-sm font-semibold text-ink">Correo directo</p>
                <p className="text-sm text-muted">Escríbenos cuando lo prefieras.</p>
              </div>
            </div>
            <a
              href={CONTACT.general}
              className="font-mono text-sm font-medium text-ink underline underline-offset-4"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
