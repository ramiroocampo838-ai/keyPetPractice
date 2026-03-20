"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    id: 1,
    title: "Desktop Widget View",
    description: "KeyPet sits comfortably on your desktop, always ready to interact.",
    emoji: "🖥️",
    accent: "from-neon-blue/30 to-neon-purple/30",
  },
  {
    id: 2,
    title: "Typing Interaction",
    description: "Watch your pet react in real-time as you type away!",
    emoji: "⌨️",
    accent: "from-neon-purple/30 to-neon-pink/30",
  },
  {
    id: 3,
    title: "Shop Interface",
    description: "Browse hundreds of items to customize your companion.",
    emoji: "🛒",
    accent: "from-gaming-green/30 to-neon-blue/30",
  },
  {
    id: 4,
    title: "Evolution Stage",
    description: "Your pet evolves and grows more powerful over time.",
    emoji: "✨",
    accent: "from-neon-pink/30 to-neon-purple/30",
  },
  {
    id: 5,
    title: "Mini Events",
    description: "Random events pop up for bonus rewards and fun interactions.",
    emoji: "🎉",
    accent: "from-neon-blue/30 to-gaming-green/30",
  },
]

export function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow-purple text-neon-purple">Screenshots</span>
          </h2>
          <p className="text-muted-foreground">Preview KeyPet running on your desktop</p>
        </div>

        <div className="relative">
          {/* Main screenshot display */}
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-border">
            <div className={`absolute inset-0 bg-gradient-to-br ${screenshots[currentIndex].accent}`} />
            
            {/* Mock desktop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-8 flex flex-col">
                {/* Mock window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-chart-4" />
                  <div className="w-3 h-3 rounded-full bg-gaming-green" />
                </div>
                
                {/* Content area */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{screenshots[currentIndex].emoji}</div>
                    <h3 className="text-xl font-bold">{screenshots[currentIndex].title}</h3>
                    <p className="text-muted-foreground mt-2">{screenshots[currentIndex].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-neon-purple/50 hover:bg-neon-purple/20"
            onClick={prev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-neon-purple/50 hover:bg-neon-purple/20"
            onClick={next}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Thumbnail indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-neon-purple' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
