"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  useEffect(() => { document.title = "Contacto — CalculadoraFinancieraX"; }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) return;
    // mailto fallback + local confirmation
    const mailto = `mailto:contacto@calculadorafinancierax.com?subject=Contacto desde la web&body=${encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`
    )}`;
    setSent(true);
    window.open(mailto, "_blank");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--surface)" }}>
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>← CalculadoraFinancieraX</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Contacto</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
          ¿Tienes dudas, sugerencias o quieres reportar un problema? Escríbenos.
        </p>

        {sent ? (
          <div className="p-6 rounded-xl text-center animate-fadeIn" style={{ background: "var(--success-bg)", border: "1px solid rgba(34,197,94,0.2)" }}>
            <p className="text-base font-semibold mb-2" style={{ color: "var(--success)" }}>¡Mensaje enviado! ✅</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Se abrió tu cliente de correo. Solo queda enviarlo. Si no se abrió nada, puedes escribirnos directamente a{" "}
              <a href="mailto:contacto@calculadorafinancierax.com" className="underline" style={{ color: "var(--primary)" }}>
                contacto@calculadorafinancierax.com
              </a>
            </p>
            <button onClick={() => { setSent(false); setForm({ nombre: "", email: "", mensaje: "" }); }}
              className="mt-4 text-sm font-medium underline" style={{ color: "var(--primary)" }}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Nombre</label>
              <input type="text" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2"
                style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
                placeholder="Tu nombre" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2"
                style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
                placeholder="tu@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>Mensaje</label>
              <textarea value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={5}
                className="w-full rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 resize-none"
                style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
                placeholder="Escribe tu mensaje aquí..." required />
            </div>
            <button type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all active:scale-[0.97]"
              style={{ background: "linear-gradient(135deg, var(--primary), #6366f1)", boxShadow: "0 4px 14px var(--primary-glow)" }}>
              Enviar mensaje
            </button>
            <p className="text-xs text-center" style={{ color: "var(--text-tertiary)" }}>
              No almacenamos tus datos en ningún servidor. El mensaje se envía desde tu propio cliente de correo.
            </p>
          </form>
        )}
      </main>
    </div>
  );
}
