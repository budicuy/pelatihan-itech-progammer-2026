import Image from "next/image";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import { HiOutlineDatabase } from "react-icons/hi";
import {
  MdArrowForward,
  MdBolt,
  MdBugReport,
  MdCalendarMonth,
  MdCall,
  MdConstruction,
  MdDesignServices,
  MdEmojiEvents,
  MdHandshake,
  MdLaptopMac,
  MdMail,
  MdMenu,
  MdPerson,
  MdPlayCircle,
  MdPublic,
  MdRocketLaunch,
  MdSmartToy,
  MdTerminal,
  MdWorkspacePremium,
  MdAutoFixHigh,
  MdTipsAndUpdates,
  MdLayers,
} from "react-icons/md";
import {
  SiGooglecloud,
  SiNextdotjs,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#141118]/80 backdrop-blur-md border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-itech.svg"
                alt="Itech Poliban Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <h2 className="text-white text-lg font-bold tracking-tight font-display">
                Programmer Itech Poliban
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href="#home"
              >
                Beranda
              </Link>
              <Link
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href="#vision"
              >
                Visi
              </Link>
              <Link
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href="#curriculum"
              >
                Materi
              </Link>
              <Link
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href="#timeline"
              >
                Jadwal
              </Link>
              <Link
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href="#benefits"
              >
                Benefit
              </Link>
            </div>
            <button
              type="button"
              className="hidden md:flex bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Daftar Sekarang
            </button>
            <div className="md:hidden text-white">
              <MdMenu className="text-2xl" />
            </div>
          </header>
        </div>
      </nav>

      {/* Hero Section */}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-border-dark/50 border border-primary/30 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Speaker: Budiannor
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight mb-6">
            Pelatihan Divisi Programmer <br />
            <span className="text-gradient">Komunitas Itech Poliban 2026</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Bagaimana Menyesuaikan Diri di Era AI Menggunakan Vibe Coding.
            Kuasai teknik coding modern dimana Anda menjadi pilot dan AI adalah
            asisten cerdas Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-lg transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              <span>Daftar Sekarang</span>
              <MdArrowForward className="group-hover:translate-x-1 transition-transform text-2xl" />
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 hover:border-accent text-white hover:text-accent rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              <MdPlayCircle className="text-2xl" />
              <span>Tonton Intro</span>
            </button>
          </div>
          {/* Stats/Tags */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border-dark pt-8 max-w-4xl mx-auto">
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

      {/* Philosophy Section */}
      <section
        className="py-24 bg-[#0f0c13] relative overflow-hidden"
        id="vision"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-accent font-medium mb-2 uppercase tracking-widest text-sm">
              Paradigma Baru
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Filosofi Vibe Coding
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kami tidak hanya mengajarkan cara menulis kode, tapi bagaimana
              cara{" "}
              <span className="text-white font-semibold">
                menciptakan masa depan
              </span>{" "}
              dengan harmoni antara intuisi manusia dan presisi mesin.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary hover:translate-x-2 transition-transform duration-300">
                <div className="flex gap-5">
                  <div className="shrink-0 size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-lg shadow-primary/10">
                    <MdPerson className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-display">
                      The Visionary Pilot
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      Anda adalah otak di balik layar. Fokus pada{" "}
                      <span className="text-accent">
                        arsitektur, logika bisnis, dan pengalaman pengguna
                      </span>
                      . Biarkan insting kreatif Anda memandu arah proyek tanpa
                      terhambat oleh hambatan teknis yang repetitif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-accent hover:translate-x-2 transition-transform duration-300">
                <div className="flex gap-5">
                  <div className="shrink-0 size-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent border border-accent/30 shadow-lg shadow-accent/10">
                    <MdSmartToy className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-display">
                      The Neural Co-Pilot
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      AI bertugas sebagai asisten super cerdas yang{" "}
                      <span className="text-primary-light">
                        mengeliminasi boilerplate, melakukan debugging instan,
                        dan mereferensikan dokumentasi
                      </span>{" "}
                      secara real-time. Kecepatan eksekusi Anda akan meningkat
                      hingga 10x lipat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500 hover:translate-x-2 transition-transform duration-300">
                <div className="flex gap-5">
                  <div className="shrink-0 size-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-lg shadow-purple-500/10">
                    <MdLayers className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 font-display">
                      The Flow Ecosystem
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      Transformasi dari sekadar koding menjadi{" "}
                      <span className="text-purple-300">orchestration</span>.
                      Kami membangun ekosistem dimana tools, AI, dan kreativitas
                      Anda menyatu tanpa hambatan, menciptakan lingkungan kerja
                      yang suportif bagi inovasi tanpa batas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <MdAutoFixHigh className="text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Intuitive Prompting
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <MdTipsAndUpdates className="text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Rapid Innovation
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-4/5 rounded-3xl bg-linear-to-br from-primary via-purple-900 to-black p-1 shadow-2xl shadow-primary/20">
                <div
                  className="h-full w-full bg-card-dark rounded-[calc(1.5rem-1px)] relative overflow-hidden flex items-center justify-center bg-cover bg-center group"
                  style={{
                    backgroundImage: "url('/synergy-hero.png')",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700" />
                  <div className="relative z-10 text-center p-8 transform group-hover:scale-105 transition-transform duration-700">
                    <div className="size-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <MdHandshake className="text-6xl text-accent animate-bounce-slow" />
                    </div>
                    <h4 className="text-3xl font-bold text-white font-display mb-2">
                      Absolute Synergy
                    </h4>
                    <p className="text-accent font-medium tracking-widest uppercase text-xs mb-4">
                      Unstoppable Flow State
                    </p>
                    <div className="flex justify-center gap-1">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      <div className="h-1 w-16 bg-accent rounded-full" />
                      <div className="h-1 w-8 bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-white/10 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <MdRocketLaunch className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                      Production Speed
                    </p>
                    <p className="text-lg font-bold text-white leading-none">
                      +300%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 relative" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Kurikulum Vibe Coding
            </h2>
            <p className="text-gray-400">
              Materi disusun untuk membawamu dari dasar hingga siap deployment
              dengan tools modern.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <MdConstruction className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Tools AI Gratis
              </h3>
              <p className="text-gray-400 text-sm">
                Eksplorasi tools gratis yang powerful untuk coding tanpa biaya
                langganan.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                <MdDesignServices className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Design to Code
              </h3>
              <p className="text-gray-400 text-sm">
                Mengubah prototype UI menjadi kode fungsional dalam hitungan
                menit.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group border-accent/30 glow-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <MdBolt className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vibe Coding</h3>
              <p className="text-gray-400 text-sm">
                Technic coding flow state. Fokus pada logika bisnis, biarkan AI
                menangani syntax.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
                <MdTerminal className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Prompt Engineering
              </h3>
              <p className="text-gray-400 text-sm">
                Seni memberikan instruksi yang tepat kepada AI untuk output kode
                terbaik.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <MdBugReport className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Testing & Debugging
              </h3>
              <p className="text-gray-400 text-sm">
                Menggunakan AI untuk menemukan bug dan menulis unit test
                otomatis.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <MdRocketLaunch className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-400 text-sm">
                Publish aplikasi Anda ke internet menggunakan Vercel dan layanan
                cloud modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-10 border-y border-border-dark bg-[#0f0c13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">
            Powered by Modern Stack
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <SiGooglecloud className="text-2xl" /> Google IDX
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <Image
                src="/antigravittlogo.png"
                alt="Antigravity Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              Antigravity
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <SiNextdotjs className="text-2xl" /> Next.js
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-green-400">
              <HiOutlineDatabase className="text-2xl" /> Neon DB
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-green-600">
              <SiNodedotjs className="text-2xl" /> Node.js
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <SiVercel className="text-2xl" /> Vercel
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background-dark" id="timeline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Timeline Pelatihan
            </h2>
            <p className="text-gray-400">12 Pertemuan Intensif (Maret - Mei)</p>
          </div>
          <div className="relative border-l-2 border-border-dark ml-4 md:ml-0 md:space-y-12 space-y-8">
            {/* Phase 1 */}
            <div className="relative md:pl-12 pl-6">
              <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-background-dark" />
              <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative">
                <span className="absolute top-4 right-4 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  Maret
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Phase 1: Foundation & AI Setup
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Membangun fondasi teknis dan integrasi AI dalam workflow
                  development.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 1 : Technical Meeting
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 2 : Installasi setup dan Struktur Dasar Project
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 3 : Belajar Tools dan Promting AI
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 4 : Belajar Desain dan Prototiping dengan AI
                  </span>
                </div>
              </div>
            </div>
            {/* Phase 2 */}
            <div className="relative md:pl-12 pl-6">
              <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-accent border-4 border-background-dark" />
              <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative">
                <span className="absolute top-4 right-4 text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                  April
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Phase 2: Development & Integration
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Implementasi desain, deployment, dan integrasi database
                  dinamis.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 5 : Slicing Desain ke Project
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 6 : Deploy App Ke Gitbub dan Hosting ke Vercel
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 7 : Integrasikan Ke database dan Data dinamis
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 8 : Pengujian Peforma dan Testing Otomatis
                  </span>
                </div>
              </div>
            </div>
            {/* Phase 3 */}
            <div className="relative md:pl-12 pl-6">
              <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full bg-white border-4 border-background-dark" />
              <div className="bg-card-dark border border-border-dark rounded-xl p-6 relative">
                <span className="absolute top-4 right-4 text-xs font-bold text-white bg-white/10 px-2 py-1 rounded">
                  Mei
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Phase 3: Polishing & Launch
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Uji coba studi kasus nyata, review akhir, dan dokumentasi
                  portofolio.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 9 : Tes Implementasikan Studi Kasus 1 Web
                    E-Commerce dan Studi Kasus Poliklinik
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 10 : Tes Implementasikan Studi Kasus 2 Web
                    E-Commerce dan Studi Kasus Poliklinik
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded w-fit">
                    Pertemuan 11 : Review Hasil Web yang di kerjakan
                  </span>
                  <span className="text-xs bg-primary text-white px-2 py-1 rounded w-fit font-bold">
                    Pertemuan 12 : Dokumentasi Project untuk Portofolio dan
                    Evaluasi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & Benefits */}
      <section className="py-20 bg-[#0f0c13]" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold font-display">
                Persyaratan & Detail
              </h2>
              <div className="bg-card-dark p-6 rounded-xl border border-border-dark flex gap-4 items-start">
                <MdLaptopMac className="text-accent text-3xl shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Wajib Membawa Laptop
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Spesifikasi minimal RAM 4GB (8GB disarankan). OS Windows,
                    Mac, atau Linux.
                  </p>
                </div>
              </div>
              <div className="bg-card-dark p-6 rounded-xl border border-border-dark flex gap-4 items-start">
                <MdCalendarMonth className="text-primary text-3xl shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Jadwal Offline
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Pelatihan dilakukan secara tatap muka di kampus Poliban
                    setiap akhir pekan.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MdEmojiEvents className="text-9xl" />
              </div>
              <h2 className="text-3xl font-bold font-display mb-8">
                Rewards & Sertifikat
              </h2>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shrink-0">
                    <MdWorkspacePremium className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      E-Certificate Resmi
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Untuk semua peserta yang menyelesaikan pelatihan.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-accent flex items-center justify-center text-black font-bold shadow-lg shadow-accent/20 shrink-0">
                    <FaTrophy className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      Hadiah Top 3 Peserta
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Peserta terbaik akan mendapatkan hadiah eksklusif dari
                      Itech.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background-dark border-t border-border-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Siap Menjadi Programmer AI?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Kuota terbatas untuk menjaga kualitas pelatihan. Daftarkan dirimu
            sekarang sebelum terlambat.
          </p>
          <button
            type="button"
            className="px-10 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-xl transition-all shadow-xl shadow-primary/30 w-full sm:w-auto"
          >
            Daftar Sekarang Gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-itech.svg"
              alt="Itech Poliban Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-white font-bold font-display text-lg">
              Itech Poliban
            </span>
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p className="mb-2">Hubungi Kami:</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <Link
                className="hover:text-accent transition-colors flex items-center gap-1"
                href="#"
              >
                <MdCall className="text-sm" /> WhatsApp
              </Link>
              <Link
                className="hover:text-accent transition-colors flex items-center gap-1"
                href="#"
              >
                <MdMail className="text-sm" /> Email
              </Link>
              <Link
                className="hover:text-accent transition-colors flex items-center gap-1"
                href="#"
              >
                <MdPublic className="text-sm" /> Instagram
              </Link>
            </div>
            <p className="mt-4 opacity-50">
              © 2026 Komunitas Itech Poliban. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
