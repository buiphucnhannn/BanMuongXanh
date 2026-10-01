export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            🌿 Du lịch cộng đồng • Homestay • Ẩm thực dân tộc
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
            Về với <span className="text-emerald-600">Bản Mường Xanh</span>
            <br />
            sống chậm giữa núi rừng
          </h1>
          <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
            Ngôi làng nhỏ nép mình bên thung lũng xanh – nhà sàn ấm cúng, suối trong,
            cơm lam, cá suối và những điệu xoè say đắm lòng người.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#lien-he"
              className="text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Đặt homestay
            </a>
            <a
              href="#trai-nghiem"
              className="text-center border border-zinc-300 hover:border-emerald-600 hover:text-emerald-700 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Khám phá trải nghiệm
            </a>
          </div>
          <div className="mt-8 flex gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold">4.9★</p>
              <p className="text-zinc-500">1.200+ đánh giá</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15+</p>
              <p className="text-zinc-500">Nhà sàn homestay</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-zinc-500">Ẩm thực bản địa</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden bg-emerald-900 aspect-[4/3] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-emerald-700 to-lime-400 opacity-90" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <p className="text-sm opacity-80">⛰ Thung lũng Bản Mường Xanh – mùa lúa chín</p>
              <p className="text-2xl font-bold mt-1">Bình yên, mộc mạc, đáng nhớ</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="bg-white/20 px-3 py-1 rounded-full">Tắm suối</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Đốt lửa trại</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Hái chè</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 bg-white rounded-2xl px-3 py-2 shadow text-sm font-semibold">
              🌾 Mùa đẹp nhất: T9 – T11
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 border">
            <span className="text-2xl">🏡</span>
            <div className="text-sm">
              <p className="font-bold">Chỉ từ 350k / đêm</p>
              <p className="text-zinc-500">Bao gồm ăn sáng bản địa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
