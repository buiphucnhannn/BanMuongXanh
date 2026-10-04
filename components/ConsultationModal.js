"use client";

import { useEffect, useState } from "react";

export default function ConsultationModal({ isOpen, onClose, defaultTour = "Tour 1 Ngày" }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    tourType: defaultTour,
    notes: "",
  });

  useEffect(() => {
    if (defaultTour) {
      setFormData((prev) => ({ ...prev, tourType: defaultTour }));
    }
  }, [defaultTour]);

  // Khóa thanh cuộn bên ngoài trang web triệt để & lắng nghe phím Escape
  useEffect(() => {
    if (isOpen) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền họ tên và số điện thoại.");
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      setFormData({
        name: "",
        phone: "",
        guests: "",
        date: "",
        tourType: "Tour 1 Ngày",
        notes: "",
      });
    }, 2800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Click backdrop to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[640px] max-h-[95vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#FAF7F0] rounded-[24px] sm:rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-[#E8DFC9] p-5 sm:px-8 sm:py-6 md:px-9 md:py-6.5 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4.5 sm:right-4.5 w-8 h-8 rounded-full bg-stone-200/70 hover:bg-[#1A6E43] hover:text-white text-stone-600 flex items-center justify-center transition-all cursor-pointer text-sm font-bold shadow-xs z-20"
          aria-label="Đóng popup"
        >
          ✕
        </button>

        {/* Header: Logo, Tên thương hiệu và Tiêu đề đường bệ, gọn gàng vừa vặn */}
        <div className="text-center pb-2.5 sm:pb-3 border-b border-[#EFE7D8]">
          <div className="flex items-center justify-center gap-2.5 mb-1.5">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#1A6E43]/40 shadow-xs flex-shrink-0 bg-white">
              <img
                src="/images/logo.png"
                alt="Bản Mường Xanh Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#1A6E43] font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase leading-tight">
                BẢN MƯỜNG XANH
              </span>
              <span className="text-[#5C6B5C] text-[10px] sm:text-[11px] tracking-wider font-normal">
                Thiên nhiên • Trải nghiệm • Kết nối
              </span>
            </div>
          </div>

          {/* Tiêu đề & kí tự font sans thân thiện */}
          <h3 className="font-serif font-black text-xl sm:text-[23px] text-[#1A6E43] tracking-tight [text-wrap:balance] leading-tight">
            NHẬN TƯ VẤN <span className="font-sans font-medium text-[#1A6E43] px-1">&</span> BÁO&nbsp;GIÁ
          </h3>
          <p className="text-[11px] sm:text-xs text-[#5C6B5C] mt-0.5 [text-wrap:balance]">
            Đội ngũ tư vấn viên sẽ liên hệ lại với bạn trong vòng 15&nbsp;phút.
          </p>
        </div>

        {formSubmitted ? (
          <div className="py-10 text-center space-y-3 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#1A6E43] text-white flex items-center justify-center mx-auto text-2xl shadow-lg">
              ✓
            </div>
            <h4 className="font-serif font-bold text-xl text-[#1A6E43]">
              Gửi yêu cầu thành&nbsp;công!
            </h4>
            <p className="text-xs sm:text-sm text-[#4A554A] max-w-sm mx-auto [text-wrap:balance] leading-relaxed">
              Bản Mường Xanh đã ghi nhận thông tin và sẽ gọi điện hỗ trợ bạn ngay lập&nbsp;tức.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 mt-3.5 sm:mt-4">
            {/* Hàng 1: Họ tên | Số điện thoại (2 cột đối xứng) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <div>
                <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                  Họ và tên&nbsp;*
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn A"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                  Số điện thoại&nbsp;*
                </label>
                <input
                  type="tel"
                  placeholder="Ví dụ: 0912 345 678"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Hàng 2: Gói trải nghiệm quan tâm (Hàng ngang rộng rãi hiển thị trọn vẹn tên tour & giá) */}
            <div>
              <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                Gói trải nghiệm quan&nbsp;tâm
              </label>
              <div className="relative">
                <select
                  value={formData.tourType}
                  onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs appearance-none pr-10 cursor-pointer font-medium"
                >
                  <option value="Tour 1 Ngày">Tour 1 Ngày (560.000đ/người - Tham quan & Ăn trưa)</option>
                  <option value="Tour 2 Ngày 1 Đêm">Tour 2 Ngày 1 Đêm (1.280.000đ/người - Trọn gói lưu trú)</option>
                  <option value="Tour Team Building Doanh Nghiệp">Tour Doanh Nghiệp / Team Building & Gala Lửa trại</option>
                  <option value="Tour Theo Yêu Cầu">Tour Thiết Kế Theo Yêu Cầu Riêng</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hàng 3: Ngày khởi hành (Lịch) | Số lượng khách dự kiến (2 cột cân đối) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              <div>
                <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                  Ngày khởi hành dự&nbsp;kiến
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  onClick={(e) => {
                    try {
                      e.target.showPicker?.();
                    } catch (err) {}
                  }}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                  Số lượng khách dự&nbsp;kiến
                </label>
                <input
                  type="number"
                  placeholder="Ví dụ: 15 khách"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Hàng 4: Ghi chú yêu cầu thêm - Textarea mở rộng kéo dài tùy ý theo chiều dọc */}
            <div>
              <label className="block text-xs sm:text-[12.5px] font-bold text-[#1F2922] mb-1 whitespace-nowrap">
                Ghi chú yêu cầu&nbsp;thêm
              </label>
              <textarea
                rows={2}
                placeholder="VD: 2 người lớn, 1 bé nhỏ, cần nhận phòng sớm, ăn chay, tổ chức tiệc lửa trại..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl border border-stone-300 focus:border-[#1A6E43] focus:ring-2 focus:ring-[#1A6E43]/20 text-xs sm:text-sm outline-none bg-white text-stone-800 transition-all shadow-2xs resize-y min-h-[62px] sm:min-h-[68px] max-h-[180px] leading-relaxed block no-scrollbar"
              />
            </div>

            {/* Nút Gửi Yêu Cầu */}
            <div className="pt-1.5 sm:pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 sm:py-3.5 px-7 rounded-full bg-[#1A6E43] hover:bg-[#208351] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>GỬI YÊU CẦU&nbsp;NGAY</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
