"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    bpoInterest: "gestion-documental",
    volume: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Formulario de Captura de Datos */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-8 md:p-10 rounded-sm shadow-sm space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Contacto Directo B2B</span>
              <h1 className="font-outfit font-extrabold text-3xl text-primary tracking-tight">Solicitar Consultoría Operativa</h1>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete el siguiente formulario y un Ejecutivo Senior se pondrá en contacto con usted en menos de 24 horas laborables.
              </p>
            </div>

            {submitted ? (
              <div className="bg-slate-100 border border-slate-200 p-8 text-center rounded-sm space-y-4 fade-in">
                <div className="text-4xl text-accent">✓</div>
                <h3 className="font-outfit font-bold text-xl text-primary">Solicitud Recibida Correctamente</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Gracias por contactarse con Finanservy Ecuador. Un Ejecutivo Senior del Grupo Cibernos ha sido asignado a su caso y le escribirá al correo corporativo indicado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs text-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-semibold uppercase tracking-wider text-slate-500">Nombre del contacto empresarial *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ej. Ing. Carlos Pérez"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-semibold uppercase tracking-wider text-slate-500">Correo corporativo *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="carlos.perez@banco.com.ec"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-semibold uppercase tracking-wider text-slate-500">Teléfono directo de la organización *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+593 999 999 999"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="role" className="font-semibold uppercase tracking-wider text-slate-500">Cargo del tomador de decisiones *</label>
                    <input
                      id="role"
                      type="text"
                      required
                      placeholder="Ej. Director de Operaciones / CFO"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="font-semibold uppercase tracking-wider text-slate-500">Área de BPO de interés principal</label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    value={formData.bpoInterest}
                    onChange={(e) => setFormData({ ...formData, bpoInterest: e.target.value })}
                  >
                    <option value="gestion-documental">Gestión Documental & CONCILIA PRO</option>
                    <option value="procesos-administrativos">Procesos Administrativos y Financieros</option>
                    <option value="contact-center-cau">Contact Center y CAUs Operativos</option>
                    <option value="gestion-proveedores">Gestión de Proveedores y Compliance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="volume" className="font-semibold uppercase tracking-wider text-slate-500">Descripción del volumen operativo estimado</label>
                  <textarea
                    id="volume"
                    rows={4}
                    placeholder="Detalle aproximado de transacciones, facturas o cheques mensuales a procesar..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold text-sm tracking-wide uppercase transition-all rounded-sm hover-lift cursor-pointer"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Información de Respaldo Lateral */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-slate-900 text-white p-8 rounded-sm space-y-6">
              <h3 className="font-outfit font-bold text-lg text-white">Nuestra Metodología de Transición</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Garantizamos que la migración del servicio no afecte la operación actual de su empresa a través de fases estrictas de transición:
              </p>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <div>
                    <strong>Service Due Diligence:</strong> Auditoría exhaustiva del proceso tal como se realiza actualmente.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <div>
                    <strong>Transferencia Guiada:</strong> Capacitación del equipo de Finanservy y pruebas de integración.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <div>
                    <strong>Desarrollo Operativo:</strong> Despliegue de automatizaciones (RPA/OCR) y control de excepciones.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <div>
                    <strong>Soporte Continuo:</strong> Operación regular bajo niveles de SLA de cumplimiento riguroso.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8 rounded-sm text-center">
              <h4 className="font-outfit font-bold text-sm text-slate-900 mb-2">¿Necesita asistencia telefónica?</h4>
              <p className="text-xs text-slate-500 mb-4">Hable con un consultor corporativo ahora mismo.</p>
              <span className="font-outfit font-extrabold text-lg text-primary">info@finanservy.com.ec</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
