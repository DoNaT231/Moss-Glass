import { Link } from 'react-router-dom'

export default function CarePage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-20 text-[#17251d] sm:px-8 lg:px-10">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
          Gondozási útmutató
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Hogyan gondozd a floráriumodat?
        </h1>

        <p className="mt-5 text-[#5b685f]">
          Itt lesznek a részletes gondozási tanácsok: fény, páratartalom,
          locsolás, penész megelőzés és gyakori hibák.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            'Ne tedd közvetlen napfényre',
            'Figyeld a párásodást',
            'Csak mértékkel locsold',
            'Szellőztesd, ha túl sok a pára',
          ].map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="font-bold text-[#254d34]">✓ {item}</p>
            </div>
          ))}
        </div>

        <Link
          to="/termekek"
          className="mt-10 inline-block rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white"
        >
          Floráriumok megtekintése
        </Link>
      </section>
    </main>
  )
}