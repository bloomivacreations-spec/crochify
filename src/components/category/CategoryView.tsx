import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, ChevronRight } from 'lucide-react';
import { CategoryInfo, DifficultyLevel, Pattern } from '../../types';
import { PatternCard } from '../patterns/PatternCard';

interface CategoryViewProps {
  category: CategoryInfo;
  allCategories: CategoryInfo[];
  patterns: Pattern[];
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPattern: (pattern: Pattern) => void;
  onSelectCategory: (catId: string) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  allCategories,
  patterns,
  favorites,
  onToggleFavorite,
  onSelectPattern,
  onSelectCategory,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<'All' | 'Free' | 'Premium'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter patterns for this category
  const categoryPatterns = useMemo(() => {
    return patterns.filter((p) => {
      // Must match category
      if (p.category !== category.id) return false;

      // Subcategory filter
      if (selectedSubcategory !== 'All' && p.subcategory !== selectedSubcategory) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'All' && p.difficulty !== selectedDifficulty) {
        return false;
      }

      // Pricing filter
      if (selectedPricing === 'Free' && p.isPremium) return false;
      if (selectedPricing === 'Premium' && !p.isPremium) return false;

      // Search query
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
  }, [patterns, category.id, selectedSubcategory, selectedDifficulty, selectedPricing, searchQuery]);

  const otherCategories = allCategories.filter((c) => c.id !== category.id);

  return (
    <div className="bg-[#FFF9F7] min-h-screen pb-20">
      {/* Category Hero Banner */}
      <div className="relative bg-[#EFF4F0] border-b border-[#CCD8CF] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-xs uppercase tracking-widest font-semibold text-[#587261] bg-white border border-[#CCD8CF]">
                Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3E2F35] leading-tight">
                {category.title}
              </h1>
              <p className="text-base text-[#5A6F62] leading-relaxed max-w-2xl">
                {category.longDescription}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#CCD8CF] aspect-4/3 shadow-xs">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategory & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Subcategories Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          <button
            onClick={() => setSelectedSubcategory('All')}
            className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
              selectedSubcategory === 'All'
                ? 'bg-[#587261] text-white shadow-xs'
                : 'bg-white border border-[#CCD8CF] text-[#3E2F35] hover:bg-[#EFF4F0]'
            }`}
          >
            All {category.title}
          </button>
          {category.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedSubcategory === sub
                  ? 'bg-[#587261] text-white shadow-xs'
                  : 'bg-white border border-[#CCD8CF] text-[#3E2F35] hover:bg-[#EFF4F0]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Filter Controls Row */}
        <div className="bg-white rounded-2xl border border-[#E8BFC5]/40 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Search inside category */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E747E]" />
            <input
              type="text"
              placeholder={`Search ${category.title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl focus:outline-none focus:border-[#A65F73] text-[#49343B]"
            />
          </div>

          {/* Difficulty & Price Filter Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto">
            {/* Difficulty Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#8E747E] whitespace-nowrap">Difficulty:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl px-2.5 py-1.5 text-xs text-[#49343B] focus:outline-none focus:border-[#A65F73]"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Easy">Easy</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Price Selector */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[#8E747E] whitespace-nowrap">Access:</span>
              <div className="flex items-center bg-[#FFF9F7] border border-[#E8BFC5]/50 rounded-xl p-0.5">
                {(['All', 'Free', 'Premium'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedPricing(type)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                      selectedPricing === type
                        ? 'bg-[#A65F73] text-white font-medium'
                        : 'text-[#6E535C] hover:text-[#49343B]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#6E535C] mb-6">
          <span>
            Showing <strong className="text-[#49343B]">{categoryPatterns.length}</strong> patterns
            {selectedSubcategory !== 'All' ? ` in ${selectedSubcategory}` : ''}
          </span>
          {(selectedSubcategory !== 'All' || selectedDifficulty !== 'All' || selectedPricing !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedSubcategory('All');
                setSelectedDifficulty('All');
                setSelectedPricing('All');
                setSearchQuery('');
              }}
              className="text-[#A65F73] hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Pattern Cards Grid */}
        {categoryPatterns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {categoryPatterns.map((p) => (
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
              No Patterns Found
            </h3>
            <p className="text-xs text-[#6E535C] mb-4">
              Try adjusting your difficulty or search terms to find matching crochet projects.
            </p>
            <button
              onClick={() => {
                setSelectedSubcategory('All');
                setSelectedDifficulty('All');
                setSelectedPricing('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#A65F73] text-white rounded-xl"
            >
              Show All Patterns
            </button>
          </div>
        )}

        {/* Explore Other Categories */}
        <div className="pt-12 border-t border-[#E8BFC5]/30">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#49343B] mb-6">
            Explore Other Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherCategories.map((other) => (
              <div
                key={other.id}
                onClick={() => {
                  onSelectCategory(other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl border border-[#E8BFC5]/40 overflow-hidden cursor-pointer hover:shadow-md transition-all p-4 flex items-center gap-4"
              >
                <img
                  src={other.image}
                  alt={other.title}
                  className="w-20 h-20 rounded-xl object-cover group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors truncate">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#6E535C] line-clamp-1 mb-2">
                    {other.shortDescription}
                  </p>
                  <span className="text-xs font-medium text-[#A65F73] flex items-center gap-0.5">
                    Browse <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
