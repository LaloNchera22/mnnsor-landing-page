const tools = [
  'Autodesk Revit',
  'AutoCAD',
  'Navisworks',
  'Primavera P6',
  'MS Project',
  'Procore',
  'Excel',
  'PDF as-built',
  'IFC / BIM',
  'Bitácoras',
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
              className="whitespace-nowrap font-mono text-sm font-medium tracking-tight text-muted-soft transition-colors hover:text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
