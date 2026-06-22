'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { ChevronRight } from 'lucide-react'

const brands = [
  "Toyota", "Honda", "Nissan", "Mazda", "Subaru", "Mitsubishi",
  "Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Ford", "Isuzu",
  "Suzuki", "Daihatsu", "Hyundai", "Kia"
]

export function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-3xl md:text-4xl font-oswald font-bold text-foreground mb-4">
            Brands We Service
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-md text-muted-foreground">
            All makes and models welcome
          </SplitReveal>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
              <ChevronRight size={16} className="text-primary" />
              <span className="text-foreground font-outfit">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}