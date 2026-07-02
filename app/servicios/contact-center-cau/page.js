import ServiceHero from "@/components/ServiceHero";

export const metadata = {
  title: "Contact Center Omnicanal y Service Desk Corporativo | Finanservy",
  description: "Soporte al cliente y mesas de ayuda TI especializadas Nivel 1 y 2 integrando nuestra suite de omnicanalidad Tech2Call en Ecuador.",
};

export default function ContactCenterCau() {
  return (
    <div className="space-y-20 bg-slate-50 pb-16 md:pb-24">
      {/* Cabecera */}
      <ServiceHero
        backgroundImage="/images/hero-contact-center-cau.jpg"
        tagCategory="Servicios Omnicanales de Relación B2B"
        tagConsole="SYS_CX_ACTIVE"
        title="Contact Center y CAUs Operativos"
        subtitle="Interconectamos sus procesos de negocio con sistemas de atención rápidos y ágiles para soporte de usuarios."
      />

      {/* Secciones del Servicio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-primary">Solución Omnicanal Tech2Call</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Centralizamos todas las interacciones de sus clientes y usuarios finales a través de múltiples canales unificados: **API de WhatsApp Business, chat web, correo electrónico, llamadas de voz y mensajería SMS**, todo consolidado sobre un único repositorio corporativo para asegurar consistencia en la experiencia de cliente (CX).
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-white p-6 border border-slate-200 rounded-sm">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Mesa de Ayuda (CAU) Nivel 1 y 2</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Soporte de primer y segundo nivel técnico. Tramitación inteligente de tickets de atención de incidencias, escalamiento y derivación automática de buzones compartidos corporativos.
              </p>
            </div>
            <div className="bg-white p-6 border border-slate-200 rounded-sm">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Integración CRM Enterprise</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Conectividad y registro automático en tiempo real con las principales plataformas del mercado como **Salesforce, Odoo, HubSpot y Zendesk** para el control riguroso de cada interacción.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-sm space-y-6">
          <h3 className="font-outfit font-bold text-xl text-slate-950">Solicitar un Diagnóstico del Canal</h3>
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
