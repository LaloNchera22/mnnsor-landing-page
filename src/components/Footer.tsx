export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-green rounded-md flex items-center justify-center">
                <span className="text-white font-serif italic text-xl leading-none">m</span>
              </div>
              <span className="font-semibold text-xl tracking-tight text-text-main">mnnsor</span>
            </div>
            <p className="text-text-muted text-sm max-w-xs">
              La primera plataforma de agentes de IA construida específicamente para las complejidades y los flujos de trabajo de la industria de la construcción.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Plataforma</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#agentes" className="hover:text-brand-green transition-colors">Agentes</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Precios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Compañía</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li><a href="#" className="hover:text-brand-green transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-border text-sm text-text-muted gap-4">
          <div>&copy; {new Date().getFullYear()} mnnsor artisan. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-main transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-text-main transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
