"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does KeyPet earn points?",
    answer: "KeyPet tracks your keyboard and mouse activity while you work. Every keystroke, click, and cursor movement earns XP and points. The more you use your computer, the faster your pet grows! All tracking is done locally — your data never leaves your device.",
  },
  {
    question: "Does KeyPet affect my computer's performance?",
    answer: "Not at all! KeyPet is designed to be ultra-lightweight, using less than 50MB of RAM and minimal CPU. It runs silently in the background and won't slow down your games, work apps, or browsing.",
  },
  {
    question: "Can I customize my pet?",
    answer: "Absolutely! There are over 200 customization items including hats, outfits, accessories, and special effects. Earn points through normal computer use and spend them in the in-game shop to make your pet unique.",
  },
  {
    question: "How does pet evolution work?",
    answer: "Your pet evolves through 5 stages based on your total XP. Each evolution unlocks new animations, abilities, and cosmetic options. It typically takes about 2-3 weeks of normal use to fully evolve your first pet.",
  },
  {
    question: "What are the system requirements?",
    answer: "KeyPet runs on Windows 10/11, macOS 12+, and most Linux distributions. Minimum requirements: 2GB RAM, 100MB disk space, and any modern CPU. Internet connection required only for initial download and optional cloud sync.",
  },
  {
    question: "Is my data private?",
    answer: "Yes! KeyPet processes all keyboard and mouse data locally on your device. We never collect, transmit, or store what you type. The only data sent to our servers is your optional account info for cloud saves and leaderboards.",
  },
  {
    question: "Can I have multiple pets?",
    answer: "Yes! Once you reach level 20, you can unlock additional pet slots. Each pet earns points independently, and you can switch between them anytime. Premium users get up to 5 pet slots.",
  },
  {
    question: "Is KeyPet free to play?",
    answer: "KeyPet is free-to-play with optional premium features. The base game includes full pet raising, evolution, and a selection of free items. Premium unlocks additional pets, exclusive cosmetics, and bonus XP multipliers.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-glow-blue text-neon-blue">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about KeyPet
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-neon-purple/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-neon-purple py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 p-6 rounded-xl bg-card border border-border">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <p className="font-semibold">
            Join our{" "}
            <a href="#" className="text-neon-purple hover:underline">Discord community</a>
            {" "}or{" "}
            <a href="#" className="text-neon-blue hover:underline">contact support</a>
          </p>
        </div>
      </div>
    </section>
  )
}
