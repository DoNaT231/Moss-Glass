import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Mini kertek',
    text: 'Kompakt floráriumok íróasztalra, polcra vagy ajándékba.',
    image:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Nagy floráriumok',
    text: 'Látványos üvegkertek nappaliba, irodába vagy prémium enteriőrbe.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Gondozási eszközök',
    text: 'Eszközök és kiegészítők, hogy a mini ökoszisztémád egészséges maradjon.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85',
  },
]

export default function CategorySection() {
  return (
    <section className="bg-[#f4f1ea] px-5 py-20 text-[#17251d] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
            Kategóriák
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Találd meg a hozzád illő floráriumot
          </h2>

          <p className="mt-4 text-[#5b685f]">
            Válassz kezdőbarát mini kertek, látványos nagy floráriumok vagy
            gondozási eszközök közül.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/termekek"
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#17251d]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5b685f]">
                  {category.text}
                </p>

                <span className="mt-5 inline-block text-sm font-bold text-[#254d34]">
                  Megnézem →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}