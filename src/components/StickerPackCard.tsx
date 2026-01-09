import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, StickerPack } from '@/context/CartContext';
import { toast } from 'sonner';

interface StickerPackCardProps {
  pack: StickerPack;
}

const StickerPackCard = ({ pack }: StickerPackCardProps) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(pack.id);

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(pack);
      toast.success(`${pack.name} added to cart! 🎉`);
    }
  };

  return (
    <div className="group bg-card rounded-3xl p-5 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border">
      {/* Thumbnails grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {pack.thumbnails.map((thumb, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl bg-muted flex items-center justify-center text-3xl group-hover:animate-bounce-slow"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {thumb}
          </div>
        ))}
      </div>

      {/* Info */}
      <h3 className="font-poppins font-bold text-lg mb-1 text-foreground">{pack.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{pack.description}</p>

      {/* Price & Button */}
      <div className="flex items-center justify-between">
        <span className="font-poppins font-bold text-xl gradient-text">₹{pack.price}</span>
        <Button
          variant={inCart ? "outline" : "hero"}
          size="sm"
          onClick={handleAddToCart}
          disabled={inCart}
          className={inCart ? "border-lime text-lime" : ""}
        >
          {inCart ? (
            <>
              <Check className="h-4 w-4" /> Added
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" /> Add
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default StickerPackCard;
