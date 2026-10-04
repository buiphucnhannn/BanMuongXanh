"use client";

import { useState, useEffect } from "react";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    smoothScrollTo("top");
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 pointer-events-none select-none">
      {/* Nút Cuộn Về Đầu Trang: Nằm ở phía trên (hàng dọc), màu trắng, cùng size nút điện thoại */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-stone-50 text-[#1A6E43] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border border-stone-200/90 cursor-pointer animate-in fade-in slide-in-from-bottom-2 duration-200"
          aria-label="Về đầu trang"
          title="Về đầu trang"
        >
          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1A6E43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Nút Gọi Hotline Xanh Chuẩn #1A6E43: Nằm ở dưới */}
      <div className="relative group pointer-events-auto flex items-center">
        {/* Tooltip Hotline hiển thị sang bên trái khi hover */}
        <a
          href="tel:0868123456"
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 py-1.5 px-3.5 rounded-full bg-white text-zinc-900 shadow-2xl border border-[#1A6E43]/20 whitespace-nowrap text-xs font-semibold opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex items-center gap-1.5"
        >
          <span className="text-[#1A6E43] font-bold">Hotline:</span>
          <span className="text-zinc-800 font-bold tracking-wide">0868 123 456</span>
        </a>

        {/* Nút tròn Gọi Điện thoại màu xanh #1A6E43 */}
        <a
          href="tel:0868123456"
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white shadow-xl shadow-[#1A6E43]/35 border border-[#2D8F5A] flex items-center justify-center transition-all duration-300 group-hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Gọi hotline 0868 123 456"
          title="Gọi Hotline 0868 123 456"
        >
          {/* Vòng lan tỏa xung động xanh */}
          <span className="absolute -inset-1 rounded-full bg-[#1A6E43]/40 animate-ping -z-10 pointer-events-none" />

          {/* Phone Icon */}
          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current text-white transform -rotate-12 group-hover:rotate-0 transition-all duration-300" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
