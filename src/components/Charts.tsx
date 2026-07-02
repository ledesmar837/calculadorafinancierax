"use client";

import { useFinanzas } from "@/lib/calculations";
import { useCurrency } from "./CurrencyProvider";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const COLORS = { primary: "#818cf8", success: "#22c55e", warning: "#f59e0b", danger: "#ef4444", info: "#3b82f6" };
const PIE_COLORS = ["#818cf8", "#22c55e", "#f59e0b", "#ef4444", "#a855f7"];

export default function Charts() {
  const { calculos, data } = useFinanzas();
  const { format } = useCurrency();

  if (calculos.totalIngresos === 0) return null;

  const pieData = [
    { name: "Gastos fijos", value: calculos.gastosVivienda + calculos.gastosDeudas + calculos.gastosDiarios + data.seguros + data.impuestos },
    { name: "Gastos variables", value: calculos.gastosExtra },
    { name: "Ahorro+Inv", value: data.ahorro + data.inversiones },
    { name: "Disponible", value: Math.max(calculos.disponible, 0) },
  ].filter(d => d.value > 0);

  const barData = [
    { name: "Necesidades", actual: calculos.comparacion5020.necesidades.actual, ideal: calculos.comparacion5020.necesidades.recomendado },
    { name: "Deseos", actual: calculos.comparacion5020.deseos.actual, ideal: calculos.comparacion5020.deseos.recomendado },
    { name: "Ahorro", actual: data.ahorro + data.inversiones, ideal: calculos.comparacion5020.ahorro.recomendado },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card label="Ingresos" value={format(calculos.totalIngresos)} color={COLORS.primary} />
        <Card label="Gastos" value={format(calculos.totalGastos)} color={COLORS.danger} sub={`${calculos.porcentajeGastos.toFixed(1)}%`} />
        <Card label="Disponible" value={format(calculos.disponible)} color={calculos.disponible >= 0 ? COLORS.success : COLORS.danger} />
        <Card label="Ahorro" value={format(data.ahorro + data.inversiones)} color={COLORS.success} sub={`${calculos.porcentajeAhorro.toFixed(1)}%`} />
      </div>

      {calculos.totalGastos > 0 && (
        <div className="p-4 rounded-xl" style={{ background: "var(--info-bg)", border: "1px solid rgba(59,130,246,0.2)" }}>
          <p className="text-xs font-semibold mb-1 flex items-center gap-1" style={{ color: COLORS.info }}>🛡️ Fondo de emergencia recomendado</p>
          <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{format(calculos.fondoEmergencia)}</p>
          <p className="text-[10px] mt-1" style={{ color: "var(--text-secondary)" }}>Equivalente a 6 meses de gastos.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Distribución">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={3} dataKey="value">
                {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip formatter={(v) => format(Number(v))}
                contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-1 text-[10px]" style={{ color: "var(--text-secondary)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />{d.name}
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Regla 50/30/20">
          <p className="text-[10px] mb-2" style={{ color: "var(--text-tertiary)" }}>Referencia general. No es asesoría financiera.</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fill: "var(--text-secondary)", fontSize: 11 }} />
              <YAxis tick={{ fill: "var(--text-secondary)", fontSize: 10 }} />
              <Tooltip formatter={(v) => format(Number(v))}
                contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Bar dataKey="actual" name="Actual" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
              <Bar dataKey="ideal" name="Recomendado" fill={COLORS.warning} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

function Card({ label, value, color, sub }: { label: string; value: string; color: string; icon?: string; sub?: string }) {
  return (
    <div className="p-4 rounded-xl animate-scaleIn" style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
      <p className="text-[10px] font-medium mb-1" style={{ color: "var(--text-tertiary)" }}>{label}</p>
      <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{value}</p>
      {sub && <p className="text-[10px] font-medium mt-0.5" style={{ color }}>{sub}</p>}
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl" style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
      <h4 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>{title}</h4>
      {children}
    </div>
  );
}
