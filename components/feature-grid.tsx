import { 
  Keyboard, 
  Mouse, 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  Heart,
  Moon,
  Zap
} from "lucide-react"

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Detection",
    description: "Every keystroke earns XP. Type documents, code, or chat — your pet rewards it all.",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
  },
  {
    icon: Mouse,
    title: "Mouse Tracking",
    description: "Clicks and movements count too. Your pet follows your cursor and reacts playfully.",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
  },
  {
    icon: Sparkles,
    title: "XP & Points System",
    description: "Level up your companion and unlock new abilities, animations, and rare items.",
    color: "text-neon-pink",
    bgColor: "bg-neon-pink/10",
  },
  {
    icon: ShoppingBag,
    title: "In-Game Shop",
    description: "Spend points on outfits, hats, food, toys, and special accessories for your pet.",
    color: "text-gaming-green",
    bgColor: "bg-gaming-green/10",
  },
  {
    icon: TrendingUp,
    title: "Pet Evolution",
    description: "Watch your companion grow and evolve through stages. Each evolution unlocks new forms.",
    color: "text-neon-blue",
    bgColor: "bg-neon-blue/10",
  },
  {
    icon: Heart,
    title: "Mood System",
    description: "Your pet has emotions! Feed it, play with it, and keep it happy for bonus rewards.",
    color: "text-neon-pink",
    bgColor: "bg-neon-pink/10",
  },
  {
    icon: Moon,
    title: "Sleep Mode",
    description: "When you rest, so does your pet. Idle animations and dream sequences await.",
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
  },
  {
    icon: Zap,
    title: "Lightweight Widget",
    description: "Non-intrusive and super light. Works silently in the background with minimal resources.",
    color: "text-gaming-green",
    bgColor: "bg-gaming-green/10",
  },
]

export function FeatureGrid() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-glow-purple text-neon-purple">Game</span> Features
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to raise your perfect desktop companion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
