"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useRegistration } from "@/components/providers/RegistrationProvider";

const navLinks = [
  { href: "/#home", label: "Beranda" },
  { href: "/#vision", label: "Filosofi" },
  { href: "/#curriculum", label: "Materi" },
  { href: "/#timeline", label: "Jadwal" },
  { href: "/#benefits", label: "Benefit" },
];

export default function Navbar() {
  const { openModal, isRegistrationOpen, isLoadingStatus } = useRegistration();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-gray-300 hover:text-accent text-sm font-medium transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
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
              {isRegistrationOpen
                ? "Daftar Sekarang"
                : "Pendaftaran Belum dibuka"}
            </button>
          )}

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden text-white p-2 -mr-2 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <MdMenu className="text-2xl" />
            )}
          </button>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <button
        type="button"
        aria-label="Tutup menu"
        className={`fixed top-16 inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        onKeyDown={(e) => e.key === "Escape" && closeMenu()}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-background-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                className="text-gray-300 hover:text-accent hover:bg-white/5 text-base font-medium transition-all py-3 px-4 rounded-xl"
                href={link.href}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            {!isLoadingStatus && (
              <div className="pt-4 mt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    openModal();
                    closeMenu();
                  }}
                  disabled={!isRegistrationOpen}
                  className={`w-full px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-lg ${
                    isRegistrationOpen
                      ? "bg-primary hover:bg-primary-dark text-white shadow-primary/20"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed shadow-none"
                  }`}
                >
                  {isRegistrationOpen
                    ? "Daftar Sekarang"
                    : "Pendaftaran Belum dibuka"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
