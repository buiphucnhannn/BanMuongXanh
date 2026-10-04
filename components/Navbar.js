"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { smoothScrollTo, cleanUrlHash } from "../utils/smoothScroll";

export default function Navbar({ onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Clean hash on initial load if present
    cleanUrlHash();

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Giới thiệu", href: "#gioi-thieu", id: "gioi-thieu" },
    { label: "Trải nghiệm", href: "#trai-nghiem", id: "trai-nghiem" },
    { label: "Tour", href: "#tour", id: "tour" },
    { label: "Thư viện", href: "#thu-vien", id: "thu-vien" },
    { label: "Liên hệ", href: "#lien-he", id: "lien-he" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#122B1E]/95 backdrop-blur-md shadow-lg py-2.5"
          : "bg-gradient-to-b from-black/75 via-black/40 to-transparent py-4"
        }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Authentic Logo from favicon.ico */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "top")}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#E2D9C5]/80 group-hover:border-white shadow-md flex-shrink-0 bg-white">
            <Image
              src="/images/logo.png"
              alt="Bản Mường Xanh Logo"
              fill
              sizes="44px"
              priority
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-serif font-bold text-sm sm:text-base tracking-[0.18em] uppercase leading-tight group-hover:text-[#4ADE80] transition-colors">
              BẢN MƯỜNG XANH
            </span>
            <span className="text-[#E2D9C5] text-[10px] sm:text-[11px] tracking-wider font-light">
              Thiên nhiên • Trải nghiệm • Kết nối
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-white/90 hover:text-[#4ADE80] text-sm font-medium transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2.5px] after:bg-[#4ADE80] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Book Tour CTA */}
          <button
            type="button"
            onClick={() => onOpenConsultation?.()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white text-xs font-semibold shadow-md border border-[#2D8F5A] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>ĐẶT TOUR NGAY</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#E2D9C5] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#122B1E]/95 backdrop-blur-xl border-t border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-white/90 hover:text-[#4ADE80] px-3 py-2 rounded-lg text-base font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
            <a
              href="tel:0868123456"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/30 text-white text-sm"
            >
              📞 0868 123 456
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white text-sm font-semibold cursor-pointer w-full"
            >
              ĐẶT TOUR NGAY →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
