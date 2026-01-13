import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Package, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/context/CartContext';
import { toast } from 'sonner';
import JSZip from 'jszip';

export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  date: string;
  time: string;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem('stickermood-orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const downloadOrderAsZip = async (order: Order) => {
    const zip = new JSZip();
    
    // Create a folder for this order
    const orderFolder = zip.folder(`StickerMood_Order_${order.id}`);
    
    if (!orderFolder) return;

    // Add README
    orderFolder.file('README.txt', `
🎭 Sticker.mood Order #${order.id}
================================
Order Date: ${order.date} at ${order.time}
Total Paid: ₹${order.totalPrice}

Thank you for your purchase! 💜

This ZIP contains ${order.items.length} sticker pack(s).
Each pack has its own folder with sticker info.

To use these stickers:
1. Open WhatsApp/Telegram
2. Go to sticker settings
3. Import the sticker packs

Enjoy adding mood to your chats! ✨
    `.trim());

    // Add each sticker pack as a subfolder
    order.items.forEach((item) => {
      const packFolder = orderFolder.folder(item.name.replace(/\s+/g, '_'));
      if (packFolder) {
        packFolder.file('pack_info.txt', `
Sticker Pack: ${item.name}
Category: ${item.category}
Description: ${item.description}
Price: ₹${item.price}

Stickers included: ${item.thumbnails.join(' ')}
        `.trim());
        
        // Create placeholder sticker files
        item.thumbnails.forEach((emoji, index) => {
          packFolder.file(`sticker_${index + 1}.txt`, `Sticker ${index + 1}: ${emoji}`);
        });
      }
    });

    // Generate and download ZIP
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const link = document.createElement('a');
    link.href = url;
    link.download = `StickerMood_Order_${order.id}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(`Downloaded Order #${order.id} 🎉`);
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto animate-slide-up">
            <span className="text-8xl block mb-6">📦</span>
            <h1 className="font-poppins text-3xl font-bold mb-4">No Orders Yet</h1>
            <p className="text-muted-foreground mb-8">
              You haven't made any purchases yet. Start shopping to see your order history!
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

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="font-poppins text-3xl md:text-4xl font-bold mb-8 animate-slide-up">
          Order History <span className="inline-block animate-wiggle">📦</span>
        </h1>

        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="bg-card rounded-3xl p-6 shadow-card border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="h-5 w-5 text-primary" />
                    <h2 className="font-poppins font-bold text-lg">Order #{order.id}</h2>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {order.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {order.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="font-poppins font-bold text-xl gradient-text">₹{order.totalPrice}</p>
                  </div>
                  <Button
                    variant="playful"
                    size="sm"
                    onClick={() => downloadOrderAsZip(order)}
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 bg-muted rounded-2xl">
                    <div className="flex gap-1">
                      {item.thumbnails.slice(0, 3).map((thumb, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-background rounded-xl flex items-center justify-center text-xl"
                        >
                          {thumb}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="font-poppins font-bold">₹{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/browse">
            <Button variant="hero" size="lg">
              Browse More Stickers <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
