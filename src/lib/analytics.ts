/* ------------------------------------------------------------------ *
 *  Analítica de conversión
 *
 *  `trackCTA(name, section)` dispara un evento por cada interacción con
 *  un CTA, indicando qué botón se pulsó (`name`) y desde qué sección del
 *  sitio (`section`). El gancho está preparado para los tres proveedores
 *  habituales —Plausible, GA4 y PostHog— y detecta en runtime cuál está
 *  cargado. Si no hay ninguno, cae a `console.debug` para no romper nada.
 * ------------------------------------------------------------------ */

interface AnalyticsWindow extends Window {
  // Plausible: window.plausible('EventName', { props: {...} })
  plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  // GA4 (gtag.js): window.gtag('event', 'name', {...})
  gtag?: (command: 'event', action: string, params?: Record<string, unknown>) => void;
  // GA / GTM dataLayer fallback
  dataLayer?: Record<string, unknown>[];
  // PostHog: window.posthog.capture('event', {...})
  posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
}

const EVENT_NAME = 'cta_click';

/**
 * Registra la interacción con un CTA en el proveedor de analítica que esté
 * disponible. Es seguro llamarla en cualquier entorno (SSR, tests, o sin
 * proveedor cargado): nunca lanza.
 *
 * @param name    Identificador del CTA (p. ej. "agendar_demo", "ver_ventas").
 * @param section Sección de origen (p. ej. "hero", "navbar", "footer").
 */
export function trackCTA(name: string, section: string): void {
  if (typeof window === 'undefined') return;

  const props = { cta: name, section };
  const w = window as AnalyticsWindow;

  try {
    if (typeof w.plausible === 'function') {
      w.plausible(EVENT_NAME, { props });
    }

    if (typeof w.posthog?.capture === 'function') {
      w.posthog.capture(EVENT_NAME, props);
    }

    if (typeof w.gtag === 'function') {
      w.gtag('event', EVENT_NAME, {
        cta_name: name,
        cta_section: section,
      });
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event: EVENT_NAME, cta_name: name, cta_section: section });
    }

    if (
      typeof w.plausible !== 'function' &&
      typeof w.posthog?.capture !== 'function' &&
      typeof w.gtag !== 'function' &&
      !Array.isArray(w.dataLayer)
    ) {
      // Sin proveedor cargado todavía: deja rastro en desarrollo.
      console.debug(`[analytics] ${EVENT_NAME}`, props);
    }
  } catch {
    // La analítica jamás debe interrumpir un flujo de conversión.
  }
}
