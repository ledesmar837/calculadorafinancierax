import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/content/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — CalculadoraFinancieraX | Educación Financiera",
  description: "Artículos sobre finanzas personales, ahorro, inversión, presupuesto y educación financiera.",
  openGraph: { title: "Blog — CalculadoraFinancieraX", description: "Artículos sobre finanzas personales." },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--surface)" }}>
      <header className="border-b sticky top-0 z-50 backdrop-blur-xl" style={{ background: "rgba(10,10,15,0.85)", borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-base" style={{ color: "var(--text-primary)" }}>← CalculadoraFinancieraX</Link>
          <nav><Link href="/blog" className="text-sm" style={{ color: "var(--primary)" }}>Blog</Link></nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Blog Financiero</h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>Artículos educativos para tomar mejores decisiones con tu dinero.</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(CATEGORIES).map(([slug, cat]) => (
            <Link key={slug} href={`/blog/categoria/${slug}`}
              className="px-3 py-1 rounded-lg text-xs font-medium transition-all hover:opacity-80"
              style={{ background: "var(--primary-light)", color: "var(--primary)", border: "1px solid rgba(129,140,248,0.15)" }}>
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {ARTICLES.map((art) => (
            <Link key={art.slug} href={`/blog/${art.slug}`}
              className="block p-5 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] animate-slideUp"
              style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                {CATEGORIES[art.category]?.name || art.category}
              </span>
              <h2 className="text-base font-semibold mt-3 mb-2" style={{ color: "var(--text-primary)" }}>{art.title}</h2>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{art.desc}</p>
              <div className="flex gap-3 mt-3 text-xs" style={{ color: "var(--text-tertiary)" }}>
                <span>{art.date}</span><span>·</span><span>{art.reading}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
