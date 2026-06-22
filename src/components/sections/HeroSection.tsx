'use client'
import Image from 'next/image'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParallaxLayer depth={0.2} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
          alt="Professional garage service bay with mechanics working on vehicles"
          fill
          className="object-cover opacity-30"
          priority
        />
      </ParallaxLayer>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <SplitReveal as="h1" stagger={0.06} duration={0.8} className="text-5xl md:text-7xl font-oswald font-bold text-foreground mb-6">
            Professional Auto Repair & Servicing
          </SplitReveal>
          
          <SplitReveal as="h2" stagger={0.03} duration={0.6} ease="power2.out" className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            High-end fully equipped car service garage in Kyanja, Kampala. Trusted by 160+ customers with 4.4-star rating.
          </SplitReveal>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton>
              <Link href="#services" className="inline-block px-8 py-4 bg-primary text-background font-oswald font-semibold rounded-lg hover:bg-accent transition-colors">
                Our Services
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 border border-primary text-primary font-oswald font-semibold rounded-lg hover:bg-primary hover:text-background transition-colors">
                Book Appointment
              </a>
            </MagneticButton>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-oswald font-bold text-primary">160+</div>
              <div className="text-sm text-muted-foreground">Cars Serviced</div>
            </div>
            <div>
              <div className="text-3xl font-oswald font-bold text-primary">4.4★</div>
              <div className="text-sm text-muted-foreground">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-oswald font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Service Types</div>
            </div>
            <div>
              <div className="text-3xl font-oswald font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}