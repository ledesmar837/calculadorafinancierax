"use client";

import { useMemo, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFinanzas } from "@/lib/calculations";
import { useCurrency } from "./CurrencyProvider";

/* ────────── Step definitions ────────── */
interface Step {
  id: string;
  title: string;
  icon: string;
  hint: string;
  fields: { key: string; label: string; icon: string }[];
}

const STEPS: Step[] = [
  {
    id: "ingresos",
    title: "Ingresos",
    icon: "💰",
    hint: "¿Cuánto dinero recibes al mes? Suma tu salario, freelances y cualquier otro ingreso.",
    fields: [
      { key: "ingresoMensual", label: "Ingreso mensual", icon: "💼" },
      { key: "ingresosExtra", label: "Ingresos extra", icon: "✨" },
    ],
  },
  {
    id: "gastos-fijos",
    title: "Gastos fijos",
    icon: "📋",
    hint: "Estos son los gastos que se repiten cada mes y son difíciles de evitar.",
    fields: [
      { key: "arriendo", label: "Arriendo / Hipoteca", icon: "🏠" },
      { key: "alimentacion", label: "Alimentación", icon: "🛒" },
      { key: "transporte", label: "Transporte", icon: "🚗" },
      { key: "servicios", label: "Servicios", icon: "💡" },
      { key: "internet", label: "Internet", icon: "📶" },
      { key: "telefono", label: "Teléfono", icon: "📱" },
      { key: "salud", label: "Salud", icon: "🏥" },
      { key: "seguros", label: "Seguros", icon: "🛡️" },
      { key: "creditos", label: "Créditos", icon: "🏦" },
      { key: "tarjetas", label: "Tarjetas", icon: "💳" },
      { key: "impuestos", label: "Impuestos", icon: "📋" },
      { key: "mascotas", label: "Mascotas", icon: "🐾" },
    ],
  },
  {
    id: "gastos-variables",
    title: "Gastos variables",
    icon: "🎯",
    hint: "Gastos que cambian mes a mes. Aquí tienes más margen de ajuste.",
    fields: [
      { key: "educacion", label: "Educación", icon: "📚" },
      { key: "entretenimiento", label: "Entretenimiento", icon: "🎮" },
      { key: "compras", label: "Compras", icon: "🛍️" },
      { key: "otrosGastos", label: "Otros gastos", icon: "📦" },
    ],
  },
  {
    id: "ahorro",
    title: "Ahorro e inversión",
    icon: "🌱",
    hint: "Lo que guardas para tu futuro. Cada peso ahorrado es un paso hacia tu libertad financiera.",
    fields: [
      { key: "ahorro", label: "Ahorro mensual", icon: "🐷" },
      { key: "inversiones", label: "Inversiones", icon: "📈" },
    ],
  },
];

const TOTAL_STEPS = STEPS.length;

/* ────────── Main component ────────── */
export default function Calculator() {
  const { data, updateData, calculos } = useFinanzas();
  const { format } = useCurrency();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const current = STEPS[step];

  const handleChange = useCallback(
    (key: string, value: string) => {
      const num = Number(value.replace(/[^0-9]/g, "")) || 0;
      updateData({ ...data, [key]: num });
    },
    [data, updateData]
  );

  const canGoNext = useMemo(() => {
    const s = STEPS[step];
    // Allow going next even if fields are empty - user can skip
    return true;
  }, [step]);

  const goNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setDone(true);
      setTimeout(() => {
        document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="space-y-4">
      {/* Mini resumen fijo */}
      {calculos.totalIngresos > 0 && (
        <div className="p-3 rounded-xl flex items-center justify-between text-sm"
          style={{ background: "var(--primary-light)", border: "1px solid rgba(129,140,248,0.2)" }}>
          <span style={{ color: "var(--text-secondary)" }}>Disponible:</span>
          <span className="font-bold" style={{ color: calculos.disponible >= 0 ? "var(--success)" : "var(--danger)" }}>
            {format(calculos.disponible)}
          </span>
        </div>
      )}

      {/* Barra de progreso */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-tertiary)" }}>
          <span>{current.icon} {current.title}</span>
          <span>Paso {step + 1} de {TOTAL_STEPS}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface-tertiary)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--primary)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Tarjeta del paso actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="rounded-xl p-5"
          style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}
        >
          {/* Hint */}
          <p className="text-xs mb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {current.hint}
          </p>

          {/* Campos */}
          <div className="space-y-0">
            {current.fields.map((f) => (
              <WizardField
                key={f.key}
                label={f.label}
                icon={f.icon}
                value={data[f.key as keyof typeof data] as number}
                onChange={(v) => handleChange(f.key, v)}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación */}
      <div className="flex gap-3 pt-1">
        {step > 0 && (
          <button onClick={goBack}
            className="flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.97]"
            style={{ background: "var(--surface-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
            ← Atrás
          </button>
        )}
        <button onClick={goNext}
          className="flex-1 py-3.5 rounded-xl font-semibold text-sm text-white transition-all active:scale-[0.97]"
          style={{ background: "linear-gradient(135deg, var(--primary), #6366f1)", boxShadow: "0 4px 14px var(--primary-glow)" }}>
          {step < TOTAL_STEPS - 1 ? "Siguiente →" : "✨ Ver mi resultado"}
        </button>
      </div>

      {/* Anchor para resultados */}
      <div id="resultados" />
    </div>
  );
}

/* ────────── Field component (mobile-first tactile) ────────── */
function WizardField({
  label,
  icon,
  value,
  onChange,
}: {
  label: string;
  icon: string;
  value: number;
  onChange: (v: string) => void;
}) {
  const display = value > 0 ? value.toString() : "";
  const { format, symbol } = useCurrency();

  return (
    <div className="mb-0 last:mb-0">
      <label className="flex items-center justify-between text-xs mb-1.5 px-0.5" style={{ color: "var(--text-secondary)" }}>
        <span>{icon} {label}</span>
        {value > 0 && <span className="text-[10px]" style={{ color: "var(--text-tertiary)" }}>{format(value)}</span>}
      </label>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`${symbol} 0`}
        className="w-full rounded-xl text-base font-medium transition-all focus:outline-none focus:ring-2"
        style={{
          height: "52px",
          padding: "0 16px",
          background: "var(--surface)",
          color: "var(--text-primary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
        }}
        aria-label={label}
      />
    </div>
  );
}
