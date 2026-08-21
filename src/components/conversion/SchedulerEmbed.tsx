import { SCHEDULER_URL } from '../../lib/contact';

/**
 * Scheduler embebido (Cal.com / Calendly) dentro del modal. Carga
 * `SCHEDULER_URL` en un iframe. El provider sólo abre este componente
 * cuando la URL está configurada; aun así, se protege con un guard.
 */
export default function SchedulerEmbed() {
  if (!SCHEDULER_URL) return null;

  return (
    <div className="px-2 pb-2 pt-2 sm:px-3 sm:pb-3">
      <iframe
        src={SCHEDULER_URL}
        title="Agendar demo — mnnsor"
        loading="lazy"
        className="h-[70vh] min-h-[560px] w-full rounded-none border-0 bg-paper"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
