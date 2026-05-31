import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nume: '', email: '', telefon: '', mesaj: '' })
  const [trimis, setTrimis] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulare trimitere (va fi înlocuit cu API Strapi)
    await new Promise(r => setTimeout(r, 1200))
    setTrimis(true)
    setLoading(false)
  }

  return (
    <main className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-brown to-crust dark:from-charcoal dark:to-brown text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Contactează-ne</h1>
          <p className="font-body text-white/70 text-lg">
            Suntem bucuroși să răspundem oricăror întrebări sau comenzi speciale.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-brown dark:text-cream mb-8">
              Trimite-ne un mesaj
            </h2>

            {trimis ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700
                              rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-xl text-green-800 dark:text-green-300 mb-2">
                  Mesaj trimis cu succes!
                </h3>
                <p className="font-body text-green-700 dark:text-green-400">
                  Îți vom răspunde în cel mai scurt timp, de obicei în maxim 24 de ore.
                </p>
                <button
                  onClick={() => { setTrimis(false); setForm({ nume: '', email: '', telefon: '', mesaj: '' }) }}
                  className="btn-primary mt-6"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-brown dark:text-cream mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      name="nume"
                      required
                      value={form.nume}
                      onChange={handleChange}
                      placeholder="Ion Popescu"
                      className="w-full px-4 py-3 rounded-xl border border-wheat dark:border-brown
                                 bg-white dark:bg-brown/20 text-brown dark:text-cream
                                 focus:outline-none focus:border-warm focus:ring-2 focus:ring-warm/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-brown dark:text-cream mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="07xx xxx xxx"
                      className="w-full px-4 py-3 rounded-xl border border-wheat dark:border-brown
                                 bg-white dark:bg-brown/20 text-brown dark:text-cream
                                 focus:outline-none focus:border-warm focus:ring-2 focus:ring-warm/20 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-brown dark:text-cream mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@exemplu.ro"
                    className="w-full px-4 py-3 rounded-xl border border-wheat dark:border-brown
                               bg-white dark:bg-brown/20 text-brown dark:text-cream
                               focus:outline-none focus:border-warm focus:ring-2 focus:ring-warm/20 transition"
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-semibold text-brown dark:text-cream mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="mesaj"
                    required
                    rows={5}
                    value={form.mesaj}
                    onChange={handleChange}
                    placeholder="Scrieți întrebarea sau comanda dvs. specială..."
                    className="w-full px-4 py-3 rounded-xl border border-wheat dark:border-brown
                               bg-white dark:bg-brown/20 text-brown dark:text-cream resize-none
                               focus:outline-none focus:border-warm focus:ring-2 focus:ring-warm/20 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Se trimite...' : '📨 Trimite Mesajul'}
                </button>

                <p className="text-xs font-body text-brown/40 dark:text-cream/30 text-center">
                  Câmpurile marcate cu * sunt obligatorii.
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-brown dark:text-cream mb-8">
                Informații de Contact
              </h2>
              <ul className="space-y-6">
                {[
                  { icon: '📍', titlu: 'Adresă', info: 'Str. Mercy 12, Timișoara, România' },
                  { icon: '📞', titlu: 'Telefon', info: '0723 456 789' },
                  { icon: '✉️', titlu: 'Email', info: 'contact@brutaria-artizanala.ro' },
                  { icon: '🕗', titlu: 'Program', info: 'Luni–Sâmbătă: 07:00–19:00 | Duminică: 08:00–14:00' },
                ].map(({ icon, titlu, info }) => (
                  <li key={titlu} className="flex items-start gap-4">
                    <span className="text-2xl w-10 h-10 bg-warm/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {icon}
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-brown dark:text-cream">{titlu}</h4>
                      <p className="font-body text-brown/70 dark:text-cream/60">{info}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-wheat/20 dark:bg-brown/20 flex items-center justify-center border border-wheat/40">
              <div className="text-center text-brown/40 dark:text-cream/30">
                <div className="text-5xl mb-2">🗺️</div>
                <p className="font-body text-sm">Str. Mercy 12, Timișoara</p>
                <a
                  href="https://maps.google.com/?q=Str.+Mercy+12+Timisoara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm text-sm font-semibold hover:underline mt-2 inline-block"
                >
                  Deschide în Google Maps →
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-heading font-bold text-brown dark:text-cream mb-4">Urmărește-ne</h4>
              <div className="flex gap-3">
                {[['📘', 'Facebook', '#'], ['📸', 'Instagram', '#'], ['▶️', 'YouTube', '#']].map(([icon, name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="flex items-center gap-2 font-body text-sm font-semibold text-brown/70 dark:text-cream/60
                               hover:text-warm transition-colors bg-wheat/20 dark:bg-brown/20 px-4 py-2 rounded-full"
                  >
                    {icon} {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
