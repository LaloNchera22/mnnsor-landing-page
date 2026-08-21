import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '../lib/contact';

export default function CTA() {
  return (
    <section id="contacto" className="bg-paper px-5 py-20 sm:px-6 lg:py-28">
      <div
        data-reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-none bg-ink px-6 py-16 text-center sm:px-10 lg:py-24"
      >
        {/* Faint grid inside the dark panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]"
        />

        <div className="relative">
          <p className="mb-6 label-mono text-paper/45">Empieza hoy</p>
          <h2 className="mx-auto max-w-2xl font-sans text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Deja que tu equipo dirija la obra.
            <br />
            <span className="text-paper/70">Deja que mnnsor lleve los datos.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/60">
            Agenda una demo de 30 minutos con tu propio programa de obra. Verás
            los agentes trabajando sobre tus documentos reales, no sobre un
            ejemplo genérico.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={CONTACT.demo}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-paper px-7 py-3.5 text-base font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Agendar demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={CONTACT.sales}
              className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-white/25 px-7 py-3.5 text-base font-medium text-paper transition-colors duration-300 hover:bg-white/10 sm:w-auto"
            >
              Hablar con ventas
            </a>
          </div>

          <p className="mt-6 text-sm text-paper/45">
            Sin instalar nada · Sin migrar tus herramientas · Lo ves sobre tu propia obra
          </p>
        </div>
      </div>
    </section>
  );
}
