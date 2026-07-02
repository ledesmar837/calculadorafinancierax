import type { Metadata } from "next";
export const metadata: Metadata = { title: "Política de Privacidad — CalculadoraFinancieraX" };

export default function Page() {
  return (<div className="min-h-screen" style={{background:"var(--surface)"}}>
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2" style={{color:"var(--text-primary)"}}>Política de Privacidad</h1>
      <p className="text-sm mb-6" style={{color:"var(--text-tertiary)"}}>Última actualización: julio 2026</p>
      <div className="space-y-4 text-sm" style={{color:"var(--text-secondary)"}}>
        <p><strong>No recopilamos datos personales.</strong> No solicitamos nombre, email, teléfono ni ningún dato identificativo.</p>
        <p>Toda la información financiera que ingreses se guarda exclusivamente en localStorage de tu navegador y nunca sale a ningún servidor.</p>
        <p>Usamos Cloudflare Turnstile para verificación anti-bot. Turnstile puede recopilar información limitada del navegador con fines de seguridad.</p>
        <p>No usamos cookies de rastreo. Este sitio puede mostrar anuncios de Google AdSense; Google puede usar cookies para personalizar anuncios.</p>
        <p>Dado que no almacenamos datos en servidores, no es necesario solicitar acceso o eliminación de datos personales.</p>
      </div>
      <div className="mt-8"><a href="/" className="text-sm font-medium" style={{color:"var(--primary)"}}>← Volver</a></div>
    </div>
  </div>);
}
