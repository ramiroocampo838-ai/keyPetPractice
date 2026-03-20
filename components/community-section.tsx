import { Button } from "@/components/ui/button"
import { MessageCircle, FileText, Twitter, Youtube } from "lucide-react"

const patchNotes = [
  {
    version: "v1.2.0",
    date: "March 2026",
    changes: [
      "New pet: Mini Robot companion",
      "Added 15 new hats and accessories",
      "Sleep mode now triggers cute dream animations",
      "Performance improvements for low-end PCs",
    ],
  },
  {
    version: "v1.1.0",
    date: "February 2026",
    changes: [
      "Introduced pet evolution system",
      "New mini-event: Treasure Hunt",
      "Added mood indicators",
      "Bug fixes and stability improvements",
    ],
  },
]

export function CommunitySection() {
  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the <span className="text-glow-purple text-neon-purple">Community</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect with other KeyPet owners, share tips, and stay updated
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                size="lg" 
                className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90 text-white justify-start gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
                <span className="ml-auto text-sm opacity-80">15k+ members</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-border hover:border-neon-blue/50 justify-start gap-3"
              >
                <Twitter className="w-5 h-5 text-neon-blue" />
                Follow on X
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-border hover:border-destructive/50 justify-start gap-3"
              >
                <Youtube className="w-5 h-5 text-destructive" />
                YouTube Channel
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-border hover:border-neon-purple/50 justify-start gap-3"
              >
                <FileText className="w-5 h-5 text-neon-purple" />
                Read the Wiki
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">50K+</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple">15K+</div>
                <div className="text-xs text-muted-foreground">Discord</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-green">4.9</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Patch notes */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-neon-purple" />
              Latest Updates
            </h3>
            <div className="space-y-4">
              {patchNotes.map((patch) => (
                <div 
                  key={patch.version}
                  className="p-4 rounded-xl bg-card border border-border hover:border-neon-purple/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-neon-blue">{patch.version}</span>
                    <span className="text-sm text-muted-foreground">{patch.date}</span>
                  </div>
                  <ul className="space-y-1">
                    {patch.changes.map((change, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-neon-purple mt-1">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 text-neon-purple hover:text-neon-purple/80">
              View all patch notes →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
