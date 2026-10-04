"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import VideoSection from "../components/VideoSection";
import Tours from "../components/Tours";
import Schedule from "../components/Schedule";
import WhyChoose from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import LightboxModal from "../components/LightboxModal";
import FloatingContact from "../components/FloatingContact";
import ConsultationModal from "../components/ConsultationModal";
import ScrollRevealObserver from "../components/ScrollRevealObserver";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("Tour 1 Ngày");

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleOpenLightbox = (payload, initialIndex = 0) => {
    if (payload && typeof payload === "object" && !Array.isArray(payload) && payload.images) {
      setLightboxImage(payload);
    } else if (Array.isArray(payload)) {
      setLightboxImage({ images: payload, initialIndex });
    } else {
      setLightboxImage({ images: [payload], initialIndex });
    }
  };

  const handleSelectTour = (tourTitle) => {
    if (tourTitle && typeof tourTitle === "string") {
      setSelectedTour(tourTitle);
    }
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F4EC] text-[#222222]">
      {/* Scroll Reveal Observer for Bidirectional Animations */}
      <ScrollRevealObserver />

      {/* Navbar Header */}
      <Navbar onOpenConsultation={() => handleSelectTour("Tour 1 Ngày")} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onOpenVideo={handleOpenVideo}
          onOpenConsultation={() => handleSelectTour("Tour 1 Ngày")}
        />

        {/* Section 2: Về Bản Mường Xanh */}
        <About onOpenLightbox={handleOpenLightbox} />

        {/* Section 3: Trải Nghiệm Đa Dạng - Ở đây có gì? */}
        <Experience onOpenLightbox={handleOpenLightbox} />

        {/* Section 4: Video Giới Thiệu */}
        <VideoSection onOpenVideo={handleOpenVideo} />

        {/* Section 5: Tour Trải Nghiệm - Chọn hành trình của bạn */}
        <Tours onSelectTour={handleSelectTour} />

        {/* Section 6: Lịch Trình Tour 1 Ngày */}
        <Schedule onOpenLightbox={handleOpenLightbox} />

        {/* Section 7: Tại Sao Chọn Bản Mường Xanh? */}
        <WhyChoose onOpenLightbox={handleOpenLightbox} />

        {/* Section 8: Hình Ảnh Thực Tế */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
          onOpenConsultation={() => handleSelectTour("Tour 1 Ngày")}
        />

        {/* Section 9: Câu Hỏi Thường Gặp (FAQ độc lập ngang 2 cột) */}
        <FAQ onOpenConsultation={() => handleSelectTour("Tour 1 Ngày")} />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Modals & Floating Utility Controls */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="EFeYBR4UegI"
      />

      <LightboxModal
        isOpen={!!lightboxImage}
        data={lightboxImage}
        imageSrc={typeof lightboxImage === "string" ? lightboxImage : null}
        onClose={() => setLightboxImage(null)}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultTour={selectedTour}
      />

      <FloatingContact onOpenConsultation={() => handleSelectTour("Tour 1 Ngày")} />
    </div>
  );
}
