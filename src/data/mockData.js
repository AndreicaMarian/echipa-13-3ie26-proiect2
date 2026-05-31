// ── Produse ────────────────────────────────────────────────────────────────
export const categorii = [
  { id: 1, slug: 'paine', nume: 'Pâine', icon: '🍞', descriere: 'Coapte zilnic din făinuri selecționate.' },
  { id: 2, slug: 'cozonaci', nume: 'Cozonaci', icon: '🥐', descriere: 'Rețete tradiționale de familie.' },
  { id: 3, slug: 'prajituri', nume: 'Prăjituri', icon: '🎂', descriere: 'Dulciuri artizanale cu ingrediente naturale.' },
  { id: 4, slug: 'sarate', nume: 'Produse Sărate', icon: '🥨', descriere: 'Cornulețe, brioșe sărate și strudel.' },
]

export const produse = [
  { id: 1, slug: 'paine-de-secara', categorie: 'paine', nume: 'Pâine de Secară', pret: '12 lei', gramaj: '600g', descriere: 'Pâine densă, aromată, cu miez ferm și coajă crocantă. Perfectă cu unt și brânză.', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', featured: true },
  { id: 2, slug: 'paine-alba-traditionala', categorie: 'paine', nume: 'Pâine Albă Tradițională', pret: '8 lei', gramaj: '500g', descriere: 'Clasica pâine albă, pufosă în interior și crocantă la exterior.', img: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=80', featured: true },
  { id: 3, slug: 'paine-cu-seminte', categorie: 'paine', nume: 'Pâine cu Semințe', pret: '14 lei', gramaj: '600g', descriere: 'Amestec de semințe de floarea-soarelui, dovleac și susan.', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80', featured: false },
  { id: 4, slug: 'cozonac-cu-nuca', categorie: 'cozonaci', nume: 'Cozonac cu Nucă', pret: '45 lei', gramaj: '900g', descriere: 'Rețeta bunicii: aluat pufos, umplutură generoasă de nucă și cacao.', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80', featured: true },
  { id: 5, slug: 'cozonac-cu-mac', categorie: 'cozonaci', nume: 'Cozonac cu Mac', pret: '42 lei', gramaj: '900g', descriere: 'Umplutură fină de mac, cu aromă delicată de vanilie și lămâie.', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80', featured: false },
  { id: 6, slug: 'tort-ciocolata', categorie: 'prajituri', nume: 'Tort de Ciocolată', pret: '120 lei', gramaj: '1.2kg', descriere: 'Blat de ciocolată belgiană, cremă ganache și glazură lucioasă.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', featured: true },
  { id: 7, slug: 'ecler-vanilie', categorie: 'prajituri', nume: 'Ecler cu Vanilie', pret: '9 lei', gramaj: '80g', descriere: 'Eclere cu cremă de vanilie bourbon și glazură de ciocolată neagră.', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80', featured: false },
  { id: 8, slug: 'cornulete-cu-branza', categorie: 'sarate', nume: 'Cornulețe cu Brânză', pret: '3 lei', gramaj: '60g', descriere: 'Cornulețe fragede cu umplutură de brânză telemea și mărar proaspăt.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80', featured: true },
]

// ── Articole Blog ──────────────────────────────────────────────────────────
export const articole = [
  {
    id: 1,
    slug: 'secretul-painii-bune',
    titlu: 'Secretul unei pâini bune',
    data: '12 mai 2025',
    autor: 'Andrei Popescu',
    categorie: 'Tehnici',
    rezumat: 'De ce faina, apa, drojdia și răbdarea fac diferența între o pâine obișnuită și una extraordinară.',
    continut: `O pâine bună începe cu ingrediente simple: făină de calitate, apă, drojdie și sare. Dar secretul stă în proces – în frăntânirea corectă a aluatului, în fermentarea lentă (minim 12 ore la rece) și în coacerea la temperaturi înalte pe piatră refractară.\n\nFolosim exclusiv făinuri de la morile locale, măcinate cu piatra, care păstrează germenii și tărâțele. Apa de izvor adaugă mineralitate. Drojdia noastră sălbatică, "starter-ul", are deja 7 ani și îl hrănim zilnic.\n\nRezultatul? O pâine cu crustă crocantă, miez elastic și aromă inconfundabilă.`,
    img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80',
  },
  {
    id: 2,
    slug: 'reteta-cozonac-traditional',
    titlu: 'Rețeta de cozonac a bunicii',
    data: '3 decembrie 2024',
    autor: 'Maria Ionescu',
    categorie: 'Rețete',
    rezumat: 'Cum am transformat rețeta manuscrisă a bunicii în cel mai iubit produs al brutăriei noastre.',
    continut: `Rețeta pe care o folosim astăzi a fost scrisă de mână pe un carnet îngălbenit, în 1978. Bunica Anei, fondatoarea brutăriei, a adus-o din Ardeal când s-a mutat în oraș.\n\nIngrediatele sunt simple: făină 000, lapte, ouă de la găini crescute în bătătură, unt 82%, zahăr și un secret – o lingură de rom vechi la fiecare aluat. Frângem aluatul 40 de minute, lăsăm să crească de trei ori, împletim și coacem la 160°C, cu abur, timp de 45 de minute.\n\nCozonacul nostru nu are conservanți și se păstrează proaspăt 5 zile – dacă rezistă atât!`,
    img: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80',
  },
  {
    id: 3,
    slug: 'de-ce-painea-artizanala',
    titlu: 'De ce să alegi pâinea artizanală?',
    data: '10 octombrie 2024',
    autor: 'Andrei Popescu',
    categorie: 'Nutriție',
    rezumat: 'Comparatie intre pâinea industrială și cea artizanală: ingrediente, valoare nutritivă, gust.',
    continut: `Pâinea din supermarket conține în medie 15-20 de aditivi: emulgatori, agenți de afânare, conservanți, amelioratori de făină. Pâinea noastră conține 4 ingrediente.\n\nFermentarea lungă (18-24 ore) reduce indicele glicemic și face nutrienții mai biodisponibili. Mulți clienți cu intoleranță la gluten raportează că tolerează mai bine pâinea noastră cu maia – deși nu este fără gluten, acidul lactic din fermentare descompune parțial glutenul.\n\nInvestiția în pâine bună este investiție în sănătate. Și în plăcere.`,
    img: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=800&q=80',
  },
]

// ── About (Single Type) ────────────────────────────────────────────────────
export const despre = {
  titlu: 'Brutăria Artizanală',
  subtitlu: 'Pasiune coptă zilnic din 2015',
  povestea: `Brutăria Artizanală s-a născut în 2015 dintr-o idee simplă: să aducem pe masa timisorenilor pâinea cu adevărat bună, cea pe care bunicii noștri o știau.\n\nAna și Andrei Popescu, după ani petrecuți în industria IT, au decis să urmeze o pasiune veche: meșteșugul panificației artizanale. Au studiat la Viena și San Francisco, au adus tehnici noi peste rețete vechi și au deschis primul atelier pe strada Mercy, cu doar un cuptor și un vis.`,
  misiune: 'Credem că pâinea bună merită timp, atenție și ingrediente cinstite. Nu folosim aditivi, amelioratori sau conservanți. Fiecare produs este frâmântat, modelat și copt manual.',
  valori: ['Ingrediente locale și naturale', 'Zero aditivi și conservanți', 'Rețete tradiționale perfecționate', 'Sustenabilitate și zero waste'],
  echipa: [
    { nume: 'Ana Popescu', rol: 'Co-fondatoare & Patiser', bio: 'Specializată în patiserie franceză, absolvă cursuri la Le Cordon Bleu Paris.', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
    { nume: 'Andrei Popescu', rol: 'Co-fondator & Brutar Șef', bio: '12 ani de experiență în panificație artizanală, specializat în pâine cu maia.', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
    { nume: 'Elena Mureșan', rol: 'Patiser', bio: 'Creatoarea prăjiturilor și torturilor noastre speciale de sezon.', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
    { nume: 'Radu Stan', rol: 'Brutar', bio: 'Responsabil cu producția zilnică de pâine și produse sărate.', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80' },
  ],
  img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80',
}
