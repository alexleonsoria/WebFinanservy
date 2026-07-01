export const metadata = {
  title: "BPO Gestión Documental y CONCILIA PRO | Finanservy",
  description: "Tratamiento automatizado de cheques, OCR bancario y conciliación financiera en tiempo real con la suite CONCILIA PRO en Ecuador.",
};

export default function GestionDocumental() {
  return (
    <div className="py-16 md:py-24 space-y-20 bg-slate-50 grid-pattern relative">
      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
            Servicio Core Bancario (SEO/SEM)
          </div>
          <div className="tech-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
            AI_OCR // CONCILIA_PRO_V3 // COMPLIANT
          </div>
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Gestión Documental y Conciliación Bancaria
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-3xl mx-auto font-light">
          Capturamos y procesamos altos volúmenes de datos bancarios con OCR avanzado, integrando conciliaciones financieras de precisión.
        </p>
      </section>

      {/* Portafolio Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-outfit font-bold text-2xl text-slate-950 mb-10 text-center">Portafolio para el Sector de Banca y Seguros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 rounded-sm tech-border hover-lift">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">[ MODULE: CHECK_OCR_PROCESSOR ]</span>
              <span className="h-2 w-2 rounded-full bg-accent status-dot-active" />
            </div>
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Tratamiento de Cheques</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Validación física y digital de documentos valorados, procesamiento masivo para Cámara de Compensación y conciliación de cheques devueltos en tiempo récord.
            </p>
          </div>
          <div className="bg-white p-8 border border-slate-200 rounded-sm tech-border hover-lift">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">[ MODULE: PROMISSORY_NOTE_READER ]</span>
              <span className="h-2 w-2 rounded-full bg-accent status-dot-active" />
            </div>
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Cartera de Efectos</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Digitalización, clasificación automática y captura OCR de pagarés, letras de cambio y facturas comerciales. Verificación por imagen y videocompletado seguro.
            </p>
          </div>
          <div className="bg-white p-8 border border-slate-200 rounded-sm tech-border hover-lift">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono font-bold text-slate-400">[ MODULE: DEVIATION_MANAGER ]</span>
              <span className="h-2 w-2 rounded-full bg-accent status-dot-active" />
            </div>
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Excepciones Financieras</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Detección de impagos, gestión de devoluciones de cartera, resolución de reclamos complejos y contabilización automatizada en el Core bancario.
            </p>
          </div>
        </div>
      </section>

      {/* CONCILIA PRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white p-8 md:p-16 rounded-sm relative overflow-hidden grid-pattern-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-slate-900 z-0" />
        <div className="relative space-y-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-sm">
                  Lanzamiento Destacado
                </div>
                <div className="tech-badge">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
                  POWERED_BY_AI
                </div>
              </div>
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">CONCILIA PRO</h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Nuestra plataforma de Inteligencia Operacional para Conciliaciones Enterprise resuelve de raíz el caos de archivos dispersos (Excel, CSV, PDF), las validaciones manuales propensas a errores y la falta de trazabilidad regulatoria.
              </p>
              <div className="bg-slate-950/50 p-6 rounded-sm border border-slate-800 space-y-4 tech-border-dark">
                <h4 className="font-bold text-white text-sm">El Impacto en Cifras:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-extrabold text-accent">87%</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Menos Tiempo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-accent">End-to-End</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Automatización</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-accent">0 Errores</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">De Conciliación</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-outfit font-bold text-lg text-white mb-6">Las 6 Etapas de la Solución Integrada:</h3>
              <div className="relative border-l border-slate-700 pl-6 space-y-6">
                {/* Stage 1 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-accent status-dot-active" />
                  <span className="font-mono text-[9px] text-[#96C11F] block">[ STAGE_01 // INGESTION ]</span>
                  <strong className="text-white text-sm">Validación de Datos:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Aseguramiento de integridad de múltiples fuentes.</p>
                </div>
                {/* Stage 2 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[#074875]" />
                  <span className="font-mono text-[9px] text-slate-400 block">[ STAGE_02 // PARSING ]</span>
                  <strong className="text-white text-sm">Normalización de Datos:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Estandarización de formatos (XML, CSV, JSON, TXT).</p>
                </div>
                {/* Stage 3 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[#074875]" />
                  <span className="font-mono text-[9px] text-slate-400 block">[ STAGE_03 // FILTERING ]</span>
                  <strong className="text-white text-sm">Depuración de Datos:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Limpieza automatizada de la información estructurada.</p>
                </div>
                {/* Stage 4 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-accent status-dot-active" />
                  <span className="font-mono text-[9px] text-[#96C11F] block">[ STAGE_04 // MATCHING ]</span>
                  <strong className="text-white text-sm">Conciliación Automática:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Algoritmos avanzados de cruce para matching inteligente.</p>
                </div>
                {/* Stage 5 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-[#074875]" />
                  <span className="font-mono text-[9px] text-slate-400 block">[ STAGE_05 // EXCEPTIONS ]</span>
                  <strong className="text-white text-sm">Detección de Diferencias:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Identificación, priorización y asignación automática.</p>
                </div>
                {/* Stage 6 */}
                <div className="relative">
                  <span className="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full bg-accent status-dot-active" />
                  <span className="font-mono text-[9px] text-[#96C11F] block">[ STAGE_06 // AUDITING ]</span>
                  <strong className="text-white text-sm">Auditoría y Reportes:</strong>
                  <p className="text-xs text-slate-400 mt-0.5">Generación en tiempo real de bitácoras para cumplimiento normativo.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-800">
            <a href="/contacto" className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-hover text-slate-950 font-bold rounded-sm text-xs tracking-wider uppercase transition-all hover-lift">
              Solicitar Demostración de CONCILIA PRO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
