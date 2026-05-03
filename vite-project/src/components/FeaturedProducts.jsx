import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Mini Moss Garden',
    price: '12 990 Ft',
    image:
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Glass Forest XL',
    price: '24 990 Ft',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Terrarium Care Kit',
    price: '6 990 Ft',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Urban Jungle Jar',
    price: '18 990 Ft',
    image:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=85',
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