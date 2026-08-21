/* ------------------------------------------------------------------ *
 *  Contacto y conversión
 *
 *  El sitio ya NO enruta las conversiones a `mailto:`. Cada CTA abre un
 *  flujo real:
 *    • "Agendar demo"  → scheduler embebido (Cal.com / Calendly).
 *    • Resto de CTAs   → formulario de lead que postea a un endpoint.
 *
 *  `mailto:` sobrevive SOLO como fallback (navegadores/entornos sin JS,
 *  o si el endpoint/scheduler aún no está configurado) y apunta al buzón
 *  comercial, no al de soporte.
 * ------------------------------------------------------------------ */

/**
 * Buzón comercial: aquí llegan demos, ventas, pilotos y consultas de
 * seguridad cuando el flujo cae al fallback de correo.
 */
export const SALES_EMAIL = 'hola@mnnsor.com';

/** Buzón de soporte: sólo para clientes que ya usan la plataforma. */
export const SUPPORT_EMAIL = 'support@mnnsor.com';

/**
 * URL del scheduler embebido (Cal.com o Calendly).
 *
 * ▸ Pega aquí tu enlace, p. ej.:
 *     export const SCHEDULER_URL = 'https://cal.com/mnnsor/demo';
 *     export const SCHEDULER_URL = 'https://calendly.com/mnnsor/demo';
 *
 * Mientras esté vacío, el CTA "Agendar demo" cae con elegancia al
 * formulario de lead (y éste al correo comercial).
 */
export const SCHEDULER_URL = '';

/**
 * Endpoint que recibe los leads del formulario (Formspree, un handler
 * propio, o el CRM). Debe aceptar un POST `application/json`.
 *
 * ▸ Ejemplos:
 *     export const LEAD_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
 *     export const LEAD_ENDPOINT = '/api/lead';
 *
 * Mientras esté vacío, el formulario arma el envío como `mailto:` al
 * buzón comercial para no perder el contacto.
 */
export const LEAD_ENDPOINT = '';

/* ------------------------------------------------------------------ *
 *  mailto (sólo fallback)
 * ------------------------------------------------------------------ */

interface MailContent {
  subject: string;
  body: string;
  to?: string;
}

/**
 * Construye un enlace `mailto:` con asunto y cuerpo codificados. Se usa
 * únicamente como red de seguridad cuando el scheduler o el endpoint de
 * leads no están disponibles.
 */
export function mailto({ subject, body, to = SALES_EMAIL }: MailContent): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams codifica espacios como "+"; los clientes de correo
  // esperan "%20" en el cuerpo, así que normalizamos.
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${to}?${query}`;
}

const SIGN_OFF =
  '\n\n— Enviado desde mnnsor.io\n(Este correo se generó automáticamente; edítalo antes de enviarlo si lo deseas.)';

/* ------------------------------------------------------------------ *
 *  Intents de conversión
 *
 *  Cada CTA del sitio referencia un intent. El intent decide qué flujo
 *  se dispara (`action`), cómo se rotula el evento de analítica
 *  (`event`), y —para el fallback— qué correo predefinido se arma.
 * ------------------------------------------------------------------ */

export type CTAIntentKey =
  | 'demo'
  | 'sales'
  | 'pilot'
  | 'security'
  | 'support'
  | 'general';

export type CTAAction = 'scheduler' | 'form' | 'mailto';

export interface CTAIntent {
  /** Qué flujo abre el CTA. */
  action: CTAAction;
  /** Nombre del evento de analítica (`trackCTA(event, section)`). */
  event: string;
  /** Enlace `mailto:` de respaldo, ya redactado. */
  mailtoFallback: string;
  /** Encabezado del formulario/scheduler cuando aplica. */
  heading: string;
  /** Texto de apoyo bajo el encabezado. */
  blurb: string;
  /** Valor sugerido para el campo "tipo de proyecto/solicitud". */
  requestType: string;
}

export const CONTACT: Record<CTAIntentKey, CTAIntent> = {
  demo: {
    action: 'scheduler',
    event: 'agendar_demo',
    heading: 'Agenda tu demo',
    blurb:
      'Una sesión de 30 minutos con tu propia documentación. Elige el horario que te acomode.',
    requestType: 'Demo',
    mailtoFallback: mailto({
      subject: 'Solicitud de demo — mnnsor',
      body:
        'Hola equipo de mnnsor:\n\n' +
        'Me gustaría agendar una demo de 30 minutos con nuestro propio programa de obra para ver los agentes trabajando sobre documentos reales.\n\n' +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy (P6, MS Project, Revit, Procore, Excel…):\n' +
        '• Tipo de proyecto (edificación, industrial, infraestructura):\n' +
        SIGN_OFF,
    }),
  },

  sales: {
    action: 'form',
    event: 'hablar_ventas',
    heading: 'Hablemos de tu despliegue',
    blurb: 'Precios, alcance y modelo de operación para tu organización.',
    requestType: 'Ventas',
    mailtoFallback: mailto({
      subject: 'Contacto con ventas — mnnsor',
      body:
        'Hola equipo de mnnsor:\n\n' +
        'Quisiera hablar con el equipo comercial sobre precios, alcance y despliegue en nuestra organización.\n\n' +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy:\n' +
        '• Tipo de proyecto:\n' +
        SIGN_OFF,
    }),
  },

  pilot: {
    action: 'form',
    event: 'proponer_piloto',
    heading: 'Propón un piloto',
    blurb:
      'Una prueba de concepto acotada sobre una obra real, con una línea base tuya.',
    requestType: 'Piloto',
    mailtoFallback: mailto({
      subject: 'Piloto / prueba de concepto — mnnsor',
      body:
        'Hola equipo de mnnsor:\n\n' +
        'Nos interesa correr un piloto acotado sobre una obra real para medir resultados antes de escalar.\n\n' +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy:\n' +
        '• Tipo de proyecto (obra candidata para el piloto):\n' +
        SIGN_OFF,
    }),
  },

  security: {
    action: 'form',
    event: 'contacto_seguridad',
    heading: 'Seguridad y cumplimiento',
    blurb:
      'Documentación SOC 2, tratamiento de datos y sesión técnica con tu equipo de TI.',
    requestType: 'Seguridad y cumplimiento',
    mailtoFallback: mailto({
      subject: 'Consulta de seguridad y cumplimiento — mnnsor',
      body:
        'Hola equipo de mnnsor:\n\n' +
        'Nuestro equipo de seguridad / TI quisiera revisar su postura de seguridad, tratamiento de datos y documentación de cumplimiento (SOC 2, cifrado, residencia de datos).\n\n' +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo / Área:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy:\n' +
        '• Tipo de proyecto:\n' +
        SIGN_OFF,
    }),
  },

  general: {
    action: 'form',
    event: 'consulta_general',
    heading: 'Cuéntanos qué necesitas',
    blurb: 'Cualquier pregunta sobre la plataforma o los agentes.',
    requestType: 'Consulta general',
    mailtoFallback: mailto({
      subject: 'Contacto — mnnsor',
      body:
        'Hola equipo de mnnsor:\n\n' +
        'Me gustaría recibir más información sobre la plataforma.\n\n' +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy:\n' +
        '• Tipo de proyecto:\n' +
        '\nMensaje:\n\n' +
        SIGN_OFF,
    }),
  },

  /**
   * Soporte es el único caso donde el correo NO es un fallback sino el
   * canal real: quien ya usa la plataforma escribe a soporte. Se mantiene
   * como `mailto:` apuntando al buzón de soporte.
   */
  support: {
    action: 'mailto',
    event: 'contacto_soporte',
    heading: 'Soporte',
    blurb: '¿Ya usas mnnsor y necesitas ayuda? Nuestro equipo responde.',
    requestType: 'Soporte',
    mailtoFallback: mailto({
      to: SUPPORT_EMAIL,
      subject: 'Soporte — mnnsor',
      body:
        'Hola equipo de soporte de mnnsor:\n\n' +
        'Necesito ayuda con lo siguiente:\n\n' +
        SIGN_OFF,
    }),
  },
};

/**
 * Intent dinámico para la página de detalle de un agente. Reutiliza el
 * flujo de formulario y arma el fallback de correo específico del agente.
 */
export function agentIntent(agentName: string): CTAIntent {
  return {
    action: 'form',
    event: 'interes_agente',
    heading: `Solicitar información del ${agentName}`,
    blurb: `Cuéntanos tu reto y te mostramos el alcance real del ${agentName} sobre tus proyectos.`,
    requestType: `Agente — ${agentName}`,
    mailtoFallback: mailto({
      subject: `Interés en el ${agentName} — mnnsor`,
      body:
        'Hola equipo de mnnsor:\n\n' +
        `Me interesa conocer a detalle las capacidades y el alcance real del ${agentName}, y cómo se desplegaría sobre nuestros proyectos.\n\n` +
        'Datos de contacto:\n' +
        '• Nombre:\n' +
        '• Empresa:\n' +
        '• Cargo:\n' +
        '• Email:\n' +
        '• Teléfono:\n' +
        '• Herramientas que usamos hoy:\n' +
        '• Reto que buscamos resolver:\n' +
        SIGN_OFF,
    }),
  };
}
