import { Link } from 'react-router-dom'

const trustItems = [
  {
    title: 'Biztonságos vásárlás',
    text: 'Átlátható kosár- és pénztárfolyamat, automatikus visszaigazolással.',
  },
  {
    title: 'GDPR-kompatibilis működés',
    text: 'Az adataidat biztonságosan kezeljük, csak a szükséges információkat kérjük el.',
  },
  {
    title: 'Gondozási útmutató',
    text: 'Minden floráriumhoz érthető gondozási tanácsokat adunk, kezdőknek is.',
  },
  {
    title: 'Fenntartható szemlélet',
    text: 'Tudatos alapanyagválasztás és természetközeli design modern otthonokba.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-[#f4f1ea] px-5 py-20 text-[#17251d] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm sm:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
              Bizalom és gondoskodás
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Vásárlás után sem engedjük el a kezed
            </h2>

            <p className="mt-4 text-[#5b685f]">
              A florárium mellé nemcsak terméket kapsz, hanem útmutatást,
              biztonságos vásárlási élményt és átlátható adatkezelést is.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#e5dfd3] bg-[#f8f6f0] p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#254d34] text-white">
                  ✓
                </div>

                <h3 className="font-bold text-[#17251d]">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#5b685f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/gondozas"
              className="rounded-full bg-[#254d34] px-8 py-4 text-center text-sm font-bold text-white transition hover:bg-[#1d3d29]"
            >
              Gondozási útmutató
            </Link>

            <Link
              to="/termekek"
              className="rounded-full border border-[#254d34]/20 px-8 py-4 text-center text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
            >
              Termékek megtekintése
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}