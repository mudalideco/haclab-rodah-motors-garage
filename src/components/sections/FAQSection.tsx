'use client'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "What types of cars do you service?",
    answer: "We service all makes and models including Toyota, Honda, Nissan, Mazda, Mercedes-Benz, BMW, and more. Both local and imported vehicles."
  },
  {
    id: 2,
    question: "How do I book an appointment?",
    answer: "You can book directly through our Calendly link or call us at +256 755 452 599. We'll find a time that works for you."
  },
  {
    id: 3,
    question: "Do you offer pickup and delivery?",
    answer: "Yes, for customers in Kyanja and surrounding areas. Contact us to arrange pickup for your service."
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We accept cash, mobile money (MTN, Airtel), and bank transfers. Payment plans available for major repairs."
  },
  {
    id: 5,
    question: "How long does a typical service take?",
    answer: "Routine services like oil changes take 30-45 minutes. Major repairs may take 1-2 days depending on parts availability."
  }
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SplitReveal as="h2" stagger={0.04} duration={0.7} className="text-4xl md:text-5xl font-oswald font-bold text-foreground mb-4">
            Frequently Asked Questions
          </SplitReveal>
          <SplitReveal as="p" stagger={0.02} duration={0.5} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about our services and process.
          </SplitReveal>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-surface rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="font-outfit font-medium text-foreground">{faq.question}</span>
                <ChevronDown size={20} className={`text-primary transition-transform ${openId === faq.id ? 'rotate-180' : ''}`} />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}