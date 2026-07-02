import type { Metadata } from "next";
export const metadata: Metadata = { title: "Términos y Condiciones — CalculadoraFinancieraX" };

export default function Page() {
  return (<div className="min-h-screen" style={{background:"var(--surface)"}}>
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{color:"var(--text-primary)"}}>Términos y Condiciones</h1>
      <p className="text-sm mb-6" style={{color:"var(--text-tertiary)"}}>Última actualización: julio 2026</p>
      <div className="space-y-4 text-sm" style={{color:"var(--text-secondary)"}}>
        <p>Al usar esta herramienta declaras ser mayor de 18 años y aceptas estos términos.</p>
        <p><strong>Naturaleza educativa:</strong> Toda la información es educativa e informativa. No constituye asesoría financiera, de inversión, legal o fiscal.</p>
        <p><strong>Limitación:</strong> No nos responsabilizamos por decisiones financieras basadas en esta herramienta. Consulta siempre a un asesor certificado.</p>
        <p><strong>Precisión:</strong> La herramienta se proporciona "tal cual" sin garantías de exactitud. Los cálculos pueden contener errores.</p>
        <p>Nos reservamos el derecho de modificar estos términos. Los cambios se publicarán en esta página.</p>
      </div>
      <div className="mt-8"><a href="/" className="text-sm font-medium" style={{color:"var(--primary)"}}>← Volver</a></div>
    </div>
  </div>);
}
