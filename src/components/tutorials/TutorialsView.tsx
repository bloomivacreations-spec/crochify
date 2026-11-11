import React, { useState } from 'react';
import { Clock, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Tutorial } from '../../types';

interface TutorialsViewProps {
  tutorials: Tutorial[];
  onSelectTutorial: (t: Tutorial) => void;
  onExploreBeginner: () => void;
}

export const TutorialsView: React.FC<TutorialsViewProps> = ({
  tutorials,
  onSelectTutorial,
  onExploreBeginner,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');

  const subcategories = [
    'All',
    'Beginner Tutorials',
    'Crochet Stitches',
    'Advanced Techniques',
    'Step-by-Step Projects',
    'Tips & Tricks',
  ];

  const filtered = selectedSubcategory === 'All'
    ? tutorials
    : tutorials.filter((t) => t.subcategory === selectedSubcategory);

  return (
    <div className="bg-[#FFF9F7] min-h-screen pb-20">
      {/* Banner */}
      <div className="bg-[#EFF4F0] border-b border-[#CCD8CF] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold text-[#587261] bg-white border border-[#CCD8CF] mb-3 shadow-2xs">
              Skill Masterclasses
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3E2F35] leading-tight mb-4">
              Crochet Tutorials &amp; Techniques
            </h1>
            <p className="text-base text-[#5A6F62] leading-relaxed">
              Step-by-step photographic guides, stitch encyclopedia, and professional finishing secrets. Master everything from your very first chain to intricate lace edging.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Subcategories Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {subcategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSubcategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedSubcategory === cat
                  ? 'bg-[#587261] text-white shadow-xs'
                  : 'bg-white border border-[#CCD8CF] text-[#3E2F35] hover:bg-[#EFF4F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((t) => (
            <article
              key={t.id}
              onClick={() => onSelectTutorial(t)}
              className="group bg-white rounded-2xl border border-[#E8BFC5]/40 overflow-hidden cursor-pointer hover:shadow-md transition-all flex flex-col sm:flex-row hover:-translate-y-0.5"
            >
              <div className="sm:w-2/5 aspect-4/3 sm:aspect-auto overflow-hidden bg-[#F8E7E9]">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#8E747E] font-medium mb-2">
                    <span className="text-[#A65F73] font-semibold">{t.subcategory}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.difficulty}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors leading-snug mb-2">
                    {t.title}
                  </h3>

                  <p className="text-xs text-[#6E535C] line-clamp-3 leading-relaxed mb-4">
                    {t.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8BFC5]/20 flex items-center justify-between text-xs font-medium text-[#A65F73]">
                  <span>{t.steps.length} Step Breakdown</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Tutorial <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Essential Beginner Toolkit Banner */}
        <div className="bg-[#EFF4F0] rounded-2xl border border-[#CCD8CF] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold text-[#3E2F35]">
              New to Crochet?
            </h3>
            <p className="text-sm text-[#5A6F62] max-w-xl">
              Start with our foundational beginner curriculum covering ergonomic hooks, yarn weight codes, and how to hold tension without cramp.
            </p>
          </div>
          <button
            onClick={onExploreBeginner}
            className="py-3 px-6 bg-[#587261] hover:bg-[#43594B] text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-xs"
          >
            Learn Crochet Basics
          </button>
        </div>
      </div>
    </div>
  );
};
