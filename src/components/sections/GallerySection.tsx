'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    title: "Engine Overhaul",
    alt: "Before and after engine repair"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    title: "Full Service",
    alt: "Before and after car service"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600&auto=format&fit=crop",
    title: "Brake Replacement",
    alt: "Before and after brake repair"
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
    title: "AC Repair",
    alt: "Before and after AC system repair"
  }
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Before & After Gallery
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation. Our quality work speaks for itself.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-surface rounded-lg overflow-hidden">
              <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-xl font-oswald font-semibold text-primary p-4">
                {item.title}
              </SplitReveal>
              <div className="grid grid-cols-2 gap-2 px-4 pb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Before</p>
                  <Image src={item.before} alt={`${item.title} before`} width={300} height={200} className="rounded object-cover" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">After</p>
                  <Image src={item.after} alt={`${item.title} after`} width={300} height={200} className="rounded object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}