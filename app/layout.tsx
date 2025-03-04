import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Q'Candles - Nến thơm handmade & Nến thờ hiện đại",
  description:
    "Thắp sáng cảm xúc với những ngọn nến thơm handmade từ Q’Candles. Trải nghiệm workshop sáng tạo hoặc tự tay làm nến để lưu giữ kỷ niệm. Đăng ký ngay!",
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
