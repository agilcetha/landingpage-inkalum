"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
    
          <Image
            src="/images/LOGO-FIX2.png"
            alt="Inkalum Logo"
            width={150}
            height={150}
        
          />
          
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="text-lg text-gray-900 border-b-3 border-transparent hover:border-[#1D0A8A] transition duration-300">
            Home
          </Link>
          <Link href="/product" className="text-lg  text-gray-900 border-b-3 border-transparent hover:border-[#1D0A8A] transition duration-300">
            Produk
          </Link>
          <Link href="/about" className="text-lg  text-gray-900 border-b-3 border-transparent hover:border-[#1D0A8A] transition duration-300">
            Tentang Kami
          </Link>
          {/* <Link href="/kontak" className="text-lg  text-gray-900 border-b-3 border-transparent hover:border-[#1D0A8A] transition duration-300">
            Kontak
          </Link> */}
        </div>

        {/* Tombol WhatsApp */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D0A8A]  text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </a>
        </div>

            {/* Tombol Hamburger (Mobile) */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            >
            {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
                <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
            </button>
        </div>
      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <Link href="/" className="block py-2 hover:text-blue-600">
            Home
          </Link>
          <Link href="/product" className="block py-2 hover:text-blue-600">
            Produk
          </Link>
          <Link href="/about" className="block py-2 hover:text-blue-600">
            Tentang Kami
          </Link>
          <Link href="/kontak" className="block py-2 hover:text-blue-600">
            Kontak
          </Link>
          <a
            href="https://wa.me/6285804700114"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}
