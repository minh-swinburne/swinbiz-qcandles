import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Flame,
  Heart,
  Star,
  Play,
  CandlestickChartIcon as Candle,
} from "lucide-react"
import ProductCarousel from "@/components/product-carousel"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-handwriting font-bold">
              Q'Candles
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Trang chủ
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium hover:text-primary"
            >
              Sản phẩm
            </Link>
            <Link
              href="#workshop"
              className="text-sm font-medium hover:text-primary"
            >
              Workshop
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Về chúng tôi
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Liên hệ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61570950431041"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/qcandles.vn"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
            >
              Đăng nhập
            </Link>
            <Button>Mua ngay</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/red_buddha_candle.jpg?height=1080&width=1920')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-handwriting tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Thắp sáng không gian sống của bạn
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Nến thơm và nến trang trí thủ công mang đến không gian ấm áp
                    và thư giãn cho ngôi nhà của bạn.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="gap-1 bg-primary hover:bg-primary/90"
                  >
                    Khám phá ngay <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white hover:bg-white/20"
                  >
                    Bộ sưu tập mới
                  </Button>
                </div>
                <p className="text-xs text-white/80">
                  Miễn phí vận chuyển cho đơn hàng trên 500.000đ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Đặc điểm nổi bật
                </div>
                <h2 className="text-3xl font-handwriting tracking-tighter md:text-4xl">
                  Tại sao chọn Q'Candles?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Chúng tôi tạo ra những sản phẩm nến thơm và nến trang trí chất
                  lượng cao, thủ công và độc đáo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Thủ công</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Mỗi sản phẩm đều được làm thủ công với sự tỉ mỉ và chăm chút
                  đến từng chi tiết.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tự nhiên</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Sử dụng sáp đậu nành tự nhiên và tinh dầu thiên nhiên, an toàn
                  cho sức khỏe.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Độc đáo</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Thiết kế độc đáo, đa dạng mẫu mã và hương thơm phù hợp với mọi
                  không gian.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Candle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Bền lâu</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Thời gian cháy lâu, hương thơm lan tỏa đều và giữ mùi bền lâu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Carousel Section */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Sản phẩm nổi bật
                </div>
                <h2 className="text-3xl font-handwriting tracking-tighter md:text-4xl">
                  Bộ sưu tập mới nhất
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Khám phá những sản phẩm nến thơm và nến trang trí mới nhất của
                  chúng tôi.
                </p>
              </div>
            </div>

            <ProductCarousel />

            <div className="flex justify-center mt-10">
              <Button size="lg" className="gap-1">
                Xem tất cả sản phẩm <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section
          id="workshop"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Workshop
                  </div>
                  <h2 className="text-3xl font-handwriting tracking-tighter md:text-4xl">
                    Khám phá quy trình làm nến thủ công
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Tại workshop của Q'Candles, mỗi sản phẩm đều được tạo ra
                    bằng tình yêu và sự tỉ mỉ. Chúng tôi mời bạn tham quan và
                    trải nghiệm quy trình làm nến thủ công.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Tham gia workshop</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Trải nghiệm làm nến thủ công</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Học hỏi về các loại tinh dầu và sáp</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Mang về sản phẩm tự làm</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Đăng ký tham gia
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/workshop_cafe.jpg?height=720&width=1280"
                  alt="Workshop Q'Candles"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Play className="h-8 w-8 text-white" />
                    <span className="sr-only">Xem video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Đánh giá
                </div>
                <h2 className="text-3xl font-handwriting tracking-tighter md:text-4xl">
                  Khách hàng nói gì về chúng tôi
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hãy xem những chia sẻ từ khách hàng đã trải nghiệm sản phẩm
                  của Q'Candles.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "Nến thơm của Q'Candles thực sự tuyệt vời. Mùi hương dễ
                    chịu, lan tỏa đều và giữ mùi rất lâu. Tôi đặc biệt yêu thích
                    thiết kế độc đáo của các sản phẩm."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <Image
                    src="/testimonial_2.jpg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Nguyễn Thị Mai"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Nguyễn Thị Mai</p>
                    <p className="text-xs text-muted-foreground">
                      Khách hàng thân thiết
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "Tôi đã tham gia workshop làm nến và đó là một trải nghiệm
                    tuyệt vời. Đội ngũ nhân viên rất nhiệt tình và chuyên
                    nghiệp. Sản phẩm làm ra rất đẹp và thơm."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <Image
                    src="/testimonial_1.jpg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Trần Văn Hùng"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Trần Văn Hùng</p>
                    <p className="text-xs text-muted-foreground">
                      Khách tham gia workshop
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "Nến trang trí của Q'Candles là món quà hoàn hảo cho bạn bè
                    và người thân. Mọi người đều rất thích và ấn tượng với thiết
                    kế độc đáo và chất lượng sản phẩm."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <Image
                    src="/testimonial_3.jpg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="Lê Thị Hương"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Lê Thị Hương</p>
                    <p className="text-xs text-muted-foreground">
                      Khách hàng mới
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-handwriting tracking-tighter md:text-4xl">
                  Sẵn sàng trải nghiệm Q'Candles?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Đăng ký nhận thông tin về sản phẩm mới và ưu đãi đặc biệt từ
                  chúng tôi.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input type="email" placeholder="Nhập email của bạn" />
                  <Button type="submit" size="lg">
                    Đăng ký ngay
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Chúng tôi cam kết bảo mật thông tin của bạn.{" "}
                  <Link href="#" className="underline underline-offset-2">
                    Chính sách bảo mật
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-handwriting font-bold">
                  Q'Candles
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Thắp sáng không gian sống của bạn với nến thơm và nến trang trí
                thủ công.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61570950431041"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/qcandles.vn"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-medium">Sản phẩm</h3>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Nến thơm
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Nến trang trí
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Bộ quà tặng
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Phụ kiện
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-medium">Thông tin</h3>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Về chúng tôi
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Workshop
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Liên hệ
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-medium">Hỗ trợ</h3>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Vận chuyển
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Đổi trả
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Chính sách bảo mật
              </Link>
            </div>
            <div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-medium">Liên hệ</h3>
              <p className="text-sm text-muted-foreground">
                LBB21 Embassy Garden, Bắc Từ Liêm, Hà Nội
              </p>
              <p className="text-sm text-muted-foreground">
                Email: info@qcandles.com
              </p>
              <p className="text-sm text-muted-foreground">
                Hotline: 0123 456 789
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
            <div className="text-xs text-muted-foreground">
              <p>Website demo cho Swinbiz 2025 Case Challenge Competition</p>
              <p className="mt-2">Thành viên nhóm:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Lê Vân Anh</li>
                <li>Đinh Thị Quỳnh Như</li>
                <li>Phạm Tố Tâm</li>
                <li>Nguyễn Thị Thanh Minh</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Q'Candles. Tất cả quyền được bảo
              lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
