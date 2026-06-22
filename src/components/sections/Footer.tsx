'use client'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-oswald font-bold text-primary mb-4">Rodah Motors Garage Ltd</h3>
            <p className="text-muted-foreground mb-4">Professional Auto Repair & Servicing in Kyanja, Kampala</p>
            <p className="text-sm text-muted-foreground">Open Daily: 8:00 AM - 6:00 PM</p>
          </div>
          
          <div>
            <h4 className="font-outfit font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#process" className="text-muted-foreground hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-outfit font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">+256 755 452 599</li>
              <li className="text-muted-foreground">Kisaasi-Kyanja Road, Kampala</li>
              <li><a href="https://calendly.com/rodhamotors/30min" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Book via Calendly</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rodah Motors Garage Ltd. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Powered by{' '}
            <a
              href="https://haclab.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-medium"
            >
              Haclab Co Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}