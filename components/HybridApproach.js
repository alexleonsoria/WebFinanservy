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
            Dominio del negocio bancario potenciado por plataformas de automatización e IA.
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
                      El BPO tradicional solo sabe sumar más personal manual ante el aumento de volumen, disparando costos y errores.
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
                      Sin visibilidad en tiempo real ni trazabilidad, generando desconfianza y pérdida de control sobre el proceso.
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
                      Proveedores de software puro que desconocen la operativa financiera diaria y las normativas regulatorias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: La Solución Finanservy (Escalabilidad & Transparencia) */}
          <div className="bg-slate-900 text-white p-8 rounded-md border border-blue-900/50 shadow-xl flex flex-col justify-between hover-lift relative overflow-hidden">
            {/* Sutil gradiente de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#074875]/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="space-y-6 relative z-10 mb-8">
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
                      Escalabilidad First-Tech
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Implementamos automatización e IA para absorber volumen masivo, sumando talento humano solo donde aporta valor.
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
                      Transparencia y Trazabilidad Total
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      Control en tiempo real con tableros de mando (BI), auditoría continua y seguimiento estricto de SLAs.
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
                      Plataformas propias (B360 y CONCILIA PRO) diseñadas por expertos en gestión y riesgo financiero.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Full Width */}
            <div className="pt-6 border-t border-slate-800 relative z-10 w-full">
              <Link 
                href="/contacto"
                className="w-full block py-3 bg-[#96C11F] hover:bg-[#7ea31a] text-slate-900 font-extrabold text-xs rounded-sm transition-all text-center uppercase tracking-wider hover-lift"
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
