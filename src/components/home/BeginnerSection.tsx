import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Sparkles, Layers, Scissors } from 'lucide-react';

interface BeginnerSectionProps {
  onLearnCrochet: () => void;
  onExploreBeginnerPatterns: () => void;
}

export const BeginnerSection: React.FC<BeginnerSectionProps> = ({
  onLearnCrochet,
  onExploreBeginnerPatterns,
}) => {
  const steps = [
    {
      title: 'Crochet Basics & Ergonomics',
      desc: 'Discover comfortable hook grips (knife vs. pencil hold) and how to manage fluid yarn tension without fatigue.',
      icon: Sparkles,
    },
    {
      title: 'Essential Toolkit',
      desc: 'Understand hook gauge sizing (metric vs. US letters), stitch markers, tapestry needles, and picking yarn weights.',
      icon: Scissors,
    },
    {
      title: 'How to Read Patterns',
      desc: 'Demystify parentheses, brackets, round counts, and the simple differences between US and UK terminology.',
      icon: BookOpen,
    },
    {
      title: 'Basic Foundational Stitches',
      desc: 'Master the magic ring, chain stitch (ch), single crochet (sc), half double crochet (hdc), and invisible decrease.',
      icon: Layers,
    },
    {
      title: 'Beginner-Friendly Projects',
      desc: 'Start with confidence on quick-win makes: seamless face scrubbies, cozy mug rugs, and our famous Rosebud Booties.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EFF4F0] border-y border-[#CCD8CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold text-[#587261] bg-white border border-[#CCD8CF] shadow-2xs">
            Start With Confidence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3E2F35]">
            Your Crochet Journey Starts Here.
          </h2>
          <p className="text-base text-[#5A6F62] leading-relaxed">
            Every beautiful creation begins with a single stitch. We break down the craft into soothing, achievable milestones.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-[#CCD8CF] hover:bg-white hover:border-[#587261] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EFF4F0] text-[#587261] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#587261] uppercase tracking-wider block mb-1">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-[#3E2F35] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#655158] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons with Sage & Oat Balance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onLearnCrochet}
            className="py-4 px-10 bg-[#587261] hover:bg-[#43594B] text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2 group"
          >
            <span>Learn Crochet</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onExploreBeginnerPatterns}
            className="py-4 px-8 bg-white hover:bg-[#EFF4F0] text-[#3E2F35] text-sm font-semibold rounded-xl border border-[#CCD8CF] transition-colors"
          >
            View Beginner Patterns
          </button>
        </div>
      </div>
    </section>
  );
};
