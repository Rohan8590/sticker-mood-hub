import { StickerPack } from '@/context/CartContext';

export interface Category {
  id: string;
  name: string;
  image: string; // Changed from emoji to image path
  color: string;
  description: string;
}

// Categories now use images from the stickers folder
export const categories: Category[] = [
  { id: 'funny', name: 'Funny', image: '/stickers/categories/funny.png', color: 'from-yellow to-orange', description: 'LOL-worthy reactions' },
  { id: 'romantic', name: 'Romantic', image: '/stickers/categories/romantic.png', color: 'from-pink to-pink-glow', description: 'Love & hearts' },
  { id: 'savage', name: 'Savage', image: '/stickers/categories/savage.png', color: 'from-orange to-primary', description: 'Sassy comebacks' },
  { id: 'desi', name: 'Desi / Indian', image: '/stickers/categories/desi.png', color: 'from-orange to-lime', description: 'Desi vibes only' },
  { id: 'anime', name: 'Anime', image: '/stickers/categories/anime.png', color: 'from-purple to-cyan', description: 'Kawaii reactions' },
  { id: 'daily', name: 'Daily Reactions', image: '/stickers/categories/daily.png', color: 'from-cyan to-purple-light', description: 'Everyday moods' },
];

// Sticker packs now use image paths instead of emojis
export const stickerPacks: StickerPack[] = [
  // Funny
  { id: 'funny-1', name: 'LOL Moments', category: 'funny', description: 'For when you literally cannot stop laughing 😂', thumbnails: ['/stickers/funny/lol-1.png', '/stickers/funny/lol-2.png', '/stickers/funny/lol-3.png', '/stickers/funny/lol-4.png'], price: 1 },
  { id: 'funny-2', name: 'Derpy Faces', category: 'funny', description: 'Goofy expressions for goofy convos', thumbnails: ['/stickers/funny/derpy-1.png', '/stickers/funny/derpy-2.png', '/stickers/funny/derpy-3.png', '/stickers/funny/derpy-4.png'], price: 1 },
  { id: 'funny-3', name: 'Meme Lords', category: 'funny', description: 'Internet humor at its finest', thumbnails: ['/stickers/funny/meme-1.png', '/stickers/funny/meme-2.png', '/stickers/funny/meme-3.png', '/stickers/funny/meme-4.png'], price: 1 },
  { id: 'funny-4', name: 'Clown Energy', category: 'funny', description: 'When life is a whole circus', thumbnails: ['/stickers/funny/clown-1.png', '/stickers/funny/clown-2.png', '/stickers/funny/clown-3.png', '/stickers/funny/clown-4.png'], price: 1 },
  
  // Romantic
  { id: 'romantic-1', name: 'Heart Eyes', category: 'romantic', description: 'When bae is just too cute 😍', thumbnails: ['/stickers/romantic/heart-1.png', '/stickers/romantic/heart-2.png', '/stickers/romantic/heart-3.png', '/stickers/romantic/heart-4.png'], price: 1 },
  { id: 'romantic-2', name: 'Couple Goals', category: 'romantic', description: 'Adorable couple stickers', thumbnails: ['/stickers/romantic/couple-1.png', '/stickers/romantic/couple-2.png', '/stickers/romantic/couple-3.png', '/stickers/romantic/couple-4.png'], price: 1 },
  { id: 'romantic-3', name: 'Blush Vibes', category: 'romantic', description: 'Shy and sweet reactions', thumbnails: ['/stickers/romantic/blush-1.png', '/stickers/romantic/blush-2.png', '/stickers/romantic/blush-3.png', '/stickers/romantic/blush-4.png'], price: 1 },
  { id: 'romantic-4', name: 'Forever Love', category: 'romantic', description: 'Express your endless love', thumbnails: ['/stickers/romantic/love-1.png', '/stickers/romantic/love-2.png', '/stickers/romantic/love-3.png', '/stickers/romantic/love-4.png'], price: 1 },
  
  // Savage
  { id: 'savage-1', name: 'No Cap', category: 'savage', description: 'Speaking facts only 💯', thumbnails: ['/stickers/savage/nocap-1.png', '/stickers/savage/nocap-2.png', '/stickers/savage/nocap-3.png', '/stickers/savage/nocap-4.png'], price: 1 },
  { id: 'savage-2', name: 'Boss Energy', category: 'savage', description: 'Main character energy', thumbnails: ['/stickers/savage/boss-1.png', '/stickers/savage/boss-2.png', '/stickers/savage/boss-3.png', '/stickers/savage/boss-4.png'], price: 1 },
  { id: 'savage-3', name: 'Unbothered', category: 'savage', description: 'Living my best life', thumbnails: ['/stickers/savage/unbothered-1.png', '/stickers/savage/unbothered-2.png', '/stickers/savage/unbothered-3.png', '/stickers/savage/unbothered-4.png'], price: 1 },
  { id: 'savage-4', name: 'Slay Queen', category: 'savage', description: 'Serving looks & attitude', thumbnails: ['/stickers/savage/slay-1.png', '/stickers/savage/slay-2.png', '/stickers/savage/slay-3.png', '/stickers/savage/slay-4.png'], price: 1 },
  
  // Desi
  { id: 'desi-1', name: 'Bollywood Drama', category: 'desi', description: 'Full filmy vibes 🎬', thumbnails: ['/stickers/desi/bollywood-1.png', '/stickers/desi/bollywood-2.png', '/stickers/desi/bollywood-3.png', '/stickers/desi/bollywood-4.png'], price: 1 },
  { id: 'desi-2', name: 'Desi Parents', category: 'desi', description: 'Relatable family moments', thumbnails: ['/stickers/desi/parents-1.png', '/stickers/desi/parents-2.png', '/stickers/desi/parents-3.png', '/stickers/desi/parents-4.png'], price: 1 },
  { id: 'desi-3', name: 'Festival Feels', category: 'desi', description: 'Diwali, Holi & more!', thumbnails: ['/stickers/desi/festival-1.png', '/stickers/desi/festival-2.png', '/stickers/desi/festival-3.png', '/stickers/desi/festival-4.png'], price: 1 },
  { id: 'desi-4', name: 'Chai Time', category: 'desi', description: 'Essential chai-coffee moments', thumbnails: ['/stickers/desi/chai-1.png', '/stickers/desi/chai-2.png', '/stickers/desi/chai-3.png', '/stickers/desi/chai-4.png'], price: 1 },
  
  // Anime
  { id: 'anime-1', name: 'Kawaii Faces', category: 'anime', description: 'Ultra cute anime expressions', thumbnails: ['/stickers/anime/kawaii-1.png', '/stickers/anime/kawaii-2.png', '/stickers/anime/kawaii-3.png', '/stickers/anime/kawaii-4.png'], price: 1 },
  { id: 'anime-2', name: 'Power Up', category: 'anime', description: 'Anime battle energy!', thumbnails: ['/stickers/anime/power-1.png', '/stickers/anime/power-2.png', '/stickers/anime/power-3.png', '/stickers/anime/power-4.png'], price: 1 },
  { id: 'anime-3', name: 'Chibi Love', category: 'anime', description: 'Adorable chibi reactions', thumbnails: ['/stickers/anime/chibi-1.png', '/stickers/anime/chibi-2.png', '/stickers/anime/chibi-3.png', '/stickers/anime/chibi-4.png'], price: 1 },
  { id: 'anime-4', name: 'Otaku Life', category: 'anime', description: 'For true anime fans', thumbnails: ['/stickers/anime/otaku-1.png', '/stickers/anime/otaku-2.png', '/stickers/anime/otaku-3.png', '/stickers/anime/otaku-4.png'], price: 1 },
  
  // Daily
  { id: 'daily-1', name: 'Morning Mood', category: 'daily', description: 'Wake up & slay ☀️', thumbnails: ['/stickers/daily/morning-1.png', '/stickers/daily/morning-2.png', '/stickers/daily/morning-3.png', '/stickers/daily/morning-4.png'], price: 1 },
  { id: 'daily-2', name: 'Work Feels', category: 'daily', description: 'Office & WFH vibes', thumbnails: ['/stickers/daily/work-1.png', '/stickers/daily/work-2.png', '/stickers/daily/work-3.png', '/stickers/daily/work-4.png'], price: 1 },
  { id: 'daily-3', name: 'Weekend Plans', category: 'daily', description: 'TGIF energy!', thumbnails: ['/stickers/daily/weekend-1.png', '/stickers/daily/weekend-2.png', '/stickers/daily/weekend-3.png', '/stickers/daily/weekend-4.png'], price: 1 },
  { id: 'daily-4', name: 'Night Owl', category: 'daily', description: 'Late night chat moods', thumbnails: ['/stickers/daily/night-1.png', '/stickers/daily/night-2.png', '/stickers/daily/night-3.png', '/stickers/daily/night-4.png'], price: 1 },
];

export const getStickersByCategory = (categoryId: string): StickerPack[] => {
  return stickerPacks.filter(pack => pack.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(cat => cat.id === categoryId);
};
