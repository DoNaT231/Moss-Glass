import { Link } from 'react-router-dom'

export default function AddToCartModal({ product, onClose }) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-6 text-center shadow-2xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#254d34] text-2xl text-white">
          ✓
        </div>

        <h2 className="mt-5 text-2xl font-bold text-[#17251d]">
          Kosárba rakva
        </h2>

        <p className="mt-3 text-[#5b685f]">
          A(z){' '}
          <span className="font-bold text-[#17251d]">{product.name}</span>{' '}
          bekerült a kosaradba.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/kosar"
            className="flex-1 rounded-full bg-[#254d34] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1d3d29]"
          >
            Kosár megtekintése
          </Link>

          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-[#254d34]/20 px-6 py-3 text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
          >
            Tovább vásárolok
          </button>
        </div>
      </div>
    </div>
  )
}