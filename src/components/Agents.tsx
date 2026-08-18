;
import { Clock, Box, FileText, Scale, Users, DollarSign, ArrowUpRight } from 'lucide-react';

const agents = [
  {
    id: "A-01",
    name: "Agente Cronos",
    area: "Planificación",
    description: "Sincronización automática de diagramas Gantt y detección proactiva de cuellos de botella en la ruta crítica.",
    icon: Clock
  },
  {
    id: "A-02",
    name: "Agente Cubic",
    area: "Materiales",
    description: "Extracción precisa de cantidades desde archivos BIM y gestión automatizada de órdenes de compra con proveedores.",
    icon: Box
  },
  {
    id: "A-03",
    name: "Agente Bitácora",
    area: "Seguimiento",
    description: "Procesamiento de voz a texto en campo y generación de reportes diarios con validación visual por IA.",
    icon: FileText
  },
  {
    id: "A-04",
    name: "Agente Norma",
    area: "Legal",
    description: "Auditoría constante de cumplimiento de seguridad en el sitio y normativa técnica local vigente.",
    icon: Scale
  },
  {
    id: "A-05",
    name: "Agente Nexo",
    area: "Cuadrillas",
    description: "Coordinación de subcontratas y personal propio, con balance dinámico de mano de obra según el avance real.",
    icon: Users
  },
  {
    id: "A-06",
    name: "Agente Erario",
    area: "Costos",
    description: "Conciliación de estimaciones contra presupuesto base y alertas tempranas de desviación por partida.",
    icon: DollarSign
  }
];

const Agents = () => {
  return (
    <section id="agentes" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Índice de Agentes</h2>
            <p className="text-foreground/60 text-lg">Unidades activas en despliegue</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono text-foreground/80">VER. 0.8.2</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-foreground/40">{agent.id}</span>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <agent.icon className="w-5 h-5" />
                  </div>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/50 px-3 py-1 rounded-full border border-white/10">
                  {agent.area}
                </span>
              </div>

              <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{agent.name}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                {agent.description}
              </p>

              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <span className="text-xs font-mono text-foreground/40">SPEC</span>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
