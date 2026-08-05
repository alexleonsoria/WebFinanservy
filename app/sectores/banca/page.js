import Link from "next/link";
import {
  ChevronRight,
  ChevronDown,
  Files,
  Scale,
  Eye,
  Coins,
  UserCheck,
  Cpu,
  Headphones,
  ShieldCheck,
  Check,
  Calendar,
  ArrowRight,
  TrendingUp,
  FileText,
  Workflow,
  Shield,
  Activity,
  Layers
} from "lucide-react";

export const metadata = {
  title: "Soluciones Especializadas para Banca | Finanservy",
  description: "Ayudamos a bancos y entidades financieras a optimizar procesos críticos, mejorar la eficiencia operativa y fortalecer la trazabilidad mediante BPO especializado y automatización inteligente.",
};

export default function BancaSectorPage() {
  
  // Section 1: Challenges
  const challenges = [
    {
      title: "Crecimiento del volumen documental",
      desc: "La digitalización y procesamiento eficiente de grandes flujos de expedientes de crédito, cheques y contratos valorados.",
      icon: Files
    },
    {
      title: "Mayor exigencia regulatoria",
      desc: "Cumplir rigurosamente con normas de auditoría, control de riesgos y KYC sin entorpecer el ritmo de la operación.",
      icon: Scale
    },
    {
      title: "Necesidad de trazabilidad",
      desc: "Garantizar una pista de auditoría inalterable para cada transacción, documento o decisión dentro del flujo operativo.",
      icon: Eye
    },
    {
      title: "Optimización de costos operativos",
      desc: "Reducir gastos redundantes mediante la delegación estructurada y la automatización de procesos repetitivos.",
      icon: Coins
    },
    {
      title: "Mejor experiencia del cliente",
      desc: "Agilizar los tiempos de respuesta en aprobaciones y desembolsos para ofrecer un servicio moderno y ágil.",
      icon: UserCheck
    },
    {
      title: "Transformación digital continua",
      desc: "Integrar tecnologías que complementen los sistemas core heredados sin generar fricciones en la continuidad operativa.",
      icon: Cpu
    }
  ];

  // Section 2: Connected flow
  const flowBlocks = [
    {
      num: "01",
      title: "BPO Especializado",
      desc: "Delegación de procesos de soporte y back office operativo a un equipo con amplio conocimiento del sector financiero."
    },
    {
      num: "02",
      title: "Automatización Inteligente",
      desc: "Integración de reglas de negocio y flujos automáticos para acelerar tareas críticas y evitar errores humanos."
    },
    {
      num: "03",
      title: "Control y Trazabilidad",
      desc: "Monitorización en tiempo real con pistas de auditoría claras que garantizan un total cumplimiento normativo."
    }
  ];

  // Section 3: Solutions portfolio
  const solutions = [
    {
      title: "Gestión Documental Inteligente",
      desc: "Digitalización, clasificación y extracción automatizada de datos de cheques, letras de cambio y expedientes financieros.",
      image: "/images/bpo-documental-card.jpg",
      icon: Files,
      link: "/servicios/gestion-documental"
    },
    {
      title: "Back Office Administrativo",
      desc: "Optimización de flujos de conciliación masiva de transacciones, cuentas por pagar y tareas de soporte operativo de alta criticidad.",
      image: "/images/bpo-administrativo-card.jpg",
      icon: Cpu,
      link: "/servicios/procesos-administrativos"
    },
    {
      title: "IA Conversacional",
      desc: "Canales de atención y asistentes conversacionales entrenados para resolver consultas operativas y dar soporte a clientes e intermediarios.",
      image: "/images/bpo-contact-center-card.jpg",
      icon: Headphones,
      link: "/contacto"
    },
    {
      title: "Compliance & Gobernanza",
      desc: "Validación y control de riesgos de proveedores, auditoría documental y cumplimiento normativo integral de la operación.",
      image: "/images/bpo-proveedores-card.jpg",
      icon: ShieldCheck,
      link: "/contacto"
    }
  ];

  // Section 4: Benefits list
  const benefits = [
    { title: "Mayor eficiencia operativa", desc: "Flujos optimizados que aceleran el procesamiento diario de transacciones." },
    { title: "Reducción de tareas manuales", desc: "Reasignación de recursos a actividades analíticas y de validación asistida." },
    { title: "Mayor trazabilidad", desc: "Registro detallado de cada acción dentro de los flujos de soporte financiero." },
    { title: "Menor riesgo operativo", desc: "Mitigación de errores mediante validación cruzada y automatización del procesamiento." },
    { title: "Operaciones preparadas para crecer", desc: "Capacidad para absorber picos transaccionales sin incrementar la dotación de personal." },
    { title: "Mejor experiencia para clientes internos y externos", desc: "Respuestas rápidas en servicios clave que impulsan la satisfacción global." }
  ];

  // Section 6: Pillars
  const pillars = [
    {
      title: "Conocimiento del negocio financiero",
      desc: "Comprendemos los rigores operativos de la banca y diseñamos servicios alineados con sus necesidades de cumplimiento.",
      icon: Shield
    },
    {
      title: "Operación segura y trazable",
      desc: "Ejecutamos procesos bajo estrictas políticas de seguridad de la información y generamos bitácoras de auditoría en cada etapa.",
      icon: ShieldCheck
    },
    {
      title: "Automatización con propósito",
      desc: "No implementamos tecnología aislada; automatizamos para mejorar la velocidad, mitigar riesgos y liberar capacidad humana.",
      icon: Cpu
    },
    {
      title: "Respaldo del Grupo Cibernos",
      desc: "Contamos con la solidez y experiencia de un grupo empresarial internacional con más de 50 años liderando tecnología y servicios.",
      icon: Activity
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20 md:pt-24">
      
      {/* Dynamic reveal animations styling */}
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
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}} />

      {/* HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center bg-slate-950 border-b border-slate-900 overflow-hidden py-16 md:py-24">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text and Actions */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
              
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono uppercase tracking-wider">
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-400">Sectores</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-[#96C11F] font-semibold">Banca</span>
              </div>

              {/* Tag Label */}
              <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/95 px-3 py-1.5 rounded-sm border border-[#074875]/50">
                SECTOR FINANCIERO
              </div>

              {/* Main Heading */}
              <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                Soluciones especializadas para banca
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light max-w-2xl">
                Ayudamos a bancos y entidades financieras a optimizar procesos críticos, mejorar la eficiencia operativa y fortalecer la trazabilidad mediante BPO especializado y automatización inteligente.
              </p>
              
              {/* Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-block text-center px-8 py-4 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift shadow-lg shadow-[#96C11F]/10"
                >
                  Hablemos de su proyecto
                </Link>
                <a
                  href="#soluciones-seccion"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift"
                >
                  Conocer soluciones
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image (No overlays, rounded corners) */}
            <div className="lg:col-span-5 w-full flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-square max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src="/images/sector-banca-hero.jpg"
                  alt="Operación Bancaria Optimizada"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN 1: LOS DESAFÍOS DE LA BANCA */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              DESAFÍOS OPERATIVOS
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Los desafíos de una operación bancaria moderna
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Las entidades financieras enfrentan una presión constante para ser más eficientes, seguras y ágiles sin comprometer el cumplimiento regulatorio.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/60 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md hover:border-slate-350 transition-all duration-350 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-extrabold text-xl text-slate-800 tracking-tight">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">
                      {challenge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: ¿CÓMO AYUDAMOS? (Flow visual conectado) */}
      <section className="py-20 bg-slate-100/50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              NUESTRO ENFOQUE
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              ¿Cómo apoyamos su transformación?
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Integramos capacidades operativas y tecnológicas para acompañar a su entidad a través de un flujo estructurado de optimización.
            </p>
          </div>

          {/* Connected Flow Elements */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
              
              {/* Block 1 */}
              <div className="lg:col-span-1 bg-white border border-slate-200 p-6 rounded-md shadow-sm hover-lift text-center lg:text-left space-y-3">
                <span className="font-mono text-xs font-bold text-[#96C11F] bg-[#96C11F]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {flowBlocks[0].num}
                </span>
                <h4 className="font-outfit font-extrabold text-lg text-slate-800">
                  {flowBlocks[0].title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {flowBlocks[0].desc}
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="lg:col-span-1 flex justify-center text-[#074875]">
                <ArrowRight className="w-8 h-8 hidden lg:block transform hover:translate-x-1 transition-transform" />
                <ChevronDown className="w-8 h-8 lg:hidden" />
              </div>

              {/* Block 2 */}
              <div className="lg:col-span-1 bg-white border border-slate-200 p-6 rounded-md shadow-sm hover-lift text-center lg:text-left space-y-3">
                <span className="font-mono text-xs font-bold text-[#96C11F] bg-[#96C11F]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {flowBlocks[1].num}
                </span>
                <h4 className="font-outfit font-extrabold text-lg text-slate-800">
                  {flowBlocks[1].title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {flowBlocks[1].desc}
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="lg:col-span-1 flex justify-center text-[#074875]">
                <ArrowRight className="w-8 h-8 hidden lg:block transform hover:translate-x-1 transition-transform" />
                <ChevronDown className="w-8 h-8 lg:hidden" />
              </div>

              {/* Block 3 */}
              <div className="lg:col-span-1 bg-white border border-slate-200 p-6 rounded-md shadow-sm hover-lift text-center lg:text-left space-y-3">
                <span className="font-mono text-xs font-bold text-[#96C11F] bg-[#96C11F]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {flowBlocks[2].num}
                </span>
                <h4 className="font-outfit font-extrabold text-lg text-slate-800">
                  {flowBlocks[2].title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {flowBlocks[2].desc}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: SOLUCIONES PARA BANCA (Portfolio) */}
      <section id="soluciones-seccion" className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              PORTAFOLIO DE SOLUCIONES
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              Un portafolio diseñado para procesos financieros críticos
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Descubra nuestras capacidades especializadas estructuradas para mitigar riesgos, mejorar el servicio e impulsar la excelencia en back office.
            </p>
          </div>

          {/* Custom Solutions Grid (matching Home style cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {solutions.map((solution, idx) => {
              const { icon: Icon } = solution;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-md shadow-sm hover-lift flex flex-col overflow-visible"
                >
                  {/* Image Header */}
                  <div className="relative w-full h-48 rounded-t-md overflow-hidden bg-slate-100">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Circular Icon */}
                  <div className="relative flex justify-center">
                    <div className="absolute -top-6 w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center border border-slate-100/50 z-10">
                      <Icon className="w-5 h-5 text-[#074875]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="pt-8 px-6 pb-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-3 text-left">
                      <h3 className="font-outfit font-bold text-lg text-[#0F172A] leading-snug">
                        {solution.title}
                      </h3>
                      <p className="text-xs text-[#475569] leading-relaxed font-light">
                        {solution.desc}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 mt-6 border-t border-slate-50 text-left">
                      <Link
                        href={solution.link}
                        className="text-xs font-extrabold text-[#074875] hover:text-[#96C11F] transition-colors inline-block uppercase tracking-wider"
                      >
                        Conocer solución →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN 4: BENEFICIOS PARA SU OPERACIÓN */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#96C11F] bg-[#074875]/80 border border-[#074875]/50 px-3 py-1.5 rounded-sm">
              BENEFICIOS OPERACIONALES
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Beneficios para su operación
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              Resultados reales de negocio enfocados en el control y la agilidad de los procesos financieros.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Metric Dashboard Mockup (Premium UI presentation) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-[#96C11F]" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Panel de Monitoreo BPO
                </span>
              </div>

              {/* Simulated Dashboard Widgets */}
              <div className="space-y-4 text-left">
                
                {/* Widget 1 */}
                <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-sm flex items-center justify-between hover:border-[#96C11F]/30 transition-colors">
                  <div>
                    <h5 className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      Estado General
                    </h5>
                    <p className="text-sm font-outfit font-bold text-white mt-0.5">
                      Procesamiento Activo
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-0.5 bg-[#96C11F]/10 text-[#96C11F] rounded-full border border-[#96C11F]/20 font-bold uppercase font-mono">
                    ONLINE
                  </span>
                </div>

                {/* Widget 2 */}
                <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-sm flex items-center justify-between hover:border-[#96C11F]/30 transition-colors">
                  <div>
                    <h5 className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      Trazabilidad de Auditoría
                    </h5>
                    <p className="text-sm font-outfit font-bold text-white mt-0.5">
                      Registro de Flujo Completo
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#96C11F] flex items-center gap-1">
                    <Check className="w-3 h-3" /> ACTIVO
                  </span>
                </div>

                {/* Widget 3 */}
                <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-sm flex items-center justify-between hover:border-[#96C11F]/30 transition-colors">
                  <div>
                    <h5 className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      Mitigación de Riesgos
                    </h5>
                    <p className="text-sm font-outfit font-bold text-white mt-0.5">
                      Reglas de Validación Cruzada
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#96C11F]">
                    100%
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column: Benefits Checklist */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 p-6 rounded-md hover:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#074875]/20 flex items-center justify-center text-[#96C11F] shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="font-outfit font-extrabold text-lg text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 5: EXPERIENCIA EN OPERACIONES FINANCIERAS */}
      <section className="py-20 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
                RESPALDO Y CREDENCIALES
              </div>
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
                Experiencia en operaciones bancarias de alta criticidad
              </h2>
              <div className="h-1.5 w-20 bg-[#96C11F] rounded-full" />
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                FinanServy cuenta con una trayectoria consolidada apoyando procesos operativos críticos del sector financiero mediante servicios de BPO especializado, automatización documental y soluciones tecnológicas orientadas a mejorar la eficiencia y el control operativo.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Nuestra experiencia abarca la estructuración de flujos que protegen la seguridad de la información y garantizan la continuidad de las operaciones, adaptándose a las regulaciones vigentes y la liberación de capacidad analítica para los equipos del banco.
              </p>
            </div>

            {/* Visual element / Image (center operations mockup) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/images/centro_operaciones.jpg"
                  alt="Centro de Operaciones Críticas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 6: ¿POR QUÉ FINANSERVY? */}
      <section className="py-20 bg-slate-100/50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#074875] bg-[#074875]/5 px-3 py-1.5 rounded-sm">
              PILARES ESTRATÉGICOS
            </div>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[#074875] tracking-tight">
              ¿Por qué confiar en FinanServy?
            </h2>
            <div className="h-1.5 w-16 bg-[#96C11F] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              Cuatro pilares clave respaldan la excelencia operativa que entregamos a las entidades financieras.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 p-8 rounded-sm hover:-translate-y-1 hover:shadow-md transition-all duration-350 flex flex-col justify-between"
                >
                  <div className="space-y-4 text-left">
                    <div className="w-12 h-12 bg-[#074875]/10 rounded-sm flex items-center justify-center text-[#074875]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-outfit font-extrabold text-lg text-slate-800 tracking-tight leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA FINAL (Gradient box matching Home) */}
      <section className="py-20 bg-slate-900 border-t border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-[#074875] to-slate-900 text-white rounded-md p-10 md:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl border border-blue-800/30 animate-fade-in-up">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
              <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Conversemos sobre los desafíos de su operación bancaria
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                Nuestros especialistas pueden ayudarle a identificar oportunidades para optimizar procesos críticos y mejorar la eficiencia de su operación.
              </p>
              <div className="pt-6">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#96C11F] hover:bg-accent-hover text-slate-900 font-extrabold rounded-sm text-sm uppercase tracking-wider transition-all hover-lift shadow-lg shadow-[#96C11F]/10"
                >
                  <Calendar className="w-4 h-4" />
                  Hablemos de su proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
