import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, CheckCircle, Download, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/context/CartContext';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePaymentConfirm = () => {
    // Save items before marking as paid
    setPurchasedItems([...items]);
    setIsPaid(true);
    toast.success("Thank you for your purchase! 🎉");
    clearCart();
  };

  const handleDownloadAll = () => {
    purchasedItems.forEach((item, index) => {
      setTimeout(() => {
        downloadStickerPack(item);
      }, index * 500);
    });
  };

  const downloadStickerPack = (item: CartItem) => {
    // Create a text file with sticker pack info (simulating download)
    const content = `
Sticker Pack: ${item.name}
Category: ${item.categoryId}
Description: ${item.description}

Thank you for purchasing from Sticker.mood! 💜

Stickers included: ${item.thumbnails.join(' ')}

To use these stickers:
1. Open WhatsApp/Telegram
2. Go to sticker settings
3. Import this sticker pack

Enjoy adding mood to your chats! ✨
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.name.replace(/\s+/g, '_')}_sticker_pack.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(`Downloaded: ${item.name} 🎉`);
  };

  // Empty cart
  if (items.length === 0 && !isPaid) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto animate-slide-up">
            <span className="text-8xl block mb-6">🛒</span>
            <h1 className="font-poppins text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any stickers yet. Let's fix that!
            </p>
            <Link to="/browse">
              <Button variant="hero" size="lg">
                Browse Stickers <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Thank you page
  if (isPaid) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto animate-slide-up">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-pop">
              <CheckCircle className="h-12 w-12 text-primary-foreground" />
            </div>
            <h1 className="font-poppins text-4xl font-bold mb-4">Thank You! 💜</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for adding more mood to your chats! Click below to download your stickers ✨
            </p>

            {/* Purchased items */}
            <div className="bg-card rounded-3xl p-6 mb-8 shadow-card border border-border">
              <h3 className="font-poppins font-bold mb-4">Your Stickers:</h3>
              <div className="space-y-3">
                {purchasedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-2xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.thumbnails[0]}</span>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => downloadStickerPack(item)}
                      className="text-lime hover:text-lime hover:bg-lime/10"
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Download All Button */}
            <Button
              variant="playful"
              size="lg"
              className="w-full mb-6"
              onClick={handleDownloadAll}
            >
              <Download className="h-5 w-5" /> Download All Stickers
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse">
                <Button variant="hero" size="lg">
                  Browse More Stickers <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  <Home className="h-4 w-4" /> Go to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment screen
  if (showPayment) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto animate-slide-up">
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => setShowPayment(false)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Cart
            </Button>

            <div className="bg-card rounded-3xl p-8 shadow-card border border-border text-center">
              <h1 className="font-poppins text-2xl font-bold mb-2">Pay via UPI</h1>
              <p className="text-muted-foreground mb-6">Scan the QR code to pay ₹{totalPrice}</p>

              {/* QR Code placeholder */}
              <div className="bg-card rounded-2xl p-6 mb-6 inline-block border-4 border-dashed border-border">
                <div className="w-48 h-48 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Simulated QR pattern */}
                  <div className="absolute inset-4 grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          Math.random() > 0.5 ? 'bg-foreground' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-card p-2 rounded-lg">
                      <span className="text-2xl">💳</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-2xl p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Amount to Pay</p>
                <p className="font-poppins text-3xl font-bold gradient-text">₹{totalPrice}</p>
              </div>

              <div className="flex gap-3 mb-4">
                <div className="flex-1 bg-muted rounded-xl py-3 px-4">
                  <span className="text-2xl">📱</span>
                  <p className="text-xs text-muted-foreground mt-1">GPay</p>
                </div>
                <div className="flex-1 bg-muted rounded-xl py-3 px-4">
                  <span className="text-2xl">💜</span>
                  <p className="text-xs text-muted-foreground mt-1">PhonePe</p>
                </div>
                <div className="flex-1 bg-muted rounded-xl py-3 px-4">
                  <span className="text-2xl">💙</span>
                  <p className="text-xs text-muted-foreground mt-1">Paytm</p>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handlePaymentConfirm}
              >
                <CheckCircle className="h-5 w-5" /> I've Paid
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                Click "I've Paid" after completing your payment to start download
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
          Your Cart <span className="inline-block animate-wiggle">🛒</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="bg-card rounded-3xl p-5 shadow-card border border-border flex items-center gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnails */}
                <div className="flex gap-1">
                  {item.thumbnails.slice(0, 2).map((thumb, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-2xl"
                    >
                      {thumb}
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-poppins font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                {/* Price */}
                <div className="font-poppins font-bold text-xl gradient-text">₹{item.price}</div>

                {/* Remove */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemove(item.id, item.name)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-6 shadow-card border border-border sticky top-24 animate-slide-up">
              <h2 className="font-poppins font-bold text-xl mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Items ({items.length})</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-lime font-semibold">FREE ✨</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="gradient-text">₹{totalPrice}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
              >
                <ShoppingBag className="h-5 w-5" /> Checkout
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure UPI payment 🔒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
