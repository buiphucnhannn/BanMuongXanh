"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ({ onOpenConsultation }) {
  // Mặc định không câu hỏi nào được mở
  const [openFaqs, setOpenFaqs] = useState([]);

  // Cho phép mở cùng lúc nhiều câu hỏi độc lập
  const toggleFaq = (idx) => {
    setOpenFaqs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // 6 câu hỏi chia đều 2 cột với độ dài câu trả lời đồng đều (~3 dòng)
  const col1Faqs = [
    {
      id: 0,
      q: "Tour tại Bản Mường Xanh có phù hợp cho trẻ em và người cao tuổi không?",
      a: "Rất phù hợp! Không gian thung lũng xanh bằng phẳng an toàn, bể bơi nông mát lành cho các bé, nhiều trò chơi dân gian bổ ích cùng đường dạo bộ êm ái rợp bóng cây dưỡng sinh cho ông bà.",
    },
    {
      id: 1,
      q: "Có thể tùy chỉnh lịch trình hoặc đặt thực đơn ẩm thực riêng không?",
      a: "Hoàn toàn được. Bản Mường Xanh luôn linh hoạt điều chỉnh khung giờ nhận nhà sàn nghỉ ngơi, thời lượng trải nghiệm và thực đơn cỗ lá Mường đặc sắc theo khẩu vị và ngân sách của từng đoàn.",
    },
    {
      id: 2,
      q: "Đường lên Bản Mường Xanh xe 45 chỗ có vào tận nơi được không?",
      a: "Rất thuận tiện! Tuyến đường từ Hà Nội theo Đại lộ Thăng Long hoặc QL6 đều là đường nhựa và bê tông phẳng rộng, xe du lịch 16 đến 45 chỗ vào tận cổng và có bãi đỗ xe lớn miễn phí.",
    },
  ];

  const col2Faqs = [
    {
      id: 3,
      q: "Đoàn từ bao nhiêu khách sẽ được hỗ trợ Team Building & Lửa trại?",
      a: "Các đoàn từ 15 người trở lên được hỗ trợ trọn gói kịch bản Team Building gắn kết, MC hoạt náo nhiệt tình, hệ thống âm thanh ngoài trời và chương trình đêm lửa trại giao lưu múa xòe Mường.",
    },
    {
      id: 4,
      q: "Bản Mường Xanh có dịch vụ lưu trú qua đêm như thế nào?",
      a: "Khu du lịch có hệ thống nhà sàn gỗ truyền thống thoáng mát sức chứa 20 – 60 người/nhà, cùng các phòng nghỉ khép kín riêng tư đầy đủ tiện nghi với ban công view ngắm thung lũng mây núi thơ mộng.",
    },
    {
      id: 5,
      q: "Chính sách đặt cọc và hủy hoặc dời ngày tour như thế nào?",
      a: "Quý khách được miễn phí dời ngày tour trước 07 ngày khởi hành. Trường hợp thời tiết bão lũ bất khả kháng, Bản Mường Xanh cam kết hoàn 100% tiền đặt cọc hoặc hỗ trợ bảo lưu linh hoạt theo đoàn.",
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-[#F6F1E7] text-[#222222] pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden select-none">
      {/* Top Smooth Wave Transition from Gallery (#0D1F16) into Warm Parchment (#F6F1E7) */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none select-none -translate-y-px">
        <svg
          viewBox="0 0 1440 45"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-6 sm:h-9 md:h-11 block"
        >
          <path
            d="M0 0 H1440 C 1020 40, 420 40, 0 0 Z"
            fill="#0D1F16"
          />
        </svg>
      </div>

      {/* NEW FRESH LUXURY ECO-RESORT BACKGROUND (Núi non sương mây & Họa tiết cành tre dương xỉ) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-45 mix-blend-multiply">
        <Image
          src="/images/faq_bg.jpg"
          alt="Hình nền sinh thái Bản Mường Xanh"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Top and Bottom Gentle Vignette Fades */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#F6F1E7] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#F6F1E7] to-transparent pointer-events-none z-10" />

      {/* Main Content Container - Expanded Full-Width Section */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 z-10">
        
        {/* Centered Section Header */}
        <div data-reveal="faq-header" className="text-center space-y-2 pb-10 sm:pb-14 select-none max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#1A6E43] text-xs sm:text-sm font-bold tracking-[0.24em] uppercase">
            <span>🍃</span>
            <span>GIẢI ĐÁP THẮC MẮC</span>
          </div>

          <h2
            className="font-serif font-black text-3xl sm:text-4xl lg:text-[44px] text-[#1A6E43] tracking-wide uppercase leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontVariantNumeric: "lining-nums",
            }}
          >
            CÂU HỎI THƯỜNG GẶP
          </h2>

          {/* Dòng mô tả nằm trọn vẹn trên 1 dòng ngang, cân xứng tuyệt đối với chiều rộng của các câu hỏi */}
          <p className="text-[#4E5E51] text-xs sm:text-sm md:text-[15px] font-normal tracking-wide leading-relaxed whitespace-normal md:whitespace-nowrap">
            Những thông tin hữu ích giúp bạn và gia đình chuẩn bị chuyến đi trọn vẹn nhất tại Bản Mường Xanh.
          </p>
        </div>

        {/* 2-Column Accordion Layout (Chia đều số câu hỏi ra 2 cột) */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-start">
          
          {/* CỘT 1 */}
          <div className="space-y-4">
            {col1Faqs.map((faq, idx) => {
              const isOpen = openFaqs.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  data-reveal="faq-card"
                  data-reveal-delay={idx * 80}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isOpen
                      ? "bg-white shadow-[0_8px_25px_rgba(26,110,67,0.08)] border-[#1A6E43]/40 ring-1 ring-[#1A6E43]/15"
                      : "bg-white/85 backdrop-blur-sm border-[#E8DFC9] hover:bg-white hover:border-[#1A6E43]/30 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full min-h-[64px] sm:min-h-[70px] flex items-center justify-between text-left gap-4 p-4 sm:p-5 group cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen
                          ? "text-[#1A6E43] font-bold"
                          : "text-[#183524] group-hover:text-[#1A6E43]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Nút dấu + khi chưa mở, dấu − khi đã mở */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-[#1A6E43] text-white shadow-sm"
                          : "bg-[#EFE7D8]/80 text-[#183D2C] group-hover:bg-[#E2DDD2]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Expand Content - Cùng chiều cao chuẩn xác cho tất cả câu hỏi khi mở ra */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1.5 border-t border-[#F0EAE1]/80">
                        <div className="min-h-[96px] sm:min-h-[88px] flex items-center text-xs sm:text-[13.5px] text-[#4E5E51] leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CỘT 2 */}
          <div className="space-y-4">
            {col2Faqs.map((faq, idx) => {
              const isOpen = openFaqs.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  data-reveal="faq-card"
                  data-reveal-delay={idx * 80 + 40}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isOpen
                      ? "bg-white shadow-[0_8px_25px_rgba(26,110,67,0.08)] border-[#1A6E43]/40 ring-1 ring-[#1A6E43]/15"
                      : "bg-white/85 backdrop-blur-sm border-[#E8DFC9] hover:bg-white hover:border-[#1A6E43]/30 shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full min-h-[64px] sm:min-h-[70px] flex items-center justify-between text-left gap-4 p-4 sm:p-5 group cursor-pointer"
                  >
                    <span
                      className={`text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-200 ${
                        isOpen
                          ? "text-[#1A6E43] font-bold"
                          : "text-[#183524] group-hover:text-[#1A6E43]"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Nút dấu + khi chưa mở, dấu − khi đã mở */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        isOpen
                          ? "bg-[#1A6E43] text-white shadow-sm"
                          : "bg-[#EFE7D8]/80 text-[#183D2C] group-hover:bg-[#E2DDD2]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Expand Content - Cùng chiều cao chuẩn xác cho tất cả câu hỏi khi mở ra */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1.5 border-t border-[#F0EAE1]/80">
                        <div className="min-h-[96px] sm:min-h-[88px] flex items-center text-xs sm:text-[13.5px] text-[#4E5E51] leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner: Cần thêm hỗ trợ tư vấn - Khoảng cách đồng bộ đều đặn giống các card câu hỏi phía trên */}
        <div data-reveal="faq-card" data-reveal-delay="200" className="mt-4 sm:mt-5 w-full bg-white/85 backdrop-blur-sm border border-[#E8DFC9] rounded-2xl p-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif font-bold text-base sm:text-lg text-[#183D2C]">
              Bạn vẫn còn câu hỏi khác?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6B5C] whitespace-normal sm:whitespace-nowrap">
              Đội ngũ tư vấn viên Bản Mường Xanh luôn sẵn sàng hỗ trợ bạn 24/7.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto flex-shrink-0">
            <a
              href="tel:0868123456"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#1A6E43] text-[#1A6E43] hover:bg-[#EBF5EE] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>HOTLINE: 0868 123 456</span>
            </a>

            <button
              onClick={() => onOpenConsultation?.()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span>GỬI YÊU CẦU</span>
            </button>
          </div>
        </div>

      </div>


    </section>
  );
}
