import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brown dark:bg-charcoal text-cream py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🍞</span>
            <span className="font-display font-bold text-xl text-cream">
              Brutăria <span className="text-wheat">Artizanală</span>
            </span>
          </div>
          <p className="font-body text-cream/70 text-sm leading-relaxed">
            Pâine și produse de patiserie coapte cu pasiune zilnic,
            din ingrediente naturale și rețete tradiționale.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-bold text-wheat mb-4">Pagini</h4>
          <ul className="space-y-2">
            {[['/', 'Acasă'], ['/produse', 'Produse'], ['/blog', 'Blog'], ['/despre', 'Despre Noi'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="font-body text-cream/70 hover:text-wheat transition-colors text-sm">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-heading font-bold text-wheat mb-4">Contact</h4>
          <ul className="space-y-2 text-sm font-body text-cream/70">
            <li>📍 Str. Mercy 12, Timișoara</li>
            <li>📞 0723 456 789</li>
            <li>✉️ contact@brutaria-artizanala.ro</li>
            <li className="pt-2">🕗 Luni–Sâmbătă: 07:00 – 19:00</li>
            <li>🕗 Duminică: 08:00 – 14:00</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-cream/10
                      flex flex-col md:flex-row items-center justify-between gap-2 text-cream/40 text-xs font-body">
        <p>© {new Date().getFullYear()} Brutăria Artizanală. Toate drepturile rezervate.</p>
        <p>Realizat cu ❤️ de echipa noastră</p>
      </div>
    </footer>
  )
}
