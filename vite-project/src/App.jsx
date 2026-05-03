import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FeaturedProducts from './components/FeaturedProducts'
import ProductsPage from './pages/ProductsPage'
import Header from './components/Header'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import AiAssistantSection from './components/AiAssistantSection'
import CareCtaSection from './components/CareCtaSection'
import CarePage from './pages/CarePage'
import CartPage from './pages/CartPage'

function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#17251d]">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <AiAssistantSection />
      <CareCtaSection />
    </main>
  )
}

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termekek" element={<ProductsPage />} />
      <Route path="/kosar" element={<CartPage />} />
      <Route path="/gondozas" element={<CarePage />} />
    </Routes>
    <Footer />
    </>
  )
}