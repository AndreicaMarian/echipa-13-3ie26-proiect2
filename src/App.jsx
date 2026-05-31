import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produse from './pages/Produse'
import ProdusDet from './pages/ProdusDet'
import Blog from './pages/Blog'
import ArticolDet from './pages/ArticolDet'
import Despre from './pages/Despre'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produse" element={<Produse />} />
            <Route path="/produse/:slug" element={<ProdusDet />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticolDet />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
