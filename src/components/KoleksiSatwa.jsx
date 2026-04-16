const KoleksiSatwa = () => {
  // Data dummy kategori satwa, nanti gambarnya bisa kamu ganti dengan asetmu
  const categories = [
    {
      id: 1,
      title: "Kawasan Primata",
      description:
        "Saksikan kelincahan dan kecerdasan berbagai spesies kera dan monyet yang berinteraksi bebas di habitat terbukanya.",
      video: "/videos/monyet.mp4",
    },
    {
      id: 2,
      title: "Mamalia Raksasa",
      description:
        "Kenali lebih dekat gajah yang anggun dan lembut. Pelajari program konservasi kami untuk mamalia darat terbesar ini.",
      video: "/videos/gajah.mp4",
    },
    {
      id: 3,
      title: "Sabana Afrika",
      description:
        "Kagumi keindahan corak unik kawanan zebra dan rasakan langsung atmosfer ala sabana liar yang eksotis.",
      video: "/videos/zebra.mp4",
    },
  ];

  return (
    <section id="satwa" className="py-24 bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-2">
            Koleksi Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Kenali Mereka Lebih Dekat
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai zona habitat yang dirancang khusus untuk
            menyerupai lingkungan asli para satwa, memastikan kenyamanan mereka
            dan pengalaman tak terlupakan untuk Anda.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer h-96"
            >
              {/* MENGGUNAKAN TAG VIDEO SEBAGAI PENGGANTI IMG */}
              <video
                src={category.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Gradient Overlay untuk teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent transition-opacity duration-300"></div>

              {/* Konten Card */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h4>
                <p className="text-gray-200 text-sm opacity-90 mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Teks "Lihat Detail" yang muncul saat di-hover */}
                <div className="flex items-center text-emerald-300 font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Lihat Detail</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol View All */}
        <div className="text-center mt-12">
          <button className="border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
            Lihat Semua Satwa
          </button>
        </div>
      </div>
    </section>
  );
};

export default KoleksiSatwa;
