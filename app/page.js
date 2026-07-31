"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BpoServicesGrid from "../components/BpoServicesGrid";
import HybridApproach from "../components/HybridApproach";
import EcosystemSection from "../components/EcosystemSection";
import { Shield, Award, Calendar, Layers, Activity } from "lucide-react";

const slides = [
  {
    tag: "FILIAL EN ECUADOR DEL GRUPO CIBERNOS",
    title: "Unimos el rigor del negocio financiero con la agilidad de la tecnología punta.",
    subtitle: "BPO especializado para la banca y sector corporativo en Ecuador. Transformamos el back office en un motor de eficiencia automatizado, seguro y bajo estricto cumplimiento normativo.",
    cta: "Solicitar Consultoría de Procesos",
    link: "/contacto",
    image: "/images/Eficiencia_Externalizacion_Estrategica.jpg",
    consoleTitle: "CORE_HYBRID_BPO_STATUS",
    baseLogs: [
      "> [INIT] Core Hybrid BPO active...",
      "> [SLA] Monitoreo de colas de back office activo...",
      "> [SYS] Chequeo de cumplimiento normativo: 100% OK",
      "> [ISO] Escaneando logs de seguridad ISO 27001..."
    ]
  },
  {
    tag: "INNOVACIÓN TECNOLÓGICA BPO",
    title: "Optimización Financiera con Inteligencia Operacional Enterprise.",
    subtitle: "Reduzca hasta un 87% el tiempo de procesamiento con CONCILIA PRO. Automatización de conciliaciones masivas, matching inteligente y control de diferencias.",
    cta: "Conocer CONCILIA PRO",
    link: "/contacto",
    image: "/images/Inteligencia_Operacional_Enterprise.jpg",
    consoleTitle: "CONCILIA_PRO_SYSTEM_STATUS",
    baseLogs: [
      "> [INIT] Motor de matching CONCILIA PRO iniciado...",
      "> [PROC] Reconciliando 12,450 registros transaccionales...",
      "> [MATCH] Tasa de cuadre automático: 87% completado",
      "> [OCR] Procesamiento OCR de documentos valorados... OK"
    ]
  },
  {
    tag: "MÁS DE 50 AÑOS DE TRAYECTORIA GLOBAL",
    title: "Garantía, Continuidad y Respaldo de Nivel Internacional.",
    subtitle: "Operaciones BPO certificadas bajo estrictas normas internacionales de calidad y seguridad de la información para la banca ecuatoriana.",
    cta: "Ver Certificaciones y Casos de Éxito",
    link: "/casos-exito",
    image: "/images/Respaldo_Institucional_Continuidad.jpg",
    consoleTitle: "GLOBAL_AUDIT_COMPLIANCE",
    baseLogs: [
      "> [SYS] Auditoría internacional anual superada",
      "> [ISO] Sistema de Gestión de Calidad (9001) activo",
      "> [BCP] Plan de Continuidad de Negocio (BCP) cargado",
      "> [SEC] Análisis de vectores de riesgo: 0 amenazas"
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [consoleLogs, setConsoleLogs] = useState([]);

  // Auto slide cada 8 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Inicializa logs bases al cambiar diapositiva
  useEffect(() => {
    setConsoleLogs(slides[currentSlide].baseLogs);
  }, [currentSlide]);

  // Simulación de actualizaciones de consola en tiempo real
  useEffect(() => {
    const logInterval = setInterval(() => {
      const updatesMap = {
        0: [
          "> [SYNC] Integrando colas de digitalización bancaria...",
          "> [SEC] Claves criptográficas rotadas con éxito.",
          "> [SYS] Procesamiento por lotes finalizado sin errores.",
          "> [SLA] Tiempo promedio de resolución: 180ms."
        ],
        1: [
          "> [OCR] Lectura de firmas completada con 99.9% precisión.",
          "> [SYNC] Sincronización realizada con Core Bancario.",
          "> [AUTO] Cuadre masivo de transferencias interbancarias... OK",
          "> [MATCH] Auditoría de discrepancias conciliada con éxito."
        ],
        2: [
          "> [ISO] Evaluando conformidad ISO 9001 e ISO 27001...",
          "> [SYS] Respaldo automatizado cifrado y replicado en Cloud.",
          "> [BCP] Simulación de recuperación de desastres: 100% OK",
          "> [SEC] Escaneo de vulnerabilidades sin alertas críticas."
        ]
      };

      const currentUpdates = updatesMap[currentSlide];
      const randomUpdate = currentUpdates[Math.floor(Math.random() * currentUpdates.length)];
      
      setConsoleLogs((prev) => {
        const next = [...prev, randomUpdate];
        if (next.length > 5) next.shift();
        return next;
      });
    }, 4000);

    return () => clearInterval(logInterval);
  }, [currentSlide]);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* BLOQUE 1: Hero Slider Corporativo High-Tech */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-950 border-b border-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Imagen de fondo real panorámica */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Overlay translúcido del 50% */}
            <div className="absolute inset-0 bg-slate-950/50 z-10" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Columna Texto */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
                    {slide.tag}
                  </div>
                  <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Botón */}
                  <div className="pt-4">
                    <Link
                      href={slide.link}
                      className="inline-block px-6 py-3 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>

                {/* Columna Consola Técnica (Oculto en móvil) */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-md shadow-2xl backdrop-blur-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#96C11F] animate-pulse" />
                        <span className="font-mono text-xs text-slate-400 font-bold tracking-wider">
                          {slide.consoleTitle}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                        SYSTEM ACTIVE
                      </span>
                    </div>
                    <div className="space-y-2.5 font-mono text-xs min-h-[140px] flex flex-col justify-end text-left">
                      {consoleLogs.map((log, idx) => {
                        let colorClass = "text-slate-400";
                        if (log.includes("OK") || log.includes("precisión") || log.includes("exceso") || log.includes("superada")) {
                          colorClass = "text-[#96C11F]";
                        } else if (log.includes("[INIT]")) {
                          colorClass = "text-white font-bold";
                        } else if (log.includes("rotadas") || log.includes("cargado")) {
                          colorClass = "text-blue-400";
                        }
                        return (
                          <p key={idx} className={`${colorClass} transition-all duration-300`}>
                            {log}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Indicadores de Posición Inferiores */}
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

        {/* Flechas de Navegación Flotantes Circulares */}
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

      {/* Cinta de Métricas Sólida (Social Proof) */}
      <section className="bg-slate-100 py-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-[#074875]">50+ Años</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Haciendo fácil los servicios y la tecnología</div>
            </div>
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-[#074875]">1,300+</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Profesionales en equipo global experto</div>
            </div>
            <div className="space-y-1">
              <div className="font-outfit font-extrabold text-4xl text-[#074875]">7 Países</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Presencia global con soporte local</div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE 2: El Enfoque Híbrido */}
      <HybridApproach />

      {/* BLOQUE 3: Reemplazo del Módulo Central de Servicios */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              PORTAFOLIO DE SOLUCIONES BPO
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Los 4 Pilares Operativos de BPO
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Soluciones estructuradas de externalización de procesos diseñadas para optimizar la eficiencia empresarial con tecnología avanzada.
            </p>
          </div>

          <BpoServicesGrid />
        </div>
      </section>

      {/* BLOQUE 4: Ecosistema de Inteligencia Operativa */}
      <EcosystemSection />

      {/* BLOQUE 5: Respaldo, Seguridad y Compliance por Diseño */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Frase Fuerza Principal */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/10 px-3 py-1.5 rounded-sm">
              SEGURIDAD Y COMPLIANCE POR DISEÑO
            </div>
            <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#074875] tracking-tight leading-snug">
              "Innovación continua sobre plataformas de alta disponibilidad. Garantizamos la continuidad de sus operaciones y el estricto cumplimiento normativo."
            </h2>
            <div className="h-1.5 w-20 bg-[#96C11F] mx-auto rounded-full" />
          </div>

          {/* Grid de Certificaciones ISO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Certificación 1: ISO 27001 */}
            <div className="border border-slate-200 bg-slate-50/50 p-6 rounded-sm hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-slate-800 tracking-tight">
                    ISO 27001
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                    Seguridad de la Información
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Garantiza la confidencialidad, integridad y disponibilidad de los datos financieros sensibles de nuestros clientes bancarios bajo estándares internacionales rigurosos.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                CERTIFICADO ACTIVO
              </div>
            </div>

            {/* Certificación 2: ISO 9001 */}
            <div className="border border-slate-200 bg-slate-50/50 p-6 rounded-sm hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-slate-800 tracking-tight">
                    ISO 9001
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                    Gestión de la Calidad
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Asegura la estandarización, control y mejora continua de todos nuestros procesos operativos de back office, maximizando la precisión de las entregas.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                CALIDAD GARANTIZADA
              </div>
            </div>

            {/* Certificación 3: ISO 22301 */}
            <div className="border border-slate-200 bg-slate-50/50 p-6 rounded-sm hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-slate-800 tracking-tight">
                    ISO 22301
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                    Continuidad de Negocio
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Respalda la resiliencia operativa y nuestra capacidad de recuperación inmediata ante incidentes físicos, lógicos o de fuerza mayor en el territorio ecuatoriano.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                ALTA DISPONIBILIDAD
              </div>
            </div>

            {/* Certificación 4: ISO 20000-1 */}
            <div className="border border-slate-200 bg-slate-50/50 p-6 rounded-sm hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-lg text-slate-800 tracking-tight">
                    ISO 20000-1
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-0.5">
                    Gestión de Servicios TI
                  </p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Certifica la excelencia en la entrega, soporte e implantación de software y sistemas que complementan nuestra capa tecnológica de BPO.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                SOPORTE DE NIVEL ENTERPRISE
              </div>
            </div>
          </div>

          {/* Banner CTA de Conversión Final */}
          <div className="bg-gradient-to-r from-slate-900 via-[#074875] to-slate-900 text-white rounded-md p-10 md:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-blue-800/30">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <h3 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                ¿Listo para transformar la eficiencia de su back office?
              </h3>
              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                Agende una sesión de diagnóstico operativo con nuestros especialistas de BPO.
              </p>
              <div className="pt-6">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Reunión Presencial
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Carrusel de Clientes y Referencias de Éxito */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Marcas e Instituciones de Primer Nivel que Confían en Nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-24 opacity-60">
            <div className="flex flex-col items-center justify-center font-bold text-slate-900 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-xl font-outfit tracking-tight">Banco Internacional</span>
              <span className="text-[9px] uppercase tracking-wider text-[#074875] font-semibold mt-0.5">Referencia Principal Ecuador</span>
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
