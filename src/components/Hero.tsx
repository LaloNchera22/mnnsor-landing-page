import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../lib/contact';
import Typewriter from './Typewriter';
import { trackCTA } from '../lib/analytics';

const cycleWords = ['el mañana', 'tu obra', 'tu proyecto', 'tu trabajo', 'tu vida'];

export default function Hero() {
  return (
    <section className="relative pt-8 pb-6 lg:pt-12 lg:pb-8 bg-paper overflow-hidden flex flex-col items-center justify-center min-h-[100dvh] md:min-h-[90vh]" id="plataforma">
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 text-center flex flex-col items-center">
        <h1
          data-reveal
          className="font-sans text-4xl sm:text-6xl lg:text-[5.1rem] leading-[1.02] tracking-tight text-ink max-w-4xl mx-auto"
        >
          La inteligencia que construye{' '}
          <span className="inline-block">
            <Typewriter
              texts={cycleWords}
              color="#000000"
              typedColor="#000000"
              cursorColor="#000000"
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
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted mx-auto"
        >
          Empieza por tu oficina técnica: un agente de IA que encuentra las
          contradicciones entre planos, especificaciones y RFIs —y redacta el
          primer borrador de respuesta que tu ingeniero solo revisa y firma.
          Suma cronograma, materiales y auditoría cuando tenga sentido.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: '240ms' }}
          className="mt-5 flex flex-col gap-3.5 sm:flex-row justify-center w-full max-w-md mx-auto"
        >
          <a
            href={CONTACT.demoAtlas}
            onClick={() => trackCTA('Agenda una demo de Atlas', 'Hero')}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-ink px-6 py-3.5 text-base font-medium text-paper sm:w-auto"
          >
            Agenda una demo de Atlas
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <Link
            to="/plataforma"
            onClick={() => trackCTA('Ver la plataforma en acción', 'Hero')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-transparent px-6 py-3.5 text-base font-medium text-ink sm:w-auto"
          >
            <Play className="h-4 w-4" /> Ver la plataforma en acción
          </Link>
        </div>

        <p
          data-reveal
          style={{ transitionDelay: '280ms' }}
          className="mt-5 text-sm text-muted-soft"
        >
          Sin instalar nada · Sin migrar tus herramientas · Lo ves sobre tu propia obra
        </p>

        <p
          data-reveal
          style={{ transitionDelay: '340ms' }}
          className="mt-3 text-sm text-muted-soft"
        >
          Demo de 30 min sobre tu documentación real, desde el primer minuto.
        </p>
      </div>
    </section>
  );
}
