import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../lib/contact';

export default function Hero() {
  return (
    <section
      id="plataforma"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-ink px-5 pt-32 pb-20 text-center sm:px-6 lg:pt-40"
    >
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p data-reveal className="mb-8 label-mono text-paper/40">
          Agentes de IA para la construcción
        </p>

        <h1
          data-reveal
          style={{ transitionDelay: '80ms' }}
          className="font-sans text-[2.9rem] font-medium leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-[5rem]"
        >
          La inteligencia
          <br />
          que construye tu obra.
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: '160ms' }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70"
        >
          Empieza por tu oficina técnica: un agente de IA que encuentra las
          contradicciones entre planos, especificaciones y RFIs —y redacta el
          primer borrador de respuesta que tu ingeniero solo revisa y firma.
          Suma cronograma, materiales y auditoría cuando tenga sentido.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: '240ms' }}
          className="mt-12 flex w-full max-w-md flex-col justify-center gap-3.5 sm:flex-row"
        >
          <a
            href={CONTACT.demoAtlas}
            className="group inline-flex w-full items-center justify-center gap-2 bg-paper px-6 py-3.5 text-base font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            Agenda una demo de Atlas
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/plataforma"
            className="inline-flex w-full items-center justify-center gap-2 border border-paper/20 px-6 py-3.5 text-base font-medium text-paper transition-colors duration-300 hover:bg-paper/10 sm:w-auto"
          >
            <Play className="h-4 w-4" /> Ver la plataforma
          </Link>
        </div>

        <p
          data-reveal
          style={{ transitionDelay: '300ms' }}
          className="mt-8 label-mono text-paper/40"
        >
          Sin instalar nada · Sin migrar tus herramientas · Sobre tu propia obra
        </p>
      </div>
    </section>
  );
}
