/* ------------------------------------------------------------------ *
 *  Contacto — enlaces centralizados
 * ------------------------------------------------------------------ */

export const SALES_EMAIL = 'ventas@mnnsor.com';
export const SUPPORT_EMAIL = 'support@mnnsor.com';

// URL para el CTA primario (Agenda embebida / Calendly / Cal.com)
export const SCHEDULER_URL = 'https://cal.com/mnnsor'; // TODO: Update with real embedded scheduler URL

// Endpoint para los formularios (ej. Formspree)
export const LEAD_FORM_URL = 'https://formspree.io/f/YOUR_ENDPOINT'; // TODO: Update with real form endpoint

interface MailContent {
  subject: string;
  body: string;
}

/**
 * Construye un enlace `mailto:` hacia ventas como fallback.
 */
export function mailto({ subject, body }: MailContent): string {
  const params = new URLSearchParams({ subject, body });
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${SALES_EMAIL}?${query}`;
}

const SIGN_OFF =
  '\n\n— Enviado desde mnnsor.io\n(Este correo se generó automáticamente; edítalo antes de enviarlo si lo deseas.)';

export const FALLBACK_MAILS = {
  sales: mailto({
    subject: 'Contacto con ventas — mnnsor',
    body: 'Hola equipo de mnnsor:\n\nQuisiera hablar con el equipo comercial sobre precios, alcance y despliegue en nuestra organización.\n\nDatos de contacto:\n• Nombre:\n• Empresa:\n• Número aproximado de obras activas:\n• Tamaño del equipo de control de proyecto:\n' + SIGN_OFF,
  }),
  general: mailto({
    subject: 'Contacto — mnnsor',
    body: 'Hola equipo de mnnsor:\n\nMe gustaría recibir más información sobre la plataforma.\n\nMensaje:\n\n' + SIGN_OFF,
  }),
  support: `mailto:${SUPPORT_EMAIL}?subject=Soporte%20%E2%80%94%20mnnsor&body=Hola%20equipo%20de%20soporte%20de%20mnnsor%3A%0A%0ANecesito%20ayuda%20con%20lo%20siguiente%3A%0A%0A${encodeURIComponent(SIGN_OFF)}`,
};

/**
 * Los enlaces para las acciones.
 * - demos van al SCHEDULER_URL.
 * - el resto va a '/contacto' para usar el formulario.
 * - soporte sigue abriendo el mail local
 */
export const CONTACT = {
  demo: FALLBACK_MAILS.sales,
  demoAtlas: FALLBACK_MAILS.sales,
  sales: '/contacto',
  general: '/contacto',
  security: '/contacto',
  pilot: '/contacto',
  support: FALLBACK_MAILS.support,
} as const;

export function agentEnquiry(_agentName: string): string {
  return '/contacto'; // All lead requests go to contact form
}
