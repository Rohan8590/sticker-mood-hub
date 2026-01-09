import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Zap, Smile, Clock, Sparkles, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Smile,
    title: 'Express Emotions Better',
    description: 'Sometimes words just aren\'t enough! Stickers capture exactly how you feel with visual flair ✨',
    emoji: '🥺',
    color: 'from-pink to-pink-glow',
  },
  {
    icon: Zap,
    title: 'Instant Mood Boost',
    description: 'Send a sticker, get a smile! They make conversations more fun and engaging 💫',
    emoji: '⚡',
    color: 'from-yellow to-orange',
  },
  {
    icon: Clock,
    title: 'Save Time & Energy',
    description: 'Why type when you can sticker? Express complex emotions in a single tap 🚀',
    emoji: '⏰',
    color: 'from-cyan to-secondary',
  },
  {
    icon: Heart,
    title: 'Build Stronger Connections',
    description: 'Stickers add personality to your chats and make your messages memorable 💕',
    emoji: '💝',
    color: 'from-primary to-purple',
  },
  {
    icon: Sparkles,
    title: 'Stand Out From The Crowd',
    description: 'Be unique! Express yourself with stickers that match your vibe and personality 🌟',
    emoji: '✨',
    color: 'from-purple to-cyan-light',
  },
  {
    icon: MessageCircle,
    title: 'Break The Ice',
    description: 'Starting a convo? Stickers are the perfect ice-breakers! They\'re fun and non-threatening 🎭',
    emoji: '💬',
    color: 'from-lime to-cyan',
  },
];

const WhyStickers = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero */}
      <section className="container mx-auto px-4 text-center mb-16">
        <div className="animate-slide-up">
          <span className="text-6xl block mb-6 animate-float">💭</span>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Why Stickers Matter <span className="gradient-text">in 2024</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In the era of digital communication, stickers have become the universal language of emotions. 
            Here's why they're essential for your chats! 🎯
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '10B+', label: 'Stickers sent daily', emoji: '📤' },
            { value: '78%', label: 'Gen-Z use stickers', emoji: '🎯' },
            { value: '3x', label: 'More engagement', emoji: '📈' },
            { value: '65%', label: 'Feel more connected', emoji: '🤝' },
          ].map((stat, i) => (
            <div key={i} className="bg-card rounded-3xl p-6 text-center shadow-card animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="text-3xl block mb-2">{stat.emoji}</span>
              <div className="font-poppins text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <reason.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Emoji */}
              <span className="text-4xl block mb-4 group-hover:animate-wiggle">{reason.emoji}</span>

              {/* Content */}
              <h3 className="font-poppins font-bold text-xl mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-muted rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-4 left-8 text-6xl opacity-20">"</div>
          <div className="absolute bottom-4 right-8 text-6xl opacity-20">"</div>
          
          <blockquote className="font-poppins text-2xl md:text-3xl font-bold mb-4 relative z-10">
            Stickers are the <span className="gradient-text">emojis on steroids</span> — 
            they capture nuanced emotions that words simply can't express.
          </blockquote>
          <p className="text-muted-foreground">— Every Gen-Z ever 💅</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-primary via-purple to-secondary rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <span className="absolute top-6 left-10 text-4xl">🎭</span>
            <span className="absolute top-10 right-16 text-3xl">💕</span>
            <span className="absolute bottom-8 left-1/4 text-4xl">🔥</span>
            <span className="absolute bottom-10 right-1/4 text-3xl">✨</span>
          </div>

          <div className="relative z-10">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Express Yourself? 🚀
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Browse our collection of vibrant sticker packs and find the perfect ones for you!
            </p>
            <Link to="/browse">
              <Button variant="accent" size="xl" className="group">
                Browse Stickers
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyStickers;
