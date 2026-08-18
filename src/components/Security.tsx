import { ShieldCheck, Lock, Check } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-24 bg-brand-light border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gray/30 rounded-3xl border border-brand-border p-8 md:p-16 text-center">
          <div className="w-16 h-16 bg-white border border-brand-border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-brand-green" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-text-main mb-6">
            Seguridad de grado <span className="italic text-brand-green">empresarial</span>
          </h2>

          <p className="text-text-muted max-w-2xl mx-auto mb-12">
            La información de tus proyectos es tu activo más valioso. Mnnsor está construido desde sus cimientos con estrictos protocolos de seguridad para asegurar que tus datos, presupuestos y planos as-built permanezcan protegidos en todo momento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-white p-6 rounded-xl border border-brand-border">
              <Lock className="w-5 h-5 text-text-main mb-4" />
              <div className="font-semibold text-text-main mb-2">SOC 2 Tipo II</div>
              <div className="text-sm text-text-muted">Infraestructura y seguridad operativa auditadas de manera independiente.</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-border">
              <Check className="w-5 h-5 text-text-main mb-4" />
              <div className="font-semibold text-text-main mb-2">Encriptación de Datos</div>
              <div className="text-sm text-text-muted">Encriptación AES-256 en reposo y TLS 1.3 para todos los datos en tránsito.</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-border">
              <ShieldCheck className="w-5 h-5 text-text-main mb-4" />
              <div className="font-semibold text-text-main mb-2">Cero Retención de Datos</div>
              <div className="text-sm text-text-muted">Los LLMs no entrenan con tus datos de proyecto. La información confidencial se anonimiza automáticamente.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
