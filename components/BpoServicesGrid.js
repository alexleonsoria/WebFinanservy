import Image from "next/image";
import Link from "next/link";
import { FileDigit, Cpu, Headphones, ShieldCheck } from "lucide-react";

const services = [
  {
    link: "/servicios/gestion-documental",
    image: "/images/bpo-documental-card.jpg",
    Icon: FileDigit,
    title: "Gestión Documental y BPO Inteligente",
    desc: "Digitalización masiva con IA para agilizar procesos de documentos valorados (cheques, letras), reduciendo drásticamente los tiempos de respuesta."
  },
  {
    link: "/servicios/procesos-administrativos",
    image: "/images/bpo-administrativo-card.jpg",
    Icon: Cpu,
    title: "Back Office y Procesos Administrativos Automatizados",
    desc: "Optimización de tareas financieras, facturación, cuentas por pagar y reconciliaciones masivas mediante IA y RPA de escala enterprise."
  },
  {
    link: "/servicios/contact-center-cau",
    image: "/images/bpo-contact-center-card.jpg",
    Icon: Headphones,
    title: "Omnicanalidad Financiera y Mesas de Ayuda con IA",
    desc: "Central telefónica en la nube y bots inteligentes diseñados para optimizar la resolución de consultas de negocio y soporte operativo de primer nivel."
  },
  {
    link: "/servicios/gestion-proveedores",
    image: "/images/bpo-proveedores-card.jpg",
    Icon: ShieldCheck,
    title: "Gobernanza Digital y Compliance de Terceros",
    desc: "Automatización de la validación de proveedores, control de contratos y aseguramiento del cumplimiento de normativas de riesgo vigentes con la plataforma GessDATA."
  }
];

export default function BpoServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
      {services.map((service, idx) => {
        const { Icon } = service;
        return (
          <div
            key={idx}
            className="relative bg-white border border-slate-100 rounded-md shadow-sm hover-lift flex flex-col justify-between overflow-visible"
          >
            {/* 1. Contenedor Superior de Imagen */}
            <div className="relative w-full h-48 rounded-t-md overflow-hidden bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* 2. Icono Flotante Intermedio */}
            <div className="absolute top-[168px] left-6 z-20 w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center border border-slate-100">
              <Icon className="w-5 h-5 text-[#0F172A]" />
            </div>

            {/* 3. Cuerpo de la Tarjeta */}
            <div className="pt-8 px-6 pb-6 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-outfit font-bold text-lg text-[#0F172A] leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* 5. Enlace de Conversión */}
              <div className="pt-4 mt-6 border-t border-slate-50">
                <Link
                  href={service.link}
                  className="text-xs font-bold text-primary hover:text-accent transition-colors inline-block"
                >
                  Saber más →
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
