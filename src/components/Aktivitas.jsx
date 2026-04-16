const Aktivitas = () => {
  const activities = [
    {
      id: 1,
      title: "Waterboom & Taman Air",
      description:
        "Segarkan diri Anda dan keluarga di wahana kolam renang kami yang dilengkapi dengan seluncuran seru.",
      images: "/images/swimming_park.jpg",
    },
    {
      id: 2,
      title: "Wahana Outbound",
      description:
        "Uji keberanian dengan berbagai rintangan seru. Tersedia area aman yang cocok untuk anak-anak maupun dewasa.",
      images: "/images/outbound.jpg",
    },
    {
      id: 3,
      title: "Restoran & Kuliner",
      description:
        "Nikmati ragam hidangan lezat dan menyegarkan dengan suasana alam yang asri setelah lelah berkeliling.",
      images: "/images/restaurant.jpg",
    },
    {
      id: 4,
      title: "Area Bersantai",
      description:
        "Rehat sejenak di gazebo dan taman teduh kami. Tempat yang sempurna untuk bersantai menikmati udara segar.",
      images: "/images/nyantai.jpg",
    },
  ];

  return (
    <section id="aktivitas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-2">
            Fasilitas Ekstra
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Lebih Dari Sekadar Syzen Satwa
          </h3>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((item) => (
            // WRAPPER CARD: Background putih, border tipis, shadow, dan rounded-3xl
            <div
              key={item.id}
              className="group bg-white border border-emerald-900/5 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
            >
              {/* Wadah Gambar - Tanpa padding agar memenuhi lebar card atas */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={item.images}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Teks Konten - Diberi padding (p-6) agar rapi di dalam card */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aktivitas;
