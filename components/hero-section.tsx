"use client"

import { Button } from "@/components/ui/button"
import { Download, Heart, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, oklch(0.7 0.2 260 / 0.3) 0%, transparent 50%)`,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(oklch(0.7 0.2 260 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.2 260 / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo/Title area */}
          <div className="flex items-center gap-2 text-neon-blue">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Desktop Companion Game</span>
            <Sparkles className="w-5 h-5" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-glow-purple bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              KeyPet
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Your adorable desktop companion that grows with every keystroke. 
            Earn points, unlock outfits, and watch your pet evolve while you work.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 my-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">50K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple">200+</div>
              <div className="text-sm text-muted-foreground">Customizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">4.9</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              size="lg" 
              className="bg-gaming-green hover:bg-gaming-green/90 text-background font-semibold px-8 py-6 text-lg glow-blue transition-all hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Add to Wishlist
            </Button>
          </div>

          {/* Platform tags */}
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gaming-green rounded-full" />
              Windows 10/11
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full" />
              macOS
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-purple rounded-full" />
              Linux
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
