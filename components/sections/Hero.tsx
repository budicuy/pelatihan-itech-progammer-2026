"use client";

import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import { useRegistration } from "@/components/providers/RegistrationProvider";

export default function Hero() {
  const { openModal, isRegistrationOpen, isLoadingStatus } = useRegistration();

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      id="home"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="hero-animate inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-dark/50 border border-primary/30 mb-6 backdrop-blur-sm"
          style={{ "--delay": "0s" } as React.CSSProperties}
        >
          <span className="flex h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Batch 1 : Vibe Coding AI - 2026
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight mb-6">
          <span
            className="hero-animate inline-block"
            style={{ "--delay": "0.15s" } as React.CSSProperties}
          >
            Pelatihan Divisi Programmer
          </span>
          <br />
          <span
            className="hero-animate text-gradient inline-block"
            style={{ "--delay": "0.3s" } as React.CSSProperties}
          >
            Komunitas Itech Poliban 2026
          </span>
          <br />
          <span
            className="hero-animate text-2xl font-bold bg-linear-to-r from-primary to-accent md:text-4xl lg:text-5xl px-5 py-2 inline-block"
            style={{ "--delay": "0.45s" } as React.CSSProperties}
          >
            (Coming Soon!)
          </span>
        </h1>
        <p
          className="hero-animate text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ "--delay": "0.6s" } as React.CSSProperties}
        >
          Bagaimana Menyesuaikan Diri di Era AI Menggunakan Vibe Coding. Kuasai
          teknik coding modern dimana Anda menjadi pilot dan AI adalah asisten
          cerdas Anda.
        </p>
        <div
          className="hero-animate flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ "--delay": "0.8s" } as React.CSSProperties}
        >
          <button
            type="button"
            onClick={openModal}
            disabled={!isRegistrationOpen || isLoadingStatus}
            className={`w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group ${
              isRegistrationOpen
                ? "bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/25"
                : "bg-gray-800 text-gray-500 cursor-not-allowed shadow-none"
            } ${isLoadingStatus ? "opacity-0" : "opacity-100"}`}
          >
            <span>
              {isRegistrationOpen
                ? "Daftar Sekarang"
                : "Pendaftaran Belum dibuka"}
            </span>
            {isRegistrationOpen && (
              <MdArrowForward className="group-hover:translate-x-1 transition-transform text-2xl" />
            )}
          </button>
          <a
            href="#vision"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 hover:border-accent text-white hover:text-accent rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2 group/btn"
          >
            <MdArrowDownward className="text-2xl group-hover:translate-y-1 transition-transform" />
            <span>Pelajari Selengkapnya</span>
          </a>
        </div>
        {/* Stats/Tags */}
        <div
          className="hero-animate mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border-dark pt-8 max-w-4xl mx-auto"
          style={{ "--delay": "1s" } as React.CSSProperties}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white font-display">
              12x
            </span>
            <span className="text-sm text-gray-500">Pertemuan Offline</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white font-display">
              GRATIS
            </span>
            <span className="text-sm text-gray-500">Biaya Pendaftaran</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white font-display">
              30+
            </span>
            <span className="text-sm text-gray-500">Mahasiswa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-accent font-display">
              Terbaik 1-3
            </span>
            <span className="text-sm text-gray-500">Hadiah Menarik</span>
          </div>
        </div>
      </div>
    </section>
  );
}
