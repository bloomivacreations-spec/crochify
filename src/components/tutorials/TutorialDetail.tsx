import React, { useState } from 'react';
import { ChevronLeft, Clock, Sparkles, Check, BookmarkCheck, Play, ArrowRight } from 'lucide-react';
import { Tutorial } from '../../types';

interface TutorialDetailProps {
  tutorial: Tutorial;
  allTutorials: Tutorial[];
  onBack: () => void;
  onSelectTutorial: (t: Tutorial) => void;
  onExplorePatterns: () => void;
}

export const TutorialDetail: React.FC<TutorialDetailProps> = ({
  tutorial,
  allTutorials,
  onBack,
  onSelectTutorial,
  onExplorePatterns,
}) => {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (num: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const otherTutorials = allTutorials.filter((t) => t.id !== tutorial.id).slice(0, 2);

  return (
    <div className="bg-[#FFF9F7] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8BFC5]/30">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#49343B] hover:text-[#A65F73] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> All Tutorials
          </button>
          <div className="flex items-center gap-2 text-xs text-[#6E535C]">
            <Clock className="w-3.5 h-3.5 text-[#A65F73]" />
            <span>{tutorial.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{tutorial.difficulty}</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="mb-10 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#A65F73] bg-[#F8E7E9] px-3 py-1 rounded-full">
            {tutorial.subcategory}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B] leading-tight max-w-2xl mx-auto">
            {tutorial.title}
          </h1>
          <p className="text-base text-[#6E535C] leading-relaxed max-w-xl mx-auto">
            {tutorial.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-[#E8BFC5]/50 bg-white shadow-xs aspect-16/9 mb-10">
          <img
            src={tutorial.image}
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tools & Key Tips Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Tools Needed */}
          <div className="bg-white rounded-2xl border border-[#E8BFC5]/40 p-6 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#49343B] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A65F73]" /> Tools &amp; Materials
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6E535C]">
              {tutorial.toolsNeeded.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A65F73] mt-2 shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#F8E7E9]/70 rounded-2xl border border-[#E8BFC5]/40 p-6 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#49343B] mb-3 flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-[#A65F73]" /> Masterclass Pro Tips
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#49343B]">
              {tutorial.keyTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#A65F73] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Breakdown */}
        <div className="space-y-8 mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#49343B]">
            Step-by-Step Tutorial
          </h2>

          <div className="space-y-6">
            {tutorial.steps.map((st) => {
              const isChecked = !!completedSteps[st.stepNumber];
              return (
                <div
                  key={st.stepNumber}
                  onClick={() => toggleStep(st.stepNumber)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-[#F8E7E9]/40 border-[#A65F73]/40'
                      : 'bg-white border-[#E8BFC5]/40 hover:border-[#A65F73]/60 shadow-xs'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-serif font-bold text-sm transition-colors ${
                        isChecked
                          ? 'bg-[#A65F73] text-white'
                          : 'bg-[#F8E7E9] text-[#A65F73] border border-[#E8BFC5]'
                      }`}
                    >
                      {isChecked ? <Check className="w-4 h-4" /> : st.stepNumber}
                    </button>

                    <div className="flex-1 space-y-2">
                      <h4 className="font-serif text-lg font-semibold text-[#49343B]">
                        {st.title}
                      </h4>
                      <p className="text-sm text-[#6E535C] leading-relaxed">
                        {st.description}
                      </p>
                      {st.tip && (
                        <div className="mt-3 p-3 bg-[#FFF9F7] rounded-xl border border-[#E8BFC5]/30 text-xs text-[#A65F73] font-medium flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#C98796]" />
                          <span>Tip: {st.tip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Practice Pattern CTA */}
        <div className="bg-[#F8E7E9] rounded-2xl border border-[#E8BFC5] p-8 text-center space-y-4 mb-16">
          <h3 className="font-serif text-2xl font-semibold text-[#49343B]">
            Ready to Practice What You Learned?
          </h3>
          <p className="text-sm text-[#6E535C] max-w-lg mx-auto">
            Put your new technique straight to use with our collection of beginner and intermediate friendly free patterns.
          </p>
          <button
            onClick={onExplorePatterns}
            className="py-3 px-6 bg-[#A65F73] hover:bg-[#87495B] text-white text-sm font-semibold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            Explore Free Patterns <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Other Recommended Tutorials */}
        {otherTutorials.length > 0 && (
          <div className="pt-8 border-t border-[#E8BFC5]/30">
            <h3 className="font-serif text-xl font-semibold text-[#49343B] mb-6">
              More Recommended Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherTutorials.map((ot) => (
                <div
                  key={ot.id}
                  onClick={() => onSelectTutorial(ot)}
                  className="bg-white rounded-xl border border-[#E8BFC5]/40 p-4 hover:border-[#A65F73] cursor-pointer transition-all flex items-center gap-4 group"
                >
                  <img src={ot.image} alt={ot.title} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] text-[#A65F73] font-medium block truncate">
                      {ot.subcategory}
                    </span>
                    <h5 className="font-serif text-sm font-semibold text-[#49343B] group-hover:text-[#A65F73] transition-colors truncate">
                      {ot.title}
                    </h5>
                    <span className="text-xs text-[#8E747E]">{ot.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
