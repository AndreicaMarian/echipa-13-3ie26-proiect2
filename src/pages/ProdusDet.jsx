import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProdusBySlug, getProduse, getImageUrl } from '../api/strapi'
import ProductCard from '../components/ProductCard'
import { Loading } from '../components/States'

const FALLBACK = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'

export default function ProdusDet() {
  const { slug } = useParams()
  const [produs, setProdus] = useState(null)
  const [similare, setSimilare] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProdusBySlug(slug)
      .then(async (p) => {
        setProdus(p)
        if (p) {
          const toate = await getProduse()
          setSimilare((toate || []).filter(x => x.categorie === p.categorie && x.id !== p.id).slice(0, 3))
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <main className="pt-24 min-h-screen"><Loading /></main>

  if (!produs) return (
    <main className="pt-32 text-center min-h-screen">
      <div className="text-6xl mb-4">😕</div>
      <h2 className="font-display text-3xl text-brown dark:text-cream mb-4">Produsul nu a fost găsit.</h2>
      <Link to="/produse" className="btn-primary">Înapoi la produse</Link>
    </main>
  )

  const img = getImageUrl(produs.img) || FALLBACK

  return (
    <main className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="flex gap-2 text-sm font-body text-brown/50 dark:text-cream/40 mb-8">
          <Link to="/" className="hover:text-warm">Acasă</Link>
          <span>/</span>
          <Link to="/produse" className="hover:text-warm">Produse</Link>
          <span>/</span>
          <span className="text-brown dark:text-cream">{produs.nume}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <img src={img} alt={produs.nume} className="w-full h-[450px] object-cover rounded-3xl shadow-2xl" />
            <span className="absolute top-5 left-5 bg-warm text-white font-heading font-semibold
                             text-sm px-4 py-1.5 rounded-full capitalize">
              {produs.categorie}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brown dark:text-cream mb-4">
              {produs.nume}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-4xl font-bold text-warm">{produs.pret}</span>
              <span className="font-body text-brown/50 dark:text-cream/40">/ {produs.gramaj}</span>
            </div>
            <p className="font-body text-brown/70 dark:text-cream/70 text-lg leading-relaxed mb-8">
              {produs.descriere}
            </p>

            <div className="bg-wheat/20 dark:bg-brown/20 rounded-2xl p-6 mb-8">
              <h3 className="font-heading font-bold text-brown dark:text-cream mb-4">Informații produs</h3>
              <ul className="space-y-2 font-body text-sm">
                <li className="flex justify-between border-b border-wheat/40 pb-2">
                  <span className="text-brown/60 dark:text-cream/50">Gramaj</span>
                  <span className="text-brown dark:text-cream font-semibold">{produs.gramaj}</span>
                </li>
                <li className="flex justify-between border-b border-wheat/40 pb-2">
                  <span className="text-brown/60 dark:text-cream/50">Categorie</span>
                  <span className="text-brown dark:text-cream font-semibold capitalize">{produs.categorie}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-brown/60 dark:text-cream/50">Conservanți</span>
                  <span className="text-green-600 font-semibold">❌ Fără conservanți</span>
                </li>
              </ul>
            </div>

            <Link to="/contact" className="btn-primary text-center">
              Comandă sau Întreabă-ne
            </Link>
          </div>
        </div>

        {similare.length > 0 && (
          <div>
            <h2 className="section-title mb-8">Produse Similare</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similare.map(p => <ProductCard key={p.id} produs={p} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
