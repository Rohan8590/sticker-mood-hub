import { Search, ShoppingCart, Download } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Sticker Packs',
    description: 'Explore fun categories and find your vibe',
    emoji: '🔍',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Pick your faves for just ₹1 each',
    emoji: '🛒',
  },
  {
    icon: Download,
    title: 'Pay & Download',
    description: 'Quick UPI payment, instant download!',
    emoji: '📥',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
            How It Works <span className="inline-block animate-wiggle">✨</span>
          </h2>
          <p className="text-muted-foreground text-lg">Super simple, super fast!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}

              <div className="bg-card rounded-3xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>

                {/* Emoji */}
                <span className="text-5xl block mb-4 group-hover:animate-float">{step.emoji}</span>

                {/* Content */}
                <h3 className="font-poppins font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
