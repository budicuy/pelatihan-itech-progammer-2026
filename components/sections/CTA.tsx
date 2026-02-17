"use client";

import { useRegistration } from "@/components/providers/RegistrationProvider";

export default function CTA() {
  const { openModal, isRegistrationOpen, isLoadingStatus } = useRegistration();

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
        {!isLoadingStatus && (
          <button
            type="button"
            onClick={openModal}
            disabled={!isRegistrationOpen}
            className={`px-10 py-4 rounded-lg font-bold text-xl transition-all w-full sm:w-auto ${
              isRegistrationOpen
                ? "bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/30"
                : "bg-gray-800 text-gray-500 cursor-not-allowed shadow-none"
            }`}
          >
            {isRegistrationOpen
              ? "Daftar Sekarang Gratis"
              : "Pendaftaran Belum dibuka"}
          </button>
        )}
      </div>
    </section>
  );
}
