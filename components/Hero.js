"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const heroSlides = [
  {
    src: "/images/hero_resort_1.jpg",
    alt: "Bản Mường Xanh - Hoàng hôn vàng êm ả bên bể bơi vô cực và nhà sàn Mường",
  },
  {
    src: "/images/hero_resort_2.jpg",
    alt: "Bản Mường Xanh - Tia nắng sớm len lỏi qua sương mây thung lũng và ruộng bậc thang",
  },
  {
    src: "/images/hero_resort_3.jpg",
    alt: "Bản Mường Xanh - Lối hoa dạo bước rực rỡ và cảnh sắc núi non thanh bình",
  },
];

export default function Hero({ onOpenVideo, onOpenConsultation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Tự động chuyển đổi 3 ảnh nền sau mỗi 5 giây
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectSlide = (index) => {
    setCurrentIndex(index);
    startTimer(); // Reset timer khi người dùng bấm chọn ảnh
  };

  return (
    <section
      id="top"
      className="relative w-full h-[100dvh] min-h-[580px] max-h-[860px] lg:max-h-[900px] xl:max-h-[940px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Crossfade Slider: 3 Warm Balanced Luxury Resort Images */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                unoptimized
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Global atmospheric scrim: Eliminates harsh glare, creates deep rich colors */}
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />

        {/* Left directional gradient: Guarantees 100% contrast and effortless reading */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* Right directional gradient: Enhances legibility of the 4 crescent items */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/5 bg-gradient-to-l from-black/45 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Top subtle vignette for navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Bottom smooth brand green tone transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#122B1E] via-[#122B1E]/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Content Container: Slightly scaled narrower for comfortable side margins */}
      <div className="relative z-20 max-w-[1480px] w-full mx-auto px-4 sm:px-10 md:px-16 lg:px-24 pt-8 sm:pt-10 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between">
          {/* Left Column: Headings & Call to Actions */}
          <div data-reveal="hero-text" className="lg:col-span-8 xl:col-span-9 text-white space-y-3.5 sm:space-y-5">
            {/* Calligraphic Script Accent */}
            <div className="inline-block transform -rotate-1 origin-left">
              <span className="font-script text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#EEDFC6] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-wide">
                Rời phố, tìm về
              </span>
            </div>

            {/* Majestic Single-Line Title */}
            <div>
              <h1 className="font-serif font-black text-[27px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] 2xl:text-[84px] tracking-tight leading-none text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)] whitespace-nowrap">
                BẢN MƯỜNG XANH
              </h1>
            </div>

            {/* Subtitle with bullet dots - Refined smaller size */}
            <p className="text-white/90 text-[10px] sm:text-xs md:text-sm lg:text-[13.5px] font-medium tracking-[0.14em] sm:tracking-[0.24em] uppercase pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] whitespace-nowrap overflow-hidden text-ellipsis">
              Thiên nhiên <span className="text-[#52B788] mx-1 sm:mx-2 drop-shadow-[0_0_6px_rgba(82,183,136,0.6)]">•</span> Trải nghiệm <span className="text-[#52B788] mx-1 sm:mx-2 drop-shadow-[0_0_6px_rgba(82,183,136,0.6)]">•</span> Kết nối
            </p>

            {/* Action Button: Harmonic Forest Emerald Tone matching nature background */}
            <div className="pt-2 sm:pt-4">
              <button
                type="button"
                onClick={() => onOpenConsultation?.()}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:shadow-2xl border border-[#4E9F76]/40 hover:border-[#52B788]/70 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>ĐẶT TOUR NGAY</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: 4 items arranged along a crescent moon arc ) with airy spacing */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-3 justify-end items-center">
            <div className="relative py-6 pr-2 xl:pr-4 select-none">
              {/* 4 Items sweeping along the crescent moon curve ) */}
              <div className="flex flex-col items-end space-y-8 xl:space-y-11 2xl:space-y-13 font-script text-right">
                {/* 1. Thiên nhiên */}
                <div data-reveal="hero-crescent" data-reveal-delay="0" className="transform -translate-x-6 xl:-translate-x-9 rotate-6 hover:rotate-0 hover:-translate-x-4 hover:scale-105 transition-all duration-300 origin-right cursor-pointer group">
                  <span className="text-2xl xl:text-3xl 2xl:text-[38px] text-white group-hover:text-[#F6E3B8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_0_15px_rgba(246,227,184,0.7)] tracking-wide inline-block transition-all duration-300">
                    Thiên nhiên.
                  </span>
                </div>

                {/* 2. Con người */}
                <div data-reveal="hero-crescent" data-reveal-delay="120" className="transform translate-x-2 xl:translate-x-4 rotate-2 hover:rotate-0 hover:translate-x-5 hover:scale-105 transition-all duration-300 origin-right cursor-pointer group">
                  <span className="text-2xl xl:text-3xl 2xl:text-[38px] text-white group-hover:text-[#F6E3B8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_0_15px_rgba(246,227,184,0.7)] tracking-wide inline-block transition-all duration-300">
                    Con người
                  </span>
                </div>

                {/* 3. Văn hóa */}
                <div data-reveal="hero-crescent" data-reveal-delay="240" className="transform translate-x-4 xl:translate-x-7 -rotate-3 hover:rotate-0 hover:translate-x-7 hover:scale-105 transition-all duration-300 origin-right cursor-pointer group">
                  <span className="text-2xl xl:text-3xl 2xl:text-[38px] text-white group-hover:text-[#F6E3B8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_0_15px_rgba(246,227,184,0.7)] tracking-wide inline-block transition-all duration-300">
                    Văn hóa
                  </span>
                </div>

                {/* 4. Trải nghiệm */}
                <div data-reveal="hero-crescent" data-reveal-delay="360" className="transform -translate-x-5 xl:-translate-x-8 -rotate-8 hover:rotate-0 hover:-translate-x-3 hover:scale-105 transition-all duration-300 origin-right cursor-pointer group">
                  <span className="text-2xl xl:text-3xl 2xl:text-[38px] text-white group-hover:text-[#F6E3B8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_0_15px_rgba(246,227,184,0.7)] tracking-wide inline-block transition-all duration-300">
                    Trải nghiệm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators: Floating directly on background without outer badge wrapper */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 select-none">
        {heroSlides.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => handleSelectSlide(idx)}
              className="p-1.5 -m-1.5 focus:outline-none cursor-pointer flex items-center group"
              aria-label={`Chuyển đến ảnh nền ${idx + 1}`}
              title={`Xem ảnh ${idx + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-400 ease-out overflow-hidden relative drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] ${
                  isActive
                    ? "w-8 sm:w-9 bg-[#F7F4EC]"
                    : "w-2 sm:w-2.5 bg-white/50 group-hover:bg-white"
                }`}
              >
                {isActive && (
                  <div
                    key={`prog-${currentIndex}`}
                    className="absolute inset-0 bg-gradient-to-r from-[#52B788] to-[#38A169] origin-left"
                    style={{
                      animation: "slideProgress 5s linear forwards",
                    }}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
