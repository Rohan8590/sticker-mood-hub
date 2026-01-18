import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag, CheckCircle, Download, Home, ArrowLeft, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/context/CartContext';
import { toast } from 'sonner';
import JSZip from 'jszip';
import { Order } from './OrderHistory';
import StickerImage from '@/components/StickerImage';

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);
  const [currentOrderId, setCurrentOrderId] = useState<string>('');

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const generateOrderId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const saveOrder = (orderItems: CartItem[], orderId: string) => {
    const now = new Date();
    const order: Order = {
      id: orderId,
      items: orderItems,
      totalPrice: orderItems.reduce((sum, item) => sum + item.price, 0),
      date: now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    const existingOrders = JSON.parse(localStorage.getItem('stickermood-orders') || '[]');
    localStorage.setItem('stickermood-orders', JSON.stringify([order, ...existingOrders]));
  };

  const handlePaymentConfirm = () => {
    const orderId = generateOrderId();
    setPurchasedItems([...items]);
    setCurrentOrderId(orderId);
    saveOrder([...items], orderId);
    setIsPaid(true);
    toast.success("Thank you for your purchase! 🎉");
    clearCart();
  };

  // Fetch image as blob for ZIP
  const fetchImageAsBlob = async (url: string): Promise<Blob | null> => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.blob();
      }
    } catch (error) {
      console.error('Failed to fetch image:', url, error);
    }
    return null;
  };

  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    
    // Create main folder
    const mainFolder = zip.folder(`StickerMood_Order_${currentOrderId}`);
    if (!mainFolder) return;

    // Add README
    mainFolder.file('README.txt', `
🎭 Sticker.mood Order #${currentOrderId}
================================
Thank you for your purchase! 💜

This ZIP contains ${purchasedItems.length} sticker pack(s).
Each pack has its own folder with sticker images.

To use these stickers:
1. Open WhatsApp/Telegram
2. Go to sticker settings
3. Import the sticker packs

Enjoy adding mood to your chats! ✨
    `.trim());

    // Add each sticker pack as a subfolder
    for (const item of purchasedItems) {
      const packFolder = mainFolder.folder(item.name.replace(/\s+/g, '_'));
      if (packFolder) {
        packFolder.file('pack_info.txt', `
Sticker Pack: ${item.name}
Category: ${item.category}
Description: ${item.description}
Price: ₹${item.price}
        `.trim());
        
        // Add sticker images
        for (let index = 0; index < item.thumbnails.length; index++) {
          const imagePath = item.thumbnails[index];
          const blob = await fetchImageAsBlob(imagePath);
          if (blob) {
            const extension = imagePath.split('.').pop() || 'png';
            packFolder.file(`sticker_${index + 1}.${extension}`, blob);
          }
        }
      }
    }

    // Generate and download ZIP
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `StickerMood_Order_${currentOrderId}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(`Downloaded all stickers as ZIP! 🎉`);
  };

  const downloadSinglePack = async (item: CartItem) => {
    const zip = new JSZip();
    
    const packFolder = zip.folder(item.name.replace(/\s+/g, '_'));
    if (!packFolder) return;

    packFolder.file('pack_info.txt', `
Sticker Pack: ${item.name}
Category: ${item.category}
Description: ${item.description}
Price: ₹${item.price}

Thank you for purchasing from Sticker.mood! 💜

To use these stickers:
1. Open WhatsApp/Telegram
2. Go to sticker settings
3. Import this sticker pack

Enjoy adding mood to your chats! ✨
    `.trim());
    
    // Add sticker images
    for (let index = 0; index < item.thumbnails.length; index++) {
      const imagePath = item.thumbnails[index];
      const blob = await fetchImageAsBlob(imagePath);
      if (blob) {
        const extension = imagePath.split('.').pop() || 'png';
        packFolder.file(`sticker_${index + 1}.${extension}`, blob);
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.name.replace(/\s+/g, '_')}.zip`;
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-poppins font-bold">Your Stickers:</h3>
                <span className="text-sm text-muted-foreground">Order #{currentOrderId}</span>
              </div>
              <div className="space-y-3">
                {purchasedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-background">
                        <StickerImage
                          src={item.thumbnails[0]}
                          alt={item.name}
                          className="w-full h-full"
                          fallbackEmoji="🎭"
                        />
                      </div>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => downloadSinglePack(item)}
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
              onClick={downloadAllAsZip}
            >
              <Download className="h-5 w-5" /> Download All as ZIP
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
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

            <Link to="/orders" className="inline-block">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <History className="h-4 w-4" /> View Order History
              </Button>
            </Link>
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
                  <StickerImage
                    src="/qr/upi-qr.png"
                    alt="UPI QR Code"
                    className="w-full h-full object-contain"
                    fallbackEmoji="💳"
                  />

                  
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
                      className="w-12 h-12 bg-muted rounded-xl overflow-hidden"
                    >
                      <StickerImage
                        src={thumb}
                        alt={`${item.name} sticker ${i + 1}`}
                        className="w-full h-full"
                        fallbackEmoji={['😂', '💕'][i % 2]}
                      />
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
