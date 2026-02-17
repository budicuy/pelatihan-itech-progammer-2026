import Image from "next/image";
import Link from "next/link";
import { MdCall, MdFavorite, MdMail, MdPublic } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-itech.svg"
            alt="Itech Poliban Logo"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="text-white font-bold font-display text-lg">
            Itech Poliban
          </span>
        </div>
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p className="mb-2">Hubungi Kami:</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <Link
              className="hover:text-accent transition-colors flex items-center gap-1"
              href="#"
            >
              <MdCall className="text-sm" /> WhatsApp
            </Link>
            <Link
              className="hover:text-accent transition-colors flex items-center gap-1"
              href="#"
            >
              <MdMail className="text-sm" /> Email
            </Link>
            <Link
              className="hover:text-accent transition-colors flex items-center gap-1"
              href="#"
            >
              <MdPublic className="text-sm" /> Instagram
            </Link>
          </div>
          <p className="mt-4 opacity-50">
            © 2026 Komunitas Itech Poliban. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mt-10 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
          Made with <MdFavorite className="text-red-500 animate-pulse" /> by{" "}
          <span className="text-gray-400 font-semibold italic">
            Itech Poliban
          </span>{" "}
          & <span className="text-gradient font-bold">Antigravity AI</span>
        </p>
      </div>
    </footer>
  );
}
