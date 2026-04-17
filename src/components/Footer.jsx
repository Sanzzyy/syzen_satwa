const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-wider mb-6 block">
              Syzen<span className="text-emerald-400">Satwa.</span>
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Dedikasi kami adalah untuk pelestarian satwa liar dan edukasi alam
              bagi generasi mendatang. Temukan keajaiban alam liar tepat di
              jantung kota.
            </p>
            {/* Social Media - Sesuai branding kamu */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-white font-bold mb-6">Jelajahi</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#beranda"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#satwa"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Koleksi Satwa
                </a>
              </li>
              <li>
                <a
                  href="#aktivitas"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Fasilitas & Aktivitas
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Info Kontak */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">📍</span>
                <span>
                  Jl. Pagar Alam, Bandar Lampung,
                  <br />
                  Lampung, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400">📞</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-400">✉️</span>
                <span>info@tamansatwa.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Bawah & Copyright */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-700 font-medium">
          <p>© 2026 Taman Satwa Indonesia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-emerald-400">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
