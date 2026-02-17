import { MdArrowForward, MdPlayCircle } from "react-icons/md";

export default function Hero() {
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
          Bagaimana Menyesuaikan Diri di Era AI Menggunakan Vibe Coding. Kuasai
          teknik coding modern dimana Anda menjadi pilot dan AI adalah asisten
          cerdas Anda.
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
  );
}
