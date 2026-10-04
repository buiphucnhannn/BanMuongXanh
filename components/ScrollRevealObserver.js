"use client";

import { useEffect } from "react";

/**
 * Universal Scroll Reveal Observer for Bản Mường Xanh
 * Observes all [data-reveal] elements.
 * Automatically adds 'is-revealed' when entering viewport and removes it when exiting,
 * ensuring animations re-trigger smoothly whether scrolling up or down.
 */
export default function ScrollRevealObserver() {
  useEffect(() => {
    const checkElements = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when element enters 60px into viewport so animation is clearly visible
      const triggerOffset = 60;

      const elements = document.querySelectorAll("[data-reveal]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Check if element is inside the visible viewport range
        const inView = rect.top < windowHeight - triggerOffset && rect.bottom > triggerOffset;

        if (inView) {
          if (!el.classList.contains("is-revealed")) {
            const delay = el.getAttribute("data-reveal-delay");
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add("is-revealed");
          }
        } else {
          // Reset when element leaves the screen so it re-animates both scrolling up and down
          if (rect.top > windowHeight || rect.bottom < 0) {
            el.classList.remove("is-revealed");
          }
        }
      });
    };

    // Run immediately on load and on subsequent frames
    checkElements();
    const t1 = setTimeout(checkElements, 80);
    const t2 = setTimeout(checkElements, 300);
    const t3 = setTimeout(checkElements, 800);

    // Real-time passive scroll & resize listener (hardware accelerated)
    window.addEventListener("scroll", checkElements, { passive: true });
    window.addEventListener("resize", checkElements, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", checkElements);
      window.removeEventListener("resize", checkElements);
    };
  }, []);

  return null;
}
