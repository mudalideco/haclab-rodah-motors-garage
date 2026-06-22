'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "David Mukasa",
    rating: 5,
    text: 'Best garage in Kyanja! They fixed my Toyota\'s engine problem quickly and explained everything clearly. Professional service and fair prices.',
    car: "Toyota Corolla"
  },
  {
    id: 2,
    name: "Sarah Nalwanga",
    rating: 5,
    text: 'Highly recommend Rodah Motors. They serviced my Honda and the AC is now working perfectly. The Calendly booking makes it so convenient!',
    car: "Honda Civic"
  },
  {
    id: 3,
    name: "James Okello",
    rating: 4,
    text: 'Great team and clean workshop. Wheel alignment done perfectly. They even picked up my car from home - excellent service!',
    car: "Mazda Demio"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Customer Reviews
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers say about our work.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground'} />
                ))}
              </div>
              <p className="text-foreground mb-4">{testimonial.text}</p>
              <div>
                <p className="font-oswald font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.car}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">Rated 4.4★ on Google Maps • 16 Reviews</p>
        </div>
      </div>
    </section>
  )
}