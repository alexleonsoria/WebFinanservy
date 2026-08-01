import Link from "next/link";
import {
  Keyboard,
  AlertTriangle,
  Clock,
  EyeOff,
  UserX,
  TrendingDown,
  ChevronDown,
  ChevronRight,
  FileText,
  Database,
  Eye,
  Workflow,
  TrendingUp,
  Shield,
  Award,
  Calendar,
  Activity,
  Layers,
  ArrowRight,
  Play,
  Check,
  Cpu,
  Zap,
  FolderOpen,
  UserCheck,
  Target,
  Crosshair,
  TrendingUp as TrendingUpIcon
} from "lucide-react";

// Custom Premium Outline SVGs matching the composition reference
const FoldedDocumentIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    <path d="M14 2v4a1 1 0 0 0 1 1h4" />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);

const KeyboardHandsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="14" width="20" height="8" rx="1" />
    <path d="M6 17h12M4 17h.01M19 17h.01M4 20h16" />
    {/* Left Hand */}
    <path d="M5 13.5c0-3 1-5 2-6m-1.5 6c.5-4 1.5-6 3-6.5" />
    {/* Right Hand */}
    <path d="M19 13.5c0-3-1-5-2-6m1.5 6c-.5-4-1.5-6-3-6.5" />
  </svg>
);

const ValidationChecklistIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="2" width="10" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <polyline points="9 11 11 13 14 10" />
    {/* Exclamation warning badge */}
    <circle cx="18" cy="18" r="4" fill="white" className="stroke-red-500" />
    <line x1="18" y1="16" x2="18" y2="18" className="stroke-red-500" />
    <line x1="18" y1="20" x2="18" y2="20" className="stroke-red-500" />
  </svg>
);

const DatabaseCylinderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const FolderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const DocumentIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="7" y1="8" x2="17" y2="8" />
    <line x1="7" y1="12" x2="17" y2="12" />
    <line x1="7" y1="16" x2="13" y2="16" />
  </svg>
);

const BrainCircuitsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 1-7-7c0-2 1.5-3.5 1.5-3.5A6 6 0 0 1 12 2v20z" />
    <path d="M12 2a6 6 0 0 1 5.5 9.5s1.5 1.5 1.5 3.5a7 7 0 0 1-7 7" />
    <circle cx="16" cy="7" r="1" fill="currentColor" />
    <path d="M12 7h3m-1 0v4m0 0h3" />
    <circle cx="17" cy="15" r="1" fill="currentColor" />
    <path d="M12 15h4m-2 0v3m0 0h2" />
  </svg>
);

const LightningBoltIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const UserCheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <polyline points="17 11 19 13 23 9" />
  </svg>
);

const DatabaseCheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="10" cy="5" rx="7" ry="2.5" />
    <path d="M3 5v14c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
    <path d="M3 12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5" />
    <polyline points="16 13 18.5 15.5 23 11" className="stroke-[#96C11F] stroke-[2px]" />
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 11 11 13 15 9" className="stroke-[#96C11F] stroke-[2px]" />
  </svg>
);

export const metadata = {
  title: "Gestión Documental Inteligente | Finanservy",
  description: "Transforme procesos documentales críticos en flujos digitales rápidos, seguros y trazables mediante automatización inteligente para banca y finanzas.",
};

export default function GestionDocumental() {
  
  // Traditional steps (Antes)
  const traditionalSteps = [
    {
      num: 1,
      title: "Documento",
      desc: "Recepción física o digital",
      icon: FoldedDocumentIcon
    },
    {
      num: 2,
      title: "Digitación",
      desc: "Ingreso manual de datos",
      icon: KeyboardHandsIcon
    },
    {
      num: 3,
      title: "Validación",
      desc: "Revisión visual y verificaciones",
      icon: ValidationChecklistIcon
    },
    {
      num: 4,
      title: "Registro",
      desc: "Carga manual al sistema",
      icon: DatabaseCylinderIcon
    },
    {
      num: 5,
      title: "Archivo",
      desc: "Almacenamiento físico o digital",
      icon: FolderIcon
    }
  ];

  // Optimized steps (Después)
  const optimizedSteps = [
    {
      num: 1,
      title: "Documento",
      desc: "Recepción digital",
      icon: DocumentIcon
    },
    {
      num: 2,
      title: "Lectura inteligente",
      desc: "IA interpreta el documento",
      icon: BrainCircuitsIcon
    },
    {
      num: 3,
      title: "Extracción automática",
      desc: "Datos identificados y estructurados",
      icon: LightningBoltIcon
    },
    {
      num: 4,
      title: "Validación asistida",
      desc: "Revisión por excepción",
      icon: UserCheckIcon
    },
    {
      num: 5,
      title: "Registro automático",
      desc: "Carga directa al sistema",
      icon: DatabaseCheckIcon
    },
    {
      num: 6,
      title: "Trazabilidad completa",
      desc: "Auditoría y control en tiempo real",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Dynamic reveal animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}} />

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-950 border-b border-slate-900 overflow-hidden py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gestiondocumentalhero.jpg"
            alt="Gestión Documental Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay translúcido del 50% */}
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono mb-8 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/servicios" className="hover:text-white transition-colors">
              Soluciones
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#96C11F] font-semibold">
              Gestión Documental Inteligente
            </span>
          </div>

          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
              TECNOLOGÍA APLICADA AL NEGOCIO
            </div>
            <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Gestión Documental Inteligente
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
              Transforme procesos documentales críticos en flujos digitales más rápidos, seguros y trazables mediante automatización inteligente.
            </p>
            
            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-block text-center px-8 py-4 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift shadow-lg shadow-[#96C11F]/10"
              >
                Solicitar demostración
              </Link>
              <a
                href="#video-section"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift"
              >
                <Play className="w-4 h-4 text-[#96C11F]" />
                Ver video
              </a>
            </div>

            {/* Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300 text-xs sm:text-sm font-light">
              <span className="flex items-center gap-1.5">
                <span className="text-[#96C11F] font-bold">✓</span> Reduce tareas manuales
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#96C11F] font-bold">✓</span> Mayor trazabilidad
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#96C11F] font-bold">✓</span> Implementación consultiva
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: EL COSTO DE LA OPERACIÓN MANUAL */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              EL COSTO DE LA INEFICIENCIA
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              El verdadero costo de una operación documental manual
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Los procesos documentales tradicionales generan retrasos, errores operativos y dificultan el crecimiento de la organización.
            </p>
          </div>

          {/* Grid de 6 Tarjetas con Microinteracciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <Keyboard className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Digitación manual</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Alto volumen de digitación manual de datos estructurados de cheques, pagarés e identificaciones, lo que congestiona al personal interno.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Errores operativos</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Inconsistencias en lectura de montos, firmas omitidas o validaciones erróneas que generan costosos reprocesos internos.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Procesos lentos</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Largos tiempos de espera para el registro y aprobación final de expedientes, afectando la experiencia directa del cliente final.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Baja trazabilidad</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Dificultad para auditar en qué estado se encuentra cada lote o expediente dentro del flujo, debilitando los reportes de cumplimiento normativo.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <UserX className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Dependencia de procesos manuales</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Vulnerabilidad operativa por falta de automatización y normalización ante la ausencia o rotación de personal operativo clave.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-500/10 rounded-sm flex items-center justify-center text-red-600">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Dificultad para escalar</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Imposibilidad de absorber picos estacionales de demanda documental sin aumentar exponencialmente la plantilla y los costos fijos.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 2: ASÍ TRANSFORMAMOS EL PROCESO - REDISEÑADO CON REFERENCIA A procesodocumentalad.jpg */}
      <section className="py-20 bg-slate-100/50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              TRANSFORMACIÓN DIGITAL
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Así transformamos el proceso documental
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
          </div>

          {/* Two balanced image columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* COLUMNA IZQUIERDA: Antes */}
            <div className="bg-white border border-slate-200/80 rounded-sm p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center">
              <img
                src="/images/procesodocumentalantes.jpg"
                alt="Proceso tradicional antes de optimizar"
                className="w-full h-auto rounded-sm object-contain"
              />
            </div>

            {/* COLUMNA DERECHA: Después */}
            <div className="bg-white border border-slate-200/80 rounded-sm p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center">
              <img
                src="/images/procesodocumentaldespues.jpg"
                alt="Proceso optimizado después con FinanServy"
                className="w-full h-auto rounded-sm object-contain"
              />
            </div>

          </div>

          {/* Bottom Results Banner (Full-Width) */}
          <div className="max-w-7xl mx-auto mt-8 bg-white border border-slate-200/80 rounded-sm p-6 md:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow duration-300">
            {/* Left Column */}
            <div className="flex items-center gap-5 lg:w-1/2 text-left">
              <div className="w-14 h-14 rounded-full bg-[#96C11F]/10 flex items-center justify-center text-[#96C11F] shrink-0">
                <TrendingUpIcon className="w-7 h-7" />
              </div>
              <p className="font-outfit font-extrabold text-slate-800 text-base md:text-lg leading-snug">
                Resultados que se traducen en eficiencia operativa, calidad de datos y una operación preparada para crecer.
              </p>
            </div>

            {/* Right Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-1/2 w-full pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8">
              
              {/* Metric 1 */}
              <div className="flex items-start gap-3 text-left">
                <Clock className="w-5 h-5 text-[#074875] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-800 uppercase tracking-wide">
                    Mayor velocidad
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">
                    Procesamiento más ágil y oportuno
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-start gap-3 text-left">
                <Crosshair className="w-5 h-5 text-[#074875] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-800 uppercase tracking-wide">
                    Más precisión
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">
                    Datos confiables desde el origen del documento
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-start gap-3 text-left">
                <Award className="w-5 h-5 text-[#074875] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-outfit font-bold text-xs text-slate-800 uppercase tracking-wide">
                    Mayor control
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-normal">
                    Visibilidad total del estado de su operación
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: TODO LO QUE PUEDE AUTOMATIZAR */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
              ALCANCE DE LA SOLUCIÓN
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Todo lo que puede automatizar
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              Una misma plataforma permite gestionar múltiples procesos documentales críticos.
            </p>
          </div>

          {/* Grid de 8 tarjetas con microinteracciones (ligera elevación + sombra) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Cheques */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Cheques</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Procesamiento y validación para Cámara de Compensación.</p>
            </div>

            {/* Card 2: Letras */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Letras</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Digitalización, lectura de montos y control de vencimiento.</p>
            </div>

            {/* Card 3: Contratos */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Contratos</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Extracción de cláusulas, firmas y plazos de vigencia.</p>
            </div>

            {/* Card 4: Formularios */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Keyboard className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Formularios</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Captura estructurada de datos de afiliación y KYC.</p>
            </div>

            {/* Card 5: Expedientes */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Expedientes</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Clasificación cruzada de carpetas de clientes y proveedores.</p>
            </div>

            {/* Card 6: Facturas */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Facturas</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Estructuración de montos, impuestos y números de control.</p>
            </div>

            {/* Card 7: Órdenes de compra */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Órdenes de compra</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Matching automático de ítems contra facturas y stock.</p>
            </div>

            {/* Card 8: Documentación tributaria */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-[#074875]/20 hover:border-[#96C11F]/30 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Documentación tributaria</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Validación oficial ante entes de control y auditorías.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 4: BENEFICIOS OPERATIVOS */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              IMPACTO OPERACIONAL
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Beneficios para su operación
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Nuestros clientes obtienen mejoras directas en la gobernanza y ejecución de sus flujos operativos de soporte.
            </p>
          </div>

          {/* Grid de Beneficios con Microinteracciones (ligera elevación + sombra) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Beneficio 1 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Menor trabajo manual</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  La lectura automática elimina el ingreso redundante de datos por parte de operarios humanos.
                </p>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Mayor productividad</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Los equipos se reasignan a tareas analíticas de validación, auditoría o servicio al cliente.
                </p>
              </div>
            </div>

            {/* Beneficio 3 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Menor tiempo de respuesta</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Liquidación de cheques y aprobaciones de contratos en una fracción del tiempo tradicional.
                </p>
              </div>
            </div>

            {/* Beneficio 4 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Mayor trazabilidad</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Bitácora inalterable del ciclo del lote completo para auditorías inmediatas y regulatorias.
                </p>
              </div>
            </div>

            {/* Beneficio 5 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Mejor control operativo</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Alertas tempranas de inconsistencias o posibles fraudes por discrepancia en firmas o montos.
                </p>
              </div>
            </div>

            {/* Beneficio 6 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                  <Check className="w-5 h-5 text-[#96C11F]" />
                </div>
                <h4 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">Operación preparada para crecer</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Escalabilidad modular para digerir picos estacionales de expedientes sin alterar los costos.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 5: PLATAFORMA QUE SOPORTA LA SOLUCIÓN - IMÁGENES REALES Y VISOR */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
              TECNOLOGÍA DE RESPALDO
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Una plataforma diseñada para operaciones críticas
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              La infraestructura subyacente proporciona control y consistencia a las operaciones de back office financiero.
            </p>
          </div>

          <div className="space-y-12">
            {/* Visor Elegante de Dos Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Visor Left */}
              <div className="bg-slate-950 border border-slate-800 rounded-sm p-4 shadow-2xl flex flex-col space-y-4 hover:border-[#96C11F]/30 transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#96C11F]/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 tracking-wider">B360_CAPTURADOR_DE_LOTES.JPG</span>
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden bg-slate-950 border border-slate-850">
                  <img
                    src="/images/b3601.jpg"
                    alt="Módulo de Captura B360"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light mt-2 text-center">
                  Módulo de Captura Inteligente: Recepción, ordenamiento y clasificación automática de lotes de cheques, pagarés y letras.
                </p>
              </div>

              {/* Visor Right */}
              <div className="bg-slate-950 border border-slate-800 rounded-sm p-4 shadow-2xl flex flex-col space-y-4 hover:border-[#96C11F]/30 transition-colors duration-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#96C11F]/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 tracking-wider">B360_VALIDADOR_POR_EXCEPCION.JPG</span>
                </div>
                <div className="relative aspect-video rounded-sm overflow-hidden bg-slate-950 border border-slate-850">
                  <img
                    src="/images/b3602.jpg"
                    alt="Módulo de Validación B360"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light mt-2 text-center">
                  Módulo de Validación Asistida: Revisión ágil por excepción de campos con firma o datos pendientes de confirmación.
                </p>
              </div>

            </div>

            {/* List of actions inside platform */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-xs text-slate-400">
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">administrar documentos</span>
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">gestionar lotes</span>
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">validar información</span>
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">consultar historial</span>
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">controlar estados</span>
              <span className="px-3 py-2 bg-slate-950/40 rounded-sm border border-slate-850">auditar procesos</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 6: EXPERIENCIA EN ALTA CRITICIDAD */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/10 px-3 py-1.5 rounded-sm">
              RESPALDO Y CREDENCIALES
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Experiencia en operaciones documentales de alta criticidad
            </h2>
            <div className="h-1.5 w-20 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              Nuestra solución ha sido diseñada para soportar procesos documentales complejos dentro del sector financiero, ayudando a mejorar la eficiencia, reducir tareas manuales y fortalecer la trazabilidad de la operación.
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 7: SOLUCIÓN EN FUNCIONAMIENTO (YOUTUBE IFRAME) */}
      <section id="video-section" className="py-20 bg-slate-900 text-white border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
              DEMO EN VIDEO
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Vea la solución en funcionamiento
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Conozca el funcionamiento de la plataforma mediante una demostración real.
            </p>
          </div>

          {/* Video Embebido Youtube */}
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-sm overflow-hidden shadow-2xl relative">
            <div className="aspect-video w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/wcutMg25PLo"
                title="Gestión Documental Inteligente - Finanservy"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES (ACCORDION - CORREGIDO/ACORTADO) */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              RESOLVEMOS SUS DUDAS
            </div>
            <h2 className="font-outfit font-extrabold text-3xl text-[#074875] tracking-tight">
              Preguntas frecuentes
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
          </div>

          {/* Accordion Component using details & summary tags */}
          <div className="space-y-4">
            
            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Qué tipos de documentos puede procesar?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Procesa cheques, letras de cambio, pagarés, contratos, expedientes de crédito, formularios de afiliación, facturas y documentación tributaria.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Puede integrarse con otros sistemas?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Sí. Se conecta de forma segura con sistemas legados, ERPs corporativos y el Core bancario a través de APIs y servicios de mensajería.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Cómo se valida la información?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Mediante un motor de reglas que valida los datos automáticamente. Cualquier inconsistencia o duda se deriva a una cola de validación asistida por excepción.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Cómo se implementa?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                A través de una metodología consultiva que incluye diagnóstico inicial, configuración de reglas, pruebas de integración y despliegue con soporte continuo.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Qué industrias pueden utilizar esta solución?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Está optimizada para banca, seguros, cooperativas y fintech, pero es aplicable a cualquier industria con alta carga operativa documental.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Cómo se garantiza la trazabilidad?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Registrando una bitácora inalterable con cada cambio de estado, hora y usuario, facilitando auditorías regulatorias en tiempo real.
              </div>
            </details>

            <details className="group border-b border-slate-200 py-5">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-outfit font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-[#074875] transition-colors pr-4">
                  ¿Cómo solicitar una demostración?
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
              </summary>
              <div className="mt-3 text-sm text-slate-500 leading-relaxed font-light">
                Haga clic en 'Solicitar demostración' o contáctenos mediante el formulario. Un especialista agendará una sesión adaptada a su proceso.
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* CTA FINAL (Corregido 'operación') */}
      <section className="py-20 bg-slate-900 border-t border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-[#074875] to-slate-900 text-white rounded-md p-10 md:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-blue-800/30">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Descubra cómo transformar su operación documental.
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                Converse con nuestros especialistas y conozca cómo automatizar sus procesos documentales.
              </p>
              <div className="pt-6">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift shadow-lg shadow-[#96C11F]/10"
                >
                  <Calendar className="w-4 h-4" />
                  Solicitar demostración
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
