import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Trash2,
  ArrowRight,
  ShoppingBag,
  CheckCircle,
  Download,
  Home,
  History,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/context/CartContext';
import { toast } from 'sonner';
import JSZip from 'jszip';
import { Order } from './OrderHistory';
import StickerImage from '@/components/StickerImage';

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [isPaid, setIsPaid] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);
  const [currentOrderId, setCurrentOrderId] = useState<string>('');

  const handleRemove = (id: string, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const generateOrderId = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();

  const saveOrder = (orderItems: CartItem[], orderId: string) => {
    const now = new Date();
    const order: Order = {
      id: orderId,
      items: orderItems,
      totalPrice: orderItems.reduce((sum, item) => sum + item.price, 0),
      date: now.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      time: now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const existingOrders = JSON.parse(
      localStorage.getItem('stickermood-orders') || '[]'
    );
    localStorage.setItem(
      'stickermood-orders',
      JSON.stringify([order, ...existingOrders])
    );
  };

  /** ✅ Checkout now directly completes order */
  const handleCheckout = () => {
    const orderId = generateOrderId();
    setPurchasedItems([...items]);
    setCurrentOrderId(orderId);
    saveOrder([...items], orderId);
    setIsPaid(true);
    clearCart();
    toast.success('Order confirmed! 🎉');
  };

  const fetchImageAsBlob = async (url: string): Promise<Blob | null> => {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.blob();
    } catch (e) {
      console.error('Image fetch failed', e);
    }
    return null;
  };

  const downloadAllAsZip = async () => {
    const zip = new JSZip();
    const mainFolder = zip.folder(`StickerMood_Order_${currentOrderId}`);
    if (!mainFolder) return;

    mainFolder.file(
      'README.txt',
      `
🎭 Sticker.mood Order #${currentOrderId}

Thank you for adding more mood to your chats!

Import these stickers via WhatsApp / Telegram sticker settings.
`.trim()
    );

    for (const item of purchasedItems) {
      const packFolder = mainFolder.folder(item.name.replace(/\s+/g, '_'));
      if (!packFolder) continue;

      for (let i = 0; i < item.thumbnails.length; i++) {
        const blob = await fetchImageAsBlob(item.thumbnails[i]);
        if (blob) packFolder.file(`sticker_${i + 1}.png`, blob);
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StickerMood_Order_${currentOrderId}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadSinglePack = async (item: CartItem) => {
    const zip = new JSZip();
    const folder = zip.folder(item.name.replace(/\s+/g, '_'));
    if (!folder) return;

    for (let i = 0; i < item.thumbnails.length; i++) {
      const blob = await fetchImageAsBlob(item.thumbnails[i]);
      if (blob) folder.file(`sticker_${i + 1}.png`, blob);
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.name}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /** Empty Cart */
  if (items.length === 0 && !isPaid) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <Link to="/browse">
          <Button variant="hero" className="mt-6">
            Browse Stickers <ArrowRight />
          </Button>
        </Link>
      </div>
    );
  }

  /** Thank You Page */
  if (isPaid) {
    return (
      <div className="min-h-screen pt-24 pb-12 text-center">
        <div className="max-w-lg mx-auto">
          <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
          <h1 className="text-4xl font-bold mb-3">Thank You! 💜</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for adding more mood to your chats! Click below to download
            your stickers ✨
          </p>
          <p className="text-muted-foreground mb-8">
            If you wish to get a physical copy, fill out the quick{" "}
                <a
                  href="https://forms.gle/mvZXrDuASqmwiJ6D9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-blue-600 !underline hover:!text-blue-700"
                >
                  Google Form
                </a>{" "}
                with your delivery details.
          </p>
          <div className="space-y-3 mb-6">
            {purchasedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-muted p-3 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <StickerImage
                    src={item.thumbnails[0]}
                    alt={item.name}
                    className="w-10 h-10"
                  />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => downloadSinglePack(item)}
                >
                  <Download />
                </Button>
              </div>
            ))}
          </div>

          <Button
            variant="playful"
            size="lg"
            className="w-full mb-4"
            onClick={downloadAllAsZip}
          >
            <Download /> Download All as ZIP
          </Button>

          <div className="flex gap-3 justify-center">
            <Link to="/browse">
              <Button variant="hero">
                Browse More <ArrowRight />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Home /> Home
              </Button>
            </Link>
          </div>

          <Link to="/orders">
            <Button variant="ghost" className="mt-4">
              <History /> View Orders
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  /** Cart View */
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card p-4 rounded-2xl flex items-center gap-4"
            >
              <StickerImage
                src={item.thumbnails[0]}
                alt={item.name}
                className="w-12 h-12"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <span className="font-bold">₹{item.price}</span>
              <Button
                variant="ghost"
                onClick={() => handleRemove(item.id, item.name)}
              >
                <Trash2 />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-card p-6 rounded-2xl sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">₹{totalPrice}</span>
          </div>
          <Button
            variant="hero"
            size="lg"
            className="w-full mt-4"
            onClick={handleCheckout}
          >
            <ShoppingBag /> Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
