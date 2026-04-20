import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Collection } from "@/components/collection"
import { FeaturedProduct } from "@/components/featured-product"
import { Heritage } from "@/components/heritage"
import { TeaJourney } from "@/components/tea-journey"
import { BrewingGuide } from "@/components/brewing-guide"
import { Awards } from "@/components/awards"
import { Testimonials } from "@/components/testimonials"
import { InstagramGallery } from "@/components/instagram-gallery"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Collection />
      <FeaturedProduct />
      <Heritage />
      <TeaJourney />
      <BrewingGuide />
      <Awards />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  )
}
