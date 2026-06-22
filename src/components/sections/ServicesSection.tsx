'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: "Car Servicing",
    description: "Complete vehicle maintenance with oil change, filter replacement, and safety checks.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    alt: "Mechanic performing routine car service maintenance"
  },
  {
    id: 2,
    title: "Engine Repair",
    description: "Expert diagnostics and repair for all engine problems, from minor tune-ups to major overhauls.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
    alt: "Mechanic working on car engine in garage"
  },
  {
    id: 3,
    title: "Wheel Alignment",
    description: "Precision wheel alignment to ensure smooth driving and even tire wear.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    alt: "Wheel alignment equipment in auto shop"
  },
  {
    id: 4,
    title: "Brake Repair",
    description: "Complete brake system inspection, repair, and replacement for safety.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    alt: "Brake rotors and pads being inspected and replaced"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Our Services
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional auto repair services for all makes and models. From routine maintenance to complex engine work.
          </SplitReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center mb-16 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1">
                <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-3xl font-oswald font-semibold text-primary mb-4">
                  {service.title}
                </SplitReveal>
                <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-foreground mb-6">
                  {service.description}
                </SplitReveal>
                <Link href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-primary text-background font-oswald font-semibold rounded-lg hover:bg-accent transition-colors">
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}