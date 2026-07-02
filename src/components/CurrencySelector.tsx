"use client";
import { useCurrency, type CurrencyCode, CURRENCIES } from "./CurrencyProvider";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  return (
    <select value={currency} onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
      className="px-2 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer focus:outline-none focus:ring-2"
      style={{ background: "var(--surface-tertiary)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>
      {Object.entries(CURRENCIES).map(([code, info]) => (
        <option key={code} value={code}>{info.symbol} {code}</option>
      ))}
    </select>
  );
}
