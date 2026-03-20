"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pets", href: "#pets" },
  { label: "Shop", href: "#shop" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-neon-purple group-hover:text-neon-blue transition-colors" />
            <span className="text-xl font-bold">KeyPet</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-gaming-green hover:bg-gaming-green/90 text-background font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm" 
              className="w-full bg-gaming-green hover:bg-gaming-green/90 text-background font-semibold mt-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
