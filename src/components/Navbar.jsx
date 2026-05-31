import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Acasă' },
  { to: '/produse', label: 'Produse' },
  { to: '/blog', label: 'Blog' },
  { to: '/despre', label: 'Despre Noi' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/produse?search=${encodeURIComponent(search.trim())}`)
      setSearch('')
      setOpen(false)
    }
  }

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled
      ? 'bg-white/95 dark:bg-charcoal/95 backdrop-blur shadow-md py-2'
      : 'bg-cream dark:bg-charcoal py-4'
    }`

  const linkClass = ({ isActive }) =>
    `font-heading font-semibold text-sm transition-colors duration-200
     ${isActive ? 'text-warm' : 'text-brown dark:text-cream hover:text-warm dark:hover:text-wheat'}`

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🍞</span>
            <span className="font-display font-bold text-xl text-brown dark:text-cream group-hover:text-warm transition-colors">
              Brutăria<span className="text-warm"> Artizanală</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={linkClass}>{l.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Caută..."
                className="pl-3 pr-8 py-1.5 rounded-full text-sm border border-wheat dark:border-brown
                           bg-cream dark:bg-charcoal text-brown dark:text-cream
                           focus:outline-none focus:border-warm w-36 focus:w-48 transition-all"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-crust hover:text-warm">
                🔍
              </button>
            </form>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center
                         bg-wheat/40 dark:bg-brown/40 hover:bg-warm hover:text-white transition-all"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-brown dark:text-cream p-2"
            aria-label="Deschide meniu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
            <span className="block w-4 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      {/* Mobile offcanvas overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative ml-auto w-72 h-full bg-cream dark:bg-charcoal shadow-2xl
                          flex flex-col p-6 animate-slide-in">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-lg text-brown dark:text-cream">Meniu</span>
              <button onClick={() => setOpen(false)} className="text-2xl text-brown dark:text-cream hover:text-warm">✕</button>
            </div>

            <form onSubmit={handleSearch} className="relative mb-6">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Caută produse..."
                className="w-full pl-3 pr-8 py-2 rounded-full text-sm border border-wheat
                           bg-white dark:bg-brown/30 text-brown dark:text-cream focus:outline-none focus:border-warm"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-crust">🔍</button>
            </form>

            <ul className="flex flex-col gap-4 flex-1">
              {links.map(l => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-heading text-lg font-semibold block py-1 border-b border-wheat/50
                       ${isActive ? 'text-warm' : 'text-brown dark:text-cream'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              onClick={toggle}
              className="mt-6 flex items-center gap-2 font-body text-sm text-crust dark:text-wheat"
            >
              {dark ? '☀️ Mod Luminos' : '🌙 Mod Întunecat'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
