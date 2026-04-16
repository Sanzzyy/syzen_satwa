const InfoBanner = () => {
  return (
    // relative dan z-20 memastikan banner ini berada di atas elemen lain
    // -mt-20 menarik banner ini ke atas menembus batas section sebelumnya
    <div className="relative z-20 -mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container utama dengan efek glassmorphism tipis dan shadow */}
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-emerald-900/5 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-emerald-100">
        {/* Info 1: Jam Operasional */}
        <div className="flex-1 w-full flex items-center justify-start md:justify-center gap-4 px-4 py-6 md:py-0">
          <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">
              Jam Operasional
            </p>
            <p className="text-lg font-bold text-gray-900">08:00 - 17:00 WIB</p>
            <p className="text-xs text-emerald-600 font-medium">
              Buka Setiap Hari
            </p>
          </div>
        </div>

        {/* Info 2: Lokasi */}
        <div className="flex-1 w-full flex items-center justify-start md:justify-center gap-4 px-4 py-6 md:py-0">
          <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">
              Lokasi Utama
            </p>
            <p className="text-lg font-bold text-gray-900">Bandar Lampung</p>
            <a
              href="#"
              className="text-xs text-emerald-600 font-medium hover:underline"
            >
              Lihat di Google Maps &rarr;
            </a>
          </div>
        </div>

        {/* Info 3: Tiket */}
        <div className="flex-1 w-full flex items-center justify-start md:justify-center gap-4 px-4 pt-6 md:pt-0">
          <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium mb-0.5">
              Tiket Masuk
            </p>
            <p className="text-lg font-bold text-gray-900">Mulai Rp 35.000</p>
            <p className="text-xs text-emerald-600 font-medium">
              Bebas Akses Satwa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
