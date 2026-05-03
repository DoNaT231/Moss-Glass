import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart()

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-16 text-[#17251d] sm:px-8 lg:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
            Kosár
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Kosarad tartalma
          </h1>

          <p className="mt-4 max-w-2xl text-[#5b685f]">
            Itt ellenőrizheted a kiválasztott floráriumokat és kiegészítőket a
            szimulált pénztárfolyamat előtt.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-bold">A kosarad üres</h2>

            <p className="mx-auto mt-3 max-w-md text-[#5b685f]">
              Nézz körül a katalógusban, és válassz egy kézzel készített
              floráriumot vagy gondozási kiegészítőt.
            </p>

            <Link
              to="/termekek"
              className="mt-8 inline-block rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#1d3d29]"
            >
              Termékek megtekintése
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-5">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-5 rounded-[2rem] bg-white p-5 shadow-sm sm:grid-cols-[140px_1fr]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full rounded-2xl object-cover sm:h-full"
                  />

                  <div className="flex flex-col justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#789079]">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-xl font-bold">{item.name}</h2>

                      <p className="mt-2 font-bold text-[#254d34]">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex w-fit items-center rounded-full border border-[#254d34]/20 bg-[#f4f1ea]">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-4 py-2 font-bold text-[#254d34]"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-4 py-2 font-bold text-[#254d34]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-bold text-red-700"
                      >
                        Eltávolítás
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Összesítés</h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-[#5b685f]">
                  <span>Termékek</span>
                  <span>{cartItems.length} tétel</span>
                </div>

                <div className="flex justify-between text-[#5b685f]">
                  <span>Szállítás</span>
                  <span>Később számolva</span>
                </div>

                <div className="border-t border-[#e5dfd3] pt-4">
                  <div className="flex justify-between text-xl font-bold text-[#17251d]">
                    <span>Összesen</span>
                    <span>{cartTotal.toLocaleString('hu-HU')} Ft</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#1d3d29]">
                Tovább a pénztárhoz
              </button>

              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-[#254d34]/20 px-8 py-4 text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
              >
                Kosár ürítése
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}