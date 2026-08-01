import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HybridApproach() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 px-6 max-w-7xl mx-auto">
        
        {/* Columna Izquierda (Elemento Visual 50%) */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900">
          <Image
            src="/images/centro_operaciones.jpg"
            alt="Enfoque Híbrido de BPO y Automatización"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Columna Derecha (Contenido de Valor Minimalista 50%) */}
        <div className="space-y-6 text-left">
          <div>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full inline-block mb-3 border border-blue-100">
              NUESTRA DIFERENCIA
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-outfit">
              La tecnología es nuestra herramienta. El conocimiento del negocio financiero es nuestro verdadero diferencial.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-light mb-6">
              No implementamos tecnología por tendencia. Diseñamos procesos que reducen riesgos, optimizan la operación y generan resultados medibles para su negocio.
            </p>
          </div>

          {/* 3 Tarjetas Flotantes de Contenido Limpio */}
          <div className="flex flex-col gap-4 mb-8">
            
            {/* Tarjeta 1 */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-1 font-outfit">
                01. Conocimiento del negocio financiero
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Diseñamos procesos alineados a la realidad operativa de bancos, aseguradoras y entidades financieras.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-1 font-outfit">
                02. Tecnología aplicada con propósito
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automatizamos únicamente donde genera mayor impacto, mejorando eficiencia, trazabilidad y control.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all">
              <h3 className="font-bold text-slate-900 text-lg mb-1 font-outfit">
                03. Operaciones listas para crecer
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Combinamos talento especializado, metodologías y plataformas propias para escalar su operación sin perder calidad ni cumplimiento.
              </p>
            </div>

          </div>

          {/* Botón CTA Final */}
          <div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Agendar Diagnóstico de Procesos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
