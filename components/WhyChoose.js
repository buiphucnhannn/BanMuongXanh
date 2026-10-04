"use client";

import Image from "next/image";

export default function WhyChoose({ onOpenLightbox }) {
  const reasons = [
    {
      title: "Không gian xanh trong lành",
      desc: "Hơn 5ha thung lũng xanh mướt, khí hậu mát lành quanh năm",
      icon: (
        <svg className="w-5 h-5 text-[#1A6E43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 7l2 5-5 2 2-5 1-2z" />
        </svg>
      ),
    },
    {
      title: "Trải nghiệm bản địa độc đáo",
      desc: "Khám phá phong tục, nếp sống và văn hóa người Mường bản địa",
      icon: (
        <svg className="w-5 h-5 text-[#1A6E43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v18M12 9c-3-3-8-2-8 3s5 5 8 2c3 3 8 2 8-3s-5-5-8-2z" />
        </svg>
      ),
    },
    {
      title: "Trải nghiệm văn hoá đặc sắc",
      desc: "Múa sạp, cồng chiêng, ẩm thực cỗ lá Mường trứ danh",
      icon: (
        <svg className="w-5 h-5 text-[#1A6E43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 4l5 3 5-3v14l-5 3-5-3V4zM12 7v14" />
        </svg>
      ),
    },
    {
      title: "Phù hợp nhóm & doanh nghiệp",
      desc: "Không gian rộng rãi lý tưởng cho team building và gala lửa trại",
      icon: (
        <svg className="w-5 h-5 text-[#1A6E43]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="tai-sao-chon" className="relative w-full bg-[#F6F1E7] overflow-hidden select-none py-14 sm:py-16 lg:py-18">
      {/* Phần tiếp giáp section trên (Schedule): làm mờ mỏng nhẹ (đừng dày quá) chuẩn xác theo màu nền #F6F1E7 */}
      <div className="absolute top-0 inset-x-0 h-10 sm:h-12 bg-gradient-to-b from-[#F6F1E7] via-[#F6F1E7]/75 to-transparent pointer-events-none z-10" />

      {/* Fresh Luxury Eco Watercolor Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-45 mix-blend-multiply">
        <Image
          src="/images/why_choose_bg_v2.jpg"
          alt="Phong cảnh núi non sương mây Bản Mường Xanh"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle Gentle Topographic Elevation Lines */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M-50,90 Q300,150 700,80 T1450,100" stroke="#1A6E43" strokeWidth="1" strokeDasharray="4 6" />
          <path d="M-50,230 Q400,290 850,190 T1450,250" stroke="#1A6E43" strokeWidth="1" strokeDasharray="5 7" />
          <path d="M-50,380 Q380,440 800,350 T1450,400" stroke="#1A6E43" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* Main Content Container - Expanded Comfortably */}
      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: DETAILS & 4 EXPANDED FEATURE CARDS ================= */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div data-reveal="why-header">
              {/* Text thanh mảnh giống các section trên */}
              <div className="flex items-center gap-2 text-[#1A6E43] text-xs sm:text-sm font-bold tracking-[0.24em] uppercase mb-2 select-none">
                <span>🍃</span>
                <span>TẠI SAO CHỌN</span>
              </div>

              {/* Tiêu đề font Playfair Display đồng bộ màu xanh #1A6E43 với kích thước rõ nét, đường bệ */}
              <h2
                className="font-serif font-black text-3xl sm:text-4xl lg:text-[44px] text-[#1A6E43] tracking-wide uppercase leading-tight"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontVariantNumeric: "lining-nums",
                }}
              >
                BẢN MƯỜNG XANH?
              </h2>

              {/* Đoạn mô tả tăng size chữ rõ ràng, dễ đọc hơn */}
              <p className="text-[#3E4A3F] text-sm sm:text-base font-normal leading-relaxed max-w-xl mt-3">
                Không chỉ là một chuyến đi, mà là trải nghiệm kết nối con người – thiên nhiên – văn hoá. Nơi bạn tìm về sự bình yên giữa núi rừng Hòa Bình nguyên sơ.
              </p>
            </div>

            {/* 4 Feature Items - Tăng size thẻ, icon và typography thoáng đãng */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  data-reveal="why-card"
                  data-reveal-delay={i * 100}
                  className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-3.5 sm:p-4.5 rounded-2xl border border-white/95 shadow-[0_6px_20px_rgba(26,110,67,0.05)] hover:bg-white hover:shadow-[0_8px_25px_rgba(26,110,67,0.08)] transition-all duration-300"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EBF5EE] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#183524] leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4E5E51] leading-relaxed mt-1">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3 SHARP BALANCED ARCHED PHOTOS ================= */}
          <div data-reveal="why-card" data-reveal-delay="200" className="lg:col-span-6 flex flex-col items-center justify-center pt-2 lg:pt-0">
            {/* 3 Arched Photos - Cân đối tỉ lệ sắc nét với cột bên trái */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-4.5 justify-center w-full">
              {/* Arch Photo 1: Left (Pool View) */}
              <div
                onClick={() =>
                  onOpenLightbox?.({
                    images: [
                      {
                        src: "/images/pool_real.jpg",
                        title: "Bể bơi xanh mát ngắm mây trời",
                        desc: "Bể bơi nước khoáng tự nhiên trong lành giữa lòng thung lũng, độ sâu nông an toàn cho cả gia đình.",
                      },
                      {
                        src: "/images/resort_grounds.jpg",
                        title: "Khuôn viên sinh thái rộng 56ha",
                        desc: "Cảnh quan thiên nhiên nguyên sơ bạt ngàn với đường dạo bộ rợp bóng mát, suối trong và nhà sàn mộc mạc.",
                      },
                      {
                        src: "/images/tour_2_days.jpg",
                        title: "Phòng nghỉ & Nhà sàn view núi",
                        desc: "Hệ thống nhà sàn và phòng nghỉ khép kín thoáng mát, ban công ngắm nhìn thung lũng sương sớm thơ mộng.",
                      },
                    ],
                    initialIndex: 0,
                  })
                }
                className="relative w-[92px] xs:w-28 sm:w-34 lg:w-38 xl:w-42 h-52 sm:h-64 lg:h-72 xl:h-[320px] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-[3px] border-white cursor-pointer group hover:scale-105 transition-all duration-300 flex-shrink-0 bg-stone-100"
              >
                <Image
                  src="/images/pool_real.jpg"
                  alt="Bể bơi Bản Mường Xanh"
                  fill
                  unoptimized
                  quality={95}
                  sizes="400px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Arch Photo 2: Middle (Pebble Capsule - Elevated Center) */}
              <div
                onClick={() =>
                  onOpenLightbox?.({
                    images: [
                      {
                        src: "/images/pool_real.jpg",
                        title: "Bể bơi xanh mát ngắm mây trời",
                        desc: "Bể bơi nước khoáng tự nhiên trong lành giữa lòng thung lũng, độ sâu nông an toàn cho cả gia đình.",
                      },
                      {
                        src: "/images/resort_grounds.jpg",
                        title: "Khuôn viên sinh thái rộng 56ha",
                        desc: "Cảnh quan thiên nhiên nguyên sơ bạt ngàn với đường dạo bộ rợp bóng mát, suối trong và nhà sàn mộc mạc.",
                      },
                      {
                        src: "/images/tour_2_days.jpg",
                        title: "Phòng nghỉ & Nhà sàn view núi",
                        desc: "Hệ thống nhà sàn và phòng nghỉ khép kín thoáng mát, ban công ngắm nhìn thung lũng sương sớm thơ mộng.",
                      },
                    ],
                    initialIndex: 1,
                  })
                }
                className="relative w-[110px] xs:w-32 sm:w-38 lg:w-42 xl:w-46 h-60 sm:h-74 lg:h-80 xl:h-[360px] rounded-[44px] xs:rounded-[50px] lg:rounded-[60px] overflow-hidden shadow-2xl border-[3.5px] sm:border-[4px] border-white cursor-pointer group hover:scale-105 -translate-y-3.5 lg:-translate-y-5 transition-all duration-300 z-10 flex-shrink-0 bg-stone-100"
              >
                <Image
                  src="/images/resort_grounds.jpg"
                  alt="Hoạt động vui chơi gắn kết Bản Mường Xanh"
                  fill
                  unoptimized
                  quality={100}
                  sizes="500px"
                  className="object-cover object-[center_35%] group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Arch Photo 3: Right (Room & Balcony View) */}
              <div
                onClick={() =>
                  onOpenLightbox?.({
                    images: [
                      {
                        src: "/images/pool_real.jpg",
                        title: "Bể bơi xanh mát ngắm mây trời",
                        desc: "Bể bơi nước khoáng tự nhiên trong lành giữa lòng thung lũng, độ sâu nông an toàn cho cả gia đình.",
                      },
                      {
                        src: "/images/resort_grounds.jpg",
                        title: "Khuôn viên sinh thái rộng 56ha",
                        desc: "Cảnh quan thiên nhiên nguyên sơ bạt ngàn với đường dạo bộ rợp bóng mát, suối trong và nhà sàn mộc mạc.",
                      },
                      {
                        src: "/images/tour_2_days.jpg",
                        title: "Phòng nghỉ & Nhà sàn view núi",
                        desc: "Hệ thống nhà sàn và phòng nghỉ khép kín thoáng mát, ban công ngắm nhìn thung lũng sương sớm thơ mộng.",
                      },
                    ],
                    initialIndex: 2,
                  })
                }
                className="relative w-[92px] xs:w-28 sm:w-34 lg:w-38 xl:w-42 h-52 sm:h-64 lg:h-72 xl:h-[320px] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-[3px] border-white cursor-pointer group hover:scale-105 transition-all duration-300 flex-shrink-0 bg-stone-100"
              >
                <Image
                  src="/images/tour_2_days.jpg"
                  alt="Phòng nghỉ view núi"
                  fill
                  unoptimized
                  quality={95}
                  sizes="400px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Handwriting Cursive Quote beneath */}
            <div className="font-script text-xl sm:text-2xl lg:text-[28px] text-[#4A4235] italic leading-tight text-center sm:text-right w-full pr-0 sm:pr-8 pt-4 select-none">
              <p>Sống chậm để thấy <span className="text-[#1A6E43] font-bold">điều đẹp hơn</span></p>
            </div>
          </div>

        </div>
      </div>

      {/* Phần chân hòa mờ dịu vào màu nền #F6F1E7 để tiếp nối hoàn hảo với đường cong của section bên dưới */}
      <div className="absolute bottom-0 inset-x-0 h-10 sm:h-12 bg-gradient-to-t from-[#F6F1E7] via-[#F6F1E7]/75 to-transparent pointer-events-none z-10" />
    </section>
  );
}
