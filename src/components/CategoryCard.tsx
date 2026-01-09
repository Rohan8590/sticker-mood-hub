import { Link } from 'react-router-dom';
import { Category } from '@/data/stickers';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/browse/${category.id}`}>
      <div className={`group relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br ${category.color} text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer h-48`}>
        {/* Background decoration */}
        <div className="absolute -right-4 -bottom-4 text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
          {category.emoji}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <span className="text-4xl mb-3 block group-hover:animate-wiggle">{category.emoji}</span>
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
