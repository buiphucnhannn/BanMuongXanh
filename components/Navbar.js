"use client";

import { useState } from "react";

const links = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#trai-nghiem", label: "Trải nghiệm" },
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#cam-nhan", label: "Cảm nhận" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-900/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white grid place-items-center text-xl">
            ☘
          </span>
          <span>
            Bản Mường <span className="text-emerald-600">Xanh</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-emerald-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#lien-he"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition-colors"
          >
            Đặt phòng
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border"
          aria-label="Mở menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 px-2 rounded hover:bg-emerald-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lien-he"
            onClick={() => setOpen(false)}
            className="mt-2 text-center bg-emerald-600 text-white py-2 rounded-full"
          >
            Đặt phòng ngay
          </a>
        </div>
      )}
    </header>
  );
}
