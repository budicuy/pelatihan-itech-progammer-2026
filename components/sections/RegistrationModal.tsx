"use client";

import { useState } from "react";
import { MdCheckCircle, MdClose, MdSend } from "react-icons/md";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    prodi: "",
    motivasi: "",
    komit: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.komit) return;

    const message = `Halo Itech Poliban! Saya ingin mendaftar pelatihan Programmer:
Nama: ${formData.nama}
NIM: ${formData.nim}
Program Studi: ${formData.prodi}
Motivasi: ${formData.motivasi}

Saya berkomitmen untuk mengikuti pelatihan sampai selesai.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/62882022007324?text=${encodedMessage}`,
      "_blank",
    );
    onClose();
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
          <div className="space-y-1.5">
            <label
              htmlFor="nama"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Nama Lengkap
            </label>
            <input
              id="nama"
              required
              type="text"
              placeholder="Contoh: Budiannor"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm"
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
              type="text"
              placeholder="Contoh: C030323012"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm"
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
              type="text"
              placeholder="Contoh: D3 Teknik Informatika"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm"
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
              rows={3}
              placeholder="Apa alasanmu ingin bergabung?"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-hidden focus:border-primary/50 transition-colors text-sm resize-none"
              value={formData.motivasi}
              onChange={(e) =>
                setFormData({ ...formData, motivasi: e.target.value })
              }
            />
          </div>

          <div className="flex items-start gap-3 group">
            <div className="relative flex items-center h-5">
              <input
                id="komit"
                type="checkbox"
                required
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 transition-all checked:bg-primary checked:border-primary group-hover:border-primary/50 focus:outline-hidden"
                checked={formData.komit}
                onChange={(e) =>
                  setFormData({ ...formData, komit: e.target.checked })
                }
              />
              <MdCheckCircle className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5 top-0.5" />
            </div>
            <label
              htmlFor="komit"
              className="text-xs text-gray-400 leading-tight cursor-pointer select-none"
            >
              Saya berkomitmen untuk mengikuti seluruh rangkaian pelatihan
              sampai selesai dengan sungguh-sungguh.
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.komit}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
              formData.komit
                ? "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            <MdSend />
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
