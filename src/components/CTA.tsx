import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../lib/contact';

export default function CTA() {
  return (
    <section id="contacto" className="bg-paper px-5 py-20 sm:px-6 lg:py-28">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl px-6 py-16 text-center sm:px-10 lg:py-24"
      >
        <div className="relative">
          <p className="mb-6 label-mono text-muted-soft">Empieza hoy</p>
          <h2 className="mx-auto max-w-2xl font-sans text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Deja que tu equipo dirija la obra.
            <br />
            <span className="text-muted">Deja que mnnsor lleve los datos.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted">
            Agenda una demo de 30 minutos con tu propio programa de obra. Verás
            los agentes trabajando sobre tus propios documentos, desde el primer
            minuto.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={CONTACT.demo}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-ink px-7 py-3.5 text-base font-medium text-paper sm:w-auto"
            >
              Agendar demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.sales}
              className="inline-flex w-full items-center justify-center gap-2 rounded-none px-7 py-3.5 text-base font-medium text-ink sm:w-auto"
            >
              Hablar con ventas
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-soft">
            Sin instalar nada · Sin migrar tus herramientas · Lo ves sobre tu propia obra
          </p>
        </div>
      </div>
    </section>
  );
}
