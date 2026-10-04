"use client";

import Image from "next/image";

export default function Schedule({ onOpenLightbox }) {
  const steps = [
    {
      time: "06:30",
      title: "Đón khách",
      desc: "tại Hà Nội",
      image: "/images/tour_bus.jpg",
      offsetClass: "lg:-translate-y-2",
    },
    {
      time: "08:00",
      title: "Đến Bản Mường Xanh",
      desc: "Nhận phòng, nghỉ ngơi",
      image: "/images/dance_real.jpg",
      offsetClass: "lg:translate-y-3",
    },
    {
      time: "09:00",
      title: "Team Building",
      desc: "Trò chơi tập thể",
      image: "/images/team_building.jpg",
      offsetClass: "lg:-translate-y-1",
    },
    {
      time: "11:30",
      title: "Ăn trưa",
      desc: "Đặc sản địa phương",
      image: "/images/muong_cuisine.jpg",
      offsetClass: "lg:translate-y-3",
    },
    {
      time: "Chiều",
      title: "Vui chơi & khám phá",
      desc: "Bể bơi, zipline, check-in...",
      image: "/images/pool_real.jpg",
      offsetClass: "lg:-translate-y-3",
    },
    {
      time: "16:00",
      title: "Khởi hành",
      desc: "về Hà Nội",
      image: "/images/nature_trail.jpg",
      offsetClass: "lg:translate-y-3",
    },
    {
      time: "17:15",
      title: "Về đến điểm hẹn",
      desc: "Kết thúc chuyến đi",
      image: "/images/group_welcome.jpg",
      offsetClass: "lg:-translate-y-2",
    },
  ];

  return (
    <section id="lich-trinh" className="relative bg-[#F6F1E7] pt-10 sm:pt-14 pb-14 sm:pb-18 overflow-hidden select-none">
      {/* Seamless Soft Fade Transition from Section Above (Tours) */}
      <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#F6F1E7] via-[#F6F1E7]/80 to-transparent pointer-events-none z-10" />

      {/* Subtle Watercolor Mountain Splash Background Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.14] mix-blend-multiply">
        <Image
          src="/images/about_mountain_splash.jpg"
          alt="Vintage Parchment Texture"
          fill
          unoptimized
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Topographic Elevation Contour Lines - Authentic Explorer Map Aesthetic */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 550"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-50,70 Q250,130 600,60 T1450,100"
            stroke="#1A6E43"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.3"
          />
          <path
            d="M-50,170 Q380,230 760,150 T1450,210"
            stroke="#1A6E43"
            strokeWidth="1"
            strokeDasharray="5 7"
            opacity="0.22"
          />
          <path
            d="M-50,330 Q320,390 700,310 T1450,360"
            stroke="#1A6E43"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.25"
          />
          <path
            d="M-50,440 Q480,500 920,420 T1450,470"
            stroke="#1A6E43"
            strokeWidth="1"
            strokeDasharray="6 8"
            opacity="0.18"
          />
        </svg>
      </div>

      {/* Section Content Container - Locked to natural layout with NO inner horizontal scroll */}
      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Heading with Botanical Leaf Icon */}
        <div data-reveal="schedule-header" className="text-center space-y-1.5 pb-10 sm:pb-14 select-none">
          {/* Subtle Botanical Leaf Accent */}
          <div className="flex justify-center pb-1 opacity-80">
            <svg viewBox="0 0 36 24" fill="none" className="w-7 h-5 text-[#1A6E43]">
              <path d="M18 24 V2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M18 16 C11 14 7 8 14 6 C21 8 18 16 18 16 Z" fill="currentColor" opacity="0.85" />
              <path d="M18 10 C25 8 29 2 22 0 C15 2 18 10 18 10 Z" fill="currentColor" opacity="0.9" />
            </svg>
          </div>

          {/* Heading using Playfair Display Font */}
          <h2
            className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#1A6E43] tracking-wide uppercase"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontVariantNumeric: "lining-nums",
            }}
          >
            LỊCH TRÌNH TOUR 1 NGÀY
          </h2>
          <p className="text-[#4A554A] text-xs sm:text-sm md:text-base font-normal tracking-wide">
            Lịch ngày trọn vẹn với nhiều trải nghiệm thú vị
          </p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="relative">
          {/* Wavy Undulating Dashed Trail Line (Smooth, Even, Harmonic Wave) */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-36 pointer-events-none select-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 140"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Perfectly Smooth Cubic Bezier Ribbon connecting all 7 stops */}
              <path
                d="M 100,68 C 190,68 210,98 300,98 C 390,98 410,74 500,74 C 590,74 610,98 700,98 C 790,98 810,62 900,62 C 990,62 1010,98 1100,98 C 1190,98 1210,68 1300,68"
                stroke="#1A6E43"
                strokeWidth="2.2"
                strokeDasharray="6 7"
                strokeLinecap="round"
                className="opacity-80"
              />

              {/* Waypoint Green Accent Dots centered on trail */}
              <circle cx="200" cy="83" r="4.5" fill="#1A6E43" className="drop-shadow-xs" />
              <circle cx="1000" cy="80" r="4.5" fill="#1A6E43" className="drop-shadow-xs" />
            </svg>
          </div>

          {/* 7 Stops: Responsive Grid (2 cols mobile with last centered, 4 cols tablet, 7 cols desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-7 sm:gap-y-10 gap-x-2.5 sm:gap-x-4 lg:gap-x-2 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-reveal="schedule-step"
                data-reveal-delay={idx * 75}
                onClick={() =>
                  onOpenLightbox?.({
                    images: steps.map((s) => ({
                      src: s.image,
                      title: `${s.time}: ${s.title}`,
                      desc: s.desc || "Lịch trình tour trải nghiệm sinh thái trọn vẹn tại Bản Mường Xanh.",
                    })),
                    initialIndex: idx,
                  })
                }
                className={`flex flex-col items-center text-center group cursor-pointer transition-transform duration-300 ${step.offsetClass} ${
                  idx === 6 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                {/* Circular Photo with White Border & Soft Nature Shadow */}
                <div className="relative w-18 h-18 xs:w-20 xs:h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-[102px] lg:h-[102px] rounded-full overflow-hidden border-[3px] sm:border-[3.5px] border-white shadow-[0_8px_20px_rgba(26,110,67,0.18)] bg-white ring-1 ring-black/5 group-hover:scale-105 group-hover:shadow-[0_12px_26px_rgba(26,110,67,0.26)] transition-all duration-300">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="110px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Time Badge */}
                <div className="mt-2.5 sm:mt-3">
                  <span className="font-serif font-black text-xs sm:text-base text-[#111111] group-hover:text-[#1A6E43] tracking-tight block transition-colors duration-300">
                    {step.time}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="mt-1 space-y-0.5 w-full flex flex-col items-center px-1">
                  <p className="font-bold text-xs sm:text-[13.5px] text-[#111111] group-hover:text-[#1A6E43] leading-snug whitespace-normal sm:whitespace-nowrap max-w-[130px] sm:max-w-none [text-wrap:balance] tracking-tight transition-colors duration-300">
                    {step.title}
                  </p>
                  <p className="text-[10.5px] sm:text-xs text-[#555555] group-hover:text-[#1A6E43]/85 leading-tight whitespace-normal sm:whitespace-nowrap max-w-[130px] sm:max-w-none [text-wrap:balance] transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seamless Soft Fade Transition at Bottom into WhyChoose Section (Mờ mỏng nhẹ theo màu nền #F6F1E7) */}
      <div className="absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-t from-[#F6F1E7] via-[#F6F1E7]/70 to-transparent pointer-events-none z-10" />
    </section>
  );
}
