import { Navbar } from '@/components/sections/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { BrandsSection } from '@/components/sections/BrandsSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'
import { AboutSection } from '@/components/sections/AboutSection'
import { GuaranteeSection } from '@/components/sections/GuaranteeSection'
import { BookingSection } from '@/components/sections/BookingSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <BookingSection />
      <GallerySection />
      <TestimonialsSection />
      <TeamSection />
      <LocationSection />
      <BrandsSection />
      <GuaranteeSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
