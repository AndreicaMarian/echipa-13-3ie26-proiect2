import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="pt-24 min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl mb-6">🍞</div>
        <h1 className="font-display text-6xl font-bold text-warm mb-4">404</h1>
        <h2 className="font-heading text-2xl text-brown dark:text-cream mb-4">
          Pagina nu a fost găsită
        </h2>
        <p className="font-body text-brown/60 dark:text-cream/50 mb-8 max-w-md mx-auto">
          Se pare că această pagină s-a "ars" puțin prea mult la cuptor. Întoarce-te la pagina principală.
        </p>
        <Link to="/" className="btn-primary">🏠 Înapoi Acasă</Link>
      </div>
    </main>
  )
}
