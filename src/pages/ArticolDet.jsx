import { useParams, Link } from 'react-router-dom'
import { articole } from '../data/mockData'

export default function ArticolDet() {
  const { slug } = useParams()
  const articol = articole.find(a => a.slug === slug)

  if (!articol) return (
    <main className="pt-32 text-center min-h-screen">
      <div className="text-6xl mb-4">😕</div>
      <h2 className="font-display text-3xl text-brown dark:text-cream mb-4">Articolul nu a fost găsit.</h2>
      <Link to="/blog" className="btn-primary">Înapoi la blog</Link>
    </main>
  )

  const altele = articole.filter(a => a.id !== articol.id).slice(0, 2)

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero image */}
      <div className="relative h-72 md:h-[450px] overflow-hidden">
        <img src={articol.img} alt={articol.titlu} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-10">
          <span className="inline-block bg-warm text-white font-heading text-sm px-3 py-1 rounded-full mb-3">
            {articol.categorie}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white">{articol.titlu}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-body text-brown/50 dark:text-cream/40 mb-10 pb-6 border-b border-wheat/40">
          <span>📅 {articol.data}</span>
          <span>✍️ {articol.autor}</span>
          <Link to="/blog" className="ml-auto text-warm hover:text-crust font-semibold">← Înapoi la blog</Link>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {articol.continut.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-brown/80 dark:text-cream/80 text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-wheat/40">
          <div className="flex flex-wrap gap-2">
            {['Artizanal', 'Rețete', articol.categorie].map(tag => (
              <span key={tag} className="bg-wheat/30 dark:bg-brown/30 text-brown dark:text-cream text-sm font-body px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Other articles */}
        {altele.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-bold text-2xl text-brown dark:text-cream mb-6">Mai citește</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {altele.map(a => (
                <Link key={a.id} to={`/blog/${a.slug}`} className="card flex gap-4 p-4 group">
                  <img src={a.img} alt={a.titlu} className="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
                  <div>
                    <span className="text-xs font-body text-brown/40 dark:text-cream/40">{a.data}</span>
                    <h3 className="font-heading font-bold text-brown dark:text-cream text-sm group-hover:text-warm transition-colors">
                      {a.titlu}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
