import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/CategoryCard';
import HowItWorks from '@/components/HowItWorks';
import { categories } from '@/data/stickers';
import { ArrowRight, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-accent/30 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-purple/20 blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Floating stickers */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[15%] left-[10%] text-5xl animate-float opacity-60">😂</span>
          <span className="absolute top-[25%] right-[15%] text-4xl animate-float opacity-60" style={{ animationDelay: '1.5s' }}>💕</span>
          <span className="absolute bottom-[30%] left-[8%] text-4xl animate-float opacity-60" style={{ animationDelay: '0.8s' }}>🔥</span>
          <span className="absolute bottom-[20%] right-[10%] text-5xl animate-float opacity-60" style={{ animationDelay: '2s' }}>✨</span>
          <span className="absolute top-[40%] left-[5%] text-3xl animate-float opacity-50" style={{ animationDelay: '1.2s' }}>🎭</span>
          <span className="absolute top-[60%] right-[5%] text-3xl animate-float opacity-50" style={{ animationDelay: '0.3s' }}>💯</span>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">Express yourself like never before!</span>
            </div>

            <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Turn Your Chats into{' '}
              <span className="gradient-text">a Mood</span>{' '}
              <span className="inline-block animate-wiggle">🎭</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover expressive sticker packs for WhatsApp, Telegram & more.{' '}
              <span className="text-primary font-semibold">Just ₹1 per pack!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse">
                <Button variant="hero" size="xl" className="group">
                  Browse Stickers
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/why-stickers">
                <Button variant="outline" size="xl">
                  Why Stickers? 🤔
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
              Featured Categories <span className="inline-block animate-wiggle">🌈</span>
            </h2>
            <p className="text-muted-foreground text-lg">Pick your vibe, express your mood!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/browse">
              <Button variant="playful" size="lg">
                View All Stickers <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl">💬</div>
          <div className="absolute top-20 right-20 text-5xl">🎉</div>
          <div className="absolute bottom-10 left-1/4 text-4xl">💖</div>
          <div className="absolute bottom-20 right-1/4 text-5xl">🔥</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Level Up Your Chats? 🚀
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Join thousands expressing themselves with Sticker.mood!
          </p>
          <Link to="/browse">
            <Button variant="accent" size="xl">
              Get Started Now <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
