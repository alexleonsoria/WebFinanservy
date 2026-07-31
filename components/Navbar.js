"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src={isScrolled ? "/images/Logo-Finanservy.png" : "/images/Logo-Finanservy-Blanco.png"}
            alt={isScrolled ? "Logo Finanservy Color" : "Logo Finanservy Blanco"}
            width={240}
            height={60}
            className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            priority
          />
        </Link>

        {/* Menú de Navegación (Escritorio) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium text-sm transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={`font-medium text-sm transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/servicios"
            className={`font-medium text-sm transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/casos-exito"
            className={`font-medium text-sm transition-colors ${
              isScrolled
                ? "text-slate-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            }`}
          >
            Casos de Éxito
          </Link>
        </nav>

        {/* Botón CTA (Escritorio) */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className={`font-semibold px-6 py-2.5 rounded-full text-sm transition-all shadow-sm ${
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
            href="/servicios"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/casos-exito"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`font-medium text-base py-2 border-b border-dashed transition-colors ${
              isScrolled ? "border-slate-100 hover:text-blue-600" : "border-slate-800 hover:text-blue-200"
            }`}
          >
            Casos de Éxito
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
