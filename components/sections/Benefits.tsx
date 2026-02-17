import { FaTrophy } from "react-icons/fa";
import {
  MdCalendarMonth,
  MdEmojiEvents,
  MdLaptopMac,
  MdWorkspacePremium,
} from "react-icons/md";

export default function Benefits() {
  return (
    <section className="py-20 bg-[#0f0c13]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold font-display text-gradient">
              Persyaratan & Detail
            </h2>
            <div className="bg-card-dark p-6 rounded-xl border border-border-dark flex gap-4 items-start">
              <MdLaptopMac className="text-accent text-3xl shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white">
                  Wajib Membawa Laptop
                </h4>
                <p className="text-gray-400 text-sm">
                  Spesifikasi minimal RAM 4GB (8GB disarankan). OS Windows, Mac,
                  atau Linux.
                </p>
              </div>
            </div>
            <div className="bg-card-dark p-6 rounded-xl border border-border-dark flex gap-4 items-start">
              <MdCalendarMonth className="text-primary text-3xl shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white">Jadwal Offline</h4>
                <p className="text-gray-400 text-sm">
                  Pelatihan dilakukan secara tatap muka di kampus Poliban setiap
                  akhir pekan.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MdEmojiEvents className="text-9xl" />
            </div>
            <h2 className="text-3xl font-bold font-display mb-8 text-gradient">
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
  );
}
