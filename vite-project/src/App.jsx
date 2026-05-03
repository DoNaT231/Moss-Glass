import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FeaturedProducts from './components/FeaturedProducts'
import Header from './components/Header'
import Footer from './components/Footer'
import WhyChooseUs from './components/WhyChooseUs'
import AiAssistantSection from './components/AiAssistantSection'
import CareCtaSection from './components/CareCtaSection'

import CarePage from './pages/CarePage'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import AiChatPage from './pages/AiChatPage'
import ProductDetailPage from './pages/ProductDetailPage'

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
      <Route path="/asszisztens" element={<AiChatPage />} />
      <Route path="/termekek/:groupKey/:productId" element={<ProductDetailPage />} />
    </Routes>
    <Footer />
    </>
  )
}