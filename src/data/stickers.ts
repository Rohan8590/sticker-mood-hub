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
  { id: 'animal', name: 'Animal', image: '/stickers/categories/animal.png', color: 'from-pink to-pink-glow', description: 'Cute animals' },
  { id: 'savage', name: 'Savage', image: '/stickers/categories/savage.png', color: 'from-orange to-primary', description: 'Sassy comebacks' },
  { id: 'anime', name: 'Anime', image: '/stickers/categories/anime.png', color: 'from-purple to-cyan', description: 'Kawaii reactions' },
  { id: 'daily', name: 'Daily Reactions', image: '/stickers/categories/daily.png', color: 'from-cyan to-purple-light', description: 'Everyday moods' },
];

// Sticker packs now use image paths instead of emojis
export const stickerPacks: StickerPack[] = [
  // Funny
  { id: 'funny-1', name: 'LOL Moments', category: 'funny', description: 'For when you literally cannot stop laughing', thumbnails: ['/stickers/funny/lol-1.png', '/stickers/funny/lol-2.png', '/stickers/funny/lol-3.jpg', '/stickers/funny/lol-4.jpg'], price: 15 },
  { id: 'funny-2', name: 'Derpy Faces', category: 'funny', description: 'Goofy expressions for goofy convos', thumbnails: ['/stickers/funny/derpy-1.png', '/stickers/funny/derpy-2.png', '/stickers/funny/derpy-3.png', '/stickers/funny/derpy-4.png'], price: 15 },
  { id: 'funny-3', name: 'Meme Lords', category: 'funny', description: 'Internet humor at its finest', thumbnails: ['/stickers/funny/meme-1.jpg', '/stickers/funny/meme-2.jpg', '/stickers/funny/meme-3.jpg', '/stickers/funny/meme-4.jpg'], price: 15 },
  { id: 'funny-4', name: 'Clown Energy', category: 'funny', description: 'When life is a whole circus', thumbnails: ['/stickers/funny/clown-1.png', '/stickers/funny/clown-2.png', '/stickers/funny/clown-3.png', '/stickers/funny/clown-4.png'], price: 15 },
  
  // Animal
  { id: 'animal-1', name: 'Cute', category: 'animal', description: 'When animals are just too cute 😍', thumbnails: ['/stickers/animal/cute-1.png', '/stickers/animal/cute-2.png', '/stickers/animal/cute-3.png', '/stickers/animal/cute-4.png'], price: 15 },
  { id: 'animal-2', name: 'Mood', category: 'animal', description: 'Moody fluff of clouds', thumbnails: ['/stickers/animal/mood-1.png', '/stickers/animal/mood-2.png', '/stickers/animal/mood-3.png', '/stickers/animal/mood-4.png'], price: 15 },
  { id: 'animal-3', name: 'Reactions', category: 'animal', description: 'Shy and sweet divas', thumbnails: ['/stickers/animal/reactions-1.png', '/stickers/animal/reactions-2.png', '/stickers/animal/reactions-3.png', '/stickers/animal/reactions-4.png'], price: 15 },
  { id: 'animal-4', name: 'Unhinged', category: 'animal', description: 'They couldn\'t care less', thumbnails: ['/stickers/animal/unhinged-1.png', '/stickers/animal/unhinged-2.png', '/stickers/animal/unhinged-3.png', '/stickers/animal/unhinged-4.png'], price: 15 },

  // Savage
  { id: 'savage-1', name: 'No Cap', category: 'savage', description: 'Speaking facts only 💯', thumbnails: ['/stickers/savage/nocap-1.png', '/stickers/savage/nocap-2.png', '/stickers/savage/nocap-3.png', '/stickers/savage/nocap-4.png'], price: 15 },
  { id: 'savage-2', name: 'Boss Energy', category: 'savage', description: 'Main character energy', thumbnails: ['/stickers/savage/boss-1.png', '/stickers/savage/boss-2.png', '/stickers/savage/boss-3.png', '/stickers/savage/boss-4.png'], price: 15 },
  { id: 'savage-3', name: 'Unbothered', category: 'savage', description: 'Living my best life', thumbnails: ['/stickers/savage/unbothered-1.png', '/stickers/savage/unbothered-2.png', '/stickers/savage/unbothered-3.png', '/stickers/savage/unbothered-4.png'], price: 15 },
  { id: 'savage-4', name: 'Slay Queen', category: 'savage', description: 'Serving looks & attitude', thumbnails: ['/stickers/savage/slay-1.png', '/stickers/savage/slay-2.png', '/stickers/savage/slay-3.png', '/stickers/savage/slay-4.png'], price: 15 },
  
  // Anime
  { id: 'anime-1', name: 'Demon Slayer', category: 'anime', description: 'Because typing is hard, but Water Breathing is easy', thumbnails: ['/stickers/anime/demon-1.png', '/stickers/anime/demon-2.png', '/stickers/anime/demon-3.png', '/stickers/anime/demon-4.png'], price: 15 },
  { id: 'anime-2', name: 'Haikyuu', category: 'anime', description: 'More screaming than a Karasuno timeout!', thumbnails: ['/stickers/anime/haikyuu-1.png', '/stickers/anime/haikyuu-2.png', '/stickers/anime/haikyuu-3.png', '/stickers/anime/haikyuu-4.jpeg'], price: 15 },
  { id: 'anime-3', name: 'Jujutsu Kaisen', category: 'anime', description: 'Channeling Nanami\'s hatred for overtime', thumbnails: ['/stickers/anime/kaisen-1.jpeg', '/stickers/anime/kaisen-2.png', '/stickers/anime/kaisen-3.png', '/stickers/anime/kaisen-4.jpeg'], price: 15 },
  { id: 'anime-4', name: 'Wind Breaker', category: 'anime', description: 'Sakura blushing harder than he punches', thumbnails: ['/stickers/anime/wind-1.jpeg', '/stickers/anime/wind-2.jpeg', '/stickers/anime/wind-3.jpeg', '/stickers/anime/wind-4.jpeg'], price: 15 },
  
  // Daily
  { id: 'daily-1', name: 'Morning Mood', category: 'daily', description: 'Wake up & slay ☀️', thumbnails: ['/stickers/daily/morning-1.png', '/stickers/daily/morning-2.png', '/stickers/daily/morning-3.png', '/stickers/daily/morning-4.png'], price: 15 },
  { id: 'daily-2', name: 'Work Feels', category: 'daily', description: 'Office & WFH vibes', thumbnails: ['/stickers/daily/work-1.jpg', '/stickers/daily/work-2.jpg', '/stickers/daily/work-3.jpg', '/stickers/daily/work-4.png'], price: 15 },
  { id: 'daily-3', name: 'Weekend Plans', category: 'daily', description: 'TGIF energy!', thumbnails: ['/stickers/daily/weekend-1.jpg', '/stickers/daily/weekend-2.jpg', '/stickers/daily/weekend-3.jpg', '/stickers/daily/weekend-4.jpg'], price: 15 },
  { id: 'daily-4', name: 'Night Owl', category: 'daily', description: 'Late night chat moods', thumbnails: ['/stickers/daily/night-1.jpg', '/stickers/daily/night-2.jpg', '/stickers/daily/night-3.jpg', '/stickers/daily/night-4.jpeg'], price: 15 },
];

export const getStickersByCategory = (categoryId: string): StickerPack[] => {
  return stickerPacks.filter(pack => pack.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(cat => cat.id === categoryId);
};
