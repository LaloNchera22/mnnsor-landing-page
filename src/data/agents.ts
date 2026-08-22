import {
  CalendarClock,
  Boxes,
  FileText,
  Receipt,
  type LucideIcon,
} from 'lucide-react';

/* ------------------------------------------------------------------ *
 *  Catálogo de agentes de mnnsor.
 *
 *  El copy describe alcances *reales*: lo que un agente de IA sobre
 *  documentos de obra puede hacer hoy con fiabilidad, y —con la misma
 *  franqueza— dónde termina su criterio y empieza el del equipo humano.
 *  Nada aquí promete autonomía total ni decisiones sin supervisión.
 * ------------------------------------------------------------------ */

export interface AgentStep {
  title: string;
  description: string;
}

export interface AgentInput {
  label: string;
  detail: string;
}

export interface Agent {
  slug: string;
  code: string;
  name: string;
  discipline: string;
  icon: LucideIcon;
  tagline: string;
  /** Resumen corto para tarjetas del listado. */
  summary: string;
  /** Párrafo de contexto en la página de detalle. */
  intro: string;
  /** Capacidades concretas y verificables. */
  capabilities: string[];
  /** Alcance honesto: dónde termina la autonomía del agente. */
  limits: string[];
  /** Qué necesita para funcionar (entradas). */
  inputs: AgentInput[];
  /** Qué entrega (salidas). */
  outputs: string[];
  /** Cómo trabaja, paso a paso. */
  workflow: AgentStep[];
  /** Integraciones típicas. */
  integrations: string[];
  /** Métrica ilustrativa (rango realista, no garantía). */
  metric: { value: string; label: string };
}

/* ------------------------------------------------------------------ *
 *  El orden del array define la jerarquía en /plataforma y /agentes.
 *  Atlas encabeza como agente protagonista (el caballo de Troya): es
 *  el punto de entrada con el que aterrizamos en la oficina técnica.
 *  Los demás se suman módulo por módulo cuando tiene sentido.
 * ------------------------------------------------------------------ */
export const AGENTS: Agent[] = [
  {
    slug: 'atlas',
    code: 'ATL-03',
    name: 'Agente Atlas',
    discipline: 'Documentación técnica, RFI y submittals',
    icon: FileText,
    tagline: 'Encuentra contradicciones entre planos, especificaciones y RFIs.',
    summary:
      'Lee planos, especificaciones y correspondencia técnica para localizar discrepancias, rastrear RFIs y redactar borradores de respuesta que un ingeniero revisa y firma.',
    intro:
      'Atlas ordena el volumen documental de una obra: cientos de planos, cuadernos de especificaciones, RFIs y submittals. Cruza esas fuentes para encontrar contradicciones —una cota que no coincide entre disciplinas, una especificación que contradice el detalle— y prepara borradores de respuesta a RFIs con las referencias correspondientes. La decisión técnica sigue siendo del ingeniero; Atlas le ahorra la búsqueda y el primer borrador.',
    capabilities: [
      'Indexa planos y especificaciones (PDF) y los hace consultables por lenguaje natural.',
      'Detecta discrepancias entre disciplinas (arquitectura, estructura, MEP).',
      'Rastrea el ciclo de vida de cada RFI y submittal, con fechas y responsables.',
      'Redacta borradores de respuesta a RFIs citando el plano o cláusula pertinente.',
      'Resalta cambios entre revisiones de un mismo plano.',
    ],
    limits: [
      'No aprueba ni rechaza submittals: entrega el análisis; la firma es humana.',
      'No sustituye el criterio de diseño ni asume responsabilidad profesional.',
      'La calidad de sus hallazgos depende de que la documentación esté legible y actualizada.',
      'No interpreta planos a mano ilegibles ni información que no esté en los documentos.',
    ],
    inputs: [
      { label: 'Planos', detail: 'Sets en PDF por disciplina, con sus revisiones.' },
      { label: 'Especificaciones', detail: 'Cuadernos de especificaciones y normas aplicables.' },
      { label: 'Correspondencia', detail: 'RFIs, submittals y correos técnicos con contratistas.' },
    ],
    outputs: [
      'Buscador documental por lenguaje natural con citas a la fuente.',
      'Lista de discrepancias entre disciplinas, priorizada.',
      'Tablero de RFIs y submittals con estado y vencimientos.',
      'Borradores de respuesta a RFIs (para revisión y firma).',
    ],
    workflow: [
      { title: 'Indexado', description: 'Procesa el set documental y lo vuelve consultable con trazabilidad a la fuente.' },
      { title: 'Cruce', description: 'Compara disciplinas y revisiones para hallar contradicciones.' },
      { title: 'Seguimiento', description: 'Ordena RFIs y submittals por estado, responsable y vencimiento.' },
      { title: 'Borrador', description: 'Prepara respuestas con las referencias citadas.' },
      { title: 'Revisión', description: 'El ingeniero valida, corrige y firma la respuesta final.' },
    ],
    integrations: ['PDF as-built', 'Procore', 'Autodesk', 'Correo', 'SharePoint'],
    metric: { value: '24/7', label: 'de disponibilidad para consultar el expediente técnico' },
  },
  {
    slug: 'cronos',
    code: 'CRN-01',
    name: 'Agente Cronos',
    discipline: 'Planeación y control de cronograma',
    icon: CalendarClock,
    tagline: 'Evita que un retraso en ruta crítica se propague y cueste dinero: concilia el programa con el avance real de campo.',
    summary:
      'Evita que un retraso en ruta crítica se propague y cueste dinero: compara el programa vigente contra el avance reportado, detecta desviaciones y propone re-secuencias —que tu planner aprueba— antes de que sea tarde.',
    intro:
      'Cronos trabaja sobre el cronograma que ya usas (Primavera P6, MS Project o Excel) y sobre los reportes de avance que tu equipo captura en campo. No “sabe” lo que pasa en obra por sí solo: lee los datos que le das —reportes diarios, porcentajes de avance, fechas reales de inicio y término— y los contrasta contra la línea base para señalar dónde el plan y la realidad empezaron a separarse.',
    capabilities: [
      'Importa cronogramas P6 (XER/XML) y MS Project (XML/MPP) sin reformatearlos.',
      'Recalcula la ruta crítica y la holgura al cargar avances reales.',
      'Detecta actividades que empezaron tarde, se alargaron o quedaron sin predecesor cumplido.',
      'Simula el impacto de un retraso puntual sobre la fecha de término del proyecto.',
      'Propone re-secuencias y ajustes de fase como sugerencia, con su justificación.',
      'Genera un resumen ejecutivo del estado del programa para la junta semanal.',
    ],
    limits: [
      'No modifica el cronograma oficial: toda re-programación queda como propuesta hasta que el planner la aprueba.',
      'Su lectura es tan buena como el avance que se le reporta; no sustituye la verificación en campo.',
      'No decide prioridades contractuales ni negocia con subcontratistas.',
      'No predice eventos externos (clima, permisos, entregas) que no estén en los datos.',
    ],
    inputs: [
      { label: 'Cronograma base', detail: 'P6 (XER/XML), MS Project (XML/MPP) o un Gantt en Excel.' },
      { label: 'Avance de campo', detail: 'Reportes diarios/semanales, % de avance por actividad, fechas reales.' },
      { label: 'Calendario del proyecto', detail: 'Jornadas, días no laborables y restricciones de fase.' },
    ],
    outputs: [
      'Tablero de estado del programa con alertas de ruta crítica.',
      'Lista priorizada de actividades en riesgo, con días de holgura restante.',
      'Propuestas de re-secuencia (para aprobación humana).',
      'Reporte ejecutivo semanal exportable.',
    ],
    workflow: [
      { title: 'Ingesta', description: 'Carga el cronograma vigente y aprende su estructura de fases y dependencias.' },
      { title: 'Conciliación', description: 'Cruza el avance reportado contra la línea base y recalcula la ruta crítica.' },
      { title: 'Detección', description: 'Señala desviaciones, holguras consumidas y actividades en riesgo.' },
      { title: 'Propuesta', description: 'Sugiere re-secuencias con su impacto estimado en la fecha de término.' },
      { title: 'Aprobación', description: 'El planner revisa, ajusta y autoriza; nada se aplica sin ese visto bueno.' },
    ],
    integrations: ['Primavera P6', 'MS Project', 'Excel', 'Procore', 'Correo / PDF'],
    metric: { value: '10×', label: 'más rápido para re-programar tras una desviación' },
  },
  {
    slug: 'cubic',
    code: 'CBC-02',
    name: 'Agente Cubic',
    discipline: 'Cuantificación de materiales y conciliación',
    icon: Boxes,
    tagline: 'Tapa la fuga de margen por desperdicio y sobrecosto de material: cuantifica desde el modelo BIM/IFC y lo concilia contra lo comprado e instalado.',
    summary:
      'Tapa la fuga de margen por desperdicio y sobrecosto de material: obtiene cantidades directamente del modelo BIM/IFC y las concilia contra órdenes de compra y avance real, señalando desviaciones antes de que escalen.',
    intro:
      'Cubic lee el modelo BIM (IFC) y los catálogos de conceptos para extraer volúmenes y cantidades, y los compara contra lo que se compró y lo que reporta la obra como instalado. Su precisión depende del nivel de desarrollo (LOD) del modelo: un modelo bien construido produce cuantificaciones confiables; uno incompleto produce estimaciones que el equipo debe validar. Cubic es explícito sobre esa confianza en cada partida.',
    capabilities: [
      'Extrae cantidades por partida desde modelos IFC (concreto, acero, muros, acabados).',
      'Concilia cantidades del modelo contra órdenes de compra y estimaciones.',
      'Marca desviaciones entre lo modelado, lo comprado y lo instalado, con su magnitud.',
      'Asigna un nivel de confianza a cada cuantificación según la calidad del modelo.',
      'Rastrea el desperdicio acumulado por partida a lo largo de la obra.',
    ],
    limits: [
      'No corrige el modelo BIM: reporta inconsistencias para que el equipo de diseño las resuelva.',
      'La exactitud está limitada por el LOD del modelo; en partidas de baja confianza pide validación humana.',
      'No emite órdenes de compra ni autoriza pagos por sí mismo.',
      'No reemplaza el levantamiento en sitio cuando el modelo no refleja cambios de obra.',
    ],
    inputs: [
      { label: 'Modelo BIM', detail: 'Archivos IFC (2x3 / 4) exportados desde Revit, Navisworks u otros.' },
      { label: 'Catálogo de conceptos', detail: 'Presupuesto o catálogo con partidas y unidades.' },
      { label: 'Compras y avance', detail: 'Órdenes de compra y reportes de material instalado.' },
    ],
    outputs: [
      'Cuantificación por partida con nivel de confianza.',
      'Reporte de conciliación modelo ↔ comprado ↔ instalado.',
      'Alertas de desviación de material con su costo estimado.',
      'Histórico de desperdicio por partida.',
    ],
    workflow: [
      { title: 'Lectura del modelo', description: 'Interpreta el IFC y mapea elementos a partidas del catálogo.' },
      { title: 'Extracción', description: 'Calcula volúmenes y cantidades, con un nivel de confianza por partida.' },
      { title: 'Conciliación', description: 'Cruza contra órdenes de compra y avance instalado reportado.' },
      { title: 'Alerta', description: 'Marca desviaciones significativas y estima su impacto en costo.' },
      { title: 'Validación', description: 'El equipo de costos confirma o descarta cada alerta antes de actuar.' },
    ],
    integrations: ['Revit', 'Navisworks', 'IFC / BIM', 'Excel', 'ERP de compras'],
    metric: { value: '85%', label: 'menos captura manual de cantidades' },
  },
  {
    slug: 'vero',
    code: 'VER-04',
    name: 'Agente Vero',
    discipline: 'Auditoría de estimaciones y control presupuestal',
    icon: Receipt,
    tagline: 'Frena sobrecobros y protege el presupuesto contratado: audita cada estimación contra contrato, precios unitarios y avance verificado.',
    summary:
      'Frena sobrecobros y protege el presupuesto contratado: revisa cada estimación contra el contrato, los precios unitarios y el avance físico verificado, y señala cobros anticipados o inconsistencias para que finanzas decida.',
    intro:
      'Vero revisa las estimaciones y valuaciones que entran a cobro: verifica que las cantidades correspondan al avance realmente reportado, que los precios unitarios respeten el contrato y que no haya conceptos duplicados o adelantados. No bloquea pagos ni acusa a nadie: entrega a control de costos un dictamen con cada hallazgo y su evidencia, para que la decisión —y la conversación con el contratista— la tenga una persona.',
    capabilities: [
      'Compara cantidades estimadas contra el avance físico verificado.',
      'Valida precios unitarios contra el contrato y sus aditivas.',
      'Detecta conceptos duplicados, adelantados o fuera de catálogo.',
      'Rastrea el acumulado por concepto contra el monto contratado.',
      'Documenta cada hallazgo con su evidencia y referencia contractual.',
    ],
    limits: [
      'No autoriza ni rechaza pagos: emite un dictamen; la aprobación es de control de costos.',
      'No sustituye la verificación física del avance en obra.',
      'Depende de que el contrato y el catálogo estén cargados y vigentes.',
      'No determina intención; reporta la inconsistencia, no la culpa.',
    ],
    inputs: [
      { label: 'Contrato y catálogo', detail: 'Precios unitarios, condiciones y convenios modificatorios.' },
      { label: 'Estimaciones', detail: 'Estimaciones/valuaciones presentadas a cobro (PDF/Excel).' },
      { label: 'Avance verificado', detail: 'Reportes de avance físico y, si existe, datos de Cubic.' },
    ],
    outputs: [
      'Dictamen por estimación con hallazgos y su evidencia.',
      'Alertas de cobro anticipado o precio fuera de contrato.',
      'Acumulado por concepto contra lo contratado.',
      'Bitácora auditable de cada revisión.',
    ],
    workflow: [
      { title: 'Carga', description: 'Registra contrato, catálogo y la estimación a revisar.' },
      { title: 'Verificación', description: 'Cruza cantidades y precios contra contrato y avance verificado.' },
      { title: 'Detección', description: 'Marca duplicados, adelantos y precios fuera de contrato.' },
      { title: 'Dictamen', description: 'Documenta cada hallazgo con evidencia y referencia.' },
      { title: 'Decisión', description: 'Control de costos aprueba, ajusta o devuelve la estimación.' },
    ],
    integrations: ['Excel', 'ERP financiero', 'Procore', 'PDF', 'Agente Cubic'],
    metric: { value: '−30%', label: 'de desvío presupuestal cuando se audita cada estimación' },
  },
];

export function getAgent(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}
