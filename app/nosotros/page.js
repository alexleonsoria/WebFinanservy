export const metadata = {
  title: "Nosotros | Grupo Cibernos y Finanservy",
  description: "Más de 50 años de trayectoria garantizando la continuidad de negocio y seguridad de la información mediante certificaciones auditadas.",
};

export default function Nosotros() {
  return (
    <div className="py-16 md:py-24 space-y-20 bg-slate-50 grid-pattern relative">
      {/* Hero Sección */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
            Respaldo y Solidez Institucional
          </div>
          <div className="tech-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
            CIBERNOS_GLOBAL_GOVERNANCE // 50_YEARS
          </div>
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Más de 50 Años de Trayectoria y Respaldo Global
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
          Validamos la solidez de su operación frente a comités de compras y auditoría gracias a nuestra gobernanza y certificaciones internacionales.
        </p>
      </section>

      {/* Historia y Trayectoria */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center tech-border">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-primary">Nuestra Trayectoria</h2>
              <span className="tech-badge-primary">EST. 1966</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Desde la constitución del grupo en 1966, hemos evolucionado continuamente para adaptarnos a las necesidades tecnológicas y operativas de nuestros clientes. Como filial del Grupo Cibernos en Ecuador, replicamos la rigurosidad, capacidad de gestión y metodologías consolidadas durante más de cinco décadas.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Nuestra misión en el mercado ecuatoriano es ser el socio definitivo en la externalización de procesos complejos (BPO), garantizando la continuidad operativa y la optimización financiera de bancos, aseguradoras y grandes corporaciones.
            </p>
          </div>
          <div className="relative border-l-2 border-dashed border-primary/25 pl-8 py-2 space-y-8">
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-white flex items-center justify-center" />
              <div className="font-outfit font-extrabold text-lg text-primary flex items-center gap-2">
                1966
                <span className="tech-badge-primary font-normal text-[8px] py-0.5 px-1">FOUNDATION</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Constitución del Grupo Cibernos en España, iniciando servicios de consultoría tecnológica.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-accent border-4 border-white flex items-center justify-center status-dot-active" />
              <div className="font-outfit font-extrabold text-lg text-primary flex items-center gap-2">
                Años 90 - 2000
                <span className="tech-badge-primary font-normal text-[8px] py-0.5 px-1">EXPANSION</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Expansión del portafolio hacia soluciones de BPO y desarrollo de herramientas de software propietarias.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-accent border-4 border-white flex items-center justify-center status-dot-active" />
              <div className="font-outfit font-extrabold text-lg text-primary flex items-center gap-2">
                Presente
                <span className="tech-badge-primary font-normal text-[8px] py-0.5 px-1">LATAM_CORE</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Presencia consolidada en 7 países, incluyendo Ecuador con especialización en BPO Bancario y de Seguros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores del Modelo BPO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-outfit font-extrabold text-3xl text-primary">Ventajas de Nuestro Modelo BPO</h2>
          <p className="text-slate-500">¿Por qué las organizaciones líderes externalizan sus procesos con Finanservy?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover-lift tech-border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-outfit font-bold text-lg text-slate-900">Costes Fijos a Variables</h3>
              <span className="tech-badge-primary">CAPEX_TO_OPEX</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Transformamos la estructura de costes operativos de su organización. Pague únicamente por transacción o volumen procesado, reduciendo cargas administrativas fijas.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover-lift tech-border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-outfit font-bold text-lg text-slate-900">Reducción de Inversión</h3>
              <span className="tech-badge-primary">TECH_INFRA</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Evite cuantiosas inversiones en tecnología de digitalización, software de conciliación e infraestructura física. Nosotros aportamos el ecosistema completo.
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover-lift tech-border">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-outfit font-bold text-lg text-slate-900">Escalabilidad</h3>
              <span className="tech-badge-primary">ON_DEMAND</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Absorbemos picos transaccionales complejos sin comprometer los tiempos de respuesta o la calidad, respaldados por personal altamente capacitado.
            </p>
          </div>
        </div>
      </section>

      {/* Certificaciones de Calidad */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-sm space-y-12 tech-border">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl text-primary">Garantías de Cumplimiento Técnico</h2>
            <div className="flex justify-center">
              <div className="tech-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
                AUDITED_COMPLIANCE_ECUADOR
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-5 border border-slate-100 rounded-sm hover:border-primary/20 transition-all bg-slate-50/50">
              <div className="text-primary text-2xl font-bold font-mono">ISO 9001</div>
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Gestión de Calidad</h4>
                  <span className="tech-badge font-normal text-[8px] py-0.5 px-1 bg-accent/10 border-accent/20">AUDITED_OK</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Aseguramiento riguroso de la calidad en cada una de las fases de los procesos operativos externalizados.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 border border-slate-100 rounded-sm hover:border-primary/20 transition-all bg-slate-50/50">
              <div className="text-primary text-2xl font-bold font-mono">ISO 27001</div>
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Seguridad de la Información</h4>
                  <span className="tech-badge font-normal text-[8px] py-0.5 px-1 bg-accent/10 border-accent/20">AUDITED_OK</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Protección estricta de la información confidencial de clientes, datos transaccionales y archivos bancarios.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 border border-slate-100 rounded-sm hover:border-primary/20 transition-all bg-slate-50/50">
              <div className="text-primary text-2xl font-bold font-mono">ISO 22301</div>
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Continuidad de Negocio</h4>
                  <span className="tech-badge font-normal text-[8px] py-0.5 px-1 bg-accent/10 border-accent/20">AUDITED_OK</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Estrategias y planes de contingencia auditados para proteger y recuperar operaciones críticas ante incidentes.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 border border-slate-100 rounded-sm hover:border-primary/20 transition-all bg-slate-50/50">
              <div className="text-primary text-2xl font-bold font-mono">ISO 20000</div>
              <div className="space-y-1 flex-grow">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">Servicios de TI y Back Office</h4>
                  <span className="tech-badge font-normal text-[8px] py-0.5 px-1 bg-accent/10 border-accent/20">AUDITED_OK</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Excelencia y estándares de primer nivel en la gestión de servicios de tecnología y soporte administrativo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
