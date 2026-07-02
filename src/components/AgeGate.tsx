"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props { onVerified: () => void; }

export default function AgeGate({ onVerified }: Props) {
  const [step, setStep] = useState<"age" | "turnstile" | "blocked">("age");

  useEffect(() => {
    if (step === "turnstile") {
      const t = setTimeout(() => {
        const el = document.getElementById("cf-turnstile");
        if (el && (window as any).turnstile) {
          (window as any).turnstile.render(el, {
            sitekey: "1x00000000000000000000AA",
            callback: (token: string) => { if (token) onVerified(); },
          });
        }
      }, 200);
      return () => clearTimeout(t);
    }
  }, [step, onVerified]);

  return (
    <AnimatePresence mode="wait">
      {step === "age" && (
        <motion.div key="age" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--surface)" }}>
          <div className="w-full max-w-md p-10 text-center animate-scaleIn rounded-2xl"
            style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "var(--primary-light)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>CalculadoraFinancieraX</h1>
            <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
              Tu calculadora financiera personal. Sin registro, sin cuentas. Todo privado en tu navegador.
            </p>
            <p className="text-base font-semibold mb-6" style={{ color: "var(--text-primary)" }}>¿Eres mayor de 18 años?</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => setStep("turnstile")}
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(135deg, var(--primary), #6366f1)", boxShadow: "0 4px 14px var(--primary-glow)" }}>
                Sí
              </button>
              <button onClick={() => setStep("blocked")}
                className="px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                style={{ background: "var(--surface-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                No
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {step === "turnstile" && (
        <motion.div key="turnstile" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--surface)" }}>
          <div className="w-full max-w-md p-10 text-center rounded-2xl"
            style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "var(--primary-light)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <p className="text-base font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Verificación de seguridad</p>
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Interactúa con la calculadora para continuar y confirmar que no eres un bot.
            </p>
            <div id="cf-turnstile" className="flex justify-center"></div>
          </div>
        </motion.div>
      )}

      {step === "blocked" && (
        <motion.div key="blocked" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center p-4" style={{ background: "var(--surface)" }}>
          <div className="w-full max-w-md p-10 text-center rounded-2xl"
            style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "var(--danger-bg)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>Acceso restringido</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Esta herramienta es para mayores de 18 años. Vuelve cuando cumplas el requisito.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
