"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, ShoppingCart } from "lucide-react"

const shopItems = [
  {
    id: 1,
    name: "Wizard Hat",
    category: "Hats",
    emoji: "🎩",
    price: 500,
    rarity: "Rare",
  },
  {
    id: 2,
    name: "Cozy Sweater",
    category: "Outfits",
    emoji: "🧥",
    price: 300,
    rarity: "Common",
  },
  {
    id: 3,
    name: "Golden Bone",
    category: "Food",
    emoji: "🦴",
    price: 150,
    rarity: "Common",
  },
  {
    id: 4,
    name: "Squeaky Ball",
    category: "Toys",
    emoji: "🎾",
    price: 100,
    rarity: "Common",
  },
  {
    id: 5,
    name: "Dragon Wings",
    category: "Accessories",
    emoji: "🪽",
    price: 1500,
    rarity: "Legendary",
  },
  {
    id: 6,
    name: "Crown",
    category: "Hats",
    emoji: "👑",
    price: 2000,
    rarity: "Legendary",
  },
  {
    id: 7,
    name: "Rainbow Scarf",
    category: "Accessories",
    emoji: "🧣",
    price: 400,
    rarity: "Epic",
  },
  {
    id: 8,
    name: "Magic Potion",
    category: "Food",
    emoji: "🧪",
    price: 800,
    rarity: "Epic",
  },
]

const rarityColors: Record<string, string> = {
  "Common": "bg-muted/50 text-muted-foreground",
  "Rare": "bg-neon-purple/20 text-neon-purple",
  "Epic": "bg-neon-pink/20 text-neon-pink",
  "Legendary": "bg-gaming-green/20 text-gaming-green",
}

const rarityBorders: Record<string, string> = {
  "Common": "border-border",
  "Rare": "border-neon-purple/30",
  "Epic": "border-neon-pink/30",
  "Legendary": "border-gaming-green/30",
}

export function ShopPreview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow-blue text-neon-blue">Shop</span> Preview
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Spend your hard-earned points on awesome gear for your companion
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Hats", "Outfits", "Food", "Toys", "Accessories"].map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-neon-purple hover:bg-neon-purple/90 text-foreground" : "border-border hover:border-neon-purple/50"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Shop grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {shopItems.map((item) => (
            <div 
              key={item.id}
              className={`group p-4 rounded-xl bg-card border ${rarityBorders[item.rarity]} hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Item display */}
              <div className="aspect-square rounded-lg bg-secondary/50 flex items-center justify-center mb-3 group-hover:bg-neon-purple/10 transition-colors">
                <span className="text-4xl">{item.emoji}</span>
              </div>
              
              {/* Item info */}
              <Badge className={`${rarityColors[item.rarity]} text-xs mb-2`}>
                {item.rarity}
              </Badge>
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              
              {/* Price */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 text-neon-blue">
                  <Coins className="w-4 h-4" />
                  <span className="font-bold text-sm">{item.price}</span>
                </div>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-neon-purple/20">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Over 200+ items available in the full shop!</p>
          <Button className="bg-neon-purple hover:bg-neon-purple/90 text-foreground">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Browse Full Shop
          </Button>
        </div>
      </div>
    </section>
  )
}
