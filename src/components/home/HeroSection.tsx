import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExplorePatterns: () => void;
  onStartCreating: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePatterns,
  onStartCreating,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F7] py-12 lg:py-20 border-b border-[#E8BFC5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF4F0] border border-[#C6D6CA] text-xs font-medium text-[#587261] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#789480]" />
              <span>Your Creative World of Crochet</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#3E2F35] leading-[1.15] tracking-tight">
              Little Stitches, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#A65F73]">Beautiful Creations.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#655158] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover beautiful crochet patterns, learn new techniques, and bring your creative ideas to life, one stitch at a time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplorePatterns}
                className="w-full sm:w-auto py-3.5 px-8 bg-[#A65F73] hover:bg-[#87495B] text-white text-sm font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Patterns</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartCreating}
                className="w-full sm:w-auto py-3.5 px-8 bg-[#EFF4F0] hover:bg-[#DCE7DF] text-[#3E2F35] text-sm font-semibold rounded-xl border border-[#C6D6CA] transition-all flex items-center justify-center"
              >
                Start Creating
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-[#E8DDD9]/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6B7E70]">
              <span>✓ Instant PDF Downloads</span>
              <span aria-hidden="true">·</span>
              <span>✓ US &amp; UK Crochet Terms</span>
              <span aria-hidden="true">·</span>
              <span>✓ Ad-Free Printable Layouts</span>
            </div>
          </div>

          {/* Realistic Lifestyle Photography (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden border border-[#E8BFC5]/60 bg-white aspect-4/3 lg:aspect-square shadow-sm">
                <img
                  src="/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg"
                  alt="Cozy crochet creations arranged in sunlit room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating aesthetic caption badge */}
              <div className="absolute -bottom-4 right-4 sm:-right-4 bg-white/95 backdrop-blur-md border border-[#E8BFC5]/60 rounded-2xl p-4 shadow-sm max-w-[240px]">
                <p className="font-serif text-xs font-semibold text-[#49343B]">
                  Handmade with Love
                </p>
                <p className="text-[11px] text-[#6E535C] mt-0.5">
                  Over 100+ heirloom patterns and video tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
