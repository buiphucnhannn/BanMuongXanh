"use client";

import Image from "next/image";

export default function Tours({ onSelectTour }) {
  const tours = [
    {
      id: "tour-1-ngay",
      title: "TOUR 1 NGÀY",
      price: "560.000đ",
      unit: "/ người",
      image: "/images/tour_1_day.jpg",
      imageAlt: "Tour 1 Ngày Bản Mường Xanh",
      features: [
        "Trẻ 5 – 9 tuổi: 50%",
        "Trẻ dưới 5 tuổi: Miễn phí",
        "Ăn trưa, vé tham quan, trải nghiệm",
      ],
      // Hand-torn paper polygon for Card 1
      tornPolygon:
        "polygon(0.8% 2.2%, 3.5% 0.7%, 7.5% 2.1%, 12.5% 0.8%, 18% 2.3%, 24% 0.6%, 30.5% 2%, 37% 0.8%, 43.5% 2.2%, 50% 0.6%, 57% 2%, 64% 0.8%, 71% 2.3%, 78% 0.7%, 85% 2.1%, 91.5% 0.6%, 96.5% 1.9%, 99.2% 0.9%, 98.7% 6.5%, 99.9% 13%, 98.3% 19.5%, 100% 26%, 98.4% 33%, 99.8% 40%, 98.1% 47%, 100% 54%, 98.3% 61%, 99.7% 68%, 98.2% 75%, 100% 82%, 98.4% 89%, 99.5% 95%, 98.3% 98.5%, 96% 99.2%, 90% 98.1%, 83.5% 99.5%, 77% 98.2%, 70.5% 99.4%, 64% 98%, 57% 99.6%, 50% 98.2%, 43% 99.3%, 36% 98.1%, 29% 99.5%, 22% 98.2%, 15% 99.4%, 8% 98.1%, 3% 99.5%, 0.8% 98%, 1.9% 93%, 0.4% 86%, 2.2% 79%, 0.3% 72%, 2.1% 65%, 0.5% 58%, 1.9% 51%, 0.2% 44%, 2.2% 37%, 0.4% 30%, 2% 23%, 0.3% 16%, 1.8% 9%)",
    },
    {
      id: "tour-2-ngay-1-dem",
      title: "TOUR 2 NGÀY 1 ĐÊM",
      price: "1.280.000đ",
      unit: "/ người",
      image: "/images/tour_2_days.jpg",
      imageAlt: "Tour 2 Ngày 1 Đêm Bản Mường Xanh",
      features: [
        "Trẻ 5 – 9 tuổi: 50%",
        "Trẻ dưới 5 tuổi: Miễn phí",
        "Lưu trú, ăn uống, trải nghiệm đầy đủ",
      ],
      // Hand-torn paper polygon for Card 2 (unique paper tears)
      tornPolygon:
        "polygon(1% 1.1%, 4.5% 2.4%, 8.5% 0.8%, 14% 2.2%, 20% 0.7%, 26.5% 2.3%, 33% 0.6%, 40% 2.1%, 47% 0.8%, 54% 2.2%, 61% 0.7%, 68% 2.1%, 75% 0.6%, 82% 2%, 88.5% 0.8%, 94.5% 2.2%, 98.8% 0.9%, 99.7% 7.5%, 98.4% 14.5%, 100% 21.5%, 98.5% 28.5%, 99.9% 36%, 98.2% 43%, 100% 50%, 98.4% 57%, 99.8% 64%, 98.2% 71%, 100% 78%, 98.4% 85%, 99.7% 92%, 98% 97.5%, 96.5% 98.9%, 91% 97.9%, 84.5% 99.4%, 78% 98.1%, 71.5% 99.5%, 65% 98.1%, 58% 99.4%, 51% 98%, 44% 99.6%, 37% 98.2%, 30% 99.5%, 23% 98.1%, 16% 99.3%, 9% 98.2%, 3.5% 99.6%, 0.9% 97.5%, 2.1% 91%, 0.5% 84%, 2.3% 77%, 0.2% 70%, 2% 63%, 0.6% 56%, 1.9% 49%, 0.3% 42%, 2.2% 35%, 0.5% 28%, 2.1% 21%, 0.3% 14%, 1.8% 7%)",
    },
  ];

  return (
    <section id="tour" className="relative bg-[#F6F1E7] pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 overflow-hidden">
      {/* Ambient Watercolor Parchment Paper Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20 mix-blend-multiply">
        <Image
          src="/images/about_mountain_splash.jpg"
          alt="Parchment Texture"
          fill
          unoptimized
          loading="eager"
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container - Expanded Horizontally matching the sample */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 z-10">
        {/* Section Header */}
        <div data-reveal="tour-header" className="relative flex flex-col md:flex-row items-center justify-between gap-4 pb-7 sm:pb-8 text-center md:text-left select-none">
          <div className="space-y-1.5 md:mx-auto md:text-center">
            <span className="text-[#1A6E43] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              TOUR TRẢI NGHIỆM
            </span>
            <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#1A6E43] tracking-tight">
              Chọn hành trình của bạn
            </h2>
            <p className="text-[#4A554A] text-sm sm:text-base font-normal max-w-xl mx-auto">
              Linh hoạt lựa chọn theo nhu cầu: gia đình, nhóm, bạn bè hoặc doanh nghiệp.
            </p>
          </div>

          {/* Right Script Accent matching mockup */}
          <div className="md:absolute md:right-0 md:top-2 select-none">
            <div className="font-script text-2xl sm:text-3xl text-[#5C6E61] italic drop-shadow-xs max-w-[240px] text-center md:text-right leading-snug">
              <p>Hành trình nhỏ.</p>
              <p className="text-[#1A6E43]">Những kỷ niệm lớn</p>
            </div>
          </div>
        </div>

        {/* 2 Tour Cards Side-by-Side with Botanical Leaves Accents */}
        <div className="relative max-w-[1340px] mx-auto">
          {/* Botanical Watercolor Leaf 1: Far Left Branch tucked behind Card 1 */}
          <div className="absolute -left-6 sm:-left-10 -top-8 w-24 sm:w-32 h-36 sm:h-48 pointer-events-none select-none z-0 opacity-80 transform -rotate-12">
            <svg viewBox="0 0 100 160" fill="none" className="w-full h-full drop-shadow-md">
              <path d="M50 150 Q40 90 20 20" stroke="#3D5F44" strokeWidth="2.5" strokeLinecap="round" />
              {/* Leaves */}
              <path d="M35 125 C20 120 10 105 18 95 C26 85 40 105 35 125 Z" fill="#4E7C57" />
              <path d="M40 100 C55 90 65 75 58 65 C50 55 35 75 40 100 Z" fill="#5F936A" />
              <path d="M28 75 C12 70 5 55 12 45 C20 35 32 55 28 75 Z" fill="#46724E" />
              <path d="M25 50 C40 40 48 25 42 15 C35 5 22 25 25 50 Z" fill="#6EA57B" />
              <path d="M20 20 C15 5 25 0 30 5 C35 10 25 25 20 20 Z" fill="#4E7C57" />
            </svg>
          </div>

          {/* Botanical Watercolor Leaf 2: Center Branch between Card 1 & Card 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-8 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none select-none z-0 opacity-80">
            <svg viewBox="0 0 140 100" fill="none" className="w-full h-full drop-shadow-md">
              <path d="M10 85 Q70 60 130 75" stroke="#3D5F44" strokeWidth="2" strokeLinecap="round" />
              <path d="M40 70 C30 50 45 35 60 45 C70 55 50 75 40 70 Z" fill="#5F936A" />
              <path d="M70 65 C75 40 95 40 95 55 C95 70 75 75 70 65 Z" fill="#46724E" />
              <path d="M100 70 C110 50 125 55 120 70 C115 80 100 80 100 70 Z" fill="#6EA57B" />
            </svg>
          </div>

          {/* Botanical Watercolor Leaf 3: Far Right Branch tucked behind Card 2 */}
          <div className="absolute -right-6 sm:-right-10 -bottom-6 sm:-bottom-8 w-24 sm:w-32 h-36 sm:h-48 pointer-events-none select-none z-0 opacity-85 transform rotate-12">
            <svg viewBox="0 0 100 160" fill="none" className="w-full h-full drop-shadow-md">
              <path d="M50 150 Q60 90 80 20" stroke="#3D5F44" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M65 125 C80 120 90 105 82 95 C74 85 60 105 65 125 Z" fill="#4E7C57" />
              <path d="M60 100 C45 90 35 75 42 65 C50 55 65 75 60 100 Z" fill="#5F936A" />
              <path d="M72 75 C88 70 95 55 88 45 C80 35 68 55 72 75 Z" fill="#46724E" />
              <path d="M75 50 C60 40 52 25 58 15 C65 5 78 25 75 50 Z" fill="#6EA57B" />
              <path d="M80 20 C85 5 75 0 70 5 C65 10 75 25 80 20 Z" fill="#4E7C57" />
            </svg>
          </div>

          {/* Grid of 2 Torn Paper Tour Cards */}
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 relative z-10">
            {tours.map((tour, idx) => (
              <div
                key={tour.id}
                data-reveal={idx === 0 ? "tour-card-1" : "tour-card-2"}
                data-reveal-delay={idx * 140}
                className="group relative transition-all duration-300 hover:scale-[1.015]"
                style={{
                  filter:
                    "drop-shadow(0 16px 28px rgba(45, 35, 20, 0.12)) drop-shadow(0 4px 10px rgba(45, 35, 20, 0.06))",
                }}
              >
                {/* The Torn Paper Card Container */}
                <div
                  className="bg-white flex flex-col sm:flex-row items-stretch overflow-hidden transition-all duration-300"
                  style={{
                    clipPath: tour.tornPolygon,
                  }}
                >
                  {/* Left: Scenery Photo integrated into the Torn Card */}
                  <div className="relative w-full sm:w-[46%] min-h-[220px] sm:min-h-[320px] lg:min-h-[340px] flex-shrink-0 bg-stone-100 overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.imageAlt}
                      fill
                      loading="eager"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle warm vignette on the photo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Right: Tour Details, Price, Checklist & Pill Button */}
                  <div className="flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-white select-none">
                    <div className="space-y-3">
                      {/* Tour Tagline */}
                      <span className="font-sans font-bold text-xs sm:text-[13px] text-[#1A6E43] tracking-widest uppercase block">
                        {tour.title}
                      </span>

                      {/* Large Bold Price */}
                      <div className="flex items-baseline gap-1 pt-0.5">
                        <span className="font-sans font-black text-3xl sm:text-4xl lg:text-[40px] text-[#1A6E43] tracking-tight leading-none">
                          {tour.price}
                        </span>
                        <span className="text-xs sm:text-sm text-[#5C6E61] font-semibold ml-1">
                          {tour.unit}
                        </span>
                      </div>

                      {/* Checklist */}
                      <ul className="space-y-2.5 pt-2">
                        {tour.features.map((feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2.5 text-xs sm:text-[13.5px] font-semibold text-[#223326]"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#1A6E43] text-white flex items-center justify-center flex-shrink-0 text-[10px] font-black shadow-xs">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fresh Vibrant Green Pill CTA Button */}
                    <div className="pt-5 sm:pt-6">
                      <button
                        type="button"
                        onClick={() => onSelectTour?.(tour.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#1A6E43] hover:bg-[#238A56] text-white text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
                      >
                        <span>ĐẶT TOUR NGAY</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft gradient edge blending seamlessly into Schedule */}
      <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-b from-transparent to-[#F6F1E7] pointer-events-none z-10" />
    </section>
  );
}
