'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'

export function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-6">
          Book Your Service
        </SplitReveal>
        
        <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Quick and easy online scheduling. Choose a time that works for you.
        </SplitReveal>
        
        <MagneticButton>
          <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary text-background font-oswald font-semibold rounded-lg hover:bg-accent transition-colors text-lg">
            Schedule Appointment Now
          </a>
        </MagneticButton>
      </div>
    </section>
  )
}