import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SeasonalSectionProps {
  onSelectSeasonal: (season: string) => void;
}

export const SeasonalSection: React.FC<SeasonalSectionProps> = ({ onSelectSeasonal }) => {
  const seasons = [
    {
      id: 'christmas',
      title: 'Christmas & Holiday Magic',
      badge: 'Festive Season',
      tagline: 'Lace snowflakes, heirloom baubles, and miniature fir trees.',
      image: '/images/cat_christmas_crochet.jpg',
      aspect: 'col-span-1 md:col-span-2 lg:col-span-2',
    },
    {
      id: 'spring',
      title: 'Spring Blossoms & Layettes',
      badge: 'Spring Renewal',
      tagline: 'Floral garlands, cotton layettes, and pastel bonnet sets.',
      image: '/images/cat_baby_crochet.jpg',
      aspect: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'easter',
      title: 'Easter Companions',
      badge: 'Easter Keepsakes',
      tagline: 'Meadow bunnies, chick amigurumi, and miniature woven baskets.',
      image: '/images/cat_amigurumi_animals.jpg',
      aspect: 'col-span-1 md:col-span-1 lg:col-span-1',
    },
    {
      id: 'winter',
      title: 'Cozy Winter Accessories',
      badge: 'Chilly Days',
      tagline: 'Chunky rib scarves, cabled beanies, and wool slippers.',
      image: '/images/hero_crochet_lifestyle.jpg',
      aspect: 'col-span-1 md:col-span-2 lg:col-span-2',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#A65F73]">
            Seasonal Editorial
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B]">
            Celebrate Every Season with Crochet
          </h2>
          <p className="text-base text-[#6E535C] leading-relaxed">
            From twinkling Christmas trees to springtime baby blooms, discover thoughtful projects tailored to life&apos;s changing rhythms.
          </p>
        </div>

        {/* Editorial Bento / Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {seasons.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectSeasonal(item.id)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-300 min-h-[320px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8 ${item.aspect}`}
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#49343B]/90 via-[#49343B]/40 to-transparent" />

              {/* Text content */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#E8BFC5] bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-white group-hover:text-[#F8E7E9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E7E9]/90 max-w-md">
                  {item.tagline}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:underline">
                    View Seasonal Collection <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
