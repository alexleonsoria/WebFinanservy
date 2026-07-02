import ServiceHero from "@/components/ServiceHero";

export const metadata = {
  title: "Gestión de Proveedores y Compliance Corporativo | GessDATA",
  description: "Audite y homologue a sus proveedores externos reduciendo riesgos de subcontratación con la suite GessDATA y GessCAE en Ecuador.",
};

export default function GestionProveedores() {
  return (
    <div className="space-y-20 bg-slate-50 pb-16 md:pb-24">
      {/* Cabecera */}
      <ServiceHero
        backgroundImage="/images/hero-gestion-proveedores.jpg"
        tagCategory="Servicios de Mitigación de Riesgos y Compliance"
        tagConsole="SYS_COMPLIANCE_ACTIVE"
        title="Gestión de Proveedores y Compliance"
        subtitle="Mitigamos los riesgos legales, reputacionales y operativos derivados de la contratación de redes extensas de terceros."
      />

      {/* Secciones de GessDATA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4">
            <h3 className="font-outfit font-bold text-xl text-primary">Homologación GessDATA</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Plataforma centralizada orientada al estricto cumplimiento normativo de subcontratistas. Control de contratos marco, pólizas de seguros vigentes, documentación del SRI y estado de cumplimiento legal local.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4">
            <h3 className="font-outfit font-bold text-xl text-primary">Riesgos Laborales GessCAE</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automatización de la entrega y validación de documentación exigida para la coordinación de actividades empresariales (CAE) en las instalaciones físicas del cliente corporativo.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4">
            <h3 className="font-outfit font-bold text-xl text-primary">Canal Ético y de Denuncias</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Despliegue y administración de buzones de denuncias independientes alineados con las normativas locales e internacionales de gobierno corporativo y anti-soborno.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Sección */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-sm space-y-6">
          <h3 className="font-outfit font-bold text-2xl">¿Quiere evaluar el riesgo de su cadena de proveedores?</h3>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Suscríbase hoy para recibir un análisis básico de cumplimiento y vulnerabilidades en la cadena de subcontratación de su organización.
          </p>
          <div className="pt-2">
            <a href="/contacto" className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-hover text-slate-950 font-bold rounded-sm text-xs tracking-wider uppercase transition-all hover-lift">
              Solicitar Análisis de Cumplimiento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
