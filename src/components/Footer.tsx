import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎭</span>
              <span className="font-poppins font-bold text-xl gradient-text">Sticker.mood</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Express yourself with vibrant sticker packs! Make every chat more fun, expressive, and totally you ✨
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/browse" className="text-muted-foreground hover:text-primary transition-colors">Browse Stickers</Link>
              <Link to="/why-stickers" className="text-muted-foreground hover:text-primary transition-colors">Why Stickers</Link>
              <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">Cart</Link>
            </div>
          </div>

          {/* More */}
          <div>
            <h4 className="font-poppins font-bold mb-4 text-foreground">More</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <span className="text-muted-foreground">Contact: hello@stickermood.in</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by PGDM Students
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Sticker.mood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
