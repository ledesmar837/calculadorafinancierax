export interface Article {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  reading: string;
  paragraphs: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "como-ahorrar-mas-cada-mes",
    title: "Cómo ahorrar más cada mes (incluso con poco dinero)",
    desc: "Estrategias prácticas para aumentar tu tasa de ahorro sin sacrificar calidad de vida.",
    category: "ahorro", date: "2026-06-15", reading: "5 min",
    paragraphs: [
      "Ahorrar no se trata de cuánto ganas, sino de cuánto decides conservar. Pequeños hábitos diarios, sumados, transforman tus finanzas.",
      "Aplica la regla de 'págate a ti primero': al recibir tus ingresos, separa automáticamente un porcentaje (aunque sea 5%) en una cuenta de ahorro. No esperes a ver 'lo que sobra' al final del mes.",
      "Revisa tus suscripciones mensuales. Es común pagar por servicios que ya no usas: streaming, gimnasios, apps. Cancela lo que no uses.",
      "Usa la técnica de redondeo: cada compra, redondea al múltiplo de 1,000 más cercano y guarda la diferencia. Con el tiempo se acumula sin que lo sientas.",
      "Establece metas concretas: un viaje, el enganche de una casa, tu fondo de emergencia. Tener un propósito claro hace que el sacrificio valga la pena.",
    ],
  },
  {
    slug: "fondo-de-emergencia-guia",
    title: "Fondo de emergencia: cuánto necesitas y cómo construirlo",
    desc: "Guía paso a paso para crear tu colchón financiero de 3 a 6 meses de gastos.",
    category: "finanzas-personales", date: "2026-06-10", reading: "6 min",
    paragraphs: [
      "Un fondo de emergencia es tu red de seguridad: dinero guardado para imprevistos como reparaciones, emergencias médicas o pérdida de empleo.",
      "La recomendación es tener entre 3 y 6 meses de tus gastos mensuales. Si gastas $1,000,000 COP al mes, tu meta sería entre $3,000,000 y $6,000,000 COP.",
      "Empieza con una meta pequeña: tu primer objetivo puede ser $500,000 COP. Al alcanzarlo, notarás tranquilidad. Luego duplica la meta.",
      "Mantén este dinero separado de tu cuenta diaria, en un depósito de alta liquidez que puedas retirar sin penalización.",
      "No uses tu fondo de emergencia para gastos planificados. Las vacaciones, regalos o reparaciones menores no son emergencias.",
    ],
  },
  {
    slug: "pagar-deudas-rapido",
    title: "Estrategias para pagar deudas rápido",
    desc: "Método avalancha vs bola de nieve. Comparativa de los dos métodos más efectivos.",
    category: "creditos", date: "2026-06-05", reading: "7 min",
    paragraphs: [
      "Salir de deudas es clave para recuperar tu libertad financiera. Dos métodos comprobados: avalancha y bola de nieve.",
      "Método avalancha: prioriza las deudas con mayor tasa de interés. Matemáticamente es más eficiente, pagas menos intereses totales.",
      "Método bola de nieve: prioriza las deudas más pequeñas primero. Psicológicamente es más motivador porque ves resultados rápidos.",
      "Ejemplo: una tarjeta con $500,000 al 36% anual vs un préstamo de $2,000,000 al 20%. Avalancha apunta a la tarjeta por la tasa, bola de nieve también por ser más pequeña.",
      "Ambos funcionan. Elige el que se adapte a tu personalidad y mantén la constancia. Considera consolidar deudas si obtienes una tasa más baja.",
    ],
  },
  {
    slug: "presupuesto-mensual-efectivo",
    title: "Cómo hacer un presupuesto mensual que funcione",
    desc: "Crea un presupuesto realista adaptado a tus ingresos y metas.",
    category: "presupuesto", date: "2026-05-28", reading: "5 min",
    paragraphs: [
      "Un presupuesto no es una camisa de fuerza, es una herramienta para que tu dinero trabaje para ti.",
      "Primer paso: suma todos tus ingresos netos mensuales. Segundo: registra cada gasto durante un mes, incluyendo el café y las suscripciones.",
      "Clasifica en fijos (vivienda, servicios, deudas) y variables (comida fuera, entretenimiento). Los variables son donde tienes margen de ajuste.",
      "Aplica la regla 50/30/20 como guía: 50% necesidades, 30% deseos, 20% ahorro. Ajusta los porcentajes según tu realidad.",
      "Revisa tu presupuesto cada mes. No se trata de perfección, sino de consistencia. Cada mes es una oportunidad para mejorar.",
    ],
  },
  {
    slug: "inversion-para-principiantes",
    title: "Inversión para principiantes: por dónde empezar",
    desc: "Los primeros pasos para invertir tu dinero de forma segura.",
    category: "inversion", date: "2026-05-20", reading: "8 min",
    paragraphs: [
      "Invertir puede parecer abrumador, pero no necesitas ser experto en bolsa para empezar. Lo importante es dar el primer paso.",
      "Antes de invertir, asegúrate de tener: fondo de emergencia de 3-6 meses, deudas de alto interés bajo control, y un presupuesto que te permita destinar una cantidad mensual.",
      "Empieza con instrumentos de bajo riesgo: CETES, TES, fondos de inversión conservadores. La meta inicial es vencer la inflación.",
      "Luego explora ETFs diversificados, acciones de empresas sólidas, o criptomonedas con mucho cuidado y solo lo que estés dispuesto a perder.",
      "El interés compuesto es tu mejor aliado: invertir $200,000 COP al mes durante 20 años al 8% anual puede generar más de $110,000,000 COP.",
    ],
  },
  {
    slug: "ideas-ingresos-adicionales",
    title: "10 ideas de ingresos adicionales",
    desc: "Formas comprobadas de generar dinero extra desde casa.",
    category: "ingresos-adicionales", date: "2026-05-15", reading: "6 min",
    paragraphs: [
      "Depender de una sola fuente de ingresos es riesgoso. Diversificar tus entradas te da estabilidad.",
      "1. Freelance online en Workana, Upwork o Fiverr. 2. Vende productos digitales (plantillas, cursos, guías).",
      "3. Clases particulares online. 4. Comercio electrónico con poco inventario. 5. Marketing de afiliados.",
      "6. Alquila una habitación en Airbnb. 7. Conduce para apps de transporte. 8. Inversión en dividendos.",
      "9. Desarrolla apps o webs pequeñas. 10. Crea contenido digital (YouTube, blog, TikTok).",
    ],
  },
  {
    slug: "educacion-financiera-basica",
    title: "Educación financiera: conceptos básicos",
    desc: "Domina los fundamentos: interés compuesto, inflación y más.",
    category: "educacion-financiera", date: "2026-05-10", reading: "7 min",
    paragraphs: [
      "La educación financiera te permite tomar decisiones informadas sobre tu dinero. No se enseña en escuelas pero es esencial.",
      "Interés compuesto: el interés que genera interés. Invertir $1,000,000 al 10% anual: año 1 ganas $100,000, año 2 ganas sobre $1,100,000.",
      "Inflación: el aumento general de precios. Al 5% anual, tu dinero pierde ese porcentaje de poder adquisitivo cada año.",
      "Riesgo y rendimiento: a mayor rendimiento potencial, mayor riesgo. Desconfía de promesas de ganancias extraordinarias con riesgo bajo.",
      "Diversificación: no pongas todos los huevos en una canasta. Distribuye entre efectivo, bonos, acciones y bienes raíces.",
    ],
  },
  {
    slug: "regla-50-30-20",
    title: "Regla 50/30/20: cómo aplicarla a tu presupuesto",
    desc: "La guía de presupuesto más popular del mundo, explicada paso a paso.",
    category: "presupuesto", date: "2026-05-05", reading: "5 min",
    paragraphs: [
      "La regla 50/30/20 de Elizabeth Warren es una guía simple y poderosa para estructurar tus finanzas.",
      "50% para necesidades: vivienda, alimentos, transporte, servicios, salud y pagos mínimos de deudas.",
      "30% para deseos: comer fuera, suscripciones, viajes, ropa, entretenimiento. Categoría con más margen de ajuste.",
      "20% para ahorro e inversión: fondo de emergencia, metas a largo plazo, inversiones y pago adelantado de deudas.",
      "La regla es una guía, no una ley. Si tus necesidades son el 60%, ajusta gradualmente hasta encontrar tu equilibrio.",
    ],
  },
];

export const CATEGORIES: Record<string, { name: string }> = {
  "finanzas-personales": { name: "Finanzas Personales" },
  presupuesto: { name: "Presupuesto" },
  ahorro: { name: "Ahorro" },
  inversion: { name: "Inversión" },
  creditos: { name: "Créditos" },
  "educacion-financiera": { name: "Educación Financiera" },
  "ingresos-adicionales": { name: "Ingresos Adicionales" },
};

export function getBySlug(slug: string) { return ARTICLES.find(a => a.slug === slug); }
