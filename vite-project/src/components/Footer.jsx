import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#e5dfd3] bg-[#17251d] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold">
            Florarium
          </Link>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Fenntartható, kézzel készített floráriumok és üvegbe zárt mini
            kertek modern otthonokba.
          </p>

          <div className="mt-6">
            <p className="text-sm font-bold">Hírlevél</p>
            <div className="mt-3 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email címed"
                className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-white/50"
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#254d34]">
                Feliratkozom
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Webshop</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link to="/termekek" className="hover:text-white">
              Termékek
            </Link>
            <Link to="/kosar" className="hover:text-white">
              Kosár
            </Link>
            <a href="#ai-assistant" className="hover:text-white">
              MI asszisztens
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Információk</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <a href="#adatvedelem" className="hover:text-white">
              Adatvédelem
            </a>
            <a href="#aszf" className="hover:text-white">
              ÁSZF
            </a>
            <a href="#kapcsolat" className="hover:text-white">
              Kapcsolat
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Florarium Niche Webshop. Minden jog fenntartva.</p>
        <p>Fenntartható lakásdekoráció • Üvegbe zárt kertek</p>
      </div>
    </footer>
  )
}