import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetailPage() {
  const { groupKey, productId } = useParams()
  const { addToCart } = useCart()

  const group = products[groupKey]
  const product = group?.items.find((item) => String(item.id) === productId)

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f4f1ea] px-5 py-20 text-[#17251d]">
        <section className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold">A termék nem található</h1>

          <p className="mt-4 text-[#5b685f]">
            Lehet, hogy a termék már nem elérhető, vagy hibás linkre kattintottál.
          </p>

          <Link
            to="/termekek"
            className="mt-8 inline-block rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white"
          >
            Vissza a katalógushoz
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-16 text-[#17251d] sm:px-8 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] bg-[#111] shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center rounded-[2rem] bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 w-fit rounded-full bg-[#f4f1ea] px-4 py-2 text-sm font-bold text-[#254d34]">
            {product.badge}
          </p>

          <p className="mt-6 text-lg leading-8 text-[#5b685f]">
            {product.description}
          </p>

          <p className="mt-8 text-3xl font-bold text-[#254d34]">
            {product.price}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToCart(product)}
              className="rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#1d3d29]"
            >
              Kosárba rakom
            </button>

            <Link
              to="/termekek"
              className="rounded-full border border-[#254d34]/20 px-8 py-4 text-center text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
            >
              Vissza a termékekhez
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f4f1ea] p-4">
              <p className="font-bold text-[#17251d]">Kézzel készített</p>
              <p className="mt-1 text-sm text-[#5b685f]">Egyedi kompozíció</p>
            </div>

            <div className="rounded-2xl bg-[#f4f1ea] p-4">
              <p className="font-bold text-[#17251d]">Kezdőbarát</p>
              <p className="mt-1 text-sm text-[#5b685f]">Egyszerű gondozás</p>
            </div>

            <div className="rounded-2xl bg-[#f4f1ea] p-4">
              <p className="font-bold text-[#17251d]">Biztonságos</p>
              <p className="mt-1 text-sm text-[#5b685f]">Szimulált pénztár</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}