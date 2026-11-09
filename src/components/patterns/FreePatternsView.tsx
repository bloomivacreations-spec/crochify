import React, { useState, useMemo } from 'react';
import { Gift, Search, Sparkles, Filter } from 'lucide-react';
import { Pattern } from '../../types';
import { PatternCard } from './PatternCard';

interface FreePatternsViewProps {
  patterns: Pattern[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPattern: (pattern: Pattern) => void;
}

export const FreePatternsView: React.FC<FreePatternsViewProps> = ({
  patterns,
  favorites,
  onToggleFavorite,
  onSelectPattern,
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const freeList = useMemo(() => {
    return patterns.filter((p) => {
      if (p.isPremium) return false;

      if (selectedDifficulty !== 'All' && p.difficulty !== selectedDifficulty) {
        return false;
      }

      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [patterns, selectedDifficulty, selectedCategory, searchQuery]);

  return (
    <div className="bg-[#FFF9F7] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#F8E7E9]/70 border-b border-[#E8BFC5]/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#E8BFC5] text-xs font-semibold text-[#A65F73]">
              <Gift className="w-3.5 h-3.5 text-[#C98796]" />
              <span>Complimentary Patterns</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B] leading-tight">
              Free Crochet Patterns
            </h1>
            <p className="text-base text-[#6E535C] leading-relaxed">
              Discover our ever-growing library of complimentary crochet patterns. Every design includes complete row-by-row instructions, stitch glossaries, and printable PDF downloads with zero paywalls.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Filters and search */}
        <div className="bg-white rounded-2xl border border-[#E8BFC5]/40 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E747E]" />
            <input
              type="text"
              placeholder="Search free patterns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl focus:outline-none focus:border-[#A65F73] text-[#49343B]"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#8E747E]">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl px-2.5 py-1.5 text-xs text-[#49343B] focus:outline-none focus:border-[#A65F73]"
              >
                <option value="All">All Categories</option>
                <option value="baby-crochet">Baby Crochet</option>
                <option value="amigurumi">Amigurumi</option>
                <option value="christmas-crochet">Christmas Crochet</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#8E747E]">Difficulty:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl px-2.5 py-1.5 text-xs text-[#49343B] focus:outline-none focus:border-[#A65F73]"
              >
                <option value="All">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-[#6E535C] mb-6">
          <span>
            Showing <strong className="text-[#49343B]">{freeList.length}</strong> free patterns
          </span>
          {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="text-[#A65F73] hover:underline font-medium"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Grid */}
        {freeList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freeList.map((p) => (
              <PatternCard
                key={p.id}
                pattern={p}
                isFavorite={favorites.includes(p.id)}
                onToggleFavorite={onToggleFavorite}
                onSelect={onSelectPattern}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E8BFC5]/40 p-12 text-center my-8 max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#C98796] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold text-[#49343B] mb-1">
              No matching free patterns found
            </h3>
            <p className="text-xs text-[#6E535C] mb-4">
              Try choosing &quot;All Categories&quot; or clearing your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
