import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

interface CollectionsSectionProps {
  onSelectCategory: (id: string) => void;
  onSelectTutorials: () => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectCategory,
  onSelectTutorials,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A65F73]">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B]">
            Find Your Next Creative Project
          </h2>
          <p className="text-base text-[#6E535C] leading-relaxed">
            A little inspiration for every stitch, every season, and every imagination.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => {
            const isBlush = index % 2 === 1;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'tutorials') {
                    onSelectTutorials();
                  } else {
                    onSelectCategory(cat.id);
                  }
                }}
                className={`group rounded-2xl border border-[#E8BFC5]/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 ${
                  isBlush ? 'bg-[#F8E7E9]/70' : 'bg-white'
                }`}
              >
                <div>
                  {/* Category Image */}
                  <div className="aspect-4/3 overflow-hidden bg-[#E8BFC5]/20">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#6E535C] leading-relaxed mb-4">
                      {cat.shortDescription}
                    </p>

                    {/* Subcategories preview tags */}
                    <div className="space-y-1 mb-6">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8E747E]">
                        Includes:
                      </p>
                      <ul className="text-xs text-[#6E535C] space-y-1">
                        {cat.subcategories.slice(0, 5).map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#A65F73]" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    className="w-full py-2.5 px-4 bg-[#A65F73] group-hover:bg-[#87495B] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
