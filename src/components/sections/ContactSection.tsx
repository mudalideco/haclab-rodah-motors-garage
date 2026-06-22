'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { Phone, Mail, Calendar, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Get In Touch
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to service your vehicle? Contact us today.
          </SplitReveal>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface p-6 rounded-lg flex items-center gap-4">
              <Phone size={32} className="text-primary" />
              <div>
                <p className="font-outfit font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">+256 755 452 599</p>
              </div>
            </div>
            
            <div className="bg-surface p-6 rounded-lg flex items-center gap-4">
              <Calendar size={32} className="text-primary" />
              <div>
                <p className="font-outfit font-semibold text-foreground">Book Online</p>
                <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">
                  calendly.com/rodhamotors
                </a>
              </div>
            </div>
            
            <div className="bg-surface p-6 rounded-lg flex items-center gap-4">
              <MapPin size={32} className="text-primary" />
              <div>
                <p className="font-outfit font-semibold text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">Kisaasi-Kyanja Road, Kampala</p>
              </div>
            </div>
            
            <div className="bg-surface p-6 rounded-lg flex items-center gap-4">
              <Mail size={32} className="text-primary" />
              <div>
                <p className="font-outfit font-semibold text-foreground">WhatsApp</p>
                <p className="text-muted-foreground text-sm">Available 8AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <MagneticButton>
              <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary text-background font-oswald font-semibold rounded-lg hover:bg-accent transition-colors">
                Book Your Appointment
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}