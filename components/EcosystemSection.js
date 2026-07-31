import Link from "next/link";
import { Terminal, Cpu, Database, ChevronRight } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section className="bg-slate-900 text-white py-20 relative overflow-hidden grid-pattern-dark">
      {/* Sutil gradiente para sensación de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
            TECNOLOGÍA Y EFICIENCIA
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ecosistema de Inteligencia Operativa Enterprise
          </h2>
          <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Plataformas desarrolladas por el Grupo Cibernos que integran IA Generativa de última generación y automatización avanzada para transformar la eficiencia de su back office.
          </p>
        </div>

        {/* Grid de 2 Columnas: Plataformas Destacadas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card Izquierda: B360 */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-sm p-8 flex flex-col justify-between hover-lift relative group">
            {/* Indicador superior estilo consola */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#96C11F]" />
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                  PLATAFORMA B360
                </span>
              </div>
              <span className="h-2 w-2 rounded-full bg-[#96C11F] animate-pulse" />
            </div>

            <div className="space-y-6">
              <h3 className="font-outfit font-extrabold text-2xl text-white tracking-tight leading-tight group-hover:text-[#96C11F] transition-colors">
                De la digitación manual a la supervisión inteligente con IA
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Plataforma para el procesamiento masivo de cheques, letras y pagarés. Integra modelos avanzadas de IA Generativa para la lectura y extracción automática de datos en arquitectura Cloud Enterprise, reduciendo la intervención humana a la validación por excepción.
              </p>

              {/* Cajas de Métricas Destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                  <div className="text-2xl font-outfit font-extrabold text-[#96C11F]">
                    40%
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                    Menos Carga Operativa
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                  <div className="text-lg font-outfit font-extrabold text-white flex items-center gap-1">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    Cloud Active
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                    Escalabilidad Cloud en Paralelo
                  </div>
                </div>
              </div>
            </div>

            {/* Enlace de Conversión */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex justify-between items-center">
              <Link
                href="/servicios/gestion-documental"
                className="text-sm font-bold text-[#96C11F] hover:text-white hover:underline transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300"
              >
                Ver solución B360 en BPO Documental <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card Derecha: CONCILIA PRO */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-sm p-8 flex flex-col justify-between hover-lift relative group">
            {/* Indicador superior estilo consola */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                  CONCILIA PRO
                </span>
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            </div>

            <div className="space-y-6">
              <h3 className="font-outfit font-extrabold text-2xl text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                Inteligencia Operacional para Conciliaciones Masivas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Motor de cuadre financiero que automatiza la validación, normalización y matching de efectivo, valores y fondos, eliminando reprocesos y asegurando trazabilidad completa ante auditorías.
              </p>

              {/* Cajas de Métricas Destacadas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                  <div className="text-2xl font-outfit font-extrabold text-blue-400">
                    87%
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                    Menos Tiempo de Ciclo
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-850 p-4 rounded-sm flex items-center justify-center border-dashed border-slate-800">
                  <span className="text-[10px] text-slate-500 font-mono text-center">
                    SYS_MATCHING_ENGINE_OK
                  </span>
                </div>
              </div>
            </div>

            {/* Enlace de Conversión */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex justify-between items-center">
              <Link
                href="/servicios/gestion-documental"
                className="text-sm font-bold text-blue-400 hover:text-white hover:underline transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300"
              >
                Ver caso de conciliación <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
