"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const mascots = [
  {
    id: "corgi",
    name: "Pixel Corgi",
    emoji: "🐕",
    description: "An adorable tiny corgi with a fluffy butt that wiggles when you type fast!",
    rarity: "Common",
    color: "bg-gaming-green",
  },
  {
    id: "cat",
    name: "Floating Cat",
    emoji: "🐱",
    description: "A mystical floating feline that naps on your taskbar and chases your cursor.",
    rarity: "Common",
    color: "bg-neon-blue",
  },
  {
    id: "dragon",
    name: "Baby Dragon",
    emoji: "🐲",
    description: "A tiny dragon that breathes sparkles and grows bigger as you level up.",
    rarity: "Rare",
    color: "bg-neon-purple",
  },
  {
    id: "slime",
    name: "Alien Slime",
    emoji: "👾",
    description: "A bouncy alien blob from another dimension. Jiggles with every click!",
    rarity: "Epic",
    color: "bg-neon-pink",
  },
  {
    id: "robot",
    name: "Mini Robot",
    emoji: "🤖",
    description: "A helpful robot companion that beeps, boops, and computes your productivity.",
    rarity: "Legendary",
    color: "bg-neon-blue",
  },
]

const rarityColors: Record<string, string> = {
  "Common": "bg-muted text-foreground",
  "Rare": "bg-neon-purple/20 text-neon-purple border-neon-purple/50",
  "Epic": "bg-neon-pink/20 text-neon-pink border-neon-pink/50",
  "Legendary": "bg-gaming-green/20 text-gaming-green border-gaming-green/50",
}

export function MascotGallery() {
  const [selectedMascot, setSelectedMascot] = useState(mascots[0])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-glow-blue text-neon-blue">Companion</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pick from a variety of adorable pets, each with unique personalities and animations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Selected mascot display */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-neon-purple/20 via-card to-neon-blue/20 border border-border p-8 flex flex-col items-center justify-center">
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl ${selectedMascot.color} opacity-10 blur-2xl`} />
              
              {/* Mascot emoji */}
              <div className="relative text-[120px] animate-bounce" style={{ animationDuration: '2s' }}>
                {selectedMascot.emoji}
              </div>
              
              {/* Mascot info */}
              <div className="relative mt-6 text-center">
                <Badge className={rarityColors[selectedMascot.rarity]}>
                  {selectedMascot.rarity}
                </Badge>
                <h3 className="text-2xl font-bold mt-3">{selectedMascot.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{selectedMascot.description}</p>
              </div>
            </div>
          </div>

          {/* Mascot selection grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {mascots.map((mascot) => (
                <button
                  key={mascot.id}
                  onClick={() => setSelectedMascot(mascot)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-center ${
                    selectedMascot.id === mascot.id 
                      ? 'border-neon-purple bg-neon-purple/10 glow-purple' 
                      : 'border-border bg-card hover:border-neon-blue/50'
                  }`}
                >
                  <div className="text-5xl mb-2">{mascot.emoji}</div>
                  <div className="text-sm font-medium">{mascot.name}</div>
                  <Badge variant="outline" className={`mt-2 text-xs ${rarityColors[mascot.rarity]}`}>
                    {mascot.rarity}
                  </Badge>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-card border border-border">
              <h4 className="font-semibold mb-2">Unlock More Pets</h4>
              <p className="text-sm text-muted-foreground">
                Level up and complete achievements to unlock rare companions. 
                Each pet has unique evolution paths and special abilities!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
