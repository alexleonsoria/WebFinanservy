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
  Check
} from "lucide-react";

export const metadata = {
  title: "Gestión Documental Inteligente | Finanservy",
  description: "Transforme procesos documentales críticos en flujos digitales rápidos, seguros y trazables mediante automatización inteligente para banca y finanzas.",
};

export default function GestionDocumental() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white pt-32 pb-20 relative overflow-hidden grid-pattern-dark border-b border-slate-900">
        {/* Subtle glow layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950/80 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#074875]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mb-8 uppercase tracking-wider">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
                TECNOLOGÍA APLICADA AL NEGOCIO
              </div>
              <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                Gestión Documental Inteligente
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-white font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift"
                >
                  <Play className="w-4 h-4 text-[#96C11F]" />
                  Ver video
                </a>
              </div>
            </div>

            {/* Right Illustration Column (Interactive CSS Dashboard) */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-sm p-6 shadow-2xl backdrop-blur-sm space-y-6">
                
                {/* Simulated window header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#96C11F]/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                    OPERATIONAL DASHBOARD
                  </span>
                </div>

                {/* Workflow Visualization */}
                <div className="space-y-4">
                  
                  {/* Step 1: Input */}
                  <div className="flex items-center justify-between bg-slate-950/60 border border-slate-850 p-3 rounded-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#074875]/20 rounded text-[#074875]">
                        <FileText className="w-5 h-5 text-[#96C11F]" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-300 font-bold">Entrada de Documentos</div>
                        <div className="text-[10px] text-slate-500">PDF, Imágenes, Cheques, Letras</div>
                      </div>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-[#96C11F] bg-[#96C11F]/10 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
                      Captura
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="h-4 border-l border-dashed border-slate-700" />
                  </div>

                  {/* Step 2: Processing Engine */}
                  <div className="flex items-center justify-between bg-slate-950/60 border border-slate-850 p-3 rounded-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#074875]/20 rounded text-blue-400">
                        <Workflow className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-300 font-bold">Motor de Extracción</div>
                        <div className="text-[10px] text-slate-500">Estructuración inteligente de campos</div>
                      </div>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded font-mono font-bold">
                      Lectura
                    </span>
                  </div>

                  {/* Connector Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="h-4 border-l border-dashed border-slate-700" />
                  </div>

                  {/* Step 3: Result */}
                  <div className="flex items-center justify-between bg-slate-950/60 border border-slate-850 p-3 rounded-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#96C11F]/10 rounded text-[#96C11F]">
                        <Database className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-300 font-bold">Validación & Registro</div>
                        <div className="text-[10px] text-slate-500">Integración directa en Core B2B</div>
                      </div>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-[#96C11F] bg-[#96C11F]/15 px-2 py-0.5 rounded font-mono font-bold">
                      Listo
                    </span>
                  </div>

                </div>

                {/* Simulated Metrics Footer */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800 text-center">
                  <div className="bg-slate-950/40 p-2 rounded-sm border border-slate-850">
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Tasa de Precisión</div>
                    <div className="text-sm font-extrabold text-[#96C11F] font-mono mt-0.5">99.8%</div>
                  </div>
                  <div className="bg-slate-950/40 p-2 rounded-sm border border-slate-850">
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-mono">Estado Sistema</div>
                    <div className="text-sm font-extrabold text-blue-400 font-mono mt-0.5">ONLINE</div>
                  </div>
                </div>

              </div>
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

          {/* Grid de 6 Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover-lift flex flex-col justify-between">
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

      {/* SECCIÓN 2: ASÍ TRANSFORMAMOS EL PROCESO (ANTES vs DESPUÉS) */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* ANTES (Operación Tradicional) */}
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/80" />
              <div>
                <h3 className="font-outfit font-extrabold text-2xl text-slate-800 mb-6 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  Operación Tradicional
                </h3>
                <div className="space-y-4">
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-mono text-xs font-bold shrink-0">1</div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-800">Documento</div>
                      <div className="text-xs text-slate-400">Recepción física o digital desordenada</div>
                    </div>
                  </div>
                  <div className="h-6 border-l border-dashed border-red-300 ml-4" />

                  {/* Step 2 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-mono text-xs font-bold shrink-0">2</div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-800">Digitación manual</div>
                      <div className="text-xs text-slate-400">Lectura e ingreso manual campo por campo</div>
                    </div>
                  </div>
                  <div className="h-6 border-l border-dashed border-red-300 ml-4" />

                  {/* Step 3 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-mono text-xs font-bold shrink-0">3</div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-800">Validación</div>
                      <div className="text-xs text-slate-400">Verificación humana visual de firmas y montos</div>
                    </div>
                  </div>
                  <div className="h-6 border-l border-dashed border-red-300 ml-4" />

                  {/* Step 4 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-mono text-xs font-bold shrink-0">4</div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-800">Registro</div>
                      <div className="text-xs text-slate-400">Carga e inserción manual en bases de datos</div>
                    </div>
                  </div>
                  <div className="h-6 border-l border-dashed border-red-300 ml-4" />

                  {/* Step 5 */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-mono text-xs font-bold shrink-0">5</div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-800">Archivo</div>
                      <div className="text-xs text-slate-400">Almacenamiento local aislado o físico</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* DESPUÉS (Flujo Inteligente) */}
            <div className="bg-slate-900 border border-slate-850 rounded-sm p-8 shadow-xl text-white relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#96C11F]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#074875]/5 rounded-full blur-3xl" />
              
              <div>
                <h3 className="font-outfit font-extrabold text-2xl text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#96C11F] animate-pulse" />
                  Solución Inteligente
                </h3>
                <div className="space-y-3">
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 border border-slate-800/80 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 text-[#96C11F] border border-[#074875]/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">1</div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Documento</div>
                      <div className="text-xs text-slate-400">Entrada multicanal digital automática</div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 border border-slate-800/80 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 text-[#96C11F] border border-[#074875]/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">2</div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Lectura inteligente</div>
                      <div className="text-xs text-slate-400">Clasificación automatizada mediante reglas</div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 border border-slate-800/80 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 text-[#96C11F] border border-[#074875]/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">3</div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Extracción automática</div>
                      <div className="text-xs text-slate-400">Captura de campos clave con precisión de 99.8%</div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 border border-slate-800/80 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 text-[#96C11F] border border-[#074875]/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">4</div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Validación asistida</div>
                      <div className="text-xs text-slate-400">Derivación por excepción ante firmas o datos dudosos</div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-center gap-4 bg-slate-950/40 p-2.5 border border-slate-800/80 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 text-[#96C11F] border border-[#074875]/50 flex items-center justify-center font-mono text-xs font-bold shrink-0">5</div>
                    <div>
                      <div className="text-sm font-extrabold text-white">Registro automático</div>
                      <div className="text-xs text-slate-400">Inserción directa sin digitadores en Core bancario</div>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex items-center gap-4 bg-[#074875]/20 p-2.5 border border-[#96C11F]/30 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#96C11F]/20 text-[#96C11F] border border-[#96C11F]/40 flex items-center justify-center font-mono text-xs font-bold shrink-0">6</div>
                    <div>
                      <div className="text-sm font-extrabold text-[#96C11F]">Trazabilidad completa</div>
                      <div className="text-xs text-slate-300">Auditoría inalterable del ciclo del lote en tiempo real</div>
                    </div>
                  </div>

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

          {/* Grid de 8 tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Cheques */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Cheques</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Procesamiento y validación para Cámara de Compensación.</p>
            </div>

            {/* Card 2: Letras */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Letras</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Digitalización, lectura de montos y control de vencimiento.</p>
            </div>

            {/* Card 3: Contratos */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Contratos</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Extracción de cláusulas, firmas y plazos de vigencia.</p>
            </div>

            {/* Card 4: Formularios */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Keyboard className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Formularios</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Captura estructurada de datos de afiliación y KYC.</p>
            </div>

            {/* Card 5: Expedientes */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Expedientes</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Clasificación cruzada de carpetas de clientes y proveedores.</p>
            </div>

            {/* Card 6: Facturas */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Facturas</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Estructuración de montos, impuestos y números de control.</p>
            </div>

            {/* Card 7: Órdenes de compra */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
              <div className="w-10 h-10 bg-[#074875]/20 rounded-sm flex items-center justify-center text-[#96C11F]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-outfit font-extrabold text-lg text-white">Órdenes de compra</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">Matching automático de ítems contra facturas y stock.</p>
            </div>

            {/* Card 8: Documentación tributaria */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm hover:border-[#96C11F]/30 transition-colors space-y-3">
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

          {/* Grid de Beneficios (Dashboard style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Beneficio 1 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm hover-lift flex flex-col justify-between">
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

      {/* SECCIÓN 5: PLATAFORMA QUE SOPORTA LA SOLUCIÓN */}
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Capabilities List */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h3 className="font-outfit font-extrabold text-2xl text-white tracking-tight leading-tight">
                ¿Qué le permite hacer la plataforma?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">1</div>
                  <div>
                    <strong className="text-white">Administrar documentos:</strong> Organización estructurada de archivos recibidos.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">2</div>
                  <div>
                    <strong className="text-white">Gestionar lotes:</strong> Control en bloque de altos volúmenes de expedientes.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">3</div>
                  <div>
                    <strong className="text-white">Validar información:</strong> Reglas de cruce para verificación de montos y firmas.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">4</div>
                  <div>
                    <strong className="text-white">Consultar historial:</strong> Búsqueda instantánea de bitácoras de auditoría anteriores.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">5</div>
                  <div>
                    <strong className="text-white">Controlar estados:</strong> Alertas sobre lotes pendientes o rechazados.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#074875] text-[#96C11F] flex items-center justify-center shrink-0 text-xs font-bold font-mono">6</div>
                  <div>
                    <strong className="text-white">Auditar procesos:</strong> Reportes estructurados para entes reguladores locales.
                  </div>
                </li>
              </ul>
            </div>

            {/* Placeholders for Platform Screenshots */}
            <div className="lg:col-span-7 relative">
              <div className="bg-slate-950 border border-slate-800 rounded-sm p-6 shadow-2xl relative overflow-hidden">
                {/* Platform UI Mockup Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-[#96C11F]/80" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">B360 Document Platform v2.4</span>
                </div>
                {/* Platform UI Content Placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: Document representation */}
                  <div className="border border-dashed border-slate-850 p-4 rounded-sm flex flex-col justify-center items-center h-48 bg-slate-900/20 text-center">
                    <FileText className="w-10 h-10 text-[#96C11F]/60 mb-2" />
                    <span className="text-xs text-slate-400 font-mono font-bold">[Captura real de plataforma]</span>
                    <span className="text-[10px] text-slate-500 mt-1">Lector de Documentos y Cheques</span>
                  </div>
                  {/* Right: Extracted fields representation */}
                  <div className="border border-dashed border-slate-850 p-4 rounded-sm flex flex-col justify-center items-center h-48 bg-slate-900/20 text-center">
                    <Database className="w-10 h-10 text-blue-400/60 mb-2" />
                    <span className="text-xs text-slate-400 font-mono font-bold">[Captura real de plataforma]</span>
                    <span className="text-[10px] text-slate-500 mt-1">Validación de Datos y Estados</span>
                  </div>
                </div>
              </div>
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

      {/* SECCIÓN 7: SOLUCIÓN EN FUNCIONAMIENTO (VIDEO PLACEHOLDER) */}
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

          {/* Video Mockup Player */}
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-sm aspect-video flex items-center justify-center relative group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#074875]/20 to-[#96C11F]/5 group-hover:opacity-80 transition-opacity" />
            
            {/* Play Button Overlay */}
            <div className="relative z-10 w-20 h-20 bg-[#074875]/90 border border-slate-705 hover:border-[#96C11F] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#074875]/50">
              <Play className="w-8 h-8 fill-white ml-1 text-[#96C11F]" />
            </div>

            {/* Placeholder Text */}
            <div className="absolute bottom-4 left-4 right-4 text-center text-xs text-slate-500 font-mono">
              [Espacio preparado para integrar posteriormente el video oficial de YouTube]
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES (ACCORDION) */}
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
                La plataforma está diseñada para capturar y procesar todo tipo de documentos críticos del negocio financiero y empresarial, incluyendo cheques, letras de cambio, pagarés, contratos de crédito, formularios de afiliación, expedientes de clientes, facturas, órdenes de compra y documentación tributaria.
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
                Sí. Se integra de manera segura y transparente con sistemas legados, ERPs corporativos y el Core transaccional del banco mediante APIs de alta velocidad y colas de mensajería seguras, automatizando el registro final de datos.
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
                Utilizamos reglas de negocio avanzadas y validación cruzada automatizada. Cuando el sistema detecta alguna inconsistencia o documento ilegible, este se deriva automáticamente a una cola de validación asistida por excepción para que un especialista valide el dato específico, garantizando cero errores en el Core.
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
                La implementación sigue una metodología ágil y consultiva. Iniciamos con un diagnóstico inicial de sus procesos operativos, configuramos el motor de reglas y la plataforma en ambientes de prueba, realizamos integraciones con sus sistemas y finalmente desplegamos a producción con soporte continuo.
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
                Aunque está especialmente optimizada para las necesidades de alta criticidad, seguridad y compliance del sector financiero (banca, seguros, cooperativas y fintech), cualquier organización con una alta carga documental en sus operaciones puede beneficiarse de esta automatización.
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
                Cada documento procesado genera una bitácora de auditoría inalterable. La plataforma registra quién procesó, cuándo se validó y cada cambio de estado del documento, facilitando reportes en tiempo real listos para auditorías internas y regulatorias.
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
                Puede solicitar una demostración personalizada haciendo clic en el botón 'Solicitar demostración' o completando el formulario en nuestra sección de Contacto. Un especialista operativo se comunicará para coordinar la sesión.
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* CTA FINAL (Home-matched style) */}
      <section className="py-20 bg-slate-900 border-t border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-[#074875] to-slate-900 text-white rounded-md p-10 md:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-blue-800/30">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Descubra cómo transformar su operation documental.
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
