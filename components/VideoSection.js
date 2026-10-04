"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function VideoSection() {
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);
  const videoId = "EFeYBR4UegI";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
        }
      },
      {
        threshold: 0.1, // Triggers as soon as 10% enters
        rootMargin: "0px 0px 80px 0px", // Pre-loads and starts playing before fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const unmutedRef = useRef(false);

  // Tự động mở tiếng khi người dùng cuộn tới video hoặc có tương tác đầu tiên
  useEffect(() => {
    if (!hasScrolledIntoView) return;

    const tryUnmute = () => {
      if (unmutedRef.current) return;
      try {
        const win = iframeRef.current?.contentWindow;
        if (!win) return;
        win.postMessage(JSON.stringify({ event: "command", func: "unMute", args: [] }), "*");
        win.postMessage(JSON.stringify({ event: "command", func: "setVolume", args: [100] }), "*");
        unmutedRef.current = true;
      } catch (err) {}
    };

    // Thử gửi lệnh mở tiếng theo các khoảng thời gian tải iframe
    const timers = [
      setTimeout(tryUnmute, 200),
      setTimeout(tryUnmute, 600),
      setTimeout(tryUnmute, 1200),
      setTimeout(tryUnmute, 2200),
    ];

    // Lắng nghe tương tác đầu tiên (cuộn, chạm, click) để kích hoạt âm thanh mà không can thiệp nút dừng/tua của video
    const handleFirstTouch = () => {
      tryUnmute();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", handleFirstTouch);
      window.removeEventListener("wheel", handleFirstTouch);
      window.removeEventListener("touchstart", handleFirstTouch);
      window.removeEventListener("pointerdown", handleFirstTouch);
      window.removeEventListener("click", handleFirstTouch);
    };

    window.addEventListener("scroll", handleFirstTouch, { passive: true, once: true });
    window.addEventListener("wheel", handleFirstTouch, { passive: true, once: true });
    window.addEventListener("touchstart", handleFirstTouch, { passive: true, once: true });
    window.addEventListener("pointerdown", handleFirstTouch, { passive: true, once: true });
    window.addEventListener("click", handleFirstTouch, { once: true });

    return () => {
      timers.forEach((t) => clearTimeout(t));
      cleanup();
    };
  }, [hasScrolledIntoView]);

  return (
    <section
      id="video"
      ref={sectionRef}
      className="relative bg-[#0D2318] pt-12 sm:pt-14 md:pt-16 pb-10 sm:pb-12 md:pb-14 w-full overflow-hidden"
    >
      {/* Symmetrical Arch Transition from Experience - Dark Green (#122B1E) Carves Smoothly over Mountain Landscape */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden leading-none select-none -translate-y-px">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-14 block drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
        >
          <path
            d="M0 0 H1440 V44 C 1040 8, 400 8, 0 44 Z"
            fill="#122B1E"
          />
        </svg>
      </div>

      {/* Scenic Nature Background - Rich, Clear, Natural Green without Heavy Fade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/about_resort_landscape.jpg"
          alt="Cảnh quan núi rừng Bản Mường Xanh"
          fill
          unoptimized
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center scale-[1.02] opacity-90"
        />
        {/* Subtle nature green tint enriching foliage colors, keeping landscape crisp */}
        <div className="absolute inset-0 bg-[#143B22]/15 mix-blend-color" />

        {/* Soft dark forest mist right below the top arch to blend seamlessly with Experience */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#122B1E]/60 via-[#122B1E]/20 to-transparent" />

        {/* Gentle ambient light overlay for title legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F7F4EC]/10 to-[#F7F4EC]/60" />

        {/* Soft edge blending to bottom section */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#F7F4EC] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Centered Header: Compact Spacing, Single-line Title, Smaller Description */}
        <div data-reveal="video-header" className="text-center space-y-1.5 sm:space-y-2 max-w-4xl mx-auto mb-4 sm:mb-5 select-none">
          {/* Tagline - Clean text without badge */}
          <div className="flex items-center justify-center gap-2 text-[#051A0C] text-xs sm:text-sm font-black tracking-[0.25em] uppercase drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            <span className="text-emerald-800 text-base drop-shadow-sm">🍃</span>
            <span>VIDEO GIỚI THIỆU</span>
          </div>

          {/* Main Title - Sized to stay strictly on a single line on desktop */}
          <h2 className="font-serif font-black text-xl sm:text-2xl md:text-[27px] lg:text-[30px] text-[#04160A] leading-snug tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)] whitespace-normal sm:whitespace-nowrap px-2">
            Nhìn Bản Mường Xanh qua một góc nhìn khác
          </h2>

          {/* Description - Smaller, refined font size */}
          <p className="text-[#092212] text-xs sm:text-[13px] md:text-sm font-semibold max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Một vài phút để cảm nhận không gian, con người và những trải nghiệm tuyệt vời đang chờ bạn tại Bản Mường Xanh.
          </p>
        </div>

        {/* Centered Video Player - Autoplays when scrolled into view */}
        <div data-reveal="video-cinema" className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(10,35,20,0.22)] border-4 sm:border-8 border-white/95 ring-1 ring-black/10 bg-black group">
          {hasScrolledIntoView ? (
            <div className="relative w-full h-full">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&playsinline=1&enablejsapi=1`}
                title="Welcome to Bản Mường Xanh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => {
                  try {
                    iframeRef.current?.contentWindow?.postMessage(
                      JSON.stringify({ event: "command", func: "unMute", args: [] }),
                      "*"
                    );
                    iframeRef.current?.contentWindow?.postMessage(
                      JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
                      "*"
                    );
                  } catch (e) {}
                }}
                className="w-full h-full border-0 block"
              />
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src="/images/hero_resort.jpg"
                alt="Bản Mường Xanh Video Thumbnail"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                <div className="w-16 h-12 sm:w-20 sm:h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <svg className="w-7 h-7 text-white fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
