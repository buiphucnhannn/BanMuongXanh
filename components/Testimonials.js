const reviews = [
  {
    name: "Chị Lan Anh – Hà Nội",
    text: "Nhà sàn sạch, view ruộng siêu chill. Mâm cơm bản ngon nhất mình từng ăn, cá suối tươi rói. Bà con nhiệt tình lắm!",
    star: "★★★★★",
  },
  {
    name: "Anh Minh Đức – Hải Phòng",
    text: "Đi 2N1Đ mà không muốn về. Tối đốt lửa trại nhảy sạp vui cực. Giá rẻ hơn nhiều so với chất lượng.",
    star: "★★★★★",
  },
  {
    name: "Bạn Thu Hằng – Đà Nẵng",
    text: "Web đặt phòng nhanh, đến nơi đúng như ảnh. Sáng săn mây đẹp mê. Sẽ quay lại mùa lúa chín!",
    star: "★★★★★",
  },
];

export default function Testimonials() {
  return (
    <section id="cam-nhan" className="py-16 sm:py-20 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-emerald-600 font-semibold text-sm uppercase">Cảm nhận</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Khách đã đến nói gì?</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-white rounded-2xl p-6 border shadow-sm">
              <div className="text-amber-400">{r.star}</div>
              <blockquote className="mt-3 text-zinc-700 leading-relaxed text-[15px]">“{r.text}”</blockquote>
              <figcaption className="mt-4 font-semibold text-sm">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
