import React from 'react';
import { Pattern } from '../../types';
import { PatternCard } from '../patterns/PatternCard';
import { Sparkles, ArrowRight } from 'lucide-react';

interface TrendingSectionProps {
  patterns: Pattern[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPattern: (pattern: Pattern) => void;
  onViewAllPatterns: () => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  patterns,
  favorites,
  onToggleFavorite,
  onSelectPattern,
  onViewAllPatterns,
}) => {
  const trendingList = patterns.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F7] border-t border-[#E8BFC5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF4F0] border border-[#CCD8CF] text-xs uppercase tracking-widest font-semibold text-[#587261] mb-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#587261]" />
              <span>Trending Now</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3E2F35]">
              Popular Patterns You&apos;ll Love
            </h2>
          </div>

          <button
            onClick={onViewAllPatterns}
            className="text-xs font-semibold text-[#587261] hover:text-[#43594B] flex items-center gap-1 group self-start md:self-auto"
          >
            <span>Browse Complete Library</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4-column product-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingList.map((pattern) => (
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
