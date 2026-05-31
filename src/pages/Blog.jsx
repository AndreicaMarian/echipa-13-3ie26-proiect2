import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getArticole, getImageUrl } from '../api/strapi'
import BlogCard from '../components/BlogCard'
import { Loading, ErrorState } from '../components/States'

const FALLBACK = 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80'

export default function Blog() {
  const [articole, setArticole] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const load = () => {
    setLoading(true); setError(false)
    getArticole().then(d => setArticole(d || [])).catch(() => setError(true)).finally(() => setLoading(false))
  }
  useEffect(() => { load() }, [])

  return (
    <main className="pt-24 min-h-screen">
      <section className="bg-brown dark:bg-charcoal text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">
            Blogul <span className="text-wheat italic">Brutăriei</span>
          </h1>
          <p className="font-body text-white/70 text-lg">
            Rețete tradiționale, tehnici de panificație și povești din spatele cuptorului.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? <Loading text="Se încarcă articolele..." /> : error ? <ErrorState onRetry={load} /> :
          articole.length === 0 ? (
            <p className="text-center font-heading text-xl text-brown/50 dark:text-cream/40 py-20">
              Niciun articol publicat încă.
            </p>
          ) : (
          <>
            {/* Featured article = primul */}
            {(() => {
              const featured = articole[0]
              const img = getImageUrl(featured.img) || FALLBACK
              return (
                <article className="card mb-16 md:flex overflow-hidden group">
                  <div className="md:w-1/2 overflow-hidden">
                    <img src={img} alt={featured.titlu}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-warm/10 text-warm font-heading font-semibold text-sm px-3 py-1 rounded-full mb-4">
                      ⭐ Articol recomandat
                    </span>
                    <div className="flex items-center gap-2 text-xs text-brown/50 dark:text-cream/40 font-body mb-3">
                      <span>📅 {featured.data}</span>
                      <span>·</span>
                      <span>✍️ {featured.autor}</span>
                      <span>·</span>
                      <span className="bg-brown/10 dark:bg-cream/10 px-2 py-0.5 rounded-full">{featured.categorie}</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-brown dark:text-cream mb-4">
                      {featured.titlu}
                    </h2>
                    <p className="font-body text-brown/70 dark:text-cream/60 text-lg mb-6 leading-relaxed">
                      {featured.rezumat}
                    </p>
                    <Link to={`/blog/${featured.slug}`} className="btn-primary self-start">
                      Citește articolul
                    </Link>
                  </div>
                </article>
              )
            })()}

            <h2 className="section-title mb-8">Toate Articolele</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articole.map(a => <BlogCard key={a.id} articol={a} />)}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
