export const metadata = {
  title: "Casos de Éxito en BPO | Finanservy Ecuador",
  description: "Conozca cómo optimizamos la eficiencia operativa del Banco Internacional de Ecuador y las principales entidades financieras globales.",
};

const globalCases = [
  {
    institution: "BBVA",
    detail: "Gestión delegada del procesamiento de impuestos locales e integración automatizada en el core transaccional corporativo.",
  },
  {
    institution: "Santander",
    detail: "Auditoría, control y prevención de blanqueo de capitales y financiación del terrorismo (PBC/FT) en operaciones complejas.",
  },
  {
    institution: "MAPFRE",
    detail: "Flujo automatizado de emisión y distribución de correspondencia digital multicanal parametrizada.",
  },
  {
    institution: "Adeslas",
    detail: "Procesamiento y control de fraudes en volantes médicos y auditorías masivas de solicitudes de reembolso de salud.",
  },
];

export default function CasosExito() {
  return (
    <div className="py-16 md:py-24 space-y-20 bg-slate-50">
      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
          Credenciales y Casos Prácticos
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Nuestras Referencias de Éxito
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
          Casos prácticos de optimización financiera y de procesos en la banca, seguros y real estate.
        </p>
      </section>

      {/* Caso Local Prominente */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-sm">Referencia Local Principal</span>
              <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-primary mt-2">Banco Internacional de Ecuador</h2>
            </div>
            <span className="text-sm font-mono text-slate-400">SECTOR FINANCIERO / ECUADOR</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Proyecto de Externalización Integral</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Asumimos la gestión de la cartera de efectos físicos y digitales, automatizando los flujos de clasificación, lectura OCR inteligente de cheques, videocompletado y validación de firmas.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                La solución se opera bajo estrictos Acuerdos de Niveles de Servicio (SLAs) que garantizan que el procesamiento concluya en tiempo para el cierre de compensación diaria de la Cámara de Compensación.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 space-y-4">
              <h4 className="font-bold text-slate-800 text-sm">Resultados Obtenidos:</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2">✓ <strong>Control estricto de fraudes:</strong> Disminución drástica de errores operativos y falsificaciones.</li>
                <li className="flex gap-2">✓ <strong>Resiliencia operativa:</strong> Capacidad para absorber incrementos transaccionales del 100% en fechas de corte.</li>
                <li className="flex gap-2">✓ <strong>Cumplimiento de SLAs:</strong> 100% de los envíos de compensación procesados en tiempo reglamentario.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referencias Globales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-outfit font-bold text-2xl text-slate-900 mb-8 text-center">Referencias Globales de Grupo Cibernos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {globalCases.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-sm space-y-3 hover-lift">
              <div className="flex justify-between items-center">
                <h4 className="font-outfit font-bold text-lg text-slate-900">{item.institution}</h4>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Cumplimiento BPO</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
