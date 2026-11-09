import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Pattern } from '../../types';

interface PatternCardProps {
  pattern: Pattern;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelect: (pattern: Pattern) => void;
}

export const PatternCard: React.FC<PatternCardProps> = ({
  pattern,
  isFavorite,
  onToggleFavorite,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(pattern)}
      className="group bg-white rounded-2xl border border-[#E8BFC5]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F8E7E9]">
        <img
          src={pattern.image}
          alt={pattern.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(pattern.id, e);
          }}
          aria-label={isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 backdrop-blur-md shadow-xs ${
            isFavorite
              ? 'bg-[#A65F73] text-white shadow-sm'
              : 'bg-white/90 text-[#49343B] hover:text-[#A65F73] hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Free / Premium Badge - Discrete & Elegant */}
        <div className="absolute bottom-3 left-3">
          <span
            className={`text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-xs backdrop-blur-md ${
              pattern.isPremium
                ? 'bg-[#49343B]/85 text-white'
                : 'bg-white/95 text-[#A65F73] font-semibold'
            }`}
          >
            {pattern.isPremium ? `$${pattern.price?.toFixed(2)} PDF` : 'Free Pattern'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Category & Difficulty */}
          <div className="flex items-center gap-2 text-xs text-[#6E535C] mb-1.5 font-medium">
            <span>{pattern.subcategory}</span>
            <span aria-hidden="true">·</span>
            <span>{pattern.difficulty}</span>
            <span aria-hidden="true">·</span>
            <span>{pattern.estimatedTime}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors leading-snug line-clamp-1 mb-2">
            {pattern.title}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#6E535C] line-clamp-2 leading-relaxed mb-4">
            {pattern.description}
          </p>
        </div>

        {/* Action Button & Price baselines */}
        <div className="pt-3 border-t border-[#E8BFC5]/20 flex items-center justify-between gap-3">
          <div className="text-xs text-[#8E747E] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C98796]" />
            <span>★ {pattern.rating} ({pattern.reviewCount})</span>
          </div>

          <span className="text-xs font-medium text-[#A65F73] group-hover:text-[#87495B] flex items-center gap-1">
            View Pattern →
          </span>
        </div>
      </div>
    </article>
  );
};
