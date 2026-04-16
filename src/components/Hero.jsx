import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef([]);

  // Fungsi pembantu untuk mengumpulkan elemen yang akan dianimasikan
  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animasi GSAP: Teks muncul dari bawah dengan efek fade-in secara bergantian (stagger)
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3, // Menunggu navbar render sejenak
      },
    );
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={heroRef}
    >
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Menggunakan tag <video> bukan <img> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/tupai.mp4" type="video/mp4" />
          {/* Fallback text jika browser jadul tidak support video */}
          Browser Anda tidak mendukung tag video.
        </video>

        {/* Gradient Overlay tetap dipertahankan agar teks bisa terbaca */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#FAF7F0]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        {/* Pada tag <h1> */}
        <h1
          ref={addToRefs}
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] leading-tight"
        >
          Jelajahi Keajaiban <br />
          <span className="text-emerald-400 drop-shadow-md">Alam Liar</span>
        </h1>

        {/* Pada tag <p> */}
        <p
          ref={addToRefs}
          className="text-lg md:text-xl text-gray-100 mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mx-auto font-medium"
        >
          Kenali lebih dekat ribuan spesies eksotis di habitat aslinya.
          Pengalaman edukatif, aman, dan seru untuk seluruh keluarga.
        </p>

        <div
          ref={addToRefs}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          {/* Tombol Primary: Dibuat lebih gelap dan elegan agar senada dengan tema */}
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto border border-emerald-700 hover:border-emerald-800">
            Mulai Petualangan
          </button>

          {/* Tombol Secondary: Outline dengan efek glassmorphism */}
          <button className="bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/60 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
            Lihat Peta Area
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
