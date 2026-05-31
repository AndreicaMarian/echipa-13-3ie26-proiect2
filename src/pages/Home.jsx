import { Link } from 'react-router-dom'
import { produse, categorii, articole } from '../data/mockData'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

export default function Home() {
  const featured = produse.filter(p => p.featured).slice(0, 4)
  const latestPosts = articole.slice(0, 2)

  return (
    <main>
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-brown/60 dark:bg-charcoal/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <p className="font-heading text-wheat text-lg mb-4 tracking-widest uppercase">
            🌾 Din 2015, zilnic proaspăt
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Pâine cu suflet,<br />
            <span className="text-wheat italic">coptă cu pasiune</span>
          </h1>
          <p className="font-body text-white/80 text-xl max-w-xl mb-10 leading-relaxed">
            Brutăria Artizanală – produse de panificație și patiserie realizate manual,
            fără aditivi, din ingrediente locale selecționate.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/produse" className="btn-primary text-lg px-8 py-4">
              Vezi Produsele
            </Link>
            <Link to="/despre" className="btn-outline border-white text-white hover:bg-white hover:text-brown text-lg px-8 py-4">
              Povestea Noastră
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce text-2xl">↓</div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────────────── */}
      <section className="bg-warm text-white py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[['10+', 'Ani de experiență'], ['50+', 'Produse zilnice'], ['500+', 'Clienți fideli'], ['0', 'Aditivi folosiți']].map(([nr, label]) => (
            <div key={label}>
              <div className="font-display text-3xl font-bold">{nr}</div>
              <div className="font-body text-white/80 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categorii ───────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Categoriile Noastre</h2>
          <p className="section-subtitle">Explorează gama completă de produse artizanale</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categorii.map(cat => (
            <Link
              key={cat.id}
              to={`/produse?categorie=${cat.slug}`}
              className="card p-6 text-center group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h3 className="font-heading font-bold text-brown dark:text-cream text-lg mb-2">{cat.nume}</h3>
              <p className="font-body text-sm text-brown/60 dark:text-cream/50">{cat.descriere}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ────────────────────────────────────────── */}
      <section className="bg-wheat/20 dark:bg-brown/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title mb-2">Produse Recomandate</h2>
              <p className="section-subtitle">Cele mai iubite produse ale brutăriei</p>
            </div>
            <Link to="/produse" className="btn-outline hidden md:inline-flex">
              Vezi toate →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p.id} produs={p} />)}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/produse" className="btn-outline">Vezi toate produsele →</Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">De ce Brutăria Artizanală?</h2>
            <ul className="space-y-5">
              {[
                ['🌾', 'Ingrediente Naturale', 'Folosim exclusiv făinuri de la mori locale, apă de izvor și drojdie sălbatică.'],
                ['⏰', 'Fermentare Lentă', 'Aluaturile noastre fermentează minim 12 ore pentru gust și textură superioară.'],
                ['🔥', 'Copt pe Piatră', 'Cuptoarele noastre speciale cu vatră din piatră refractară asigură crusta perfectă.'],
                ['❤️', 'Cu Drag și Pasiune', 'Fiecare produs este modelat și copt manual de brutarii noștri cu experiență.'],
              ].map(([icon, titlu, desc]) => (
                <li key={titlu} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h4 className="font-heading font-bold text-brown dark:text-cream">{titlu}</h4>
                    <p className="font-body text-sm text-brown/70 dark:text-cream/60">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/despre" className="btn-primary mt-8 inline-block">Despre Noi</Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&q=80"
              alt="Brutar la lucru"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-warm text-white rounded-2xl p-5 shadow-xl">
              <div className="font-display text-4xl font-bold">10+</div>
              <div className="font-body text-sm">ani de artizanat</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-brown/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="section-title mb-2">Din Blogul Nostru</h2>
              <p className="section-subtitle">Rețete, tehnici și povești din brutărie</p>
            </div>
            <Link to="/blog" className="btn-outline hidden md:inline-flex">Toate articolele →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestPosts.map(a => <BlogCard key={a.id} articol={a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <section className="bg-brown dark:bg-charcoal text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Vizitează-ne astăzi!
          </h2>
          <p className="font-body text-white/70 text-lg mb-8">
            Str. Mercy 12, Timișoara · Luni–Sâmbătă 07:00–19:00
          </p>
          <Link to="/contact" className="btn-primary bg-wheat text-brown hover:bg-cream text-lg px-10 py-4">
            Contactează-ne
          </Link>
        </div>
      </section>
    </main>
  )
}
