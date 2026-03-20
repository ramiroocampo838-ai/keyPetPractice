"use client"

import { Play, Volume2 } from "lucide-react"
import { useState } from "react"

export function TrailerSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow-blue text-neon-blue">Watch</span> the Trailer
          </h2>
          <p className="text-muted-foreground">See KeyPet in action on your desktop</p>
        </div>

        <div 
          className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Placeholder video background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-background to-neon-blue/20" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(oklch(0.7 0.2 260 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.2 260 / 0.5) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Animated pet preview */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-8xl transition-transform duration-500 ${isHovered ? 'scale-110 animate-bounce' : ''}`}>
              🐕
            </div>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 group-hover:bg-background/20 transition-colors">
            <div className={`w-20 h-20 rounded-full bg-neon-purple flex items-center justify-center glow-purple transition-all ${isHovered ? 'scale-110' : ''}`}>
              <Play className="w-8 h-8 text-foreground fill-foreground ml-1" />
            </div>
          </div>

          {/* Video controls hint */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 text-muted-foreground text-sm">
            <Volume2 className="w-4 h-4" />
            <span>Click to play</span>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 left-4 px-2 py-1 bg-background/80 rounded text-sm font-medium">
            2:34
          </div>
        </div>
      </div>
    </section>
  )
}
