import { useCallback, useMemo, useState } from 'react';
import { SCHEDULER_URL, type CTAIntent } from '../../lib/contact';
import { ConversionContext, type ConversionContextValue } from './context';
import Modal from './Modal';
import LeadForm from './LeadForm';
import SchedulerEmbed from './SchedulerEmbed';

type ModalState =
  | { kind: 'scheduler'; intent: CTAIntent; section: string }
  | { kind: 'form'; intent: CTAIntent; section: string }
  | null;

/**
 * Orquesta el flujo de conversión de todo el sitio: mantiene el estado del
 * modal abierto y expone `openScheduler` / `openLeadForm` vía contexto.
 *
 * Regla de degradación: si se pide el scheduler pero `SCHEDULER_URL` no
 * está configurada, se abre el formulario de lead en su lugar (que a su
 * vez cae al correo comercial si tampoco hay endpoint). Ningún CTA queda
 * sin destino.
 */
export default function ConversionProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalState>(null);

  const close = useCallback(() => setModal(null), []);

  const openScheduler = useCallback((intent: CTAIntent, section: string) => {
    setModal({ kind: SCHEDULER_URL ? 'scheduler' : 'form', intent, section });
  }, []);

  const openLeadForm = useCallback((intent: CTAIntent, section: string) => {
    setModal({ kind: 'form', intent, section });
  }, []);

  const value = useMemo<ConversionContextValue>(
    () => ({ openScheduler, openLeadForm, close }),
    [openScheduler, openLeadForm, close],
  );

  return (
    <ConversionContext.Provider value={value}>
      {children}

      <Modal
        open={modal?.kind === 'scheduler'}
        onClose={close}
        wide
        title={modal?.intent.heading ?? ''}
        blurb={modal?.intent.blurb}
      >
        <SchedulerEmbed />
      </Modal>

      <Modal
        open={modal?.kind === 'form'}
        onClose={close}
        wide
        title={modal?.intent.heading ?? ''}
        blurb={modal?.intent.blurb}
      >
        {modal?.kind === 'form' && (
          <LeadForm intent={modal.intent} section={modal.section} onDone={close} />
        )}
      </Modal>
    </ConversionContext.Provider>
  );
}
