import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import AddToCartModal from '../components/AddToCartModal'

const products = {
mini: {
  label: 'Kis floráriumok',
  description:
    'Kompakt, könnyen elhelyezhető üvegbe zárt mini kertek íróasztalra, polcra vagy ajándékba.',
  items: [
  {
    id: 1,
    name: 'Heart Moss Garden',
    category: 'Mini kertek',
    price: '14 990 Ft',
    badge: 'Ajándék',
    image: '/products/szivecskés.png',
  },
  {
    id: 2,
    name: 'Vertical Forest',
    category: 'Nagy floráriumok',
    price: '29 990 Ft',
    badge: 'Prémium',
    image: '/products/ChatGPT Image Mar 21, 2026, 09_45_55 PM.png',
  },
  {
    id: 3,
    name: 'Rock Jar',
    category: 'Mini kertek',
    price: '9 990 Ft',
    badge: 'Minimal',
    image: '/products/ChatGPT Image Mar 21, 2026, 09_48_46 PM.png',
  },
  {
    id: 4,
    name: 'Classic Moss Bowl',
    category: 'Mini kertek',
    price: '16 990 Ft',
    badge: 'Népszerű',
    image: '/products/ChatGPT Image Mar 21, 2026, 09_48_53 PM.png',
  },
  {
    id: 5,
    name: 'Root Landscape',
    category: 'Nagy floráriumok',
    price: '27 990 Ft',
    badge: 'Design',
    image: '/public/products/ChatGPT Image Mar 21, 2026, 10_03_25 PM.png',
  },
  {
    id: 6,
    name: 'Desert Glass',
    category: 'Mini kertek',
    price: '13 990 Ft',
    badge: 'Modern',
    image: '/products/ChatGPT Image Mar 21, 2026, 10_15_13 PM.png',
  },
]
},
xl:{
label: 'XL viváriumok',
description:
  'Nagyobb méretű, látványos növénykompozíciók nappaliba, irodába vagy prémium enteriőrbe.', 
items: [
  {
    id: 5,
    name: 'Vertical Forest XL',
    category: 'XL floráriumok',
    price: '29 990 Ft',
    badge: 'Prémium',
    image: '/products/xl/viv1.jpg',
  },
  {
    id: 6,
    name: 'Root Landscape XL',
    category: 'XL floráriumok',
    price: '27 990 Ft',
    badge: 'Design',
    image: '/products/xl/viv2.webp',
  },
  {
    id: 7,
    name: 'Rainforest Vivarium XL',
    category: 'XL floráriumok',
    price: '39 990 Ft',
    badge: 'Új',
    image: '/products/xl/viv3.png',
  },
  {
    id: 8,
    name: 'Panoráma Jungle XL',
    category: 'XL floráriumok',
    price: '44 990 Ft',
    badge: 'Limitált',
    image: '/products/xl/viv4.jfif',
  },
]},
accessories:{
label: 'Kiegészítők és gondozás',
description:
      'Földkeverékek, aktív szén, dekorkavics, moha és eszközök a florárium építéséhez és fenntartásához.', 
items: [
  {
    id: 9,
    name: 'Florárium földkeverék',
    category: 'Kiegészítők',
    price: '3 990 Ft',
    badge: 'Föld',
    image: '/products/accessory/soil-mix.jfif',
  },
  {
    id: 10,
    name: 'Aktív szén réteg',
    category: 'Kiegészítők',
    price: '2 490 Ft',
    badge: 'Szűrés',
    image: '/products/accessory/activated-charcoal.jfif',
  },
  {
    id: 11,
    name: 'Dekorkavics válogatás',
    category: 'Kiegészítők',
    price: '2 990 Ft',
    badge: 'Dekor',
    image: '/products/accessory/decor-stones.jfif',
  },
  {
    id: 12,
    name: 'Moss Starter Pack',
    category: 'Kiegészítők',
    price: '5 990 Ft',
    badge: 'Moha',
    image: '/products/accessory/moss-starter-pack.jfif',
  },
  {
    id: 13,
    name: 'Terrárium eszközkészlet',
    category: 'Kiegészítők',
    price: '6 990 Ft',
    badge: 'Eszköz',
    image: '/products/accessory/tool-kit.jfif',
  },
  {
    id: 14,
    name: 'Permetező palack',
    category: 'Kiegészítők',
    price: '1 990 Ft',
    badge: 'Gondozás',
    image: '/products/accessory/spray-bottle.jpg',
  },
]}
}

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [addedProduct, setAddedProduct] = useState(null)

  function handleAddToCart(product) {
    addToCart(product)
    setAddedProduct(product)
  }

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-16 text-[#17251d] sm:px-8 lg:px-10">
      <section className="mx-auto max-w-7xl">
        {/* PAGE HEADER */}
        <div className="mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
            Webshop
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Florárium katalógus
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#5b685f]">
            Válogass kézzel készített kis floráriumok, XL viváriumok és
            gondozási kiegészítők közül.
          </p>
        </div>

        {/* PRODUCT GROUPS */}
        {Object.entries(products).map(([groupKey, group]) => (
          <section key={groupKey} className="mb-20 last:mb-0">
            {/* CATEGORY HEADER */}
            <div className="mb-8 flex flex-col gap-3 border-b border-[#d9d1c3] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3f6b4b]">
                  Kategória
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#17251d] sm:text-3xl">
                  {group.label}
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-[#5b685f] sm:text-right">
                {group.description}
              </p>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((product) => (
                <article
                  key={`${groupKey}-${product.id}`}
                  className="group relative h-[500px] overflow-hidden rounded-[2rem] bg-[#111] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent transition duration-500 group-hover:from-black/30" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#254d34] shadow-sm transition duration-500 group-hover:bg-[#254d34] group-hover:text-white">
                    {product.badge}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-lg backdrop-blur transition duration-500 group-hover:bg-white/95">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#789079]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#17251d]">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-xl font-bold text-[#254d34]">
                      {product.price}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Link
                        to={`/termekek/${product.id}`}
                        className="rounded-full border border-[#254d34]/20 px-4 py-3 text-center text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
                      >
                        Részletek
                      </Link>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="rounded-full bg-[#254d34] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1d3d29]"
                      >
                        Kosárba
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>

      <AddToCartModal
        product={addedProduct}
        onClose={() => setAddedProduct(null)}
      />
      
    </main>
  )
}