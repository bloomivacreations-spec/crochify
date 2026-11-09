import React from 'react';
import { Pattern } from '../../types';
import { PatternCard } from '../patterns/PatternCard';
import { ArrowRight, Gift } from 'lucide-react';

interface FreePatternsSectionProps {
  patterns: Pattern[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPattern: (pattern: Pattern) => void;
  onViewAllFree: () => void;
}

export const FreePatternsSection: React.FC<FreePatternsSectionProps> = ({
  patterns,
  favorites,
  onToggleFavorite,
  onSelectPattern,
  onViewAllFree,
}) => {
  const freePatterns = patterns.filter((p) => !p.isPremium).slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F7] border-t border-[#E8BFC5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#A65F73] mb-2">
              <Gift className="w-3.5 h-3.5 text-[#C98796]" />
              <span>Complimentary Designs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#49343B]">
              Beautiful Creations, Free to Make
            </h2>
          </div>

          <button
            onClick={onViewAllFree}
            className="text-xs font-semibold text-[#A65F73] hover:text-[#87495B] flex items-center gap-1 group self-start md:self-auto"
          >
            <span>Explore All Free Patterns</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {freePatterns.map((pattern) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              isFavorite={favorites.includes(pattern.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectPattern}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
