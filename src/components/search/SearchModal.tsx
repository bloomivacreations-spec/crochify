import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Sparkles, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { Pattern, Tutorial } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  patterns: Pattern[];
  tutorials: Tutorial[];
  onSelectPattern: (p: Pattern) => void;
  onSelectTutorial: (t: Tutorial) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  patterns,
  tutorials,
  onSelectPattern,
  onSelectTutorial,
}) => {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Patterns' | 'Tutorials' | 'Free'>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) {
      return {
        matchedPatterns: patterns.slice(0, 4),
        matchedTutorials: tutorials.slice(0, 2),
      };
    }

    const q = query.toLowerCase();

    const matchedPatterns = patterns.filter((p) => {
      if (typeFilter === 'Tutorials') return false;
      if (typeFilter === 'Free' && p.isPremium) return false;

      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.yarnDetails.toLowerCase().includes(q)
      );
    });

    const matchedTutorials = tutorials.filter((t) => {
      if (typeFilter === 'Patterns' || typeFilter === 'Free') return false;

      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.subcategory.toLowerCase().includes(q)
      );
    });

    return { matchedPatterns, matchedTutorials };
  }, [query, typeFilter, patterns, tutorials]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#49343B]/50 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 lg:p-20">
      <div className="w-full max-w-3xl bg-[#FFF9F7] rounded-3xl shadow-2xl border border-[#E8BFC5] overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E8BFC5]/40 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#A65F73] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search crochet patterns, stitches, techniques, yarn weights..."
            className="flex-1 text-sm sm:text-base bg-transparent text-[#49343B] placeholder-[#8E747E] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8E747E] hover:text-[#49343B]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#F8E7E9] text-[#A65F73] hover:bg-[#E8BFC5] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-6 py-3 bg-[#FFF9F7] border-b border-[#E8BFC5]/30 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#8E747E]">Filter:</span>
          {(['All', 'Patterns', 'Free', 'Tutorials'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setTypeFilter(filter)}
              className={`px-3 py-1 rounded-lg transition-colors ${
                typeFilter === filter
                  ? 'bg-[#A65F73] text-white font-medium shadow-2xs'
                  : 'bg-white border border-[#E8BFC5]/50 text-[#6E535C] hover:bg-[#F8E7E9]'
              }`}
            >
              {filter === 'Free' ? 'Free Patterns Only' : filter}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Patterns Section */}
          {results.matchedPatterns.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8E747E] uppercase tracking-wider mb-3">
                <span>Crochet Patterns ({results.matchedPatterns.length})</span>
              </div>
              <div className="space-y-2">
                {results.matchedPatterns.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectPattern(p);
                      onClose();
                    }}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#E8BFC5]/30 hover:border-[#A65F73] cursor-pointer transition-all group"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-[#A65F73] font-medium">
                        <span>{p.subcategory}</span>
                        <span aria-hidden="true">·</span>
                        <span>{p.difficulty}</span>
                        <span aria-hidden="true">·</span>
                        <span>{p.isPremium ? `$${p.price?.toFixed(2)} PDF` : 'Free'}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors truncate">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#8E747E] truncate">
                        {p.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8E747E] group-hover:text-[#A65F73] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tutorials Section */}
          {results.matchedTutorials.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8E747E] uppercase tracking-wider mb-3">
                <span>Tutorials &amp; Guides ({results.matchedTutorials.length})</span>
              </div>
              <div className="space-y-2">
                {results.matchedTutorials.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      onSelectTutorial(t);
                      onClose();
                    }}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-[#E8BFC5]/30 hover:border-[#A65F73] cursor-pointer transition-all group"
                  >
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-[#A65F73] font-medium">
                        <span>{t.subcategory}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{t.difficulty}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors truncate">
                        {t.title}
                      </h4>
                      <p className="text-xs text-[#8E747E] truncate">
                        {t.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8E747E] group-hover:text-[#A65F73] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.matchedPatterns.length === 0 && results.matchedTutorials.length === 0 && (
            <div className="text-center py-12 text-[#6E535C]">
              <p className="font-serif text-base font-semibold mb-1">
                No matching patterns or tutorials found
              </p>
              <p className="text-xs text-[#8E747E]">
                Try searching for &quot;blanket&quot;, &quot;bunny&quot;, &quot;booties&quot;, or &quot;magic ring&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
