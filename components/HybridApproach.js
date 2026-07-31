"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TABS_DATA = [
  {
    id: 'escalabilidad',
    tabName: '01. Escalabilidad First-Tech',
    title: 'Crezca en volumen sin multiplicar sus costos operativos.',
    painPoint: 'A diferencia del BPO tradicional, que ante un incremento de transacciones solo ofrece sumar más personal manual (headcount) aumentando el riesgo de error, nuestro modelo prioridad-tecnología absorbe la carga mediante automatización.',
    highlight: 'Primero automatizamos con IA; el talento humano se suma únicamente donde aporta valor estratégico.',
    buttonText: 'Agendar Diagnóstico de Procesos',
    buttonLink: '/contacto',
    imagePath: '/images/hybrid-tab-escalabilidad.jpg',
    imageAlt: 'Flujo de procesos y automatización de escala enterprise'
  },
  {
    id: 'transparencia',
    tabName: '02. Transparencia & Trazabilidad',
    title: 'Cero "Cajas Negras": Control total y visibilidad en tiempo real.',
    painPoint: 'Eliminamos la incertidumbre de no saber qué ocurre con sus procesos externalizados. Ofrecemos acceso directo a tableros de control (BI), bitácoras de auditoría continua y seguimiento riguroso de SLAs sobre repositorios únicos.',
    highlight: 'Gobernanza completa e información auditable en todo momento para sus comités de riesgo.',
    buttonText: 'Solicitar Demostración de Control',
    buttonLink: '/contacto',
    imagePath: '/images/hybrid-tab-transparencia.jpg',
    imageAlt: 'Dashboard BI con métricas de trazabilidad y SLA'
  },
  {
    id: 'tecnologia',
    tabName: '03. Dominio Bancario + IA Propietaria',
    title: 'Tecnología de vanguardia diseñada por expertos del sector.',
    painPoint: 'Superamos la brecha de los proveedores de software puro que desconocen la operativa diaria de la banca. Desplegamos plataformas propias como B360 (IA Generativa para documentación valorada) y CONCILIA PRO (matching transaccional masivo).',
    highlight: 'Comprensión profunda de la gestión de cheques, normativas y flujos financieros.',
    buttonText: 'Explorar Plataformas de Software',
    buttonLink: '/servicios/gestion-documental',
    imagePath: '/images/hybrid-tab-tecnologia.jpg',
    imageAlt: 'Plataformas B360 y CONCILIA PRO en ejecución'
  }
];

export default function HybridApproach() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TABS_DATA[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera del Bloque */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-blue-100">
            NUESTRA VENTAJA COMPETITIVA
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-outfit">
            El Enfoque Híbrido: Hablamos tu mismo idioma
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-light leading-relaxed">
            Seleccione una dimensión clave para descubrir cómo transformamos la eficiencia de su back office:
          </p>
        </div>

        {/* Selector de Pestañas (Barra de Pestañas Horizontales) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`transition-all duration-300 text-sm cursor-pointer ${
                idx === activeTab
                  ? "bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 rounded-xl px-6 py-3.5 transform scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 font-medium rounded-xl px-6 py-3.5"
              }`}
            >
              {item.tabName}
            </button>
          ))}
        </div>

        {/* Área de Contenido Dinámico (Split Screen 50/50) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center bg-slate-50/60 p-8 lg:p-12 rounded-3xl border border-slate-200/80 shadow-sm transition-all duration-500">
          
          {/* Columna Izquierda: Texto B2B de la Pestaña Activa */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight font-outfit">
              {tab.title}
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed">
              {tab.painPoint}
            </p>

            {/* Frase Clave (Highlight) */}
            <div className="border-l-4 border-blue-600 bg-white p-4 rounded-r-xl shadow-sm text-sm font-semibold text-slate-800 border-y border-r border-slate-100">
              {tab.highlight}
            </div>

            {/* Botón CTA */}
            <div className="pt-4">
              <Link 
                href={tab.buttonLink}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:gap-3 text-sm tracking-wide"
              >
                {tab.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Recurso Visual 50% */}
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900">
            <Image
              src={tab.imagePath}
              alt={tab.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
