"use client";

import { smoothScrollTo } from "../utils/smoothScroll";

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <footer
      id="lien-he"
      className="relative w-full h-auto lg:h-[100dvh] min-h-0 lg:min-h-[580px] max-h-none lg:max-h-[840px] xl:max-h-[880px] flex flex-col justify-between overflow-visible lg:overflow-hidden select-none bg-[#081810]"
    >
      {/* ================= KHỐI TRÊN: NỀN PHONG CẢNH RESORT ĐÃ LÀM MỜ & CARD VỊ TRÍ + MAPS ================= */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
        {/* Nền phong cảnh thung lũng sinh thái - Làm mờ quang học nhẹ & phủ màu êm dịu, hài hòa */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/footer_garden_bg.jpg"
            alt="Thung lũng sinh thái Bản Mường Xanh"
            className="w-full h-full object-cover object-center scale-105 blur-[3px]"
          />
          {/* Lớp làm mềm mép trên tiếp giáp với FAQ (#F6F1E7) */}
          <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-b from-[#F6F1E7] to-transparent z-[1]" />

          {/* Lớp phủ màu xanh rừng mờ nhẹ giúp nền dịu mắt & làm nổi bật 2 card */}
          <div className="absolute inset-0 bg-[#07190F]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#081810]/55" />
        </div>

        {/* Khung chứa rộng CHUẨN XÁC 100% bằng với phần FAQ phía trên (max-w-[1360px] px-4 sm:px-8 lg:px-12) */}
        <div className="relative max-w-[1360px] w-full mx-auto px-4 sm:px-8 lg:px-12 z-10 pt-8 pb-8 lg:pt-2 lg:pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full lg:h-[330px] xl:h-[350px] translate-y-0 lg:translate-y-8 xl:translate-y-10">
            
            {/* CỘT TRÁI: Card kính mờ bo tròn thanh lịch - Tăng chiều cao & Tăng size chữ to rõ, đầy đặn */}
            <div data-reveal="footer-card" className="lg:col-span-5 w-full flex flex-col">
              <div className="w-full h-full bg-white/95 backdrop-blur-md p-6 sm:p-7 xl:p-8 rounded-[28px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.24)] border border-white/80 flex flex-col justify-between transition-all">
                
                {/* Header card: Nhãn + Tiêu đề + Slogan */}
                <div className="space-y-1.5 sm:space-y-2">
                  {/* Nhãn trên cùng */}
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#4E5C51] uppercase">
                    <svg
                      className="w-4 h-4 text-[#1A6E43]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21c-4.5-4.5-8-8.5-8-12a8 8 0 1 1 16 0c0 3.5-3.5 7.5-8 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span>VỊ TRÍ & LIÊN HỆ</span>
                  </div>

                  {/* Tiêu đề chính font Serif thanh lịch to rõ */}
                  <h2 className="font-serif font-bold text-2xl sm:text-[26px] lg:text-[28px] leading-tight text-[#1F2922] tracking-tight">
                    Hẹn bạn ở Bản Mường Xanh
                  </h2>
                  <p className="text-[#4A554D] text-xs sm:text-sm font-normal leading-relaxed">
                    Một hành trình mới bắt đầu từ một nơi thật yên.
                  </p>
                </div>

                {/* Danh sách thông tin chi tiết với size chữ to rõ, dễ đọc */}
                <div className="space-y-2.5 sm:space-y-3 py-1.5 text-xs sm:text-sm text-[#232F27]">
                  {/* Địa chỉ */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#1A6E43]">
                      <svg
                        className="w-4.5 h-4.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 21c-4.5-4.5-8-8.5-8-12a8 8 0 1 1 16 0c0 3.5-3.5 7.5-8 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">
                      Xóm Bằng Cả, Xã Cao Sơn, Huyện Lương Sơn, Tỉnh Hòa Bình, Việt Nam
                    </span>
                  </div>

                  {/* Hotline */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 text-[#1A6E43]">
                      <svg
                        className="w-4.5 h-4.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <a
                      href="tel:0868123456"
                      className="font-bold text-[#1F2922] hover:text-[#1A6E43] transition-colors"
                    >
                      0868 123 456
                    </a>
                  </div>

                  {/* Giờ đón khách */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 text-[#1A6E43]">
                      <svg
                        className="w-4.5 h-4.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                      </svg>
                    </div>
                    <span className="text-[#3E4A40]">
                      Bản Mường Xanh Retreat • Mở cửa 08:00 – 21:30 hàng ngày
                    </span>
                  </div>
                </div>

                {/* Nút chỉ đường đến Bản Mường Xanh dạng pill chuẩn màu #1A6E43 */}
                <div className="pt-1">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=B%E1%BA%A3n+M%C6%B0%E1%BB%9Dng+Xanh,+Cao+S%C6%A1n,+L%C6%B0%C6%A1ng+S%C6%A1n,+H%C3%B2a+B%C3%ACnh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 group cursor-pointer text-center"
                  >
                    <span>Chỉ đường đến Bản Mường Xanh</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                      →
                    </span>
                  </a>
                </div>

              </div>
            </div>

            {/* CỘT PHẢI: Khung Google Maps thật 100% - Chiều cao chuẩn bằng Card Trái */}
            <div data-reveal="footer-card" data-reveal-delay="140" className="lg:col-span-7 w-full flex flex-col">
              <div className="w-full h-full min-h-[280px] lg:min-h-0 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.26)] border border-white/50 bg-stone-900 group">
                <iframe
                  title="Bản đồ chỉ đường Bản Mường Xanh"
                  src="https://maps.google.com/maps?q=B%E1%BA%A3n%20M%C6%B0%E1%BB%9Dng%20Xanh,%20Cao%20S%C6%A1n,%20L%C6%B0%C6%A1ng%20S%C6%A1n,%20H%C3%B2a%20B%C3%ACnh&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= KHỐI DƯỚI: THANH FOOTER BAR MÀU XANH RỪNG ĐẦY ĐẶN & SANG TRỌNG ================= */}
      <div data-reveal="footer-bottom" className="relative w-full bg-[#081810] text-white border-t border-white/10 z-20 flex-shrink-0">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
          
          {/* Hàng trên: Logo | Menu ngang 5 nút thống nhất với Header | Hotline & Địa chỉ */}
          <div className="py-5 sm:py-6 lg:py-7 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-b border-white/10">
            {/* Logo + Tên thương hiệu: Đồng bộ 100% với Header & Bấm vào cuộn mượt về đầu trang */}
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "top")}
              className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none flex-shrink-0"
              title="Về đầu trang"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#E2D9C5]/80 group-hover:border-white shadow-md flex-shrink-0 bg-white transition-all">
                <img
                  src="/images/logo.png"
                  alt="Bản Mường Xanh Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-white font-serif font-bold text-sm sm:text-base tracking-[0.18em] uppercase leading-tight group-hover:text-[#4ADE80] transition-colors">
                  BẢN MƯỜNG XANH
                </span>
                <span className="text-[#E2D9C5] text-[10px] sm:text-[11px] tracking-wider font-light">
                  Thiên nhiên • Trải nghiệm • Kết nối
                </span>
              </div>
            </a>

            {/* Menu ngang ĐÚNG 5 NÚT THỐNG NHẤT THEO THỨ TỰ TRÊN TRANG */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 text-xs sm:text-sm text-stone-200 font-normal tracking-wide">
              <a
                href="#gioi-thieu"
                onClick={(e) => handleNavClick(e, "gioi-thieu")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Giới thiệu
              </a>
              <a
                href="#trai-nghiem"
                onClick={(e) => handleNavClick(e, "trai-nghiem")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Trải nghiệm
              </a>
              <a
                href="#tour"
                onClick={(e) => handleNavClick(e, "tour")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Tour
              </a>
              <a
                href="#thu-vien"
                onClick={(e) => handleNavClick(e, "thu-vien")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Thư viện
              </a>
              <a
                href="#lien-he"
                onClick={(e) => handleNavClick(e, "lien-he")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Liên hệ
              </a>
            </nav>

            {/* Hotline & Địa chỉ */}
            <div className="text-center md:text-right text-xs sm:text-sm text-stone-200 flex-shrink-0">
              <div className="leading-snug">
                <span className="text-stone-400">Hotline: </span>
                <a
                  href="tel:0868123456"
                  className="font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  0868 123 456
                </a>
              </div>
              <p className="text-xs text-stone-400 mt-1 font-light">
                Xóm Bằng Cả, Cao Sơn, Lương Sơn, Hòa Bình
              </p>
            </div>
          </div>

          {/* Hàng dưới: Copyright */}
          <div className="py-3.5 sm:py-4 text-center">
            <p className="text-xs text-stone-400 font-light tracking-wider">
              © 2026 Bản Mường Xanh. Nghỉ ngơi và sống chậm giữa thiên nhiên.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
