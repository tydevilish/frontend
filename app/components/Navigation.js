"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Products", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium relative z-10"
                >
                  {item.name}
                </a>
                {hoveredItem === index && (
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 animate-pulse"></div>
                )}
                <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-1/2 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <Link
              href="/login"
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group border-1 border-white/30 rounded-lg cursor-pointer overflow-hidden "
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
            </Link>

            {/* Register Button */}
            <Link
              href="/register"
              className="relative px-6 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Register
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/40 to-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transform transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 text-base font-medium border-l-2 border-transparent hover:border-white/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: "4s",
            }}
          ></div>
        ))}
      </div>
    </nav>
  );
}
