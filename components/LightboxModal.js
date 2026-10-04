"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

// Từ điển metadata cho các hình ảnh trong toàn bộ hệ sinh thái Bản Mường Xanh
export const IMAGE_METADATA = {
  "/images/pool_real.jpg": {
    title: "Bể bơi xanh mát ngắm mây trời",
    desc: "Bể bơi nước khoáng tự nhiên trong lành giữa lòng thung lũng, độ sâu nông an toàn cho cả gia đình thỏa sức vui đùa.",
  },
  "/images/group_welcome.jpg": {
    title: "Nông trại vui vẻ đón chào quý đoàn",
    desc: "Không gian mở rộng rãi, tươi vui đón tiếp các đoàn khách, gia đình và doanh nghiệp về trải nghiệm sinh thái trọn vẹn.",
  },
  "/images/dance_real.jpg": {
    title: "Điệu múa dân tộc Mường rực rỡ sắc màu",
    desc: "Các cô gái Mường duyên dáng trong trang phục truyền thống, biểu diễn điệu múa xòe và cồng chiêng rộn rã gắn kết.",
  },
  "/images/muong_campfire.jpg": {
    title: "Đêm hội lửa trại bập bùng đại ngàn",
    desc: "Ngọn lửa ấm áp giữa thung lũng Tây Bắc kết nối mọi người, cùng ca hát, nướng ngô khoai và giao lưu múa xòe truyền cảm hứng.",
  },
  "/images/resort_grounds.jpg": {
    title: "Khuôn viên sinh thái xanh rộng 56ha",
    desc: "Cảnh quan thiên nhiên nguyên sơ bạt ngàn với đường dạo bộ rợp bóng cây cổ thụ, suối tự nhiên và các nếp nhà sàn thanh bình.",
  },
  "/images/tour_2_days.jpg": {
    title: "Nhà sàn nghỉ dưỡng view thung lũng mây",
    desc: "Hệ thống nhà sàn gỗ Mường truyền thống thoáng mát đầy đủ tiện nghi, ban công khoáng đạt ngắm nhìn sương sớm tuyệt đẹp.",
  },
  "/images/muong_cuisine.jpg": {
    title: "Ẩm thực Tây Bắc mộc mạc đậm đà bản sắc",
    desc: "Mâm cỗ lá Mường đặc sắc với lợn bản nướng hạt dổi thơm lừng, gà đồi hấp lá chanh, măng rừng và xôi nếp ngũ sắc dẻo thơm.",
  },
  "/images/nature_trail.jpg": {
    title: "Đường dạo bộ sinh thái rợp bóng cây",
    desc: "Lối đi dạo ven suối rợp mát trong lành, nơi cả gia đình cùng hít thở bầu không khí tinh khôi của núi rừng thung lũng Hòa Bình.",
  },
  "/images/swing_games.jpg": {
    title: "Trò chơi dân gian & Xích đu thung lũng",
    desc: "Khu trò chơi vận động ngoài trời an toàn, bổ ích với xích đu khổng lồ, ném còn, cầu thăng bằng rèn luyện thể chất hào hứng.",
  },
  "/images/team_building.jpg": {
    title: "Sân cỏ Team Building ngoài trời rộng lớn",
    desc: "Bãi cỏ xanh mướt trải dài là sân chơi lý tưởng cho các hoạt động gắn kết đoàn kết, khơi dậy tinh thần đồng đội nhiệt huyết.",
  },
  "/images/tour_1_day.jpg": {
    title: "Hành trình dã ngoại sinh thái 1 ngày",
    desc: "Chuyến đi tái tạo năng lượng nhẹ nhàng với đầy đủ hoạt động tham quan, ẩm thực cỗ lá và trải nghiệm văn hóa bản địa đặc sắc.",
  },
  "/images/tour_bus.jpg": {
    title: "Đưa đón tận nơi chu đáo & an toàn",
    desc: "Dịch vụ xe du lịch đời mới chất lượng cao từ 16 đến 45 chỗ đưa đón quý khách thuận tiện và nhanh chóng từ trung tâm Hà Nội.",
  },
  "/images/zipline.jpg": {
    title: "Trải nghiệm đường trượt Zipline kỳ thú",
    desc: "Cảm giác bay lượn trên cao ngắm nhìn toàn cảnh thung lũng xanh và những rặng núi đá vôi hùng vĩ tại Bản Mường Xanh.",
  },
};

export default function LightboxModal({ isOpen, data, imageSrc, onClose }) {
  // Chuẩn hóa danh sách ảnh (items): hỗ trợ cả truyền mảng đối tượng, truyền string lẻ, hoặc object { images, initialIndex }
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kéo chuột và vuốt chạm (Mouse drag & Touch swipe)
  const [dragStartX, setDragStartX] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wheelCooldownRef = useRef(false);

  // Khởi tạo danh sách ảnh khi mở modal
  useEffect(() => {
    if (!isOpen) return;

    let imageList = [];
    let startIdx = 0;

    if (data && Array.isArray(data.images)) {
      imageList = data.images;
      startIdx = data.initialIndex || 0;
    } else if (Array.isArray(data)) {
      imageList = data;
    } else if (typeof data === "string" || imageSrc) {
      const targetSrc = typeof data === "string" ? data : imageSrc;
      const meta = IMAGE_METADATA[targetSrc] || {};
      imageList = [
        {
          src: targetSrc,
          title: meta.title || "Hình ảnh sinh thái Bản Mường Xanh",
          desc: meta.desc || "Không gian thiên nhiên nguyên sơ, nghỉ ngơi và sống chậm tại Bản Mường Xanh.",
        },
      ];
    }

    // Điền tiêu đề và mô tả tự động nếu thiếu
    const normalized = imageList.map((img) => {
      const src = typeof img === "string" ? img : img.src;
      const meta = IMAGE_METADATA[src] || {};
      return {
        src,
        title: (typeof img === "object" && img.title) || meta.title || "Hình ảnh sinh thái Bản Mường Xanh",
        desc: (typeof img === "object" && img.desc) || meta.desc || "Khu du lịch sinh thái và trải nghiệm văn hóa Mường bản địa.",
      };
    });

    setItems(normalized);
    setCurrentIndex(Math.max(0, Math.min(startIdx, normalized.length - 1)));
    setDragOffset(0);
    setIsDragging(false);
  }, [isOpen, data, imageSrc]);

  // Điều hướng trước / sau
  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setDragOffset(0);
  }, [items.length]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setDragOffset(0);
  }, [items.length]);

  // Khóa thanh cuộn bên ngoài & chặn triệt để cử chỉ điều hướng lướt của trình duyệt (Swipe to navigate)
  useEffect(() => {
    if (isOpen) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevBodyOverscroll = document.body.style.overscrollBehavior;
      const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
      document.documentElement.style.overscrollBehavior = "none";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        } else if (e.key === "ArrowLeft" || e.key === "<") {
          handlePrev();
        } else if (e.key === "ArrowRight" || e.key === ">") {
          handleNext();
        }
      };

      // Bắt sự kiện wheel chủ động với { passive: false } để e.preventDefault()
      // Loại bỏ hoàn toàn bong bóng điều hướng lướt lùi trang (nút mũi tên tròn) của Chrome / Edge
      const handleNativeWheel = (e) => {
        if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
          e.preventDefault();
        }

        if (items.length <= 1) return;

        // Xử lý chuyển ảnh mượt mà khi lướt touchpad ngang
        if (Math.abs(e.deltaX) > 20) {
          if (wheelCooldownRef.current) return;
          wheelCooldownRef.current = true;
          if (e.deltaX > 0) {
            handleNext();
          } else {
            handlePrev();
          }
          setTimeout(() => {
            wheelCooldownRef.current = false;
          }, 320);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleNativeWheel, { passive: false });

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.overscrollBehavior = prevBodyOverscroll;
        document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleNativeWheel);
      };
    }
  }, [isOpen, onClose, handlePrev, handleNext, items.length]);

  // Kéo chuột trên máy tính (Mouse Drag)
  const handleMouseDown = (e) => {
    if (items.length <= 1 || e.button !== 0) return;
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    const diff = e.clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragOffset(0);
  };

  // Vuốt chạm trên điện thoại / tablet (Touch Swipe)
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    if (items.length <= 1) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (items.length <= 1 || touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff < -45) {
      handleNext();
    } else if (diff > 45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none overscroll-none touch-pan-y"
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Click backdrop to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center max-h-[96vh]">
        {/* Image Card Container */}
        <div
          className={`relative w-full h-[52vh] sm:h-[64vh] md:h-[68vh] max-h-[640px] xl:max-h-[720px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-stone-950 border border-white/20 flex items-center justify-center ${
            items.length > 1 ? "cursor-grab active:cursor-grabbing" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Nút Đóng (✕) ngay góc trên bên phải khung ảnh, gần gũi, tiện tay bấm tắt */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#1A6E43] text-white flex items-center justify-center transition-all duration-200 cursor-pointer text-sm sm:text-lg border border-white/25 shadow-xl backdrop-blur-md z-30 hover:scale-110 active:scale-95"
            aria-label="Đóng xem chi tiết ảnh"
            title="Đóng (Esc)"
          >
            ✕
          </button>

          <div
            className="relative w-full h-full transition-transform duration-200 ease-out"
            style={{
              transform: isDragging ? `translateX(${dragOffset}px)` : "none",
            }}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-contain pointer-events-none select-none"
            />
          </div>

          {/* 2 Nút Chuyển Ảnh < và > (Hiển thị khi section có nhiều ảnh) */}
          {items.length > 1 && (
            <>
              {/* Nút Previous < */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-[#1A6E43] text-white flex items-center justify-center transition-all border border-white/25 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20 group"
                aria-label="Xem ảnh trước"
              >
                <svg
                  className="w-4.5 h-4.5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Nút Next > */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/55 hover:bg-[#1A6E43] text-white flex items-center justify-center transition-all border border-white/25 shadow-xl hover:scale-110 active:scale-95 cursor-pointer z-20 group"
                aria-label="Xem ảnh kế tiếp"
              >
                <svg
                  className="w-4.5 h-4.5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Khung Thông Tin Ảnh: Tiêu Đề, Mô Tả & Bộ Đếm căn giữa hoàn toàn */}
        <div className="w-full mt-2.5 sm:mt-4 p-3.5 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex flex-col items-center text-center shadow-xl">
          {/* Bộ đếm chỉ số ảnh: Pill badge tinh tế đặt ngay phía trên tiêu đề */}
          {items.length > 1 && (
            <div className="mb-1.5 sm:mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-300 shadow-xs">
                {currentIndex + 1}&nbsp;/&nbsp;{items.length}
              </span>
            </div>
          )}

          {/* Tiêu đề ảnh căn giữa */}
          <h3 className="font-serif font-bold text-sm sm:text-lg md:text-xl text-[#F5EFE3] leading-snug tracking-wide [text-wrap:balance]">
            {currentItem.title}
          </h3>

          {/* Mô tả ảnh căn giữa */}
          <p className="text-[11.5px] sm:text-sm text-stone-300 font-light leading-relaxed mt-1 max-w-2xl mx-auto [text-wrap:balance]">
            {currentItem.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
