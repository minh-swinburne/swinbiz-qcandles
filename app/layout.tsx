import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Q'Candles - Khơi nguồn hương, kể chuyện yêu thương",
  description:
    "Bạn đã bao giờ cảm thấy mùi hương có thể gợi nhớ một kỷ niệm đặc biệt chưa? Tại Q’Candles, chúng tôi không chỉ mang đến những ngọn nến thơm handmade tinh tế, mà còn tạo ra những khoảnh khắc đáng nhớ. Hãy tham gia workshop làm nến và khám phá nghệ thuật thắp sáng cảm xúc!",
  generator: "v0.dev",
  keywords: [
    "candles",
    "home decor",
    "gifts",
    "handmade",
    "vietnam",
    "workshop nến",
    "q'candles",
    "nến",
    "nến thờ",
    "nến thơm",
    "nến trang trí",
    "quà tặng",
    "thủ công",
    "nến hà nội",
    "nến việt nam",
    "lớp học làm nến",
    "xưởng làm nến",
    "q candles",
    "q'candles",
  ],
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      url: "/favicon.ico",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
      url: "/logo.png",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
