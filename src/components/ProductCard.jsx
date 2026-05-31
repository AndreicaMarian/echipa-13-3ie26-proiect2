import { Link } from 'react-router-dom'

export default function ProductCard({ produs }) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-52">
        <img
          src={produs.img}
          alt={produs.nume}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-warm text-white text-xs font-heading font-semibold
                         px-3 py-1 rounded-full capitalize">
          {produs.categorie}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg text-brown dark:text-cream mb-1">{produs.nume}</h3>
        <p className="font-body text-sm text-brown/70 dark:text-cream/60 mb-3 line-clamp-2">{produs.descriere}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-warm text-xl">{produs.pret}</span>
            <span className="text-xs text-brown/50 dark:text-cream/40 ml-1">/ {produs.gramaj}</span>
          </div>
          <Link to={`/produse/${produs.slug}`} className="btn-outline text-sm py-1.5 px-4">
            Detalii
          </Link>
        </div>
      </div>
    </div>
  )
}
