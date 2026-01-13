import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface StickerPack {
  id: string;
  name: string;
  category: string;
  categoryId?: string;
  description: string;
  thumbnails: string[];
  price: number;
}

export type CartItem = StickerPack;

interface CartContextType {
  items: StickerPack[];
  addToCart: (pack: StickerPack) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<StickerPack[]>(() => {
    const saved = localStorage.getItem('stickermood-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('stickermood-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (pack: StickerPack) => {
    if (!items.find(item => item.id === pack.id)) {
      setItems(prev => [...prev, pack]);
    }
  };

  const removeFromCart = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const isInCart = (id: string) => {
    return items.some(item => item.id === id);
  };

  const totalItems = items.length;
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, isInCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
