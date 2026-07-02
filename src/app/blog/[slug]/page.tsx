import Link from "next/link";
import { getBySlug, ARTICLES, CATEGORIES } from "@/content/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() { return ARTICLES.map(a => ({ slug: a.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const art = getBySlug(slug);
  if (!art) return { title: "No encontrado" };
  return {
    title: `${art.title} — CalculadoraFinancieraX Blog`,
    description: art.desc,
    openGraph: { title: art.title, description: art.desc, type: "article", publishedTime: art.date },
    twitter: { card: "summary_large_image", title: art.title, description: art.desc },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const art = getBySlug(slug);
  if (!art) notFound();

  return (
    <div className="min-h-screen" style={{ background: "var(--surface)" }}>
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-3xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>← CalculadoraFinancieraX</Link>
          <Link href="/blog" className="text-sm" style={{ color: "var(--primary)" }}>Blog</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-xs mb-5" style={{ color: "var(--text-tertiary)" }}>
          <Link href="/" className="hover:underline" style={{ color: "var(--primary)" }}>Inicio</Link>
          <span className="mx-1.5">›</span>
          <Link href="/blog" className="hover:underline" style={{ color: "var(--primary)" }}>Blog</Link>
          <span className="mx-1.5">›</span>
          <span>{art.title}</span>
        </nav>

        <div className="mb-6">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
            {CATEGORIES[art.category]?.name || art.category}
          </span>
          <h1 className="text-2xl font-bold mt-3 mb-2 leading-tight" style={{ color: "var(--text-primary)" }}>{art.title}</h1>
          <div className="flex gap-3 text-xs" style={{ color: "var(--text-tertiary)" }}>
            <time dateTime={art.date}>{art.date}</time><span>·</span><span>{art.reading}</span>
          </div>
        </div>

        <div className="space-y-4">
          {art.paragraphs.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p}</p>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl text-xs" style={{ background: "var(--warning-bg)", color: "var(--text-secondary)" }}>
          ⚠️ Contenido educativo e informativo. No es asesoría financiera profesional.
        </div>

        <div className="mt-8 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
          <Link href="/blog" className="text-sm font-medium" style={{ color: "var(--primary)" }}>← Ver todos los artículos</Link>
        </div>
      </article>
    </div>
  );
}
