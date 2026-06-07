"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    tag: "FILIAL EN ECUADOR DEL GRUPO CIBERNOS",
    title: "Eficiencia Operacional y Externalización Estratégica en Ecuador.",
    subtitle: "Control estricto de niveles de servicio (SLA) y predictibilidad de costos para el sector bancario y corporativo mediante BPO especializado.",
    cta: "Solicitar Consultoría de Procesos",
    image: "/images/Eficiencia_Externalizacion_Estrategica.jpg",
  },
  {
    tag: "INNOVACIÓN TECNOLÓGICA BPO",
    title: "Optimización Financiera con Inteligencia Operacional Enterprise.",
    subtitle: "Reduzca hasta un 87% el tiempo de procesamiento con CONCILIA PRO. Automatización de conciliaciones masivas, matching inteligente y control de diferencias.",
    cta: "Conocer CONCILIA PRO",
    image: "/images/Inteligencia_Operacional_Enterprise.jpg",
  },
  {
    tag: "MÁS DE 50 AÑOS DE TRAYECTORIA GLOBAL",
    title: "Garantía, Continuidad y Respaldo de Nivel Internacional.",
    subtitle: "Operaciones BPO certificadas bajo estrictas normas internacionales de calidad y seguridad de la información (ISO 9001 e ISO 27001) para la banca ecuatoriana.",
    cta: "Ver Certificaciones y Casos de Éxito",
    image: "/images/Respaldo_Institucional_Continuidad.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide cada 8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Slider (Primer Pliegue de Conversión) */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-950 border-b border-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagen de fondo utilizando next/image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Capa de Superposición Oscura (Overlay) del 65% para asegurar contraste */}
            <div className="absolute inset-0 bg-slate-950/65 z-10" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
              <div className="max-w-3xl space-y-6 text-left">
                {/* Tag Superior con fondo azul corporativo #074875 y texto verde #96C11F */}
                <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
                  {slide.tag}
                </div>
                {/* Título en blanco para contraste impecable contra el overlay oscuro */}
                <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                  {slide.title}
                </h1>
                {/* Subtítulo en gris plata claro */}
                <p className="text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Indicadores de Posición Inferiores (Centrados en móvil, a la izquierda en desktop) */}
        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-start">
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-1.5 transition-all duration-300 ${
                    index === currentSlide ? "bg-[#96C11F]" : "bg-white/30 hover:bg-[#074875]"
                  }`}
                  aria-label={`Ir a diapositiva ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Flechas de Navegación Flotantes Circulares Laterales */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-[#074875] hover:border-[#074875] flex items-center justify-center transition-all shadow-lg cursor-pointer"
          aria-label="Diapositiva anterior"
        >
          <span className="text-xl">←</span>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-[#074875] hover:border-[#074875] flex items-center justify-center transition-all shadow-lg cursor-pointer"
          aria-label="Siguiente diapositiva"
        >
          <span className="text-xl">→</span>
        </button>
      </section>

      {/* 2. Cinta de Métricas Sólida (Social Proof) */}
      <section className="bg-slate-100 py-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-primary">50+ Años</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Haciendo fácil los servicios y la tecnología</div>
            </div>
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-primary">1,300+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Profesionales en equipo global experto</div>
            </div>
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-primary">7 Países</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">España, Ecuador, Perú, Colombia, México, Chile, Portugal</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Los 4 Pilares de BPO (Grilla Estructurada) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
              Los 4 Pilares Operativos de BPO
            </h2>
            <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
            <p className="text-slate-500 text-lg">
              Soluciones estructuradas de externalización de procesos diseñadas para optimizar la eficiencia empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-4">
                <div className="text-primary text-3xl font-light">01</div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Gestión Documental</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Especialización en tratamiento de cheques, procesamiento OCR y la integración de la suite CONCILIA PRO.
                </p>
              </div>
              <a href="/servicios/gestion-documental" className="text-sm font-bold text-primary hover:text-accent mt-6 block">
                Ver más →
              </a>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-4">
                <div className="text-primary text-3xl font-light">02</div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Procesos Administrativos</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Back office financiero, control presupuestario y conciliaciones transaccionales masivas.
                </p>
              </div>
              <a href="/servicios/procesos-administrativos" className="text-sm font-bold text-primary hover:text-accent mt-6 block">
                Ver más →
              </a>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-4">
                <div className="text-primary text-3xl font-light">03</div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Contact Center / CAU</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Soporte omnicanal de primer nivel y mesas de ayuda orientadas a salvaguardar la continuidad del negocio.
                </p>
              </div>
              <a href="/servicios/contact-center-cau" className="text-sm font-bold text-primary hover:text-accent mt-6 block">
                Ver más →
              </a>
            </div>

            {/* Tarjeta 4 */}
            <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover-lift">
              <div className="space-y-4">
                <div className="text-primary text-3xl font-light">04</div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Gestión de Proveedores</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Homologación técnica de redes de terceros, control de contratos y cumplimiento operativo mediante GessDATA.
                </p>
              </div>
              <a href="/servicios/gestion-proveedores" className="text-sm font-bold text-primary hover:text-accent mt-6 block">
                Ver más →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Franja Tecnológica de Innovación */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/30 via-slate-950 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-sm">
                Ecosistema de Software Cibernos
              </div>
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Herramientas Propietarias de Alta Ingeniería de Procesos
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Integramos Inteligencia Artificial, automatizaciones RPA (Robotic Process Automation), motores de reconocimiento inteligente OCR y portales de cumplimiento normativo en su operación.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">✓</div>
                  <div>
                    <h4 className="font-bold text-white">CONCILIA PRO</h4>
                    <p className="text-sm text-slate-400">Plataforma de inteligencia operacional para conciliación masiva de cuentas bancarias y cuadres financieros.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">✓</div>
                  <div>
                    <h4 className="font-bold text-white">GessDATA</h4>
                    <p className="text-sm text-slate-400">Portal homologado de proveedores, gestión de riesgos de subcontratación y compliance legal.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">✓</div>
                  <div>
                    <h4 className="font-bold text-white">Agile Plan</h4>
                    <p className="text-sm text-slate-400">Plataforma de modelado y automatización de flujos de trabajo en tiempo récord.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-slate-500">CONCILIA_PRO_SYSTEM_STATUS</span>
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
              </div>
              <div className="space-y-4 font-mono text-xs">
                <p className="text-slate-400">&gt; Iniciando análisis de conciliación transaccional...</p>
                <p className="text-slate-400">&gt; 12,450 registros procesados en 5.08 minutos.</p>
                <p className="text-accent">&gt; 87% de reducción de carga de procesamiento manual lograda.</p>
                <div className="w-full bg-slate-950 h-2 border border-slate-800 rounded-sm overflow-hidden">
                  <div className="bg-accent h-full w-[87%]" />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 text-center">
                <a href="/servicios/gestion-documental" className="text-sm font-bold text-accent hover:underline">
                  Explorar tecnología →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Carrusel de Clientes y Referencias de Éxito */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Marcas e Instituciones de Primer Nivel que Confían en Nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24 opacity-60">
            {/* Banco Internacional de Ecuador - Prominente en el centro */}
            <div className="flex flex-col items-center justify-center font-bold text-slate-900 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-xl font-outfit tracking-tight">Banco Internacional</span>
              <span className="text-[9px] uppercase tracking-wider text-primary">Referencia Principal Ecuador</span>
            </div>
            <div className="font-outfit font-extrabold text-xl text-slate-400 hover:text-slate-900 hover:opacity-100 transition-all cursor-pointer">Banco Pichincha</div>
            <div className="font-outfit font-extrabold text-xl text-slate-400 hover:text-slate-900 hover:opacity-100 transition-all cursor-pointer">BBVA</div>
            <div className="font-outfit font-extrabold text-xl text-slate-400 hover:text-slate-900 hover:opacity-100 transition-all cursor-pointer">Santander</div>
            <div className="font-outfit font-extrabold text-xl text-slate-400 hover:text-slate-900 hover:opacity-100 transition-all cursor-pointer">MAPFRE</div>
            <div className="font-outfit font-extrabold text-xl text-slate-400 hover:text-slate-900 hover:opacity-100 transition-all cursor-pointer">Adeslas</div>
          </div>
        </div>
      </section>
    </div>
  );
}
