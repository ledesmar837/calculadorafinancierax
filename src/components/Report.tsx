"use client";

import { useFinanzas } from "@/lib/calculations";
import { useCurrency } from "./CurrencyProvider";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ARTICULOS_RELACIONADOS: Record<string, { titulo: string; desc: string; url: string }[]> = {
  ahorro_bajo: [
    { titulo: "Cómo ahorrar más cada mes (incluso con poco dinero)", desc: "Estrategias para aumentar tu tasa de ahorro.", url: "/blog/como-ahorrar-mas-cada-mes" },
  ],
  fondo_emergencia: [
    { titulo: "Fondo de emergencia: guía completa", desc: "Cuánto necesitas y cómo construirlo.", url: "/blog/fondo-de-emergencia-guia" },
  ],
  deudas: [
    { titulo: "Estrategias para pagar deudas rápido", desc: "Método avalancha vs bola de nieve.", url: "/blog/pagar-deudas-rapido" },
  ],
  presupuesto: [
    { titulo: "Cómo hacer un presupuesto que funcione", desc: "Crea un presupuesto realista.", url: "/blog/presupuesto-mensual-efectivo" },
  ],
  inversion: [
    { titulo: "Inversión para principiantes", desc: "Por dónde empezar a invertir.", url: "/blog/inversion-para-principiantes" },
  ],
  general: [
    { titulo: "Educación financiera básica", desc: "Conceptos que todos deberían saber.", url: "/blog/educacion-financiera-basica" },
    { titulo: "Regla 50/30/20: cómo aplicarla", desc: "La guía de presupuesto más popular.", url: "/blog/regla-50-30-20" },
  ],
};

export default function Report() {
  const { calculos, data } = useFinanzas();
  const { format } = useCurrency();
  const [open, setOpen] = useState(false);

  if (calculos.totalIngresos === 0) return null;

  const totalAhorro = data.ahorro + data.inversiones;
  const insights: { type: "success" | "warning" | "danger" | "info"; icon: string; titulo: string; desc: string }[] = [];

  if (calculos.totalIngresos > 0) {
    const pVivienda = calculos.totalIngresos > 0 ? ((calculos.gastosVivienda / calculos.totalIngresos) * 100).toFixed(0) : "0";
    insights.push({ type: "info", icon: "🏠", titulo: `Gastos de vivienda`, desc: `El ${pVivienda}% de tus ingresos va a vivienda y servicios.` });

    if (calculos.porcentajeAhorro >= 20) {
      insights.push({ type: "success", icon: "🌟", titulo: "Ahorro sólido", desc: `Estás ahorrando el ${calculos.porcentajeAhorro.toFixed(0)}% de tus ingresos. Excelente.` });
    } else if (calculos.porcentajeAhorro >= 10) {
      insights.push({ type: "info", icon: "📈", titulo: "Buen ahorro", desc: `Ahorras el ${calculos.porcentajeAhorro.toFixed(0)}%. Intenta llegar al 20%.` });
    } else if (calculos.porcentajeAhorro > 0) {
      insights.push({ type: "warning", icon: "🐢", titulo: "Ahorro bajo", desc: `Solo ahorras el ${calculos.porcentajeAhorro.toFixed(0)}%. Considera aumentarlo.` });
    } else {
      insights.push({ type: "danger", icon: "🆘", titulo: "Sin ahorro", desc: "No estás destinando nada al ahorro. Prioriza aunque sea un 5%." });
    }

    if (calculos.gastosDeudas > 0) {
      const pDeudas = ((calculos.gastosDeudas / calculos.totalIngresos) * 100).toFixed(0);
      insights.push({ type: pDeudas > "30" ? "danger" : "info", icon: "💳", titulo: "Deudas", desc: `El ${pDeudas}% de tus ingresos se va en créditos y tarjetas.` });
    }

    if (calculos.disponible < 0) {
      insights.push({ type: "danger", icon: "📉", titulo: "Alert", desc: "Gastas más de lo que ingresas. Revisa tu presupuesto urgente." });
    }

    if (calculos.totalGastos > 0) {
      const meses = totalAhorro / calculos.totalGastos;
      if (meses < 3) insights.push({ type: "warning", icon: "⏳", titulo: "Fondo de emergencia", desc: `Tu ahorro cubre ${meses.toFixed(1)} meses. Meta: 3-6 meses.` });
      else insights.push({ type: "success", icon: "🛡️", titulo: "Fondo de emergencia", desc: `Tu ahorro cubre ${meses.toFixed(1)} meses. Bien protegido.` });
    }
  }

  const tags: string[] = [];
  if (calculos.porcentajeAhorro < 10) tags.push("ahorro_bajo");
  if (calculos.porcentajeGastos > 70 || calculos.disponible <= 0) tags.push("presupuesto", "deudas");
  if (calculos.totalGastos > 0 && ((data.ahorro + data.inversiones) / calculos.totalGastos) < 3) tags.push("fondo_emergencia");
  tags.push("inversion", "general");
  const articulos = [...new Set(tags)].slice(0, 4).flatMap(t => ARTICULOS_RELACIONADOS[t] || []).slice(0, 4);

  return (
    <div className="mt-5">
      <button onClick={() => setOpen(!open)}
        className="w-full p-4 rounded-xl font-semibold flex items-center justify-between transition-all hover:opacity-90"
        style={{ background: "linear-gradient(135deg, var(--primary), #6366f1)", color: "white", boxShadow: "0 4px 14px var(--primary-glow)" }}>
        <span>📋 Ver informe personalizado</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }}>▼</motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="p-5 mt-3 rounded-xl space-y-4" style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
              <div className="p-3 rounded-lg text-xs" style={{ background: "var(--warning-bg)", color: "var(--text-secondary)" }}>
                ⚠️ Este informe es orientativo y educativo. No es asesoría financiera profesional.
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { l: "Ingresos", v: format(calculos.totalIngresos) },
                  { l: "Gastos", v: format(calculos.totalGastos) },
                  { l: "Ahorro", v: format(totalAhorro) },
                  { l: "Disponible", v: format(calculos.disponible), c: calculos.disponible < 0 ? "var(--danger)" : "var(--success)" },
                ].map(({ l, v, c }) => (
                  <div key={l} className="p-3 rounded-lg text-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <p className="text-[10px] mb-0.5" style={{ color: "var(--text-tertiary)" }}>{l}</p>
                    <p className="text-sm font-bold" style={{ color: c || "var(--text-primary)" }}>{v}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {insights.map((ins, i) => (
                  <div key={i} className="p-3 rounded-xl animate-slideUp" style={{
                    background: ins.type === "success" ? "var(--success-bg)" : ins.type === "warning" ? "var(--warning-bg)" : ins.type === "danger" ? "var(--danger-bg)" : "var(--info-bg)",
                    border: `1px solid rgba(99,102,241,0.15)`,
                  }}>
                    <p className="font-semibold text-sm"><span>{ins.icon}</span> {ins.titulo}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{ins.desc}</p>
                  </div>
                ))}
              </div>

              {articulos.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>📖 Artículos relacionados</h4>
                  {articulos.map((a, i) => (
                    <a key={i} href={a.url} className="block p-3 rounded-xl mb-2 transition-all hover:opacity-80"
                      style={{ background: "var(--primary-light)", border: "1px solid rgba(129,140,248,0.15)" }}>
                      <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>{a.titulo}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{a.desc}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
