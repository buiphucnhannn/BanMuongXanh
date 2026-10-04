"use client";

import Image from "next/image";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function About({ onOpenLightbox }) {
  const cards = [
    {
      src: "/images/resort_grounds.jpg",
      title: "Khuôn viên xanh 56ha",
      aspect: "aspect-[16/11]",
    },
    {
      src: "/images/muong_campfire.jpg",
      title: "Đêm hội lửa trại Mường",
      aspect: "aspect-[16/11]",
    },
    {
      src: "/images/muong_cuisine.jpg",
      title: "Ẩm thực Tây Bắc bản địa",
      aspect: "aspect-[16/11]",
    },
    {
      src: "/images/tour_2_days.jpg",
      title: "Nhà sàn nghỉ dưỡng view núi",
      aspect: "aspect-[16/11]",
    },
  ];

  return (
    <section id="gioi-thieu" className="relative bg-[#0D2318] pb-6 sm:pb-8 lg:pb-9 w-full overflow-hidden">
      {/* Symmetrical Arch Transition from Hero - Hero's Dark Green Carves Smoothly over the Landscape */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none select-none -translate-y-px">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
        >
          <path
            d="M0 0 H1440 V70 C 1040 10, 400 10, 0 70 Z"
            fill="#122B1E"
          />
        </svg>
      </div>

      {/* Panoramic Eco-Resort Mountain Landscape Background - Seamlessly Reaches the Top */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/about_resort_landscape.jpg"
          alt="Bản Mường Xanh - Cảnh quan núi rừng và thung lũng"
          fill
          unoptimized
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center scale-[1.02] opacity-90"
        />

        {/* Global emerald green tint enriching all nature tones */}
        <div className="absolute inset-0 bg-[#143B22]/10 mix-blend-color" />

        {/* Visible Resort Green Mist - Distinct fresh foliage green tone, zero white */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#A7CEAB]/90 via-[#BCD9BF]/70 to-transparent" />

        {/* Soft dark forest mist right below the top arch to blend seamlessly with Hero */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#122B1E]/60 via-[#122B1E]/20 to-transparent" />

        {/* Bottom gentle green fade matching the transition into Experience */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#A7CEAB] to-transparent" />
      </div>

      {/* Main Content Container: Slightly narrower width (1380px) for tight, cohesive balance */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Narrative, Metrics & CTA - Pure Intrinsic Contrast, Zero Wrapping Badges */}
          <div data-reveal="about-text" className="lg:col-span-6 space-y-4 sm:space-y-4.5">
            {/* Clean Tagline: Leaf icon + uppercase tracking with intrinsic halo */}
            <div className="flex items-center gap-2 text-[#082212] text-xs sm:text-sm font-black tracking-[0.22em] uppercase select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
              <span className="text-emerald-800 text-base drop-shadow-sm">🍃</span>
              <span>VỀ BẢN MƯỜNG XANH</span>
            </div>

            {/* Main Headline with deep obsidian forest ink and crisp text halo */}
            <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[38px] text-[#05180C] leading-[1.18] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] drop-shadow-[0_2px_12px_rgba(255,255,255,0.7)]">
              Một nơi nhiều hơn
              <br />
              một chuyến đi
            </h2>

            {/* Narrative Story Paragraph with text-justify alignment */}
            <p className="text-[#092212] text-sm sm:text-base leading-relaxed font-semibold max-w-lg text-justify drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)]">
              Tạm rời phố thị, hòa mình vào thiên nhiên trong lành, khám phá văn hóa Mường độc đáo và tận hưởng những trải nghiệm chân thật cùng gia đình, bạn bè hay đồng nghiệp.
            </p>

            {/* 3 Metrics with responsive layout and intrinsic contrast */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 max-w-lg">
              {/* Metric 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/80 flex items-center justify-center flex-shrink-0 text-[#092B17] bg-white shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-0.5">
                    <span className="font-sans font-black text-lg sm:text-2xl lg:text-[26px] text-[#05180C] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">56</span>
                    <span className="font-sans font-extrabold text-[11px] sm:text-sm text-emerald-800 ml-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">ha</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#092212] font-bold leading-tight mt-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Không gian xanh</div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/80 flex items-center justify-center flex-shrink-0 text-[#092B17] bg-white shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-0.5">
                    <span className="font-sans font-black text-lg sm:text-2xl lg:text-[26px] text-[#05180C] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">4</span>
                    <span className="font-sans font-extrabold text-[11px] sm:text-sm text-emerald-800 ml-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">mùa</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#092212] font-bold leading-tight mt-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Trải nghiệm</div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/80 flex items-center justify-center flex-shrink-0 text-[#092B17] bg-white shadow-md">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-0.5">
                    <span className="font-sans font-black text-lg sm:text-2xl lg:text-[26px] text-[#05180C] tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">100</span>
                    <span className="font-sans font-black text-xs sm:text-lg text-emerald-800 leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">+</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#092212] font-bold leading-tight mt-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Hoạt động thú vị</div>
                </div>
              </div>
            </div>

            {/* Explore CTA Button - Softer, gentler botanical green tone */}
            <div className="pt-1">
              <a
                href="#trai-nghiem"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("trai-nghiem");
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#1A6E43]/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group border border-[#2D8F5A] cursor-pointer"
              >
                <span>KHÁM PHÁ NGAY</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Centered Calligraphy Quote & 4 Uniform Cards Grid */}
          <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
            {/* Elegant Calligraphy Quote - Centered Gracefully Above the 4-Card Block */}
            <div data-reveal="about-text" data-reveal-delay="100" className="w-full text-center mb-4 select-none">
              <div className="inline-flex items-center justify-center gap-2 sm:gap-3 max-w-full px-2">
                <span className="hidden sm:inline-block h-px w-6 sm:w-10 bg-[#0F351F]/30" />
                <p className="font-script text-lg sm:text-2xl lg:text-[23px] text-[#0C2A18] tracking-wide leading-snug drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] [text-wrap:balance]">
                  &ldquo;Không chỉ là một điểm đến, mà là cảm giác được trở về.&rdquo;
                </p>
                <span className="hidden sm:inline-block h-px w-6 sm:w-10 bg-[#0F351F]/30" />
              </div>
            </div>

            {/* 4 Cards Grid - Perfectly Uniform 2x2 Layout */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  data-reveal="about-card"
                  data-reveal-delay={idx * 120}
                  onClick={() => onOpenLightbox?.({ images: cards, initialIndex: idx })}
                  className="hover:scale-[1.03] hover:z-20 transition-all duration-300 cursor-pointer"
                >
                  <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 pb-2.5 sm:pb-3 rounded-2xl border border-white/90 shadow-[0_10px_25px_rgba(14,40,24,0.12)] hover:shadow-[0_18px_35px_rgba(14,40,24,0.22)] transition-all duration-300 group">
                    <div className={`relative ${card.aspect} rounded-xl overflow-hidden bg-stone-100`}>
                      <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        loading="eager"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="pt-2 px-1 text-center">
                      <p className="font-sans text-xs sm:text-[13px] font-bold text-[#0F351F] truncate group-hover:text-emerald-700 transition-colors">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
