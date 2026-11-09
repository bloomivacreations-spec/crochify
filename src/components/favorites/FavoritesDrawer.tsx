import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { Pattern } from '../../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  patterns: Pattern[];
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onSelectPattern: (p: Pattern) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  patterns,
  onRemoveFavorite,
  onClearAll,
  onSelectPattern,
}) => {
  if (!isOpen) return null;

  const favoritePatterns = patterns.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#49343B]/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FFF9F7] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8BFC5]/50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 border-b border-[#E8BFC5]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#A65F73] fill-current" />
            <h3 className="font-serif text-xl font-semibold text-[#49343B]">
              Saved Favorites
            </h3>
            <span className="text-xs text-[#8E747E] font-medium">
              ({favoritePatterns.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#49343B] hover:text-[#A65F73] rounded-full hover:bg-[#F8E7E9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of items */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {favoritePatterns.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Heart className="w-10 h-10 text-[#C98796] mx-auto opacity-70" />
              <h4 className="font-serif text-lg font-semibold text-[#49343B]">
                No Saved Patterns Yet
              </h4>
              <p className="text-xs text-[#6E535C] max-w-xs mx-auto">
                Tap the heart icon on any pattern to save it here for quick inspiration when you are ready to craft.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#A65F73] text-white text-xs font-semibold rounded-xl"
              >
                Browse Patterns
              </button>
            </div>
          ) : (
            favoritePatterns.map((pat) => (
              <div
                key={pat.id}
                onClick={() => {
                  onSelectPattern(pat);
                  onClose();
                }}
                className="group flex items-center gap-4 bg-white p-3 rounded-2xl border border-[#E8BFC5]/40 hover:border-[#A65F73]/50 cursor-pointer transition-all shadow-2xs"
              >
                <img
                  src={pat.image}
                  alt={pat.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-[#A65F73] font-semibold uppercase tracking-wider block">
                    {pat.subcategory}
                  </span>
                  <h5 className="font-serif text-sm font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors truncate">
                    {pat.title}
                  </h5>
                  <div className="flex items-center gap-2 text-xs text-[#8E747E] mt-0.5">
                    <span>{pat.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pat.isPremium ? `$${pat.price?.toFixed(2)}` : 'Free'}</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFavorite(pat.id);
                  }}
                  className="p-2 text-[#8E747E] hover:text-rose-600 transition-colors"
                  title="Remove from favorites"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favoritePatterns.length > 0 && (
          <div className="p-6 bg-white border-t border-[#E8BFC5]/40 flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-[#8E747E] hover:text-rose-600 transition-colors"
            >
              Clear All Saved
            </button>
            <button
              onClick={onClose}
              className="py-2 px-4 bg-[#A65F73] hover:bg-[#87495B] text-white text-xs font-semibold rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
