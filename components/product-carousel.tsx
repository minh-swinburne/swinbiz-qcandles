"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

// Mảng sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Nến thơm Lavender",
    description:
      "Hương thơm dịu nhẹ của hoa oải hương, giúp thư giãn và dễ ngủ.",
    price: "250.000đ",
    image: "/yellow_flower_candle.jpg?height=300&width=300",
  },
  {
    id: 2,
    name: "Nến trang trí Hoa Sen",
    description:
      "Nến hình hoa sen tinh tế, phù hợp làm quà tặng hoặc trang trí.",
    price: "320.000đ",
    image: "/lotus_candle_2.jpg?height=300&width=300",
  },
  {
    id: 3,
    name: "Nến thờ Hoa Lan Hồ Điệp",
    description:
      "Bộ 6 cốc nến thờ hiện đại khoác lên mình sắc đỏ may mắn rực rỡ, nhẹ nhàng hòa quyện cùng nốt hương trầm thanh tịnh.",
    price: "200.000đ",
    image: "/red_buddha_candle_3.jpg?height=300&width=300",
  },
  {
    id: 4,
    name: "Nến thơm Gỗ Đàn Hương",
    description: "Hương gỗ đàn hương sang trọng, mang lại cảm giác bình yên.",
    price: "350.000đ",
    image: "/white_flower_candle.jpg?height=300&width=300",
  },
  {
    id: 5,
    name: "Nến tạo hình Xương Rồng",
    description:
      "Bộ nến với hình dáng chậu xương rồng độc đáo, phù hợp với không gian hiện đại.",
    price: "290.000đ",
    image: "/cactus_candle.jpg?height=300&width=300",
  },
  {
    id: 6,
    name: "Nến tạo hình Đồ Ngọt",
    description: "Sự kết hợp giữa những miếng bánh ngọt và trái cây nhỏ nhắn xinh xắn, tạo nên một món đồ trang trí đáng yêu.",
    price: "270.000đ",
    image: "/fish_candle.jpg?height=300&width=300",
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1)
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(2)
      } else {
        setVisibleProducts(3)
      }
    }

    updateVisibleProducts()
    window.addEventListener("resize", updateVisibleProducts)

    return () => {
      window.removeEventListener("resize", updateVisibleProducts)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex * visibleProducts >= products.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(products.length / visibleProducts) : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
            width: `${(products.length / visibleProducts) * 100}%`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="px-2" style={{ width: `${(100 / products.length) * visibleProducts}%` }}>
              <Card className="h-full">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Sản phấm tại Q'Candles - ${product.name}`}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground flex-grow my-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="font-semibold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ShoppingCart className="h-4 w-4" /> Thêm
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Trước</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Sau</span>
      </Button>
    </div>
  )
}
