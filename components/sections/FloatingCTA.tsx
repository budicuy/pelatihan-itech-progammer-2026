"use client";

import { useState } from "react";
import { MdCall } from "react-icons/md";
import RegistrationModal from "./RegistrationModal";

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-100 group flex items-center gap-3 cursor-pointer outline-hidden"
        aria-label="Buka form pendaftaran"
      >
        {/* Label (Visible on hover) */}
        <span className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/20">
          Daftar Sekarang
        </span>

        {/* Icon Button */}
        <div className="size-14 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(127,25,230,0.4)] hover:shadow-[0_0_30px_rgba(127,25,230,0.6)] transition-all duration-300 animate-bounce-slow relative group-hover:animate-none">
          <MdCall className="text-2xl" />

          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
        </div>
      </button>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
