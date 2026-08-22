import { PencilRuler, Box, Layers, Clock, Briefcase, FileCheck2, Table2, FileText, Building2, ClipboardList } from 'lucide-react';

const tools = [
  { name: 'Autodesk Revit', icon: PencilRuler },
  { name: 'AutoCAD', icon: Box },
  { name: 'Navisworks', icon: Layers },
  { name: 'Primavera P6', icon: Clock },
  { name: 'MS Project', icon: Briefcase },
  { name: 'Procore', icon: FileCheck2 },
  { name: 'Excel', icon: Table2 },
  { name: 'PDF as-built', icon: FileText },
  { name: 'IFC / BIM', icon: Building2 },
  { name: 'Bitácoras', icon: ClipboardList },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-paper py-10" aria-label="Integraciones">
      <p
        data-reveal
        className="mx-auto mb-7 max-w-7xl px-6 text-center label-mono text-muted-soft"
      >
        Se conecta con el stack que ya usas en obra
      </p>
      <div className="marquee-mask relative overflow-hidden" data-reveal>
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={i}
              aria-hidden={i >= tools.length}
              className="flex items-center gap-2 whitespace-nowrap font-mono text-sm font-medium tracking-tight text-muted-soft transition-colors hover:text-ink group"
            >
              <tool.icon className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              {tool.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
