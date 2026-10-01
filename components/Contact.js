"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Vui lòng nhập tên và số điện thoại!");
      return;
    }
    setSent(true);
  }

  return (
    <section id="lien-he" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-emerald-600 font-semibold text-sm uppercase">Liên hệ / Đặt phòng</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Đặt chỗ giữ phòng mùa lúa chín</h2>
          <p className="mt-3 text-zinc-600">
            Để lại thông tin, đội ngũ Bản Mường Xanh sẽ gọi xác nhận trong 15 phút (8h – 21h hằng ngày).
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li>📍 Bản Mường Xanh, xã vùng cao – cách trung tâm 25km</li>
            <li>📞 Hotline/Zalo: <b>09xx xxx xxx</b></li>
            <li>✉️ Email: <b>hello@banmuongxanh.vn</b></li>
            <li>⏰ Check-in 14h – Check-out 12h</li>
          </ul>
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-sm">
            💡 Đoàn từ 10 người được <b>miễn phí văn nghệ lửa trại</b> + giảm 10% tour trekking.
          </div>
        </div>

        <div className="border rounded-3xl p-6 sm:p-8 shadow-sm bg-zinc-50">
          {sent ? (
            <div className="text-center py-10">
              <p className="text-5xl">🎉</p>
              <h3 className="mt-4 text-xl font-bold">Cảm ơn {form.name}!</h3>
              <p className="mt-2 text-zinc-600">
                Yêu cầu đặt phòng ngày <b>{form.date || "linh hoạt"}</b> cho{" "}
                <b>{form.guests} khách</b> đã được ghi nhận. Chúng tôi sẽ gọi lại số{" "}
                <b>{form.phone}</b> sớm nhé!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm underline text-emerald-700"
              >
                Đặt thêm phòng khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-semibold">Họ tên *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="VD: Nguyễn Văn An"
                  className="mt-1 w-full border rounded-xl px-4 py-2.5 bg-white outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Số điện thoại *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="VD: 0987 654 321"
                  className="mt-1 w-full border rounded-xl px-4 py-2.5 bg-white outline-none focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Ngày đến</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-xl px-4 py-2.5 bg-white outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Số khách</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="mt-1 w-full border rounded-xl px-4 py-2.5 bg-white outline-none focus:border-emerald-500"
                  >
                    <option value="2">2 khách</option>
                    <option value="4">3-4 khách</option>
                    <option value="6">5-8 khách</option>
                    <option value="10">Đoàn 10+ người</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Gửi yêu cầu đặt phòng
              </button>
              <p className="text-xs text-zinc-500 text-center">
                Form demo front-end thuần JS – chưa kết nối backend.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
