import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { produse, categorii } from '../data/mockData'
import ProductCard from '../components/ProductCard'

export default function Produse() {
  const [searchParams] = useSearchParams()
  const [categorie, setCategorie] = useState(searchParams.get('categorie') || 'toate')
  const [search, setSearch] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const cat = searchParams.get('categorie')
    const s = searchParams.get('search')
    if (cat) setCategorie(cat)
    if (s) setSearch(s)
  }, [searchParams])

  const filtered = produse.filter(p => {
    const matchCat = categorie === 'toate' || p.categorie === categorie
    const matchSearch = p.nume.toLowerCase().includes(search.toLowerCase()) ||
                        p.descriere.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-wheat/30 dark:bg-brown/20 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="section-title mb-3">Produsele Noastre</h1>
          <p className="section-subtitle">Totul este copt proaspăt zilnic — fără conservanți, fără compromisuri.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 flex-1">
            <button
              onClick={() => setCategorie('toate')}
              className={`px-4 py-2 rounded-full font-heading text-sm font-semibold transition-all ${
                categorie === 'toate'
                  ? 'bg-warm text-white'
                  : 'bg-wheat/30 text-brown dark:text-cream hover:bg-warm/20'
              }`}
            >
              Toate
            </button>
            {categorii.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setCategorie(cat.slug)}
                className={`px-4 py-2 rounded-full font-heading text-sm font-semibold transition-all ${
                  categorie === cat.slug
                    ? 'bg-warm text-white'
                    : 'bg-wheat/30 text-brown dark:text-cream hover:bg-warm/20'
                }`}
              >
                {cat.icon} {cat.nume}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Caută produs..."
              className="pl-4 pr-10 py-2 rounded-full border border-wheat dark:border-brown
                         bg-white dark:bg-brown/30 text-brown dark:text-cream
                         focus:outline-none focus:border-warm w-full md:w-56"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-brown/40 hover:text-warm">✕</button>
            )}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-brown/50 dark:text-cream/40">
            <div className="text-6xl mb-4">🔍</div>
            <p className="font-heading text-xl">Niciun produs găsit.</p>
            <button onClick={() => { setCategorie('toate'); setSearch('') }} className="btn-primary mt-4">
              Resetează filtrele
            </button>
          </div>
        ) : (
          <>
            <p className="font-body text-sm text-brown/50 dark:text-cream/40 mb-6">
              {filtered.length} {filtered.length === 1 ? 'produs găsit' : 'produse găsite'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => <ProductCard key={p.id} produs={p} />)}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
