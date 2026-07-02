"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CurrencyCode = "COP" | "USD" | "EUR" | "MXN" | "ARS" | "CLP" | "PEN" | "BRL";

export const CURRENCIES: Record<CurrencyCode, { symbol: string; name: string; locale: string }> = {
  COP: { symbol: "$", name: "Peso Colombiano", locale: "es-CO" },
  USD: { symbol: "$", name: "Dólar", locale: "en-US" },
  EUR: { symbol: "€", name: "Euro", locale: "es-ES" },
  MXN: { symbol: "$", name: "Peso Mexicano", locale: "es-MX" },
  ARS: { symbol: "$", name: "Peso Argentino", locale: "es-AR" },
  CLP: { symbol: "$", name: "Peso Chileno", locale: "es-CL" },
  PEN: { symbol: "S/", name: "Sol Peruano", locale: "es-PE" },
  BRL: { symbol: "R$", name: "Real Brasileño", locale: "pt-BR" },
};

const CurrencyContext = createContext<{
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  format: (amount: number) => string;
  symbol: string;
}>({ currency: "COP", setCurrency: () => {}, format: (n) => `$${n}`, symbol: "$" });

export function useCurrency() { return useContext(CurrencyContext); }

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("COP");

  const setCurrency = (c: CurrencyCode) => setCurrencyState(c);

  const format = (amount: number) => {
    const info = CURRENCIES[currency];
    return new Intl.NumberFormat(info.locale, {
      style: "currency", currency,
      minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, symbol: CURRENCIES[currency].symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}
