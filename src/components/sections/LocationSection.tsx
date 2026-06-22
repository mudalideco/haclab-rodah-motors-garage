'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MapPin, Clock, Phone, Calendar } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Find Us
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conveniently located on Kisaasi-Kyanja Road, Kampala.
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-surface p-8 rounded-lg">
            <h3 className="text-2xl font-oswald font-semibold text-primary mb-6">Workshop Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-outfit font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">Kisaasi-Kyanja Road, Kyanja, Kampala, Uganda</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-outfit font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground">Open Daily: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-outfit font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+256 755 452 599</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-outfit font-medium text-foreground">Booking</p>
                  <a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Book via Calendly
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.748!2d32.568!3d0.345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKyanja%2C%20Kampala!5e0!3m2!1sen!2sug!4v1718888888888"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rodah Motors Garage Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  )
}