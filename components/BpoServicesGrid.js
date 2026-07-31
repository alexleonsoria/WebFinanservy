import Image from "next/image";
import Link from "next/link";
import { Files, Cpu, Headphones, ShieldCheck } from "lucide-react";

const services = [
  {
    image: "/images/bpo-documental-card.jpg",
    Icon: Files,
    title: "Gestión Documental e Hiperautomatización",
    desc: "Digitalización masiva con IA para agilizar el procesamiento de cheques, letras y documentos valorados, reduciendo los tiempos de respuesta."
  },
  {
    image: "/images/bpo-administrativo-card.jpg",
    Icon: Cpu,
    title: "Back Office Administrativo & RPA",
    desc: "Optimización de tareas financieras, cuentas por pagar y conciliaciones masivas de escala enterprise."
  },
  {
    image: "/images/bpo-contact-center-card.jpg",
    Icon: Headphones,
    title: "Omnicanalidad Financiera & IA Conversacional",
    desc: "Centrales en la nube y bots inteligentes diseñados para optimizar la resolución de consultas de negocio y soporte operativo de primer nivel."
  },
  {
    image: "/images/bpo-proveedores-card.jpg",
    Icon: ShieldCheck,
    title: "Compliance & Gobernanza Digital",
    desc: "Automatización de la validación de proveedores, control de contratos y cumplimiento de normativas de riesgo vigentes con la plataforma GessDATA."
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
            className="bg-white border border-slate-100 rounded-md shadow-sm hover-lift flex flex-col overflow-visible"
          >
            {/* 1. Contenedor Superior de Imagen */}
            <div className="relative w-full h-48 rounded-t-md overflow-hidden bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                priority={idx === 0}
              />
            </div>

            {/* 2. Botón Flotante Circular Intermedio */}
            <div className="relative flex justify-center">
              <div className="absolute -top-6 w-12 h-12 rounded-full shadow-md bg-white flex items-center justify-center border border-slate-100/50 z-10">
                <Icon className="w-5 h-5 text-[#074875]" />
              </div>
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

              {/* 4. Enlace inferior de conversión a /contacto */}
              <div className="pt-4 mt-6 border-t border-slate-50">
                <Link
                  href="/contacto"
                  className="text-xs font-extrabold text-[#074875] hover:text-[#96C11F] transition-colors inline-block uppercase tracking-wider"
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
