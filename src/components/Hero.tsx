import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../lib/contact';
import LavaLamp from './LavaLamp';
import Typewriter from './Typewriter';

const cycleWords = ['el mañana', 'tu obra', 'tu proyecto', 'tu trabajo', 'tu vida'];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-36 bg-ink overflow-hidden flex flex-col items-center justify-center min-h-[90vh]" id="plataforma">
      <div className="absolute inset-0 z-0">
        <LavaLamp top="#8a8a8a" bottom="#222222" sheen="#a1a1a1" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 text-center flex flex-col items-center">
        <h1
          data-reveal
          className="font-sans text-[2.9rem] leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-[5.1rem] max-w-4xl mx-auto"
        >
          La inteligencia que construye{' '}
          <span className="inline-block">
            <Typewriter
              texts={cycleWords}
              color="#ffffff"
              typedColor="#ffffff"
              cursorColor="#ffffff"
              font={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "inherit",
                fontWeight: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit"
              }}
            />
          </span>
        </h1>

        <p
          data-reveal
          style={{ transitionDelay: '160ms' }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80 mx-auto"
        >
          Empieza por tu oficina técnica: un agente de IA que encuentra las
          contradicciones entre planos, especificaciones y RFIs —y redacta el
          primer borrador de respuesta que tu ingeniero solo revisa y firma.
          Suma cronograma, materiales y auditoría cuando tenga sentido.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: '240ms' }}
          className="mt-10 flex flex-col gap-3.5 sm:flex-row justify-center w-full max-w-md mx-auto"
        >
          <a
            href={CONTACT.demoAtlas}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-paper px-6 py-3.5 text-base font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            Agenda una demo de Atlas
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/plataforma"
            className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-paper/20 bg-transparent px-6 py-3.5 text-base font-medium text-paper transition-colors duration-300 hover:bg-paper/10 sm:w-auto"
          >
            <Play className="h-4 w-4" /> Ver la plataforma en acción
          </Link>
        </div>

        <p
          data-reveal
          style={{ transitionDelay: '280ms' }}
          className="mt-5 text-sm text-paper/60"
        >
          Sin instalar nada · Sin migrar tus herramientas · Lo ves sobre tu propia obra
        </p>

        <p
          data-reveal
          style={{ transitionDelay: '340ms' }}
          className="mt-3 text-sm text-paper/60"
        >
          Demo de 30 min sobre tu documentación real, no un ejemplo genérico.
        </p>
      </div>
    </section>
  );
}
