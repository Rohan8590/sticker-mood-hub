import { Link } from 'react-router-dom';
import { Category } from '@/data/stickers';
import StickerImage from './StickerImage';

interface CategoryCardProps {
  category: Category;
}

// Fallback emojis for each category
const categoryEmojis: Record<string, string> = {
  funny: '😂',
  animal: '🐕',
  savage: '🔥',
  anime: '🎌',
  daily: '✨',
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const fallbackEmoji = categoryEmojis[category.id] || '🎭';

  return (
    <Link to={`/browse/${category.id}`}>
      <div className={`group relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br ${category.color} text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer h-48`}>
        {/* Background image decoration */}
        <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity">
          <StickerImage
            src={category.image}
            alt={category.name}
            className="w-full h-full rounded-2xl"
            fallbackEmoji={fallbackEmoji}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-16 h-16 mb-3 rounded-2xl overflow-hidden bg-white/20 group-hover:animate-wiggle">
            <StickerImage
              src={category.image}
              alt={category.name}
              className="w-full h-full"
              fallbackEmoji={fallbackEmoji}
            />
          </div>
          <h3 className="font-poppins font-bold text-xl mb-1">{category.name}</h3>
          <p className="text-sm opacity-90">{category.description}</p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors rounded-3xl" />
      </div>
    </Link>
  );
};

export default CategoryCard;
