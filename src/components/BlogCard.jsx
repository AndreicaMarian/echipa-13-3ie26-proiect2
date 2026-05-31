import { Link } from 'react-router-dom'
import { getImageUrl } from '../api/strapi'

const FALLBACK = 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80'

export default function BlogCard({ articol }) {
  const img = getImageUrl(articol.img) || FALLBACK

  return (
    <article className="card group flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={img}
          alt={articol.titlu}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-brown/80 text-white text-xs font-heading font-semibold
                         px-3 py-1 rounded-full">
          {articol.categorie}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-brown/50 dark:text-cream/40 font-body mb-2">
          <span>📅 {articol.data}</span>
          <span>·</span>
          <span>✍️ {articol.autor}</span>
        </div>
        <h3 className="font-heading font-bold text-lg text-brown dark:text-cream mb-2 leading-snug">
          {articol.titlu}
        </h3>
        <p className="font-body text-sm text-brown/70 dark:text-cream/60 flex-1 mb-4">
          {articol.rezumat}
        </p>
        <Link
          to={`/blog/${articol.slug}`}
          className="text-warm font-heading font-semibold text-sm hover:text-crust transition-colors"
        >
          Citește mai mult →
        </Link>
      </div>
    </article>
  )
}
