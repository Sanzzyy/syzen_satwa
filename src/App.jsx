import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoBanner from "./components/InfoBanner";
import KoleksiSatwa from "./components/KoleksiSatwa";
import Aktivitas from "./components/Aktivitas";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Refs untuk elemen GSAP
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    // Flag untuk mengecek siapa yang selesai duluan
    let isAnimComplete = false;
    let isWindowLoaded = document.readyState === "complete";

    // Fungsi penutup: Layar loading ditarik ke atas (slide up)
    const hideLoader = () => {
      gsap.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          setIsLoading(false); // Hapus dari DOM setelah animasi selesai
        },
      });
    };

    // Fungsi wasit: Ngecek apakah Animasi DAN Window Load sudah sama-sama beres
    const checkReady = () => {
      if (isAnimComplete && isWindowLoaded) {
        hideLoader();
      }
    };

    // 1. Pantau Window Load
    const handleLoad = () => {
      isWindowLoaded = true;
      checkReady(); // Lapor ke wasit kalau window udah beres
    };

    if (!isWindowLoaded) {
      window.addEventListener("load", handleLoad);
    }

    // 2. Pantau Animasi GSAP awal
    const tl = gsap.timeline({
      onComplete: () => {
        isAnimComplete = true;
        checkReady(); // Lapor ke wasit kalau animasi udah beres
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    ).to(progressBarRef.current, {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Cleanup listener
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* --- GSAP LOADING SCREEN --- */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[9999] bg-[#FAF7F0] flex flex-col items-center justify-center pointer-events-auto"
        style={{ display: isLoading ? "flex" : "none" }}
      >
        <div className="flex flex-col items-center">
          <span
            ref={textRef}
            className="text-4xl md:text-5xl font-bold text-emerald-950 tracking-widest mb-8"
          >
            Syzen<span className="text-emerald-600">Satwa.</span>
          </span>

          <div className="w-48 md:w-64 h-[2px] bg-emerald-900/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-emerald-600 w-0"
            ></div>
          </div>
        </div>
      </div>

      {/* --- KONTEN WEBSITE UTAMA --- */}
      <div className="min-h-screen bg-[#FAF7F0] font-sans scroll-smooth">
        <Navbar />
        <main>
          <section id="beranda">
            <Hero />
          </section>
          <InfoBanner />
          <KoleksiSatwa />
          <Aktivitas />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
