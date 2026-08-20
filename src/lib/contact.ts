/* ------------------------------------------------------------------ *
 *  Contacto — todos los botones de acción abren un correo predefinido
 *  dirigido a support@mnnsor.com con asunto y cuerpo ya redactados.
 * ------------------------------------------------------------------ */

export const SUPPORT_EMAIL = 'support@mnnsor.com';

interface MailContent {
  subject: string;
  body: string;
}

/**
 * Construye un enlace `mailto:` hacia soporte con asunto y cuerpo
 * codificados. El cliente de correo del usuario abre un borrador listo
 * para enviar.
 */
export function mailto({ subject, body }: MailContent): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams codifica espacios como "+"; los clientes de correo
  // esperan "%20" en el cuerpo, así que normalizamos.
  const query = params.toString().replace(/\+/g, '%20');
  return `mailto:${SUPPORT_EMAIL}?${query}`;
}

const SIGN_OFF =
  '\n\n— Enviado desde mnnsor.io\n(Este correo se generó automáticamente; edítalo antes de enviarlo si lo deseas.)';

/**
 * Mensajes predefinidos por tipo de acción. Cada CTA del sitio usa uno
 * de estos para que el correo llegue con contexto a support@mnnsor.com.
 */
export const CONTACT = {
  demo: mailto({
    subject: 'Solicitud de demo — mnnsor',
    body:
      'Hola equipo de mnnsor:\n\n' +
      'Me gustaría agendar una demo de 30 minutos con nuestro propio programa de obra para ver los agentes trabajando sobre documentos reales.\n\n' +
      'Datos de contacto:\n' +
      '• Nombre:\n' +
      '• Empresa:\n' +
      '• Cargo:\n' +
      '• Teléfono:\n' +
      '• Tipo de proyecto (edificación, industrial, infraestructura):\n' +
      '• Herramientas que usamos hoy (P6, MS Project, Revit, Procore, Excel…):\n' +
      SIGN_OFF,
  }),

  sales: mailto({
    subject: 'Contacto con ventas — mnnsor',
    body:
      'Hola equipo de mnnsor:\n\n' +
      'Quisiera hablar con el equipo comercial sobre precios, alcance y despliegue en nuestra organización.\n\n' +
      'Datos de contacto:\n' +
      '• Nombre:\n' +
      '• Empresa:\n' +
      '• Número aproximado de obras activas:\n' +
      '• Tamaño del equipo de control de proyecto:\n' +
      SIGN_OFF,
  }),

  general: mailto({
    subject: 'Contacto — mnnsor',
    body:
      'Hola equipo de mnnsor:\n\n' +
      'Me gustaría recibir más información sobre la plataforma.\n\n' +
      'Mensaje:\n\n' +
      SIGN_OFF,
  }),

  support: mailto({
    subject: 'Soporte — mnnsor',
    body:
      'Hola equipo de soporte de mnnsor:\n\n' +
      'Necesito ayuda con lo siguiente:\n\n' +
      SIGN_OFF,
  }),

  security: mailto({
    subject: 'Consulta de seguridad y cumplimiento — mnnsor',
    body:
      'Hola equipo de mnnsor:\n\n' +
      'Nuestro equipo de seguridad / TI quisiera revisar su postura de seguridad, tratamiento de datos y documentación de cumplimiento (SOC 2, cifrado, residencia de datos).\n\n' +
      'Datos de contacto:\n' +
      '• Nombre:\n' +
      '• Empresa:\n' +
      '• Área:\n' +
      SIGN_OFF,
  }),

  pilot: mailto({
    subject: 'Piloto / prueba de concepto — mnnsor',
    body:
      'Hola equipo de mnnsor:\n\n' +
      'Nos interesa correr un piloto acotado sobre una obra real para medir resultados antes de escalar.\n\n' +
      'Datos de contacto:\n' +
      '• Nombre:\n' +
      '• Empresa:\n' +
      '• Obra candidata para el piloto:\n' +
      '• Objetivo principal (planeación, materiales, auditoría de estimaciones…):\n' +
      SIGN_OFF,
  }),
} as const;

/**
 * Correo predefinido para un agente específico (usado en las páginas de
 * detalle de cada agente).
 */
export function agentEnquiry(agentName: string): string {
  return mailto({
    subject: `Interés en el ${agentName} — mnnsor`,
    body:
      'Hola equipo de mnnsor:\n\n' +
      `Me interesa conocer a detalle las capacidades y el alcance real del ${agentName}, y cómo se desplegaría sobre nuestros proyectos.\n\n` +
      'Datos de contacto:\n' +
      '• Nombre:\n' +
      '• Empresa:\n' +
      '• Reto que buscamos resolver:\n' +
      SIGN_OFF,
  });
}
