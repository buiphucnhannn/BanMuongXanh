import { Playfair_Display, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-script",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "BẢN MƯỜNG XANH | Thiên nhiên • Trải nghiệm • Kết nối ",
  description:
    "Rời phố, tìm về Bản Mường Xanh – Homestay & du lịch trải nghiệm văn hóa Mường độc đáo tại Lương Sơn, Hòa Bình. Chỉ cách Hà Nội 56km.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${dancingScript.variable} ${jakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F7F4EC] text-[#222222]">
        {children}
      </body>
    </html>
  );
}
