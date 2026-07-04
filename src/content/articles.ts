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
  // ── Nuevos artículos (7) ──
  {
    slug: "tarjetas-credito-uso-responsable",
    title: "Tarjetas de crédito: cómo usarlas sin caer en deudas",
    desc: "Aprende a aprovechar los beneficios de las tarjetas de crédito sin perder el control de tus finanzas.",
    category: "creditos", date: "2026-06-20", reading: "6 min",
    paragraphs: [
      "Las tarjetas de crédito pueden ser una herramienta útil o una trampa financiera, dependiendo de cómo las uses. La clave está en entender que no es dinero extra, sino un préstamo que debes pagar.",
      "Regla número uno: paga el total de tu estado de cuenta cada mes. Pagar solo el mínimo es la forma más rápida de endeudarte, porque los intereses se acumulan sobre el saldo restante a tasas que suelen superar el 30% anual.",
      "Aprovecha los días de gracia: entre la fecha de compra y la fecha de corte hay normalmente 20-30 días sin intereses. Si pagas todo antes del corte, el crédito es prácticamente gratis.",
      "No uses la tarjeta para gastos que no puedas pagar de contado. Si no tienes el efectivo hoy, probablemente tampoco lo tendrás cuando llegue el corte con intereses acumulados.",
      "Revisa tu cupo disponible como una alerta: si ves que usas más del 50% de tu cupo mes a mes, es señal de que estás dependiendo demasiado del crédito. Ajusta tu presupuesto.",
      "Las tarjetas ofrecen beneficios como millas, puntos y seguros, pero solo valen la pena si pagas el total cada mes. De lo contrario, los intereses superan cualquier beneficio.",
    ],
  },
  {
    slug: "metas-financieras-corto-plazo",
    title: "Metas financieras a corto plazo: cómo cumplirlas sin frustrarte",
    desc: "Estrategias para fijar y alcanzar objetivos de dinero en 3, 6 o 12 meses.",
    category: "ahorro", date: "2026-06-18", reading: "5 min",
    paragraphs: [
      "Las metas financieras a corto plazo (menos de un año) son las más motivadoras porque ves resultados rápido. El truco está en definirlas bien y tener un plan concreto.",
      "Sé específico: en lugar de 'quiero ahorrar más', di 'quiero ahorrar $1,200,000 para diciembre'. Una meta con cifra y fecha es mucho más fácil de cumplir que una vaga.",
      "Divide la meta en partes: si necesitas $1,200,000 en 12 meses, son $100,000 al mes. Eso equivale a $3,333 al día. Cuando ves la cifra diaria, deja de parecer imposible.",
      "Automatiza el ahorro: configura una transferencia automática el día que recibes tu salario. Si el dinero sale antes de que lo veas, no lo extrañas. Así funciona la regla de 'págate a ti primero' que explicamos en nuestro artículo sobre cómo ahorrar más.",
      "Usa cuentas separadas: tener el dinero del viaje o del fondo mezclado con tu cuenta diaria es tentador. Abre una cuenta de ahorros específica para esa meta y no la toques hasta cumplirla.",
      "Celebra cada hito: al llegar al 25%, 50% y 75% de tu meta, date un pequeño gusto (no financiero, ojo). Ver el progreso refuerza el hábito y hace que el sacrificio valga la pena.",
    ],
  },
  {
    slug: "gastos-hormiga-como-identificarlos",
    title: "Gastos hormiga: pequeños drenajes que vacían tu bolsillo",
    desc: "Identifica esos gastos pequeños que pasan desapercibidos pero que, sumados, representan una fortuna al mes.",
    category: "educacion-financiera", date: "2026-06-14", reading: "6 min",
    paragraphs: [
      "Los gastos hormiga son esas pequeñas salidas de dinero que parecen insignificantes: el café de la mañana, una propina aquí, un domicilio allá, una suscripción que casi no usas. Individualmente no duelen, pero sumados pueden representar entre el 10% y el 20% de tus ingresos mensuales.",
      "El primer paso para controlarlos es visibilizarlos. Durante una semana, anota cada gasto menor a $20,000 (o su equivalente en tu moneda). Verás que el café de $5,000 diario son $150,000 al mes, suficientes para pagar un servicio público.",
      "Haz una prueba de 30 días: elige UN gasto hormiga (por ejemplo, comida a domicilio) y elimínalo durante un mes. Solo uno. Verás el impacto real sin sentir que te estás privando de todo.",
      "Las suscripciones son los gastos hormiga más traicioneros porque se descuentan automáticamente. Revisa tu estado de cuenta bancario y cancela todo lo que no uses activamente: streaming, apps, gimnasios, seguros duplicados.",
      "Lleva un registro semanal de estos gastos. No se trata de eliminar todos los pequeños placeres de la vida, sino de elegir conscientemente cuáles valen la pena. Ese café con amigos puede ser importante; el snack de la máquina expendedora, quizás no.",
    ],
  },
  {
    slug: "credito-hipotecario-vs-arriendo",
    title: "¿Crédito hipotecario o arriendo? Cómo decidir financieramente",
    desc: "Analiza los pros y contras de comprar vs alquilar vivienda desde una perspectiva financiera.",
    category: "creditos", date: "2026-06-12", reading: "8 min",
    paragraphs: [
      "La decisión entre comprar vivienda con crédito hipotecario o seguir arrendando es una de las más importantes en las finanzas personales. No hay una respuesta única: depende de tu situación, tu ciudad y tus planes a largo plazo.",
      "Comprar con crédito hipotecario tiene ventajas: el inmueble es tuyo (o del banco hasta que pagues), con el tiempo se revaloriza, y las cuotas construyen patrimonio. Además, en muchos países los intereses son deducibles de impuestos.",
      "Pero también tiene desventajas importantes: el enganche (normalmente 20-30% del valor), los costos de cierre, impuestos prediales, mantenimiento, y el hecho de que durante los primeros años casi todo el pago son intereses, no abono a capital.",
      "Arrendar te da flexibilidad: puedes mudarte si cambias de trabajo o de ciudad, no pagas mantenimiento mayor (el dueño lo cubre), y tu dinero no queda atado a una propiedad. La desventaja es que no estás construyendo patrimonio y el arriendo puede subir cada año.",
      "Una regla práctica: si planeas vivir en el mismo lugar por más de 5-7 años, comprar suele ser mejor financieramente. Si tu horizonte es menor, arrendar es más eficiente porque los costos de transacción de compraventa (comisiones, impuestos, escrituración) se comen cualquier ganancia a corto plazo.",
      "Independientemente de tu decisión, asegúrate de que la cuota mensual del crédito no supere el 30% de tus ingresos. Si vas a arrendar, que el arriendo tampoco pase del 25-30%. Esto aplica tanto para hipoteca como para arriendo, como mencionamos en nuestro artículo de presupuesto mensual.",
    ],
  },
  {
    slug: "etf-vs-fondos-mutuos",
    title: "ETF vs fondos mutuos: cuál elegir para empezar a invertir",
    desc: "Comparación entre dos de los instrumentos de inversión más populares para principiantes.",
    category: "inversion", date: "2026-06-08", reading: "7 min",
    paragraphs: [
      "Si ya tienes tu fondo de emergencia y quieres empezar a invertir, probablemente te topes con dos opciones: ETFs (Exchange Traded Funds) y fondos mutuos (o fondos de inversión colectiva). Ambos te permiten diversificar sin comprar acciones individuales.",
      "Los ETFs son fondos que cotizan en bolsa como si fueran acciones. Puedes comprar y vender durante el día hábil, igual que una acción. Suelen tener comisiones muy bajas (0.03% a 0.20% anual) y no requieren un monto mínimo alto. Son ideales para quienes quieren empezar con poco dinero.",
      "Los fondos mutuos, por otro lado, se compran y venden al cierre del día al valor de la cuota (NAV). No cotizan en bolsa. Sus comisiones suelen ser más altas (1% a 3% anual) porque incluyen gestión activa de un equipo de profesionales que decide qué comprar y vender.",
      "¿Cuál es mejor? Depende de tu perfil. Si eres una persona disciplinada que quiere comisiones mínimas y control total, los ETFs son la mejor opción. Si prefieres que un experto maneje tus inversiones y no quieres pensar en ello, un fondo mutuo puede ser adecuado a pesar de las comisiones más altas.",
      "Para el inversionista principiante, recomendamos empezar con un ETF que siga un índice amplio como el S&P 500 o el MSCI World. Así obtienes diversificación global con una sola compra. A medida que ganes experiencia, puedes explorar fondos sectoriales o temáticos.",
      "Independientemente de tu elección, la clave es la consistencia: invierte una cantidad fija cada mes, sin importar si el mercado sube o baja. Esta estrategia, llamada 'dollar-cost averaging', reduce el riesgo de comprar caro y vender barato.",
    ],
  },
  {
    slug: "monetizar-habilidades-online",
    title: "Cómo monetizar tus habilidades desde casa (sin inversión inicial)",
    desc: "7 formas de generar ingresos extra usando lo que ya sabes hacer, sin gastar un peso.",
    category: "ingresos-adicionales", date: "2026-06-03", reading: "6 min",
    paragraphs: [
      "No necesitas dinero para empezar a generar ingresos adicionales. Solo necesitas una habilidad que alguien más esté dispuesto a pagar. Aquí tienes 7 formas concretas de monetizar lo que ya sabes hacer desde tu casa.",
      "1. Redacción y contenido: si escribes bien, hay miles de empresas y blogs que necesitan artículos, descripciones de producto, guiones para video y contenido para redes sociales. Plataformas como Workana, Upwork y Fiverr tienen cientos de ofertas diarias.",
      "2. Asistente virtual: muchas empresas pequeñas y emprendedores necesitan ayuda con correos, agenda, redes sociales y atención al cliente. Puedes ofrecer tus servicios por horas sin necesidad de experiencia previa.",
      "3. Clases particulares online: si sabes inglés, matemáticas, programación, música o cualquier habilidad práctica, puedes dar clases por Zoom. Plataformas como Preply y Superprof te conectan con estudiantes de todo el mundo.",
      "4. Diseño gráfico básico: no necesitas ser un diseñador profesional para crear imágenes para redes sociales, presentaciones o flyers. Canva es gratuito y los resultados son profesionales. Ofrece tus servicios en grupos de Facebook o LinkedIn.",
      "5. Traducciones: si hablas dos idiomas, puedes ofrecer servicios de traducción. No tiene que ser literatura; muchas empresas necesitan traducir correos, contratos simples o descripciones de producto.",
      "6. Community management: las marcas pequeñas necesitan alguien que responda comentarios, publique contenido y mantenga activas sus redes sociales. Es un trabajo que puedes hacer en pocas horas al día desde tu celular.",
      "7. Venta de productos digitales: crea una plantilla, un checklist, un eBook corto o un set de wallpapers. Lo creas una vez y lo vendes cientos de veces sin costo de inventario. Gumroad, Ko-fi y tu propia página web son excelentes canales.",
      "El denominador común de todas estas opciones es que empiezas con lo que ya tienes: conocimiento, tiempo y conexión a internet. Como dijimos en nuestro artículo de ideas de ingresos adicionales, la clave es dar el primer paso hoy.",
    ],
  },
  {
    slug: "control-gastos-semanales",
    title: "Control de gastos semanales: el método que sí funciona",
    desc: "Un sistema simple para revisar tus gastos cada semana y corregir el rumbo antes de que sea tarde.",
    category: "presupuesto", date: "2026-05-25", reading: "5 min",
    paragraphs: [
      "Hacer un presupuesto mensual está bien, pero esperar 30 días para saber si funcionó es demasiado tarde. Los gastos semanales te permiten corregir el rumbo en tiempo real. Este método transformó la forma en que miles de personas manejan su dinero.",
      "El método es simple: cada domingo, revisa tus gastos de la semana anterior. Usa tu app del banco, tu libreta o la calculadora financiera de CalculadoraFinancieraX. Anota cuánto gastaste en cada categoría y compáralo con lo que habías presupuestado.",
      "Identifica desviaciones: si gastaste $50,000 más de lo planeado en comida fuera, la próxima semana ajusta. Si ahorraste menos de lo previsto, busca un gasto que puedas reducir. La clave es la frecuencia: una revisión semanal toma 5 minutos y evita sorpresas a fin de mes.",
      "Crea la regla de los sobres virtuales: asigna un presupuesto semanal a cada categoría (alimentación, transporte, entretenimiento). Cuando se acaba el dinero de esa semana, no gastas más hasta la siguiente. Puedes hacerlo con efectivo o usando apps que permitan categorizar gastos.",
      "Lleva un registro visual: una hoja de cálculo simple con columnas por semana y filas por categoría. Ver el progreso visualmente es motivador y te da una sensación de control que el presupuesto mensual no proporciona.",
      "Combina este método con la regla 50/30/20 que explicamos en detalle en nuestro blog. La revisión semanal te dirá si estás dentro de los porcentajes recomendados o si necesitas ajustar antes de que termine el mes.",
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
