import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-emerald-900/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-emerald-900 tracking-wider">
              Syzen<span className="text-emerald-600">Satwa.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#beranda"
              className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
            >
              Beranda
            </a>
            <a
              href="#satwa"
              className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
            >
              Koleksi Satwa
            </a>
            <a
              href="#aktivitas"
              className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
            >
              Aktivitas & Fasilitas
            </a>
          </div>

          {/* CTA Button (Call to Action) */}
          <div className="hidden md:flex">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md">
              Beli Tiket
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-900 hover:text-emerald-600 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-emerald-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
            <a
              href="#beranda"
              className="block px-3 py-3 text-emerald-900 font-medium hover:bg-emerald-50 rounded-md"
            >
              Beranda
            </a>
            <a
              href="#satwa"
              className="block px-3 py-3 text-emerald-900 font-medium hover:bg-emerald-50 rounded-md"
            >
              Koleksi Satwa
            </a>
            <a
              href="#aktivitas"
              className="block px-3 py-3 text-emerald-900 font-medium hover:bg-emerald-50 rounded-md"
            >
              Aktivitas
            </a>
            <a
              href="#fasilitas"
              className="block px-3 py-3 text-emerald-900 font-medium hover:bg-emerald-50 rounded-md"
            >
              Fasilitas
            </a>
            <button className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-colors">
              Beli Tiket
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
