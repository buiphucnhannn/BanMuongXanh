export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-white font-bold text-lg">☘ Bản Mường Xanh</p>
          <p className="mt-2 leading-relaxed">
            Homestay & du lịch cộng đồng.
            <br />
            Giữ rừng – Giữ bản – Giữ văn hoá.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold">Liên kết</p>
          <ul className="mt-2 space-y-1">
            <li><a href="#gioi-thieu" className="hover:text-white">Giới thiệu</a></li>
            <li><a href="#dich-vu" className="hover:text-white">Dịch vụ</a></li>
            <li><a href="#lien-he" className="hover:text-white">Đặt phòng</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Tech stack</p>
          <p className="mt-2">Next.js 16 (App Router) + TailwindCSS v4 + JavaScript thuần.</p>
          <p className="mt-1 text-zinc-500">Chạy dev: npm run dev • Build: npm run build</p>
        </div>
      </div>
      <p className="text-center text-xs text-zinc-500 mt-8">
        © {new Date().getFullYear()} Bản Mường Xanh. Made with 💚 in Vietnam.
      </p>
    </footer>
  );
}
