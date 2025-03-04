import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Q'Candles - Hòa quyện nghệ thuật và cảm xúc trong từng ngọn nến",
  description: "Landing Page for Q'Candles",
  generator: "v0.dev",
  keywords: [
    "candles",
    "home decor",
    "gifts",
    "handmade",
    "vietnam",
    "workshop",
    "q'candles",
    "nến",
    "nến thơm",
    "nến trang trí",
    "quà tặng",
    "thủ công",
    "việt nam",
    "xưởng",
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
