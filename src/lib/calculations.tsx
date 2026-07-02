"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export interface FinanzasData {
  ingresoMensual: number;
  ingresosExtra: number;
  arriendo: number;
  alimentacion: number;
  transporte: number;
  servicios: number;
  internet: number;
  telefono: number;
  educacion: number;
  salud: number;
  seguros: number;
  creditos: number;
  tarjetas: number;
  entretenimiento: number;
  compras: number;
  mascotas: number;
  impuestos: number;
  ahorro: number;
  inversiones: number;
  otrosGastos: number;
}

const DATA_KEY = "cfx-data";

const defaultData: FinanzasData = {
  ingresoMensual: 0, ingresosExtra: 0, arriendo: 0, alimentacion: 0,
  transporte: 0, servicios: 0, internet: 0, telefono: 0, educacion: 0,
  salud: 0, seguros: 0, creditos: 0, tarjetas: 0, entretenimiento: 0,
  compras: 0, mascotas: 0, impuestos: 0, ahorro: 0, inversiones: 0, otrosGastos: 0,
};

export interface Calculos {
  totalIngresos: number;
  totalGastos: number;
  disponible: number;
  porcentajeAhorro: number;
  porcentajeGastos: number;
  fondoEmergencia: number;
  gastosVivienda: number;
  gastosDeudas: number;
  gastosDiarios: number;
  gastosExtra: number;
  comparacion5020: {
    necesidades: { actual: number; recomendado: number; dif: number };
    deseos: { actual: number; recomendado: number; dif: number };
    ahorro: { actual: number; recomendado: number; dif: number };
  };
}

export function calcular(data: FinanzasData): Calculos {
  const totalIngresos = data.ingresoMensual + data.ingresosExtra;
  const totalGastos = data.arriendo + data.alimentacion + data.transporte +
    data.servicios + data.internet + data.telefono + data.educacion +
    data.salud + data.seguros + data.creditos + data.tarjetas +
    data.entretenimiento + data.compras + data.mascotas + data.impuestos +
    data.otrosGastos;
  const totalAhorroInv = data.ahorro + data.inversiones;
  const disponible = totalIngresos - totalGastos - totalAhorroInv;
  const porcentajeGastos = totalIngresos > 0 ? (totalGastos / totalIngresos) * 100 : 0;
  const porcentajeAhorro = totalIngresos > 0 ? (totalAhorroInv / totalIngresos) * 100 : 0;
  const fondoEmergencia = totalGastos > 0 ? totalGastos * 6 : 0;
  const gastosVivienda = data.arriendo + data.servicios + data.internet + data.telefono;
  const gastosDeudas = data.creditos + data.tarjetas;
  const gastosDiarios = data.alimentacion + data.transporte + data.salud + data.mascotas;
  const gastosExtra = data.entretenimiento + data.compras + data.educacion + data.otrosGastos;

  const necesidades = data.arriendo + data.servicios + data.internet + data.telefono +
    data.alimentacion + data.transporte + data.salud + data.seguros + data.impuestos +
    data.creditos + data.tarjetas + data.mascotas;
  const deseos = data.educacion + data.entretenimiento + data.compras + data.otrosGastos;

  return {
    totalIngresos, totalGastos, disponible, porcentajeAhorro, porcentajeGastos,
    fondoEmergencia, gastosVivienda, gastosDeudas, gastosDiarios, gastosExtra,
    comparacion5020: {
      necesidades: { actual: necesidades, recomendado: totalIngresos * 0.5, dif: necesidades - totalIngresos * 0.5 },
      deseos: { actual: deseos, recomendado: totalIngresos * 0.3, dif: deseos - totalIngresos * 0.3 },
      ahorro: { actual: totalAhorroInv, recomendado: totalIngresos * 0.2, dif: totalAhorroInv - totalIngresos * 0.2 },
    },
  };
}

const FinanzasContext = createContext<{
  data: FinanzasData; calculos: Calculos;
  updateData: (d: FinanzasData) => void; resetData: () => void;
}>({ data: defaultData, calculos: calcular(defaultData), updateData: () => {}, resetData: () => {} });

export function useFinanzas() { return useContext(FinanzasContext); }

export function FinanzasProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FinanzasData>(defaultData);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(DATA_KEY);
      if (stored) { setData(JSON.parse(stored)); }
    } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  const updateData = useCallback((d: FinanzasData) => {
    setData(d);
    try { localStorage.setItem(DATA_KEY, JSON.stringify(d)); } catch { /* ignore */ }
  }, []);

  const resetData = useCallback(() => {
    setData(defaultData);
    try { localStorage.removeItem(DATA_KEY); } catch { /* ignore */ }
  }, []);

  const calculos = calcular(data);
  if (!loaded) return <>{children}</>;

  return (
    <FinanzasContext.Provider value={{ data, calculos, updateData, resetData }}>
      {children}
    </FinanzasContext.Provider>
  );
}
