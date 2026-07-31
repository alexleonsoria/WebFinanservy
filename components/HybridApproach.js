import Link from "next/link";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function HybridApproach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/10 px-3 py-1.5 rounded-sm">
            NUESTRA VENTAJA COMPETITIVA
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
            El Enfoque Híbrido: Hablamos tu mismo idioma
          </h2>
          <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Unimos el rigor y la comprensión del negocio bancario con capas tecnológicas eficientes para garantizar trazabilidad, resiliencia y escalabilidad sin fricción.
          </p>
        </div>

        {/* Grid de 2 Columnas de Alto Impacto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Columna 1: El Desafío del Mercado (Puntos de Dolor) */}
          <div className="bg-slate-100/60 p-8 rounded-md border border-slate-200 flex flex-col justify-between hover-lift">
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">
                  El Desafío del Mercado
                </h3>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">
                  Puntos de Dolor Tradicionales
                </p>
              </div>

              <div className="space-y-6">
                {/* Punto 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500/80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Crecimiento Costoso por Headcount
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Ante el incremento de volumen, el BPO tradicional solo ofrece sumar más personal manual en vez de optimizar con tecnología, disparando sus costos operativos e incrementando el riesgo de errores.
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500/80" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Operación de 'Caja Negra'
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Falta total de visibilidad sobre cómo se ejecutan los procesos externalizados, generando desconfianza, dependencia y pérdida de control para el cliente.
                    </p>
                  </div>
                </div>

                {/* Punto 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <XCircle className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Desconexión con el Negocio
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Desarrolladores o proveedores de software que desconocen la presión regulatoria, la gestión y la operativa financiera diaria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Espacio para balancear visualmente */}
            <div className="pt-8 mt-8 border-t border-slate-200/50 text-slate-400 text-xs italic">
              El modelo analógico ha alcanzado su límite de eficiencia operativa.
            </div>
          </div>

          {/* Columna 2: La Solución Finanservy (Escalabilidad & Transparencia) */}
          <div className="bg-slate-900 text-white p-8 rounded-md border border-blue-900/50 shadow-xl flex flex-col justify-between hover-lift relative overflow-hidden">
            {/* Sutil gradiente de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#074875]/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-outfit font-extrabold text-xl text-white tracking-tight">
                  La Solución Finanservy
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#96C11F] font-bold mt-1">
                  Transparencia & Escalabilidad Tech
                </p>
              </div>

              <div className="space-y-6">
                {/* Punto 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#96C11F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Escalabilidad Inteligente First-Tech
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Primero implementamos automatización e IA de última generación para absorber altos volúmenes; solo sumamos talento humano donde aporta valor estratégico real.
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Operación Transparente & Trazable
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Visibilidad total en tiempo real con tableros de control (Dashboards BI), auditoría continua y seguimiento riguroso de SLAs sobre repositorios únicos.
                    </p>
                  </div>
                </div>

                {/* Punto 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#96C11F]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Dominio Bancario & IA Propietaria
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Soluciones de software especializadas (B360 y CONCILIA PRO) diseñadas por expertos que entienden los procesos y las normativas del sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA e Info Footer */}
            <div className="pt-8 mt-8 border-t border-slate-800 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Modelo híbrido respaldado por Grupo Cibernos.
              </span>
              <Link 
                href="/contacto"
                className="px-5 py-2.5 bg-[#96C11F] hover:bg-[#7ea31a] text-slate-900 font-bold text-xs rounded-sm transition-all text-center uppercase tracking-wider"
              >
                Agendar Diagnóstico de Procesos
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
