"use client";

import { useFinanzas } from "@/lib/calculations";
import { useCurrency } from "./CurrencyProvider";

const INGRESOS_FIELDS = [
  { key: "ingresoMensual", label: "Ingreso mensual", icon: "💰" },
  { key: "ingresosExtra", label: "Ingresos extra", icon: "✨" },
];

const GASTOS_FIELDS = [
  { key: "arriendo", label: "Arriendo / Hipoteca", icon: "🏠", half: true },
  { key: "alimentacion", label: "Alimentación", icon: "🛒", half: true },
  { key: "transporte", label: "Transporte", icon: "🚗", half: true },
  { key: "servicios", label: "Servicios (agua, luz, gas)", icon: "💡", half: true },
  { key: "internet", label: "Internet", icon: "📶", half: true },
  { key: "telefono", label: "Teléfono", icon: "📱", half: true },
  { key: "educacion", label: "Educación", icon: "📚", half: true },
  { key: "salud", label: "Salud", icon: "🏥", half: true },
  { key: "seguros", label: "Seguros", icon: "🛡️", half: true },
  { key: "creditos", label: "Créditos", icon: "🏦", half: true },
  { key: "tarjetas", label: "Tarjetas de crédito", icon: "💳", half: true },
  { key: "entretenimiento", label: "Entretenimiento", icon: "🎮", half: true },
  { key: "compras", label: "Compras", icon: "🛍️", half: true },
  { key: "mascotas", label: "Mascotas", icon: "🐾", half: true },
  { key: "impuestos", label: "Impuestos", icon: "📋", half: true },
  { key: "otrosGastos", label: "Otros gastos", icon: "📦", half: true },
];

const AHORRO_FIELDS = [
  { key: "ahorro", label: "Ahorro mensual", icon: "🐷" },
  { key: "inversiones", label: "Inversiones", icon: "📈" },
];

export default function Calculator() {
  const { data, updateData } = useFinanzas();
  const { format } = useCurrency();

  const handleChange = (key: string, value: string) => {
    const num = Number(value.replace(/[^0-9]/g, "")) || 0;
    updateData({ ...data, [key]: num });
  };

  return (
    <div className="space-y-5">
      {/* Ingresos */}
      <Section title="💰 Ingresos Mensuales">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {INGRESOS_FIELDS.map((f) => (
            <Field key={f.key} label={f.label} icon={f.icon} value={data[f.key as keyof typeof data]} onChange={(v) => handleChange(f.key, v)} format={format} />
          ))}
        </div>
      </Section>

      {/* Gastos */}
      <Section title="📊 Gastos Mensuales">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {GASTOS_FIELDS.map((f) => (
            <Field key={f.key} label={f.label} icon={f.icon} value={data[f.key as keyof typeof data]} onChange={(v) => handleChange(f.key, v)} format={format} />
          ))}
        </div>
      </Section>

      {/* Ahorro */}
      <Section title="🌱 Ahorro e Inversión">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AHORRO_FIELDS.map((f) => (
            <Field key={f.key} label={f.label} icon={f.icon} value={data[f.key as keyof typeof data]} onChange={(v) => handleChange(f.key, v)} format={format} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl animate-fadeIn" style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
      <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text-primary)" }}>{title}</h3>
      {children}
    </div>
  );
}

function Field({ label, icon, value, onChange, format }: {
  label: string; icon: string; value: number; onChange: (v: string) => void; format: (n: number) => string;
}) {
  return (
    <div>
      <label className="flex items-center justify-between text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>
        <span>{icon} {label}</span>
        {value > 0 && <span className="text-[10px]" style={{ color: "var(--text-tertiary)" }}>{format(value)}</span>}
      </label>
      <input type="text" inputMode="numeric" value={value > 0 ? value.toString() : ""}
        onChange={(e) => onChange(e.target.value)} placeholder="0"
        className="w-full px-3 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
        style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}
        aria-label={label} />
    </div>
  );
}
