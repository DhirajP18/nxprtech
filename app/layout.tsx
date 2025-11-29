// RootLayout.tsx (Responsive Navbar + Hamburger Menu)
"use client";

import "./globals.css";
import Link from "next/link";
import React, { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">

        {/* NAVBAR */}
        <nav className="bg-gray-800 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logof.png"
                alt="logo"
                className="w-12 h-12 rounded-lg shadow-xl"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-lg font-medium">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Contact", url: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="relative group hover:text-yellow-400 transition duration-300"
                  >
                    {item.name}

                    {/* Hover underline */}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden bg-gray-900 text-white overflow-hidden transition-all duration-500 ${
              menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
            }`}
          >
            <ul className="flex flex-col gap-4 text-lg px-4">
              {[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Services", url: "/services" },
                { name: "Contact", url: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER SAME AS YOURS */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="Nexspire Logo"
                  className="w-14 h-14 mr-3"
                />
                <span className="text-xl font-bold text-yellow-400">
                  Nexspire
                </span>
              </div>
              <p className="text-gray-400 mb-2">
                We build websites, mobile apps, and software to grow your business and brand.
              </p>
              <p className="text-gray-400">📍 Kolhapur, Maharashtra, India</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-yellow-400">Home</a></li>
                <li><a href="/about" className="hover:text-yellow-400">About</a></li>
                <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
                <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">
                Contact Us
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 7338065815</li>
                <li>📧 info@nexspire.com</li>
                <li>🌐 www.nexspire.com</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-yellow-400">🌐 LinkedIn</a>
                <a href="#" className="hover:text-yellow-400">📘 Facebook</a>
                <a href="#" className="hover:text-yellow-400">📸 Instagram</a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} Nexspire Technologies Pvt Ltd. All Rights Reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
