"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AgeGate from "@/components/AgeGate";
import Calculator from "@/components/Calculator";
import Charts from "@/components/Charts";
import Report from "@/components/Report";
import ThemeToggle from "@/components/ThemeToggle";
import CurrencySelector from "@/components/CurrencySelector";
import { FinanzasProvider } from "@/lib/calculations";

export default function Home() {
  const [verified, setVerified] = useState(false);

  if (!verified) return <AgeGate onVerified={() => setVerified(true)} />;

  return (
    <FinanzasProvider>
      <div className="min-h-screen" style={{ background: "var(--surface)" }}>
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: "rgba(10,10,15,0.85)", borderColor: "var(--border)" }}>
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--primary-light)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h1 className="text-base font-bold leading-tight" style={{ color: "var(--text-primary)" }}>CalculadoraFinancieraX</h1>
                <p className="text-[10px]" style={{ color: "var(--text-tertiary)" }}>Todo local, nada en servidores</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CurrencySelector />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-3 rounded-lg text-xs text-center"
            style={{ background: "var(--warning-bg)", color: "var(--text-secondary)" }}>
            ⚠️ Herramienta educativa e informativa. No es asesoría financiera profesional.
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div><Calculator /></div>
            <div>
              <Charts />
              <Report />
            </div>
          </div>

          {/* AdSense Space */}
          <div className="mt-10 p-6 rounded-xl text-center" style={{ background: "var(--surface-secondary)", border: "1px dashed var(--border)" }}>
            <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>— Espacio para Google AdSense —</p>
            <p className="text-[10px] mt-1" style={{ color: "var(--text-tertiary)" }}>Anuncio no intrusivo, sin confundir con botones</p>
          </div>

          {/* Footer */}
          <footer className="mt-10 pb-8 text-center">
            <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              <a href="/blog" className="hover:underline" style={{ color: "var(--primary)" }}>Blog</a> ·{" "}
              <a href="/acerca-de" className="hover:underline" style={{ color: "var(--primary)" }}>Acerca de</a> ·{" "}
              <a href="/contacto" className="hover:underline" style={{ color: "var(--primary)" }}>Contacto</a> ·{" "}
              <a href="/privacidad" className="hover:underline" style={{ color: "var(--primary)" }}>Privacidad</a> ·{" "}
              <a href="/terminos" className="hover:underline" style={{ color: "var(--primary)" }}>Términos</a>
            </p>
            <p className="text-[10px] mt-2" style={{ color: "var(--text-tertiary)" }}>
              © 2026 CalculadoraFinancieraX. Datos guardados solo en tu navegador.
            </p>
          </footer>
        </main>
      </div>
    </FinanzasProvider>
  );
}
