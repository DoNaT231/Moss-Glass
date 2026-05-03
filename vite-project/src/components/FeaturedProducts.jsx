import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Classic Moss Bowl',
    price: '16 990 Ft',
    image:
      '/products/ChatGPT Image Mar 21, 2026, 09_48_53 PM.png',
  },
  {
    id: 2,
    name: 'Vertical Forest XL',
    price: '24 990 Ft',
    image:
      '/products/xl/viv1.jpg',
  },
  {
    id: 3,
    name: 'Moss Starter Pack',
    price: '5 990 Ft',
    image:
      '/products/accessory/moss-starter-pack.jfif',
  },
  {
    id: 4,
    name: 'Terrárium eszközkészlet',
    price: '6 990 Ft',
    image:
      '/products/accessory/tool-kit.jfif',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
              Kiemelt
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Népszerű termékek
            </h2>
          </div>

          <Link
            to="/termekek"
            className="text-sm font-bold text-[#254d34]"
          >
            Összes termék →
          </Link>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold text-[#17251d]">
                  {product.name}
                </h3>

                <p className="mt-2 font-bold text-[#254d34]">
                  {product.price}
                </p>

                <Link
                  to="/termekek"
                  className="mt-4 inline-block w-full rounded-full border border-[#254d34]/20 px-4 py-2 text-center text-sm font-bold text-[#254d34] transition hover:bg-[#f8f8f4]"
                >
                  Megnézem
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}