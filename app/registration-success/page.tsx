import Link from "next/link";
import { MdArrowForward, MdCheckCircle, MdGroups } from "react-icons/md";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function RegistrationSuccessPage() {
  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 size-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 size-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="size-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/30 shadow-lg shadow-green-500/10">
                <MdCheckCircle className="text-5xl animate-scale-in" />
              </div>

              <h1 className="text-3xl md:text-5xl font-bold font-display mb-4 text-gradient">
                Pendaftaran Berhasil!
              </h1>

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Data pendaftaran Anda telah kami simpan di database Itech
                Poliban. Terima kasih telah berani melangkah untuk menjadi
                Programmer masa depan.
              </p>

              <div className="space-y-4 w-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                  <h3 className="text-white font-bold flex items-center gap-2 mb-2">
                    <MdGroups className="text-accent text-xl" />
                    Langkah Selanjutnya
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Silakan bergabung ke Group WhatsApp resmi calon peserta
                    untuk mendapatkan informasi terkait jadwal pertemuan perdana
                    dan koordinasi teknis lainnya.
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/L4Z1m7N6p5nC9L8t0F2Z1X" // Contoh link group
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-600/20"
                  >
                    Gabung Group WhatsApp
                    <MdArrowForward />
                  </Link>
                </div>

                <Link
                  href="/"
                  className="inline-block text-gray-500 hover:text-white text-sm transition-colors mt-4 underline underline-offset-4"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
