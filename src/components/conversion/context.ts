import { createContext, useContext } from 'react';
import type { CTAIntent } from '../../lib/contact';

export interface ConversionContextValue {
  /** Abre el scheduler embebido (Cal.com / Calendly). */
  openScheduler: (intent: CTAIntent, section: string) => void;
  /** Abre el formulario de lead para el intent dado. */
  openLeadForm: (intent: CTAIntent, section: string) => void;
  /** Cierra cualquier modal de conversión abierto. */
  close: () => void;
}

export const ConversionContext = createContext<ConversionContextValue | null>(null);

/**
 * Acceso al flujo de conversión (scheduler / formulario de lead). Debe
 * usarse dentro de `<ConversionProvider>`.
 */
export function useConversion(): ConversionContextValue {
  const ctx = useContext(ConversionContext);
  if (!ctx) {
    throw new Error('useConversion debe usarse dentro de <ConversionProvider>.');
  }
  return ctx;
}
