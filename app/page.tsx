import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrailerSection } from "@/components/trailer-section"
import { FeatureGrid } from "@/components/feature-grid"
import { MascotGallery } from "@/components/mascot-gallery"
import { ScreenshotCarousel } from "@/components/screenshot-carousel"
import { ShopPreview } from "@/components/shop-preview"
import { CommunitySection } from "@/components/community-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="trailer">
        <TrailerSection />
      </div>
      <div id="features">
        <FeatureGrid />
      </div>
      <div id="pets">
        <MascotGallery />
      </div>
      <ScreenshotCarousel />
      <div id="shop">
        <ShopPreview />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
