import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-[#f4f1ea] text-[#17251d]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
        
        {/* TEXT */}
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-block rounded-full border border-[#c7d3bf] bg-white px-4 py-2 text-sm font-semibold text-[#46664b] shadow-sm">
            Fenntartható lakásdekoráció • Üvegbe zárt kertek
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#15251b] sm:text-5xl lg:text-6xl">
            Prémium floráriumok
            <span className="block text-[#3f6b4b]">
              modern otthonokba
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#4f5f55] sm:text-lg lg:mx-0">
            Kézzel készített mini ökoszisztémák, amelyek természetközeli
            hangulatot visznek az otthonodba — kevés gondozással, letisztult
            designnal és okos vásárlási élménnyel.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/termekek"
              className="rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white shadow-md transition hover:text-white hover:bg-[#1d3d29]"
            >
              Floráriumok felfedezése
            </Link>

            <a
              href="#ai-assistant"
              className="rounded-full border border-[#254d34]/20 bg-white px-8 py-4 text-sm font-bold text-[#254d34] shadow-sm transition hover:bg-[#f8f8f4]"
            >
              MI asszisztens
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=85"
              alt="Florárium növények üvegben"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}