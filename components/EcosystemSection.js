"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Cpu, Database, ChevronRight } from "lucide-react";

export default function EcosystemSection() {
  const [b360Hover, setB360Hover] = useState(false);
  const [b360Click, setB360Click] = useState(false);

  const [conciliaHover, setConciliaHover] = useState(false);
  const [conciliaClick, setConciliaClick] = useState(false);

  const isB360Expanded = b360Hover || b360Click;
  const isConciliaExpanded = conciliaHover || conciliaClick;

  const handleB360Click = (e) => {
    if (e.target.closest("a")) return;
    setB360Click(!b360Click);
    setConciliaClick(false);
  };

  const handleConciliaClick = (e) => {
    if (e.target.closest("a")) return;
    setConciliaClick(!conciliaClick);
    setB360Click(false);
  };

  const handleB360MouseEnter = () => setB360Hover(true);
  const handleB360MouseLeave = () => {
    setB360Hover(false);
    setB360Click(false);
  };

  const handleConciliaMouseEnter = () => setConciliaHover(true);
  const handleConciliaMouseLeave = () => {
    setConciliaHover(false);
    setConciliaClick(false);
  };

  return (
    <section className="bg-slate-900 text-white py-20 relative overflow-hidden grid-pattern-dark">
      {/* Sutil gradiente para sensación de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
            TECNOLOGÍA APLICADA AL NEGOCIO
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Una solución para cada proceso crítico de su operación.
          </h2>
          <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Cada solución responde a un desafío específico del sector financiero, ayudando a reducir tiempos operativos, minimizar errores y aumentar la trazabilidad.
          </p>
        </div>

        {/* Grid de 2 Columnas: Plataformas Destacadas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                {/* Card Izquierda: B360 */}
          <div
            onClick={handleB360Click}
            onMouseEnter={handleB360MouseEnter}
            onMouseLeave={handleB360MouseLeave}
            className={`bg-slate-950/60 border rounded-sm p-8 flex flex-col justify-between relative group cursor-pointer transition-all duration-300 ease-in-out ${
              isB360Expanded
                ? "border-[#96C11F]/50 -translate-y-1.5 shadow-[0_12px_30px_-10px_rgba(7,72,117,0.3)] bg-slate-950/80"
                : "border-slate-800 translate-y-0 shadow-none"
            }`}
          >
            {/* Indicador superior estilo consola */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#96C11F]" />
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                  PLATAFORMA B360
                </span>
              </div>
              <span className={`h-2 w-2 rounded-full bg-[#96C11F] ${isB360Expanded ? "scale-110" : ""} animate-pulse transition-transform duration-300`} />
            </div>

            <div className="space-y-6">
              <h3 className={`font-outfit font-extrabold text-2xl text-white tracking-tight leading-tight transition-colors duration-300 ${
                isB360Expanded ? "text-[#96C11F]" : "group-hover:text-[#96C11F]"
              }`}>
                Automatización documental inteligente
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Automatice el procesamiento de cheques, letras y documentos financieros mediante IA y validación por excepción, reduciendo la digitación manual y acelerando la operación.
              </p>

              {/* Wrapper para métricas y sección adicional */}
              <div>
                {/* Cajas de Métricas Destacadas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                    <div className="text-2xl font-outfit font-extrabold text-[#96C11F]">
                      Hasta 40%
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                      menos carga operativa
                    </div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                    <div className="text-lg font-outfit font-extrabold text-white flex items-center gap-1">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      Cloud Active
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                      Arquitectura cloud preparada para crecer con su operación.
                    </div>
                  </div>
                </div>

                {/* Sección adicional en hover (Ideal para) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isB360Expanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-extrabold mb-2.5">
                      Ideal para:
                    </div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#96C11F] shrink-0" />
                        <span>Procesamiento de cheques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#96C11F] shrink-0" />
                        <span>Letras y pagarés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#96C11F] shrink-0" />
                        <span>Gestión documental bancaria</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlace de Conversión */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex justify-between items-center">
              <Link
                href="/servicios/gestion-documental"
                className={`text-sm font-bold text-[#96C11F] hover:text-white hover:underline transition-all duration-300 flex items-center gap-1 ${
                  isB360Expanded ? "translate-x-1" : "group-hover:translate-x-1"
                }`}
              >
                Conocer solución <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card Derecha: CONCILIA PRO */}
          <div
            onClick={handleConciliaClick}
            onMouseEnter={handleConciliaMouseEnter}
            onMouseLeave={handleConciliaMouseLeave}
            className={`bg-slate-950/60 border rounded-sm p-8 flex flex-col justify-between relative group cursor-pointer transition-all duration-300 ease-in-out ${
              isConciliaExpanded
                ? "border-blue-400/50 -translate-y-1.5 shadow-[0_12px_30px_-10px_rgba(7,72,117,0.3)] bg-slate-950/80"
                : "border-slate-800 translate-y-0 shadow-none"
            }`}
          >
            {/* Indicador superior estilo consola */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider">
                  PLATAFORMA CONCILIA PRO
                </span>
              </div>
              <span className={`h-2 w-2 rounded-full bg-blue-400 ${isConciliaExpanded ? "scale-110" : ""} animate-pulse transition-transform duration-300`} />
            </div>

            <div className="space-y-6">
              <h3 className={`font-outfit font-extrabold text-2xl text-white tracking-tight leading-tight transition-colors duration-300 ${
                isConciliaExpanded ? "text-blue-400" : "group-hover:text-blue-400"
              }`}>
                Conciliaciones financieras automatizadas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Automatice conciliaciones masivas, elimine reprocesos y obtenga trazabilidad completa para auditorías mediante reglas inteligentes y matching automático.
              </p>

              {/* Wrapper para métricas y sección adicional */}
              <div>
                {/* Cajas de Métricas Destacadas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-sm hover:border-[#074875] transition-colors">
                    <div className="text-2xl font-outfit font-extrabold text-blue-400">
                      Hasta 87%
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mt-1">
                      menos tiempo de ciclo
                    </div>
                  </div>
                  <div className="bg-slate-900 border border-slate-850 p-4 rounded-sm flex items-center justify-center border-dashed border-slate-800">
                    <span className="text-[10px] text-slate-500 font-mono text-center">
                      SYS_MATCHING_ENGINE_OK
                    </span>
                  </div>
                </div>

                {/* Sección adicional en hover (Ideal para) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isConciliaExpanded ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="border-t border-slate-800/80 pt-4">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-extrabold mb-2.5">
                      Ideal para:
                    </div>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>Conciliaciones bancarias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>Matching inteligente</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span>Auditorías y trazabilidad</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlace de Conversión */}
            <div className="pt-8 mt-8 border-t border-slate-800 flex justify-between items-center">
              <Link
                href="/servicios/gestion-documental"
                className={`text-sm font-bold text-blue-400 hover:text-white hover:underline transition-all duration-300 flex items-center gap-1 ${
                  isConciliaExpanded ? "translate-x-1" : "group-hover:translate-x-1"
                }`}
              >
                Conocer solución <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
