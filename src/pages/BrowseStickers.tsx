import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryCard from '@/components/CategoryCard';
import StickerPackCard from '@/components/StickerPackCard';
import StickerImage from '@/components/StickerImage';
import { categories, getStickersByCategory, getCategoryById } from '@/data/stickers';

// Fallback emojis (only used if image fails to load)
const categoryEmojis: Record<string, string> = {
  funny: '😂',
  animal: '🐕',
  savage: '🔥',
  anime: '🎌',
  daily: '✨',
};

const BrowseStickers = () => {
  const { categoryId } = useParams();

  // ================================
  // CATEGORY VIEW (Sticker Packs)
  // ================================
  if (categoryId) {
    const category = getCategoryById(categoryId);
    const packs = getStickersByCategory(categoryId);

    if (!category) {
      return (
        <div className="min-h-screen pt-24 text-center">
          <h1 className="text-2xl font-bold">Category not found</h1>
          <Link to="/browse">
            <Button variant="hero" className="mt-4">
              Back to Browse
            </Button>
          </Link>
        </div>
      );
    }

    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">

          {/* Back button */}
          <Link to="/browse">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              All Categories
            </Button>
          </Link>

          {/* Category Header */}
          <div
            className={`rounded-3xl p-8 mb-10 bg-gradient-to-br ${category.color} text-primary-foreground relative overflow-hidden`}
          >
            {/* Background image */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 opacity-20">
              <StickerImage
                src={category.image}
                alt={category.name}
                className="w-full h-full rounded-3xl"
                fallbackEmoji={categoryEmojis[category.id]}
              />
            </div>

            {/* Foreground content */}
            <div className="relative z-10">
              <div className="w-20 h-20 mb-4 rounded-2xl overflow-hidden bg-white/20 animate-wiggle">
                <StickerImage
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full"
                  fallbackEmoji={categoryEmojis[category.id]}
                />
              </div>

              <h1 className="font-poppins text-4xl font-bold mb-2">
                {category.name}
              </h1>
              <p className="text-lg opacity-90">
                {category.description}
              </p>
            </div>
          </div>

          {/* Sticker Packs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packs.map((pack, index) => (
              <div
                key={pack.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StickerPackCard pack={pack} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {packs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                New sticker packs are on the way!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ================================
  // ALL CATEGORIES VIEW
  // ================================
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">
            Browse Stickers
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pick a category that matches your mood and explore our sticker packs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card rounded-3xl px-10 py-6 shadow-card">
            <div>
              <div className="font-poppins text-3xl font-bold gradient-text">
                {categories.reduce((sum, cat) => sum + getStickersByCategory(cat.id).length, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">
                Sticker Packs
              </div>
            </div>

            <div className="w-px h-12 bg-border" />

            <div>
              <div className="font-poppins text-3xl font-bold gradient-text">
                {categories.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Categories
              </div>
            </div>

            <div className="w-px h-12 bg-border" />

            <div>
              <div className="font-poppins text-3xl font-bold gradient-text">
                ₹10
              </div>
              <div className="text-sm text-muted-foreground">
                Per Pack
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrowseStickers;
