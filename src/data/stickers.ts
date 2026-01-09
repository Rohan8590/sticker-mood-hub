import { StickerPack } from '@/context/CartContext';

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'funny', name: 'Funny', emoji: '😂', color: 'from-yellow to-orange', description: 'LOL-worthy reactions' },
  { id: 'romantic', name: 'Romantic', emoji: '💕', color: 'from-pink to-pink-glow', description: 'Love & hearts' },
  { id: 'savage', name: 'Savage', emoji: '🔥', color: 'from-orange to-primary', description: 'Sassy comebacks' },
  { id: 'desi', name: 'Desi / Indian', emoji: '🇮🇳', color: 'from-orange to-lime', description: 'Desi vibes only' },
  { id: 'anime', name: 'Anime', emoji: '🎌', color: 'from-purple to-cyan', description: 'Kawaii reactions' },
  { id: 'daily', name: 'Daily Reactions', emoji: '✨', color: 'from-cyan to-purple-light', description: 'Everyday moods' },
];

export const stickerPacks: StickerPack[] = [
  // Funny
  { id: 'funny-1', name: 'LOL Moments', category: 'funny', description: 'For when you literally cannot stop laughing 😂', thumbnails: ['😂', '🤣', '😹', '💀'], price: 1 },
  { id: 'funny-2', name: 'Derpy Faces', category: 'funny', description: 'Goofy expressions for goofy convos', thumbnails: ['🤪', '😜', '🤡', '🥴'], price: 1 },
  { id: 'funny-3', name: 'Meme Lords', category: 'funny', description: 'Internet humor at its finest', thumbnails: ['🐸', '🦆', '👁️', '🗿'], price: 1 },
  { id: 'funny-4', name: 'Clown Energy', category: 'funny', description: 'When life is a whole circus', thumbnails: ['🎪', '🤡', '🎭', '🃏'], price: 1 },
  
  // Romantic
  { id: 'romantic-1', name: 'Heart Eyes', category: 'romantic', description: 'When bae is just too cute 😍', thumbnails: ['😍', '🥰', '💘', '💝'], price: 1 },
  { id: 'romantic-2', name: 'Couple Goals', category: 'romantic', description: 'Adorable couple stickers', thumbnails: ['👫', '💑', '💏', '🥂'], price: 1 },
  { id: 'romantic-3', name: 'Blush Vibes', category: 'romantic', description: 'Shy and sweet reactions', thumbnails: ['☺️', '🙈', '💗', '🌹'], price: 1 },
  { id: 'romantic-4', name: 'Forever Love', category: 'romantic', description: 'Express your endless love', thumbnails: ['💍', '💒', '👩‍❤️‍👨', '💞'], price: 1 },
  
  // Savage
  { id: 'savage-1', name: 'No Cap', category: 'savage', description: 'Speaking facts only 💯', thumbnails: ['💯', '🔥', '💅', '😤'], price: 1 },
  { id: 'savage-2', name: 'Boss Energy', category: 'savage', description: 'Main character energy', thumbnails: ['👑', '💎', '🦁', '⚡'], price: 1 },
  { id: 'savage-3', name: 'Unbothered', category: 'savage', description: 'Living my best life', thumbnails: ['😎', '🤷', '💁', '✋'], price: 1 },
  { id: 'savage-4', name: 'Slay Queen', category: 'savage', description: 'Serving looks & attitude', thumbnails: ['💃', '👸', '💋', '🔮'], price: 1 },
  
  // Desi
  { id: 'desi-1', name: 'Bollywood Drama', category: 'desi', description: 'Full filmy vibes 🎬', thumbnails: ['🎬', '💃', '🕺', '🌟'], price: 1 },
  { id: 'desi-2', name: 'Desi Parents', category: 'desi', description: 'Relatable family moments', thumbnails: ['👨‍👩‍👧', '🧓', '📱', '🍛'], price: 1 },
  { id: 'desi-3', name: 'Festival Feels', category: 'desi', description: 'Diwali, Holi & more!', thumbnails: ['🪔', '🎆', '🎨', '🎉'], price: 1 },
  { id: 'desi-4', name: 'Chai Time', category: 'desi', description: 'Essential chai-coffee moments', thumbnails: ['☕', '🍵', '🫖', '🍪'], price: 1 },
  
  // Anime
  { id: 'anime-1', name: 'Kawaii Faces', category: 'anime', description: 'Ultra cute anime expressions', thumbnails: ['🥺', '✨', '🌸', '💖'], price: 1 },
  { id: 'anime-2', name: 'Power Up', category: 'anime', description: 'Anime battle energy!', thumbnails: ['⚡', '🔥', '💪', '🌀'], price: 1 },
  { id: 'anime-3', name: 'Chibi Love', category: 'anime', description: 'Adorable chibi reactions', thumbnails: ['🎀', '🍡', '🌈', '💫'], price: 1 },
  { id: 'anime-4', name: 'Otaku Life', category: 'anime', description: 'For true anime fans', thumbnails: ['📺', '🎮', '🍜', '🎌'], price: 1 },
  
  // Daily
  { id: 'daily-1', name: 'Morning Mood', category: 'daily', description: 'Wake up & slay ☀️', thumbnails: ['☀️', '☕', '🌅', '😴'], price: 1 },
  { id: 'daily-2', name: 'Work Feels', category: 'daily', description: 'Office & WFH vibes', thumbnails: ['💻', '📊', '😩', '🎉'], price: 1 },
  { id: 'daily-3', name: 'Weekend Plans', category: 'daily', description: 'TGIF energy!', thumbnails: ['🎉', '🛋️', '🍕', '🎬'], price: 1 },
  { id: 'daily-4', name: 'Night Owl', category: 'daily', description: 'Late night chat moods', thumbnails: ['🌙', '🦉', '💤', '✨'], price: 1 },
];

export const getStickersByCategory = (categoryId: string): StickerPack[] => {
  return stickerPacks.filter(pack => pack.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(cat => cat.id === categoryId);
};
