'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Shield, BadgeCheck, Clock } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Our Guarantee
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand behind our work with these commitments to you.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-surface p-8 rounded-lg">
            <Shield size={48} className="text-primary mx-auto mb-4" />
            <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-xl font-oswald font-semibold text-foreground mb-2">
              Quality Warranty
            </SplitReveal>
            <p className="text-muted-foreground">All repairs backed by our satisfaction guarantee</p>
          </div>

          <div className="text-center bg-surface p-8 rounded-lg">
            <BadgeCheck size={48} className="text-primary mx-auto mb-4" />
            <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-xl font-oswald font-semibold text-foreground mb-2">
              Genuine Parts
            </SplitReveal>
            <p className="text-muted-foreground">Only OEM or equivalent quality parts used</p>
          </div>

          <div className="text-center bg-surface p-8 rounded-lg">
            <Clock size={48} className="text-primary mx-auto mb-4" />
            <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-xl font-oswald font-semibold text-foreground mb-2">
              Timely Service
            </SplitReveal>
            <p className="text-muted-foreground">Work completed on schedule or your money back</p>
          </div>
        </div>
      </div>
    </section>
  )
}