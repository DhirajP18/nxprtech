// RootLayout.tsx (Revised)
import "./globals.css";
import Link from "next/link";
import React from "react"; 

import { Poppins, Montserrat, Orbitron } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800", "900"] });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "700", "800"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        {/* Navbar - CHANGED BACKGROUND COLOR to bg-gray-800 */}
        <nav className="bg-gray-800 text-white px-8 py-4 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">

            {/* Logo Left Side - REMOVED COMPANY NAME H1 */}
            <div className="flex items-center gap-4">
              {/* Logo is now w-12 h-12 and slightly different style for the navbar */}
              <img 
                src="/logof.png" 
                alt="logo" 
                className="w-12 h-12 rounded-lg shadow-xl" 
              />
            </div>
            
            {/* Menu Links Right Side - Text color changed to match theme */}
            <ul className="flex gap-8 text-lg font-medium">
              
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

                    {/* Hover underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer (No change needed here) */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-10">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company Info */}
            <div className="flex flex-col items-start">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png" 
                  alt="Nexspire Logo" 
                  className="w-14 h-14 mr-3"
                />
                <span className="text-xl font-bold text-yellow-400">Nexspire</span>
              </div>
              <p className="text-gray-400 mb-2">
                We build websites, mobile apps, and software to grow your business and brand.
              </p>
              <p className="text-gray-400">📍 Kolhapur, Maharashtra, India</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-yellow-400 transition">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-yellow-400 transition">About</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-yellow-400 transition">Services</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 7338065815</li>
                <li>📧 info@nexspire.com</li>
                <li>🌐 www.nexspire.com</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-yellow-400 transition">🌐 LinkedIn</a>
                <a href="#" className="hover:text-yellow-400 transition">📘 Facebook</a>
                <a href="#" className="hover:text-yellow-400 transition">📸 Instagram</a>
              </div>
            </div>

          </div>

          {/* Bottom copyright */}
          <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
            &copy; {new Date().getFullYear()} Nexspire Technologies Pvt Ltd. All Rights Reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}