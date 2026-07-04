import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de — CalculadoraFinancieraX",
  description: "Conoce qué es CalculadoraFinancieraX, para qué sirve y por qué es una herramienta educativa y gratuita.",
};

export default function AcercaDePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--surface)" }}>
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>← CalculadoraFinancieraX</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>Acerca de</h1>

        <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>CalculadoraFinancieraX</strong> es una herramienta web
            gratuita diseñada para ayudarte a entender mejor tus finanzas personales. Nacimos de una idea simple:
            muchas personas quieren organizar su dinero pero no saben por dónde empezar, y las herramientas disponibles
            suelen pedir datos personales, tener costo o ser difíciles de usar.
          </p>

          <p>
            Nuestra calculadora te permite registrar tus ingresos y gastos mensuales para obtener, al instante, un
            panorama claro de tu situación financiera: cuánto gastas, cuánto ahorras, cuánto deberías tener en tu
            fondo de emergencia y cómo se compara tu presupuesto con la regla 50/30/20. Todo esto sin compartir
            ningún dato personal — la información se queda en tu navegador, punto.
          </p>

          <p>
            Además de la calculadora, ofrecemos un{" "}
            <Link href="/blog" style={{ color: "var(--primary)" }} className="underline">blog educativo</Link>{" "}
            con artículos sobre ahorro, inversión, presupuesto, créditos y educación financiera en general.
            Cada artículo está escrito en lenguaje claro y busca darte información útil para tomar decisiones
            informadas con tu dinero.
          </p>

          <h2 className="text-lg font-semibold pt-2" style={{ color: "var(--text-primary)" }}>
            ¿Es esto asesoría financiera?
          </h2>
          <p>
            <strong>No.</strong> CalculadoraFinancieraX es una herramienta educativa e informativa. Los cálculos,
            las reglas de presupuesto y los artículos del blog tienen fines exclusivamente pedagógicos. No
            constituyen asesoría financiera, de inversión, legal ni fiscal. Cada persona tiene una situación
            financiera única, por lo que recomendamos consultar con un asesor certificado antes de tomar decisiones
            importantes sobre tu dinero.
          </p>

          <h2 className="text-lg font-semibold pt-2" style={{ color: "var(--text-primary)" }}>
            Privacidad ante todo
          </h2>
          <p>
            No recopilamos nombres, correos electrónicos ni ningún otro dato personal. No usamos cookies de
            rastreo. Todo lo que ingresas en la calculadora se guarda únicamente en el almacenamiento local de
            tu navegador (localStorage) y nunca se envía a servidores externos. Puedes usar la herramienta con
            total tranquilidad.
          </p>

          <h2 className="text-lg font-semibold pt-2" style={{ color: "var(--text-primary)" }}>
            ¿Por qué existe este proyecto?
          </h2>
          <p>
            Porque creemos que la educación financiera debería ser accesible para todos. No vendemos productos
            financieros, no pedimos tus datos, no tenemos cuentas premium. Nuestro modelo de sostenibilidad se
            basa en publicidad no intrusiva (Google AdSense) que nos permite mantener la herramienta gratis para
            todos los usuarios.
          </p>

          <p>
            ¿Tienes sugerencias, ideas o encontraste un error?{" "}
            <Link href="/contacto" style={{ color: "var(--primary)" }} className="underline">
              Escríbenos
            </Link>
            , nos encanta recibir retroalimentación.
          </p>
        </div>
      </main>
    </div>
  );
}
