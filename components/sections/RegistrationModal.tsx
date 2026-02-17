"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdClose, MdError, MdSend } from "react-icons/md";
import { getRegistrationCount } from "@/app/actions/get-count";
import { registerAction } from "@/app/actions/register";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    prodi: "",
    motivasi: "",
    quote: "",
    komit: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentCount, setCurrentCount] = useState<number | null>(null);
  const isFull = currentCount !== null && currentCount >= 30;

  useEffect(() => {
    if (isOpen) {
      getRegistrationCount().then(setCurrentCount);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.komit || isLoading) return;

    setIsLoading(true);

    try {
      // Simpan ke Database
      const result = await registerAction({
        nama: formData.nama,
        nim: formData.nim,
        prodi: formData.prodi,
        motivasi: formData.motivasi,
        quote: formData.quote,
      });

      if (!result.success) {
        alert(result.error);
        setIsLoading(false);
        return;
      }

      // Redirect ke halaman sukses daripada buka WA
      router.push("/registration-success");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan sistem.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in w-full h-full border-none cursor-default"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal Content */}
      <div
        className="bg-[#1a1620] border border-white/10 w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-linear-to-r from-primary/10 to-transparent">
          <div>
            <h3
              id="modal-title"
              className="text-xl font-bold text-white font-display"
            >
              Form Pendaftaran
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              Lengkapi data dirimu untuk bergabung
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-full text-gray-400 transition-colors"
            aria-label="Close"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isFull && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-red-400 mb-2">
              <MdError className="text-2xl shrink-0" />
              <p className="text-xs font-medium leading-relaxed">
                Maaf, pendaftaran telah ditutup karena kuota 30 peserta sudah
                terpenuhi.
              </p>
            </div>
          )}

          <div className="space-y-1.5 overflow-hidden">
            <label
              htmlFor="nama"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Nama Lengkap
            </label>
            <input
              id="nama"
              required
              disabled={isFull}
              type="text"
              placeholder="Contoh: Budiannor"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.nama}
              onChange={(e) =>
                setFormData({ ...formData, nama: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="nim"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              NIM
            </label>
            <input
              id="nim"
              required
              disabled={isFull}
              type="text"
              placeholder="Contoh: C030323012"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.nim}
              onChange={(e) =>
                setFormData({ ...formData, nim: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="prodi"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Program Studi
            </label>
            <input
              id="prodi"
              required
              disabled={isFull}
              type="text"
              placeholder="Contoh: D3 Teknik Informatika"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.prodi}
              onChange={(e) =>
                setFormData({ ...formData, prodi: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="motivasi"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Motivasi Bergabung
            </label>
            <textarea
              id="motivasi"
              required
              disabled={isFull}
              rows={3}
              placeholder="Apa alasanmu ingin bergabung?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.motivasi}
              onChange={(e) =>
                setFormData({ ...formData, motivasi: e.target.value })
              }
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label
                htmlFor="quote"
                className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                Quote / Kata-kata
              </label>
              <span className="text-[10px] text-accent animate-pulse font-medium">
                Note: Akan tampil di daftar peserta
              </span>
            </div>
            <input
              id="quote"
              required
              disabled={isFull}
              type="text"
              placeholder="Contoh: Hiduplah Seperti Larry"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              value={formData.quote}
              onChange={(e) =>
                setFormData({ ...formData, quote: e.target.value })
              }
            />
          </div>

          <div className="flex items-start gap-3 group">
            <div className="relative flex items-center h-5">
              <input
                id="komit"
                type="checkbox"
                required
                disabled={isFull}
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 transition-all checked:bg-primary checked:border-primary group-hover:border-primary/50 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                checked={formData.komit}
                onChange={(e) =>
                  setFormData({ ...formData, komit: e.target.checked })
                }
              />
              <MdCheckCircle className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5" />
            </div>
            <label
              htmlFor="komit"
              className="text-xs text-gray-400 leading-tight cursor-pointer select-none group-hover:text-gray-300 transition-colors"
            >
              Saya berkomitmen untuk mengikuti seluruh rangkaian pelatihan
              sampai selesai dengan sungguh-sungguh.
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.komit || isLoading || isFull}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
              formData.komit && !isLoading && !isFull
                ? "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="size-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Mengirim...
              </span>
            ) : isFull ? (
              "Kuota Sudah Penuh"
            ) : (
              <>
                <MdSend />
                Daftar Sekarang
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
