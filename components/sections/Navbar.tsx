"use client";

import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { useRegistration } from "@/components/providers/RegistrationProvider";

export default function Navbar() {
  const { openModal, isRegistrationOpen, isLoadingStatus } = useRegistration();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-border-dark">
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
              href="/#home"
            >
              Beranda
            </Link>
            <Link
              className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
              href="/#vision"
            >
              Visi
            </Link>
            <Link
              className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
              href="/#curriculum"
            >
              Materi
            </Link>
            <Link
              className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
              href="/#timeline"
            >
              Jadwal
            </Link>
            <Link
              className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
              href="/#benefits"
            >
              Benefit
            </Link>
          </div>

          {!isLoadingStatus && (
            <button
              type="button"
              onClick={openModal}
              disabled={!isRegistrationOpen}
              className={`hidden md:flex px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg ${
                isRegistrationOpen
                  ? "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed shadow-none"
              }`}
            >
              {isRegistrationOpen ? "Daftar Sekarang" : "Pendaftaran Ditutup"}
            </button>
          )}

          <div className="md:hidden text-white">
            <MdMenu className="text-2xl" />
          </div>
        </header>
      </div>
    </nav>
  );
}
