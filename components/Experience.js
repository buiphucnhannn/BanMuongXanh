"use client";

import Image from "next/image";

export default function Experience({ onOpenLightbox }) {
  const experiences = [
    {
      title: "Không gian xanh",
      image: "/images/nature_trail.jpg",
      borderRadius: "58% 42% 48% 52% / 54% 60% 40% 46%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Bể bơi",
      image: "/images/pool_real.jpg",
      borderRadius: "44% 56% 52% 48% / 60% 48% 52% 40%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Lưu trú",
      image: "/images/tour_2_days.jpg",
      borderRadius: "50% 50% 46% 54% / 52% 54% 46% 48%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Vui chơi",
      image: "/images/swing_games.jpg",
      borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Team Building",
      image: "/images/team_building.jpg",
      borderRadius: "48% 52% 44% 56% / 58% 46% 54% 42%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Văn hóa Mường",
      image: "/images/dance_real.jpg",
      borderRadius: "52% 48% 58% 42% / 46% 54% 46% 54%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
    },
    {
      title: "Ẩm thực",
      image: "/images/muong_cuisine.jpg",
      borderRadius: "50% 50% 52% 48% / 48% 52% 48% 52%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Check-in sống ảo",
      image: "/images/zipline.jpg",
      borderRadius: "46% 54% 48% 52% / 56% 44% 56% 44%",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="trai-nghiem" className="relative bg-[#122B1E] text-white pt-16 sm:pt-20 pb-12 sm:pb-16 w-full overflow-hidden">
      {/* Top Organic Wave Transition from Parchment into Dark Forest */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none -translate-y-px">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-14 text-[#A7CEAB] block"
        >
          <path
            d="M0 0 H1440 V16 C 1040 52, 400 52, 0 16 V0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Atmospheric Dark Forest Mountain Silhouette & Botanicals Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none overflow-hidden">
        <Image
          src="/images/experience_bg.jpg"
          alt="Họa tiết rừng đại ngàn Bản Mường Xanh"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#122B1E] via-transparent to-[#122B1E]" />
      </div>

      {/* Main Content Container: Full width expansion matching mockup */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-10 md:px-14 lg:px-20 z-10">
        {/* Header & Right Quote */}
        <div data-reveal="exp-header" className="relative flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pb-8 sm:pb-16 text-center md:text-left">
          <div className="space-y-2 sm:space-y-3.5 md:mx-auto md:text-center">
            <span className="block text-[#E5B869] font-bold text-xs sm:text-sm tracking-[0.24em] sm:tracking-[0.28em] uppercase drop-shadow-sm">
              TRẢI NGHIỆM ĐA DẠNG
            </span>
            <h2 className="font-serif font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-wide leading-tight drop-shadow-md">
              Ở đây có gì?
            </h2>
            <p className="text-white/85 text-xs sm:text-base font-normal tracking-wide max-w-md mx-auto drop-shadow-sm pt-0.5">
              Thiên nhiên, văn hoá và những trải nghiệm đáng nhớ
            </p>
          </div>

          {/* Right Script Quote matching mockup */}
          <div className="md:absolute md:right-0 md:top-2 select-none">
            <p className="font-script text-xl sm:text-3xl lg:text-[34px] text-[#EEDFC6] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] max-w-[280px] sm:max-w-[320px] text-center md:text-right leading-snug">
              &ldquo;Mỗi trải nghiệm, là một câu chuyện để kể lại.&rdquo;
            </p>
          </div>
        </div>

        {/* 8 Creative Pebble Stone Experiences with Whimsical Golden Dotted Trail */}
        <div className="relative pt-2">
          {/* Whimsical Golden Dotted Journey Line with playful loops */}
          <div className="hidden lg:block absolute top-[90px] left-4 right-4 h-20 z-0 pointer-events-none select-none">
            <svg className="w-full h-full" viewBox="0 0 1400 80" fill="none">
              <path
                d="M 50 40 
                   Q 150 15, 230 40 
                   C 260 50, 270 10, 240 10 
                   C 210 10, 220 50, 270 45 
                   Q 400 20, 520 45 
                   Q 660 70, 780 35 
                   Q 920 10, 1040 45 
                   C 1070 55, 1080 15, 1050 15 
                   C 1020 15, 1030 55, 1080 40 
                   Q 1220 20, 1350 45"
                stroke="#E5C278"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeOpacity="0.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Grid of 8 Creative Organic Pebble Stone Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-5 lg:gap-5 relative z-10">
            {experiences.map((item, idx) => (
              <div
                key={item.title}
                data-reveal="exp-pebble"
                data-reveal-delay={idx * 65}
                onClick={() =>
                  onOpenLightbox?.({
                    images: experiences.map((e) => ({
                      src: e.image,
                      title: `Trải nghiệm ${e.title}`,
                      desc: `Khám phá hoạt động ${e.title} đặc sắc và tràn ngập niềm vui giữa thiên nhiên thung lũng Bản Mường Xanh.`,
                    })),
                    initialIndex: idx,
                  })
                }
                className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-2.5 select-none"
              >
                {/* Organic Pebble Stone Photo Card */}
                <div
                  style={{ borderRadius: item.borderRadius }}
                  className="relative w-full aspect-square overflow-hidden border-2 border-white/25 group-hover:border-[#E5C278] shadow-xl group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.65)] transition-all duration-500 bg-[#183D2C]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 24vw, 12vw"
                    className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Circular Icon Badge centered at bottom edge of card */}
                <div className="-mt-3.5 sm:-mt-4 relative z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183D2C] border-2 border-[#E5C278] text-[#EEDFC6] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#20513A] transition-all duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <span className="mt-2 sm:mt-2.5 text-xs sm:text-sm font-medium text-white/95 group-hover:text-[#EEDFC6] text-center tracking-wide transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
