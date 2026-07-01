export const metadata = {
  title: "Contact Center Omnicanal y Service Desk Corporativo | Finanservy",
  description: "Soporte al cliente y mesas de ayuda TI especializadas Nivel 1 y 2 integrando nuestra suite de omnicanalidad Tech2Call en Ecuador.",
};

export default function ContactCenterCau() {
  return (
    <div className="py-16 md:py-24 space-y-20 bg-slate-50 grid-pattern relative">
      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
            Servicios Omnicanales de Relación B2B
          </div>
          <div className="tech-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
            TECH2CALL // CRM_REALTIME_SYNC // OMNICHANNEL
          </div>
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Contact Center y CAUs Operativos
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-3xl mx-auto font-light">
          Interconectamos sus procesos de negocio con sistemas de atención rápidos y ágiles para soporte de usuarios en tiempo real.
        </p>
      </section>

      {/* Secciones del Servicio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-primary">Solución Omnicanal Tech2Call</h2>
            <span className="tech-badge-primary">WHATSAPP_API // SMS_VOICE</span>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Centralizamos todas las interacciones de sus clientes y usuarios finales a través de múltiples canales unificados: **API de WhatsApp Business, chat web, correo electrónico, llamadas de voz y mensajería SMS**, todo consolidado sobre un único repositorio corporativo para asegurar consistencia en la experiencia de cliente (CX).
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-white p-6 border border-slate-200 rounded-sm tech-border hover-lift">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-slate-900 text-sm">Mesa de Ayuda (CAU) Nivel 1 y 2</h4>
                <span className="tech-badge-primary">SERVICE_DESK_L1_L2</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Soporte de primer y segundo nivel técnico. Tramitación inteligente de tickets de atención de incidencias, escalamiento y derivación automática de buzones compartidos corporativos.
              </p>
            </div>
            <div className="bg-white p-6 border border-slate-200 rounded-sm tech-border hover-lift">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-slate-900 text-sm">Integración CRM Enterprise</h4>
                <span className="tech-badge-primary">SALESFORCE // ODOO // HUBSPOT</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Conectividad y registro automático en tiempo real con las principales plataformas del mercado como **Salesforce, Odoo, HubSpot y Zendesk** para el control riguroso de cada interacción.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-sm space-y-6 tech-border shadow-sm">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h3 className="font-outfit font-bold text-xl text-slate-950">Solicitar un Diagnóstico</h3>
            <span className="tech-badge">TECH2CALL_DIAGNOSTIC</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Realizamos un análisis gratuito de sus flujos actuales de soporte técnico y de atención al usuario para identificar embotellamientos y oportunidades de automatización con Tech2Call.
          </p>
          <div className="pt-4 text-center">
            <a href="/contacto" className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-hover text-slate-950 font-bold rounded-sm text-xs tracking-wider uppercase transition-all hover-lift">
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
