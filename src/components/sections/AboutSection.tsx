'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-6">
            About Rodah Motors
          </SplitReveal>
          
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground mb-6">
            High-end fully equipped car service garage located in Kisaasi town on Kisaasi-Kyanja Road. We pride ourselves on professional and timely service with detailed car problem explanations.
          </SplitReveal>
          
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground">
            Wheelchair accessible entrance. Open 8am daily. Rated 4.4 stars with 16 reviews on Google Maps.
          </SplitReveal>
        </div>
      </div>
    </section>
  )
}