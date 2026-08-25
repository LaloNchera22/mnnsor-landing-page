import {
  RevitIcon,
  AutoCADIcon,
  NavisworksIcon,
  PrimaveraIcon,
  MSProjectIcon,
  ProcoreIcon,
  ExcelIcon,
  PDFIcon,
  IFCIcon,
  BitacoraIcon
} from './icons/SoftwareIcons';

const tools = [
  { name: 'Autodesk Revit', icon: RevitIcon },
  { name: 'AutoCAD', icon: AutoCADIcon },
  { name: 'Navisworks', icon: NavisworksIcon },
  { name: 'Primavera P6', icon: PrimaveraIcon },
  { name: 'MS Project', icon: MSProjectIcon },
  { name: 'Procore', icon: ProcoreIcon },
  { name: 'Excel', icon: ExcelIcon },
  { name: 'PDF as-built', icon: PDFIcon },
  { name: 'IFC / BIM', icon: IFCIcon },
  { name: 'Bitácoras', icon: BitacoraIcon },
];

export default function TrustBar() {
  return (
    <section className="bg-paper py-10" aria-label="Integraciones">
      <p
        data-reveal
        className="mx-auto mb-7 max-w-7xl px-6 text-center label-mono text-muted-soft"
      >
        SE CONECTA CON EL STACK QUE YA USAS EN OBRA
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
