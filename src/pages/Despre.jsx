import { despre } from '../data/mockData'

export default function Despre() {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-80 md:h-[500px] overflow-hidden">
        <img src={despre.img} alt="Brutărie" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-heading text-wheat text-sm tracking-widest uppercase mb-3">Din 2015</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              {despre.titlu}
            </h1>
            <p className="font-heading text-white/80 text-xl italic">{despre.subtitlu}</p>
          </div>
        </div>
      </section>

      {/* Povestea */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="section-title mb-6">Povestea Noastră</h2>
            {despre.povestea.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-brown/80 dark:text-cream/70 text-lg leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Misiune */}
          <div className="bg-warm/10 dark:bg-brown/20 rounded-3xl p-8 border-l-4 border-warm">
            <h3 className="font-heading font-bold text-2xl text-brown dark:text-cream mb-4">
              🎯 Misiunea Noastră
            </h3>
            <p className="font-body text-brown/80 dark:text-cream/70 text-lg leading-relaxed mb-8">
              {despre.misiune}
            </p>

            <h4 className="font-heading font-bold text-lg text-brown dark:text-cream mb-4">
              ✅ Valorile Noastre
            </h4>
            <ul className="space-y-3">
              {despre.valori.map(v => (
                <li key={v} className="flex items-center gap-3 font-body text-brown/80 dark:text-cream/70">
                  <span className="w-2 h-2 bg-warm rounded-full flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-wheat/20 dark:bg-brown/10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center mb-16">Istoria Noastră</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-warm/30" />
            {[
              { an: '2015', text: 'Deschidem primul atelier pe Str. Mercy cu un cuptor și un vis.' },
              { an: '2017', text: 'Extindem gama de produse și angajăm primii brutari.' },
              { an: '2019', text: 'Câștigăm premiul "Cel Mai Bun Produs Artizanal" la Târgul Gustului Timișoara.' },
              { an: '2021', text: 'Lansăm livrarea la domiciliu și colaborăm cu restaurante locale.' },
              { an: '2023', text: 'Deschidere locație nouă și inaugurăm atelierele de panificație.' },
            ].map((item, i) => (
              <div key={item.an} className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="font-body text-brown/80 dark:text-cream/70">{item.text}</p>
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-white text-sm">{item.an}</span>
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Echipa Noastră</h2>
          <p className="section-subtitle">Oamenii pasionați din spatele fiecărui produs</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {despre.echipa.map(om => (
            <div key={om.nume} className="card p-6 text-center group">
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={om.img}
                  alt={om.nume}
                  className="w-full h-full object-cover rounded-full ring-4 ring-wheat group-hover:ring-warm transition-all"
                />
              </div>
              <h3 className="font-heading font-bold text-brown dark:text-cream text-lg">{om.nume}</h3>
              <p className="text-warm font-body text-sm font-semibold mb-2">{om.rol}</p>
              <p className="font-body text-xs text-brown/60 dark:text-cream/50 leading-relaxed">{om.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
