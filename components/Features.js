const services = [
  {
    icon: "🏠",
    title: "Homestay nhà sàn",
    desc: "Nhà sàn gỗ truyền thống, sạch sẽ, view ruộng bậc thang. Có phòng riêng và ngủ cộng đồng.",
    price: "Từ 350k / đêm",
  },
  {
    icon: "🍲",
    title: "Ẩm thực dân tộc",
    desc: "Cơm lam, cá suối nướng, thịt trâu gác bếp, rượu cần. Set mâm bản 6-8 món.",
    price: "Từ 150k / người",
  },
  {
    icon: "🥾",
    title: "Tour trải nghiệm",
    desc: "Trekking bản, tắm suối, hái chè, học dệt thổ cẩm cùng bà con dân bản.",
    price: "Từ 250k / tour",
  },
  {
    icon: "🔥",
    title: "Lửa trại & văn nghệ",
    desc: "Đốt lửa trại, múa xoè, nhảy sạp, giao lưu văn nghệ mỗi tối thứ 7.",
    price: "Miễn phí cho khách lưu trú",
  },
];

export default function Features() {
  return (
    <section id="dich-vu" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Dịch vụ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Mọi thứ bạn cần cho kỳ nghỉ trọn vẹn</h2>
          <p className="mt-3 text-zinc-600">Giá minh bạch, người bản địa phục vụ tận tâm, thuần JS + Tailwind nên web siêu nhanh.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 p-6 hover:border-emerald-500 hover:shadow-lg transition-all bg-white"
            >
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full">
                {s.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
