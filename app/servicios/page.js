export const metadata = {
  title: "Servicios BPO | Soluciones de Externalización en Ecuador",
  description: "Explore nuestro portafolio de servicios BPO de Gestión Documental, Procesos Administrativos, CAUs Operativos y Cumplimiento de Proveedores.",
};

const serviceCards = [
  {
    num: "01",
    title: "Gestión Documental & CONCILIA PRO",
    desc: "Procesamiento integral de cheques para Cámara de Compensación, clasificación inteligente, captura de datos OCR y reconciliaciones bancarias automatizadas.",
    link: "/servicios/gestion-documental",
    badge: "Servicio Core Bancario",
    tech: "OCR_ENGINE // CONCILIA_PRO",
  },
  {
    num: "02",
    title: "Procesos Administrativos y Financieros",
    desc: "Back office administrativo completo, automatización de cuentas por pagar, validaciones fiscales del SRI, contabilidad general y control presupuestario.",
    link: "/servicios/procesos-administrativos",
    badge: "CFO Solutions",
    tech: "RPA_WORKFLOW // SRI_AUTO",
  },
  {
    num: "03",
    title: "Contact Center y CAUs Operativos",
    desc: "Mesas de ayuda TI (Niveles 1 y 2), soporte omnicanal Tech2Call (WhatsApp API, web chat, voz) y sincronización nativa en tiempo real con CRM Enterprise.",
    link: "/servicios/contact-center-cau",
    badge: "Atención Omnicanal",
    tech: "OMNICHANNEL_API // TECH2CALL",
  },
  {
    num: "04",
    title: "Gestión de Proveedores y Compliance",
    desc: "Homologación técnica y fiscal de redes de proveedores mediante la plataforma GessDATA. Coordinación de riesgos laborales y canal ético corporativo.",
    link: "/servicios/gestion-proveedores",
    badge: "Risk & Compliance",
    tech: "GESSDATA_SUITE // COMPLIANCE_AI",
  },
];

export default function Servicios() {
  return (
    <div className="py-16 md:py-24 space-y-16 bg-slate-50 grid-pattern relative">
      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
            Portafolio de Soluciones BPO
          </div>
          <div className="tech-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
            BPO_CORE_PROCESSORS // POWERED_BY_AI
          </div>
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Nuestros Servicios Operativos
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
          Alineamos software corporativo de vanguardia y equipos especializados para procesar altos volúmenes transaccionales con total cumplimiento de SLA.
        </p>
      </section>

      {/* Grilla de Servicios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 md:p-10 rounded-sm hover-lift flex flex-col justify-between tech-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-mono text-3xl font-light">{card.num}</span>
                  <div className="flex items-center gap-2">
                    <span className="tech-badge-primary">
                      {card.tech}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-sm">
                      {card.badge}
                    </span>
                  </div>
                </div>
                <h3 className="font-outfit font-bold text-2xl text-slate-900">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-6 flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-mono font-bold">[ ID: BPO_SVC_0{idx + 1} ]</span>
                <a href={card.link} className="inline-block px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-sm text-xs font-bold uppercase tracking-wider transition-all hover-lift">
                  Ingresar al Servicio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado a la Acción General */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pt-12 relative z-10">
        <h3 className="font-outfit font-bold text-2xl text-slate-800">¿Requiere una solución adaptada a su sector?</h3>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          Diseñamos flujos de trabajo específicos para banca, seguros, retail y telecomunicaciones bajo estrictos acuerdos de niveles de servicio (SLA).
        </p>
        <div className="pt-4">
          <a href="/contacto" className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-hover text-slate-950 font-bold rounded-sm text-sm tracking-wide uppercase transition-all hover-lift">
            Solicitar Consultoría de Procesos
          </a>
        </div>
      </section>
    </div>
  );
}
