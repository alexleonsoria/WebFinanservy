import Image from "next/image";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "BPO y Externalización de Procesos en Ecuador | Finanservy",
  description: "Socio estratégico en la externalización de procesos de negocio complejos, respaldado por la infraestructura global de Grupo Cibernos.",
  keywords: "BPO Ecuador, Business Process Outsourcing, Grupo Cibernos Ecuador, eficiencia operacional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {/* Header Corporativo */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/images/Logo-Finanservy.png"
                alt="Finanservy Logo"
                width={340}
                height={84}
                className="h-16 w-auto object-contain"
                priority
              />
            </a>

            {/* Menú de Navegación */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
              <a href="/" className="hover:text-primary transition-colors">Inicio</a>
              <a href="/nosotros" className="hover:text-primary transition-colors">Nosotros</a>
              <a href="/servicios" className="hover:text-primary transition-colors">Servicios</a>
              <a href="/casos-exito" className="hover:text-primary transition-colors">Casos de Éxito</a>
              <a href="/contacto" className="px-4 py-2 rounded-sm bg-primary hover:bg-primary-dark text-white font-semibold transition-all hover-lift">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer Institucional */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center">
                  <span className="font-outfit font-extrabold text-2xl text-white tracking-tight">Finan</span>
                  <span className="font-outfit font-extrabold text-2xl text-accent tracking-tight">servy</span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest ml-2 border border-slate-800 px-1 py-0.5 rounded">Ecuador</span>
                </div>
                <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
                  Filial en Ecuador del Grupo Cibernos. Respaldamos su operación con más de 50 años de experiencia global en externalización de procesos e ingeniería tecnológica.
                </p>
              </div>

              <div>
                <h4 className="font-outfit font-semibold text-white mb-4 uppercase tracking-wider text-xs">Enlaces</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                  <li><a href="/servicios" className="hover:text-white transition-colors">Servicios BPO</a></li>
                  <li><a href="/casos-exito" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                  <li><a href="/contacto" className="hover:text-white transition-colors">Contacto B2B</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-outfit font-semibold text-white mb-4 uppercase tracking-wider text-xs">Contacto local</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Quito, Ecuador<br />
                  Grupo Cibernos Corporativo<br />
                  <span className="block mt-2 font-medium text-slate-300">info@finanservy.com.ec</span>
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
              <p>© {new Date().getFullYear()} Finanservy Ecuador. Todos los derechos reservados. Filial de Grupo Cibernos.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-400 transition-colors">Políticas de Privacidad</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Términos de Servicio</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
