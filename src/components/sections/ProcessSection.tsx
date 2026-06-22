'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'

const steps = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Schedule your service online or call us directly. Choose a time that works for you."
  },
  {
    number: "02",
    title: "Diagnostic Check",
    description: "Our certified mechanics perform a thorough inspection to identify all issues."
  },
  {
    number: "03",
    title: "Get Quote",
    description: "Receive a detailed quote with transparent pricing and timeline estimate."
  },
  {
    number: "04",
    title: "Service & Repair",
    description: "Our team performs the work using genuine parts and professional equipment."
  },
  {
    number: "05",
    title: "Quality Check",
    description: "Final inspection ensures everything meets our high standards before delivery."
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Our Process
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and professional. Here&apos;s how we handle your vehicle.
          </SplitReveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
          
          {steps.map((step, index) => (
            <div key={step.number} className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-1 md:pr-8 md:pl-8">
                <div className="bg-surface p-8 rounded-lg">
                  <div className="text-5xl font-oswald font-bold text-primary/20 mb-2">{step.number}</div>
                  <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-2xl font-oswald font-semibold text-foreground mb-3">
                    {step.title}
                  </SplitReveal>
                  <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-muted-foreground">
                    {step.description}
                  </SplitReveal>
                </div>
              </div>
              
              <div className="hidden md:block w-12 h-12 bg-primary rounded-full z-10 flex items-center justify-center">
                <span className="text-background font-oswald font-bold">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <MagneticButton>
            <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary text-background font-oswald font-semibold rounded-lg hover:bg-accent transition-colors">
              Start Your Service Today
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}