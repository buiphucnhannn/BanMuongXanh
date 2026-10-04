"use client";

import Image from "next/image";

export default function Gallery({ onOpenLightbox, onOpenConsultation }) {
  const photos = [
    {
      title: "Bể bơi xanh mát ngắm mây trời",
      tag: "Thư giãn & Check-in",
      src: "/images/pool_real.jpg",
      tilt: "lg:-rotate-2",
    },
    {
      title: "Nông trại vui vẻ - Đón đoàn",
      tag: "Gắn kết & Năng lượng",
      src: "/images/group_welcome.jpg",
      tilt: "lg:rotate-2",
    },
    {
      title: "Điệu múa dân tộc Mường rực rỡ",
      tag: "Bản sắc văn hóa",
      src: "/images/dance_real.jpg",
      tilt: "lg:rotate-1",
    },
    {
      title: "Đêm lửa trại bập bùng gắn kết",
      tag: "Kỷ niệm khó quên",
      src: "/images/muong_campfire.jpg",
      tilt: "lg:-rotate-1",
    },
  ];

  return (
    <section id="thu-vien" className="relative w-full bg-[#0D1F16] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden select-none">
      {/* Top Smooth Wave Transition perfectly matching WhyChoose background #F6F1E7 */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none select-none -translate-y-px">
        <svg
          viewBox="0 0 1440 45"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-11 block"
        >
          <path
            d="M0 0 H1440 C 1020 42, 420 42, 0 0 Z"
            fill="#F6F1E7"
          />
        </svg>
      </div>

      {/* Atmospheric Luxury Night Resort Background: Softly blurred for atmospheric depth & elegant subtlety */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/gallery_rich_bg.jpg"
          alt="Bản Mường Xanh sương đêm và lửa trại"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-65 blur-[2.5px] scale-105"
        />
        {/* Soft Vignette Overlay: Blends the background smoothly so content sits naturally */}
        <div className="absolute inset-0 bg-radial from-black/35 via-[#0D1F16]/55 to-[#0D1F16]/85" />
      </div>

      {/* Main Content Container - Expanded Full Width */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 z-10">
        {/* Section Header - Soft, elegant typography without harsh high-contrast black shadows */}
        <div data-reveal="gallery-header" className="text-center space-y-2 pb-10 sm:pb-14 select-none max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-emerald-300/90 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase">
            <span>🍃</span>
            <span>KHOẢNH KHẮC ĐÁNG NHỚ</span>
          </div>

          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-wide uppercase drop-shadow-sm">
            HÌNH ẢNH THỰC TẾ
          </h2>

          <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Những khoảnh khắc đẹp, chân thực và giàu cảm xúc được ghi lại tại Bản Mường Xanh.
          </p>
        </div>

        {/* 4 Polaroid Scrapbook Photo Cards Spanning Full Width */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 xl:gap-8">
          {photos.map((item, idx) => (
            <div
              key={idx}
              data-reveal="gallery-card"
              data-reveal-delay={idx * 110}
              onClick={() => onOpenLightbox?.({ images: photos, initialIndex: idx })}
              className={`p-2.5 sm:p-3 bg-white rounded-2xl shadow-xl cursor-pointer transform ${item.tilt} hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 group`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 shadow-inner">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  unoptimized
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid White Caption Area */}
              <div className="pt-3 pb-1 px-1 text-center select-none">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#1A6E43] uppercase block">
                  {item.tag}
                </span>
                <p className="text-xs sm:text-[13px] font-bold text-[#183524] mt-0.5 leading-snug line-clamp-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls - Centered Single Button */}
        <div data-reveal="gallery-header" data-reveal-delay="200" className="pt-7 sm:pt-9 flex items-center justify-center w-full">
          <button
            onClick={() => onOpenConsultation?.()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1A6E43] hover:bg-[#238A56] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>ĐẶT TOUR TRẢI NGHIỆM</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Seamless Gradient Fade into the Matching Curve of Section Below */}
      <div className="absolute bottom-0 inset-x-0 h-12 sm:h-14 bg-gradient-to-t from-[#0D1F16] via-[#0D1F16]/85 to-transparent pointer-events-none z-10" />
    </section>
  );
}
