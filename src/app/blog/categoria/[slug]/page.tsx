import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/content/articles";
import { notFound } from "next/navigation";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(slug => ({ slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = CATEGORIES[slug];
  if (!cat) notFound();

  const articles = ARTICLES.filter(a => a.category === slug);

  return (
    <div className="min-h-screen" style={{ background: "var(--surface)" }}>
      <header className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>← Inicio</Link>
          <Link href="/blog" className="text-sm" style={{ color: "var(--primary)" }}>Blog</Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{cat.name}</h1>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>{articles.length} artículo{articles.length !== 1 ? "s" : ""}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map(a => (
            <Link key={a.slug} href={`/blog/${a.slug}`}
              className="block p-4 rounded-xl transition-all hover:scale-[1.02]"
              style={{ background: "var(--surface-secondary)", border: "1px solid var(--border)" }}>
              <h2 className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{a.title}</h2>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{a.desc}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
