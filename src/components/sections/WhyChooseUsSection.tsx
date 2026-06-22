'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Shield, Clock, Wrench, Users, Award, CheckCircle } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All repairs come with warranty for your peace of mind"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Same-day service for most routine maintenance"
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "State-of-the-art diagnostic and repair tools"
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Certified mechanics with years of experience"
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "No hidden costs - detailed quote before work begins"
  },
  {
    icon: CheckCircle,
    title: "Convenient Booking",
    description: "Easy online scheduling via Calendly"
  }
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Why Choose Us
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional service you can trust, right here in Kyanja.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-xl font-oswald font-semibold text-foreground mb-2">
                  {reason.title}
                </SplitReveal>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}