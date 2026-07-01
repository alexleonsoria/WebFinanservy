export const metadata = {
  title: "Outsourcing de Procesos Administrativos y Financieros | Finanservy",
  description: "Delegue la gestión de cuentas por pagar, control presupuestario y recobro de carteras morosas a expertos en back office financiero en Ecuador.",
};

export default function ProcesosAdministrativos() {
  return (
    <div className="py-16 md:py-24 space-y-20 bg-slate-50 grid-pattern relative">
      {/* Cabecera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-block text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm">
            Soluciones de Gestión Operativa (CFO Focus)
          </div>
          <div className="tech-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-dot-active" />
            RPA_BACKOFFICE // FINANCIAL_COMPLIANCE
          </div>
        </div>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Procesos Administrativos y Financieros
        </h1>
        <div className="h-1.5 w-16 bg-accent mx-auto rounded-full" />
        <p className="text-slate-500 text-lg max-w-3xl mx-auto font-light">
          Optimizamos la gestión administrativa del back office de su empresa bajo estrictos estándares normativos y fiscales.
        </p>
      </section>

      {/* Áreas Operativas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4 tech-border">
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center font-bold font-mono rounded-sm">01</div>
              <span className="tech-badge-primary">AP_AUTOMATION // SRI</span>
            </div>
            <h3 className="font-outfit font-bold text-xl text-slate-900">Cuentas por Pagar y Proveedores</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automatización de flujos de albaranes, validación fiscal de comprobantes electrónicos autorizados por el SRI, conciliación de saldos y emisión integrada de órdenes de pago bancarias.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4 tech-border">
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center font-bold font-mono rounded-sm">02</div>
              <span className="tech-badge-primary">BUDGET_CONTROL // ERP</span>
            </div>
            <h3 className="font-outfit font-bold text-xl text-slate-900">Control Presupuestario y Contabilidad</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Consolidación de registros auxiliares de compras/ventas, seguimiento de desviaciones en presupuestos operativos por centros de coste, conciliación patrimonial y preparación de cierres auditables.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-sm hover-lift space-y-4 tech-border">
            <div className="flex justify-between items-center">
              <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center font-bold font-mono rounded-sm">03</div>
              <span className="tech-badge-primary">DEBT_RECOVERY // AI</span>
            </div>
            <h3 className="font-outfit font-bold text-xl text-slate-900">Recobro y Carteras Morosas</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Modelos de cobranza preventiva, localización y seguimiento telefónico/digital a clientes morosos, conciliación de pagos recuperados y reportes detallados de antigüedad de deudas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Sección */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-sm space-y-6 tech-border">
          <div className="flex justify-center mb-2">
            <div className="tech-badge-primary">[ QUOTE_CALCULATOR_ACTIVE ]</div>
          </div>
          <h3 className="font-outfit font-bold text-2xl text-slate-900">¿Desea cotizar un servicio de back office mensual?</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Analizamos su volumen transaccional de facturación, compras y contabilidad para diseñar una tarifa flexible por transacción procesada.
          </p>
          <div>
            <a href="/contacto" className="inline-block px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-sm text-xs tracking-wider uppercase transition-all hover-lift">
              Contactar con un Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
