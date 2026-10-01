const items = [
  { time: "06:00 – Săn mây & ngắm bình minh", desc: "Dậy sớm leo đồi chè, săn mây, ăn sáng xôi nếp nương." },
  { time: "09:00 – Trekking & tắm suối", desc: "Đi bộ xuyên bản, lội suối, check-in cầu tre, thác nhỏ." },
  { time: "12:00 – Cơm bản dân tộc", desc: "Mâm cơm 8 món: cá suối, gà đồi, rau rừng, cơm lam." },
  { time: "15:00 – Học nghề truyền thống", desc: "Dệt thổ cẩm, giã bánh dày, làm cơm lam cùng nghệ nhân." },
  { time: "19:30 – Lửa trại & xoè Thái", desc: "Ăn tối, đốt lửa, múa xoè, uống rượu cần, ngủ nhà sàn." },
];

export default function Experience() {
  return (
    <section id="trai-nghiem" className="py-16 sm:py-20 bg-emerald-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <p id="gioi-thieu" className="text-lime-300 font-semibold text-sm uppercase tracking-wider">
            Giới thiệu & Lịch trình
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">
            Một ngày ở Bản Mường Xanh có gì?
          </h2>
          <p className="mt-4 text-emerald-100/80 leading-relaxed">
            Bản Mường Xanh là bản du lịch cộng đồng của người Thái – Mường, cách trung tâm
            khoảng 25km. Người dân thân thiện, giữ nguyên nếp nhà sàn, nghề dệt và lễ hội
            truyền thống. Lịch trình 2N1Đ được yêu thích nhất:
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#lien-he" className="bg-lime-400 text-emerald-950 font-semibold px-5 py-2.5 rounded-full hover:bg-lime-300">
              Đặt tour 2N1Đ – 990k
            </a>
            <a href="#cam-nhan" className="border border-white/30 px-5 py-2.5 rounded-full hover:bg-white/10">
              Xem review
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-2xl font-bold">25km</p>
              <p className="text-xs text-emerald-100/70 mt-1">Từ trung tâm, đường đẹp</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-2xl font-bold">2N1Đ</p>
              <p className="text-xs text-emerald-100/70 mt-1">Lịch trình phổ biến</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <p className="text-2xl font-bold">30+</p>
              <p className="text-xs text-emerald-100/70 mt-1">Hoạt động trải nghiệm</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white text-zinc-900 rounded-2xl p-4 flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">
                {idx + 1}
              </span>
              <div>
                <p className="font-bold">{it.time}</p>
                <p className="text-sm text-zinc-600 mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
