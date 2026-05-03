import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { pathname } = useLocation()
  const {cartCount} = useCart()

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`text-sm font-semibold transition ${
        pathname === path
          ? 'text-[#254d34]'
          : 'text-[#5b685f] hover:text-[#254d34]'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dfd3] bg-[#f4f1ea]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-[#17251d]"
        >
          Florarium
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItem('/', 'Főoldal')}
          {navItem('/termekek', 'Termékek')}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* AI button */}
          <Link 
            className="hidden rounded-full border border-[#254d34]/20 px-4 py-2 text-sm font-bold text-[#254d34] transition hover:bg-white md:block"
            to="/asszisztens"
            >
            MI asszisztens
          </Link>

          {/* CART */}
          <Link
            to="/kosar"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#254d34] text-white"
          >
            🛒
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#254d34]">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}