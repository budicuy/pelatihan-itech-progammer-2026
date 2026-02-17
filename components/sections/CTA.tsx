export default function CTA() {
  return (
    <section className="py-20 bg-background-dark border-t border-border-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">
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
  );
}
