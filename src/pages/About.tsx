import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, GraduationCap, Heart, Target, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero */}
      <section className="container mx-auto px-4 text-center mb-16">
        <div className="animate-slide-up">
          <span className="text-6xl block mb-6 animate-float">📖</span>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Sticker.mood</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Where digital expression meets creative innovation — a project born from passion and purpose.
          </p>
        </div>
      </section>

      {/* What is Sticker.mood */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-slide-up">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-poppins text-3xl font-bold mb-4">What is Sticker.mood?</h2>
              <p className="text-muted-foreground mb-4">
                Sticker.mood is a digital sticker e-commerce platform designed to help users express themselves 
                more vibrantly in chat applications like WhatsApp, Telegram, and more.
              </p>
              <p className="text-muted-foreground">
                We believe that communication goes beyond words — it's about emotions, personality, and connection. 
                Our sticker packs are carefully curated to capture every mood, from everyday reactions to special moments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {['😂', '💕', '🔥', '✨'].map((emoji, i) => (
                <div key={i} className="aspect-square bg-muted rounded-3xl flex items-center justify-center text-6xl animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why we created this */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-10">
          <h2 className="font-poppins text-3xl font-bold mb-4">
            Why We Created This <span className="inline-block animate-wiggle">💡</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Lightbulb,
              title: 'Innovation',
              description: 'To explore how digital products can enhance everyday communication and make conversations more meaningful.',
              color: 'from-yellow to-orange',
            },
            {
              icon: Users,
              title: 'Connection',
              description: 'To help people connect better by giving them fun, expressive tools that transcend language barriers.',
              color: 'from-cyan to-secondary',
            },
            {
              icon: Rocket,
              title: 'Learning',
              description: 'To apply our knowledge of digital innovation, UX design, and e-commerce in a real-world project.',
              color: 'from-primary to-purple',
            },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-3xl p-8 shadow-card border border-border text-center animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5`}>
                <item.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic context */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-br from-primary/10 via-purple/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="font-poppins text-3xl font-bold mb-6">Academic Background</h2>
            <p className="text-muted-foreground text-lg mb-6">
              This project was developed as part of a <strong className="text-foreground">Digital Innovation course</strong> by 
              PGDM students. It represents our exploration of how technology can transform simple ideas into 
              engaging digital experiences.
            </p>
            <div className="bg-card rounded-2xl p-6 inline-block shadow-card">
              <p className="text-sm text-muted-foreground mb-2">Built with 💜 by</p>
              <p className="font-poppins font-bold text-lg">PGDM Students</p>
              <p className="text-sm text-muted-foreground">Digital Innovation Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="font-poppins text-3xl font-bold mb-4">Our Vision</h2>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-lg">
                We envision a world where digital communication is rich, expressive, and emotionally authentic. 
                Sticker.mood is our step towards making every conversation more colorful and meaningful.
              </p>
              <p className="text-muted-foreground text-lg">
                By combining creativity with digital innovation, we aim to demonstrate how simple ideas can 
                be transformed into impactful products that people love to use.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <div className="bg-muted rounded-full px-5 py-2 text-sm font-semibold">🎨 Creative Design</div>
              <div className="bg-muted rounded-full px-5 py-2 text-sm font-semibold">💡 Digital Innovation</div>
              <div className="bg-muted rounded-full px-5 py-2 text-sm font-semibold">🤝 User Connection</div>
              <div className="bg-muted rounded-full px-5 py-2 text-sm font-semibold">🚀 Modern Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <span className="absolute top-8 left-12 text-4xl">🎭</span>
            <span className="absolute bottom-12 right-16 text-4xl">💫</span>
          </div>
          
          <div className="relative z-10">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Experience Sticker.mood Today! ✨
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Browse our collection and find the perfect stickers for your chats.
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

export default About;
