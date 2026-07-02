import ServiceHero from "@/components/ServiceHero";

export const metadata = {
  title: "BPO Gestión Documental y CONCILIA PRO | Finanservy",
  description: "Tratamiento automatizado de cheques, OCR bancario y conciliación financiera en tiempo real con la suite CONCILIA PRO en Ecuador.",
};

export default function GestionDocumental() {
  return (
    <div className="space-y-20 bg-slate-50 pb-16 md:pb-24">
      {/* Cabecera */}
      <ServiceHero
        backgroundImage="/images/hero-gestion-documental.jpg"
        tagCategory="Servicio Core Bancario"
        tagConsole="SYS_OCR_ACTIVE"
        title="Gestión Documental y Conciliación Bancaria"
        subtitle="Capturamos y procesamos altos volúmenes de datos bancarios con OCR avanzado, integrando conciliaciones financieras de precisión."
      />

      {/* Portafolio Especializado */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-outfit font-bold text-2xl text-slate-950 mb-10 text-center">Portafolio para el Sector de Banca y Seguros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 rounded-sm">
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Tratamiento de Cheques</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Validación física y digital de documentos valorados, procesamiento masivo para Cámara de Compensación y conciliación de cheques devueltos en tiempo récord.
            </p>
          </div>
          <div className="bg-white p-8 border border-slate-200 rounded-sm">
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Cartera de Efectos</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Digitalización, clasificación automática y captura OCR de pagarés, letras de cambio y facturas comerciales. Verificación por imagen y videocompletado seguro.
            </p>
          </div>
          <div className="bg-white p-8 border border-slate-200 rounded-sm">
            <h3 className="font-outfit font-bold text-lg text-primary mb-3">Excepciones Financieras</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Detección de impagos, gestión de devoluciones de cartera, resolución de reclamos complejos y contabilización automatizada en el Core bancario.
            </p>
          </div>
        </div>
      </section>

      {/* CONCILIA PRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white p-8 md:p-16 rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 to-slate-900" />
        <div className="relative space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-sm">
                Lanzamiento Destacado
              </div>
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white">CONCILIA PRO</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestra plataforma de Inteligencia Operacional para Conciliaciones Enterprise resuelve de raíz el caos de archivos dispersos (Excel, CSV, PDF), las validaciones manuales propensas a errores y la falta de trazabilidad regulatoria.
              </p>
              <div className="bg-slate-950/50 p-6 rounded-sm border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-sm">El Impacto en Cifras:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-extrabold text-accent">87%</div>
                    <div className="text-[10px] text-slate-400 uppercase">Menos Tiempo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-accent">End-to-End</div>
                    <div className="text-[10px] text-slate-400 uppercase">Automatización</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-accent">0 Errores</div>
                    <div className="text-[10px] text-slate-400 uppercase">De Conciliación</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-outfit font-bold text-lg text-white">Las 6 Etapas de la Solución Integrada:</h3>
              <ol className="space-y-3 text-xs text-slate-300">
                <li className="flex gap-3"><span className="text-accent font-bold">1.</span> <strong>Validación de Datos:</strong> Aseguramiento de integridad de múltiples fuentes.</li>
                <li className="flex gap-3"><span className="text-accent font-bold">2.</span> <strong>Normalización de Datos:</strong> Estandarización de formatos (XML, CSV, JSON, TXT).</li>
                <li className="flex gap-3"><span className="text-accent font-bold">3.</span> <strong>Depuración de Datos:</strong> Limpieza automatizada de la información estructurada.</li>
                <li className="flex gap-3"><span className="text-accent font-bold">4.</span> <strong>Conciliación Automática:</strong> Algoritmos avanzados de cruce para matching inteligente.</li>
                <li className="flex gap-3"><span className="text-accent font-bold">5.</span> <strong>Detección de Diferencias:</strong> Identificación, priorización y asignación automática.</li>
                <li className="flex gap-3"><span className="text-accent font-bold">6.</span> <strong>Auditoría y Reportes:</strong> Generación en tiempo real de bitácoras para cumplimiento normativo.</li>
              </ol>
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
