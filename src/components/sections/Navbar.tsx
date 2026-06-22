'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-surface' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-oswald font-bold text-primary">
          Rodah Motors
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-surface">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}