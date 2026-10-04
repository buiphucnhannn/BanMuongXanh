"use client";

/**
 * Reusable luxury smooth scroll utility
 * Provides smooth, gradual scrolling with cubic easing, optimal viewing offsets,
 * and eliminates hash (#) from the browser URL.
 */

// Optimal offsets for each section (subtracting fixed navbar + aesthetic breathing room)
const SECTION_OFFSETS = {
  top: 0,
  "gioi-thieu": 68,
  "trai-nghiem": 64,
  tour: 60,
  "lich-trinh": 60,
  "tai-sao-chon": 60,
  "thu-vien": 64,
  faq: 60,
  "lien-he": 40,
};

let activeScrollAnimationId = null;

export function smoothScrollTo(target, customOffset) {
  if (typeof window === "undefined") return;

  // Cancel any ongoing smooth scroll animation
  if (activeScrollAnimationId) {
    cancelAnimationFrame(activeScrollAnimationId);
    activeScrollAnimationId = null;
  }

  let targetY = 0;
  let targetId = "";

  if (typeof target === "number") {
    targetY = target;
  } else if (typeof target === "string") {
    // Strip leading '#' if present
    targetId = target.replace(/^#/, "");
    if (targetId === "top" || targetId === "") {
      targetY = 0;
    } else {
      const element = document.getElementById(targetId);
      if (!element) {
        console.warn(`Target section #${targetId} not found`);
        return;
      }

      const rect = element.getBoundingClientRect();
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Determine offset based on mobile vs desktop and section specific tuning
      const isMobile = window.innerWidth < 768;
      const baseOffset = SECTION_OFFSETS[targetId] !== undefined ? SECTION_OFFSETS[targetId] : 64;
      const offset = customOffset !== undefined ? customOffset : (isMobile ? Math.max(48, baseOffset - 12) : baseOffset);

      targetY = rect.top + currentScrollY - offset;
    }
  } else if (target instanceof HTMLElement) {
    const rect = target.getBoundingClientRect();
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const isMobile = window.innerWidth < 768;
    const offset = customOffset !== undefined ? customOffset : (isMobile ? 54 : 64);
    targetY = rect.top + currentScrollY - offset;
  }

  // Clamp targetY within document bounds
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  targetY = Math.max(0, Math.min(targetY, maxScroll));

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;

  // If already at or very close to target, just clean URL and exit
  if (Math.abs(distance) < 2) {
    cleanUrlHash();
    return;
  }

  // Duration scales gently with distance: 750ms to 950ms for that slow, velvety, luxurious glide
  const duration = Math.min(950, Math.max(750, Math.abs(distance) * 0.45));
  let startTime = null;

  // Luxury easeInOutCubic curve
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Interruption listener: cancel if user scrolls manually
  const cancelOnUserInteraction = () => {
    if (activeScrollAnimationId) {
      cancelAnimationFrame(activeScrollAnimationId);
      activeScrollAnimationId = null;
    }
    removeInterruptionListeners();
  };

  const addInterruptionListeners = () => {
    window.addEventListener("wheel", cancelOnUserInteraction, { passive: true });
    window.addEventListener("touchmove", cancelOnUserInteraction, { passive: true });
    window.addEventListener("keydown", cancelOnUserInteraction, { passive: true });
  };

  const removeInterruptionListeners = () => {
    window.removeEventListener("wheel", cancelOnUserInteraction);
    window.removeEventListener("touchmove", cancelOnUserInteraction);
    window.removeEventListener("keydown", cancelOnUserInteraction);
  };

  addInterruptionListeners();

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (progress < 1) {
      activeScrollAnimationId = requestAnimationFrame(step);
    } else {
      activeScrollAnimationId = null;
      removeInterruptionListeners();
      cleanUrlHash();
    }
  };

  activeScrollAnimationId = requestAnimationFrame(step);
}

/**
 * Removes hash from browser URL without triggering page reload or history clutter
 */
export function cleanUrlHash() {
  if (typeof window !== "undefined" && window.history && window.history.replaceState) {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }
}
