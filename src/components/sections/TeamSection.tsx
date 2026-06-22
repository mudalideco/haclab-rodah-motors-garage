'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import Image from 'next/image'

const team = [
  {
    id: 1,
    name: "Rodah Motors Team",
    role: "Master Mechanics",
    description: "Our certified mechanics have over 10 years combined experience in automotive repair.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
    alt: "Professional mechanics team in workshop"
  },
  {
    id: 2,
    name: "Workshop Tour",
    role: "Modern Equipment",
    description: "Fully equipped with latest diagnostic tools and genuine parts for all repairs.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=400&auto=format&fit=crop",
    alt: "Professional garage workshop with modern tools"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Meet Our Team
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals with the tools and knowledge to fix your car right.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.id} className="bg-surface rounded-lg overflow-hidden">
              <Image src={member.image} alt={member.alt} width={400} height={300} className="w-full object-cover" />
              <div className="p-6">
                <SplitReveal as="h3" stagger={0.03} duration={0.6} className="text-2xl font-oswald font-semibold text-primary mb-2">
                  {member.name}
                </SplitReveal>
                <p className="text-muted-foreground font-outfit mb-3">{member.role}</p>
                <p className="text-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}