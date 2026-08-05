"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolucionesOpen, setIsMobileSolucionesOpen] = useState(false);
  const [isMobileSectoresOpen, setIsMobileSectoresOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar inmediatamente para configurar el estado correcto en caso de carga con scroll previo
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white text-slate-900 shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Corporativo */}
        <div className="flex flex-col items-start justify-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src={isScrolled ? "/images/Logo-Finanservy.png" : "/images/Logo-Finanservy-Blanco.png"}
              alt={isScrolled ? "Logo Finanservy Color" : "Logo Finanservy Blanco"}
              width={240}
              height={60}
              className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>
          <span className={`text-[9px] font-sans tracking-wide mt-0.5 leading-none transition-colors duration-300 font-medium ${
            isScrolled ? "text-slate-500" : "text-white/70"
          }`}>
            Especialistas en BPO Financiero | Grupo Cibernos
          </span>
        </div>

        {/* Menú de Navegación (Escritorio) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className={`font-semibold text-base lg:text-lg transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            Inicio
          </Link>

          {/* Dropdown Soluciones */}
          <div className="relative group">
            <Link
              href="/servicios"
              className={`font-semibold text-base lg:text-lg transition-colors flex items-center gap-1 ${
                isScrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Soluciones <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-sm shadow-xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 p-2">
              <div className="flex flex-col gap-1">
                <Link href="/servicios" className="p-3 text-sm text-[#96C11F] font-bold hover:bg-slate-800 rounded-sm transition-colors border-b border-slate-800/60 mb-1 flex items-center justify-between">
                  Ver todas las Soluciones <ChevronRight className="w-3 h-3" />
                </Link>
                <Link href="/servicios/gestion-documental" className="px-3 py-2 text-sm text-slate-300 hover:text-[#96C11F] font-medium hover:bg-slate-800 rounded-sm transition-colors flex items-center justify-between">
                  Gestión Documental Inteligente
                </Link>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  Back Office Administrativo <span className="text-[9px] uppercase tracking-wider text-[#96C11F] bg-[#96C11F]/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  IA Conversacional <span className="text-[9px] uppercase tracking-wider text-[#96C11F] bg-[#96C11F]/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  Compliance & Gobernanza <span className="text-[9px] uppercase tracking-wider text-[#96C11F] bg-[#96C11F]/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
              </div>
            </div>
          </div>

          {/* Dropdown Sectores */}
          <div className="relative group">
            <span
              className={`font-semibold text-base lg:text-lg transition-colors flex items-center gap-1 cursor-pointer ${
                isScrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Sectores <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </span>
            <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-sm shadow-xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50 p-2">
              <div className="flex flex-col gap-1">
                <Link href="/sectores/banca" className="px-3 py-2 text-sm text-slate-300 hover:text-[#96C11F] font-medium hover:bg-slate-800 rounded-sm transition-colors flex items-center justify-between">
                  Banca
                </Link>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  Seguros <span className="text-[9px] uppercase tracking-wider text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  Cooperativas <span className="text-[9px] uppercase tracking-wider text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
                <span className="px-3 py-2 text-sm text-slate-400 font-medium hover:bg-slate-800/40 rounded-sm cursor-not-allowed opacity-50 flex items-center justify-between">
                  Fintech <span className="text-[9px] uppercase tracking-wider text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-mono font-bold">Próximamente</span>
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/casos-exito"
            className={`font-semibold text-base lg:text-lg transition-colors ${
              isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
            }`}
          >
            Casos de éxito
          </Link>

          <Link
            href="/nosotros"
            className={`font-semibold text-base lg:text-lg transition-colors ${
              isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className={`font-semibold text-base lg:text-lg transition-colors ${
              isScrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
            }`}
          >
            Contacto
          </Link>
        </nav>

        {/* Botón CTA (Escritorio) */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className={`font-semibold px-7 py-3 rounded-full text-base transition-all shadow-sm ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-blue-900 hover:bg-slate-100"
            }`}
          >
            Hablemos de su proyecto
          </Link>
        </div>

        {/* Toggle Menú Móvil */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md focus:outline-none transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                : "text-white hover:text-blue-200 hover:bg-white/10"
            }`}
            aria-label="Abrir Menú"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* Menú Móvil Desplegable */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 border-b shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        } ${
          isScrolled
            ? "bg-white border-slate-100 text-slate-800"
            : "bg-slate-900/98 backdrop-blur-md border-slate-800 text-white"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 font-outfit">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Inicio
          </Link>

          {/* Soluciones Dropdown (Mobile) */}
          <div>
            <div
              onClick={() => setIsMobileSolucionesOpen(!isMobileSolucionesOpen)}
              className={`flex items-center justify-between font-medium text-base py-2 border-b border-dashed cursor-pointer transition-colors ${
                isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
              }`}
            >
              <span>Soluciones</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileSolucionesOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileSolucionesOpen ? "max-h-64 mt-2 pl-4 border-l border-slate-700/30" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-2.5 pb-2 pt-1">
                <Link
                  href="/servicios"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold text-[#96C11F] hover:underline"
                >
                  Ver todas las Soluciones
                </Link>
                <Link
                  href="/servicios/gestion-documental"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-slate-300 font-medium hover:text-white transition-colors"
                >
                  Gestión Documental Inteligente
                </Link>
                <span className="text-sm text-slate-400 font-medium opacity-60">Back Office Administrativo</span>
                <span className="text-sm text-slate-400 font-medium opacity-60">IA Conversacional</span>
                <span className="text-sm text-slate-400 font-medium opacity-60">Compliance & Gobernanza</span>
              </div>
            </div>
          </div>

          {/* Sectores Dropdown (Mobile) */}
          <div>
            <div
              onClick={() => setIsMobileSectoresOpen(!isMobileSectoresOpen)}
              className={`flex items-center justify-between font-medium text-base py-2 border-b border-dashed cursor-pointer transition-colors ${
                isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
              }`}
            >
              <span>Sectores</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileSectoresOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileSectoresOpen ? "max-h-48 mt-2 pl-4 border-l border-slate-700/30" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="flex flex-col gap-2.5 pb-2 pt-1">
                <Link
                  href="/sectores/banca"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-slate-300 font-medium hover:text-white transition-colors"
                >
                  Banca
                </Link>
                <span className="text-sm text-slate-400 font-medium opacity-60">Seguros</span>
                <span className="text-sm text-slate-400 font-medium opacity-60">Cooperativas</span>
                <span className="text-sm text-slate-400 font-medium opacity-60">Fintech</span>
              </div>
            </div>
          </div>

          <Link
            href="/casos-exito"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Casos de éxito
          </Link>

          <Link
            href="/nosotros"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Contacto
          </Link>

          <div className="pt-2">
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-center font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-900 hover:bg-slate-100"
              }`}
            >
              Hablemos de su proyecto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
