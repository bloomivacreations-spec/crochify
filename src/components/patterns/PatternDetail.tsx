import React, { useState } from 'react';
import {
  Heart,
  Printer,
  ShoppingBag,
  Share2,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  Layers,
  Scissors,
  BookmarkCheck,
  FileDown,
  Check,
  Eye,
  Info
} from 'lucide-react';
import { Pattern } from '../../types';
import { PatternCard } from './PatternCard';

interface PatternDetailProps {
  pattern: Pattern;
  allPatterns: Pattern[];
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  onSelectPattern: (pattern: Pattern) => void;
  onAddToCart: (pattern: Pattern) => void;
  onBack: () => void;
  onOpenPrintModal: (pattern: Pattern) => void;
}

export const PatternDetail: React.FC<PatternDetailProps> = ({
  pattern,
  allPatterns,
  isFavorite,
  onToggleFavorite,
  onSelectPattern,
  onAddToCart,
  onBack,
  onOpenPrintModal,
}) => {
  const [activeTab, setActiveTab] = useState<'instructions' | 'materials' | 'abbreviations' | 'techniques'>('instructions');
  const [terminology, setTerminology] = useState<'US' | 'UK'>('US');
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [checkedMaterials, setCheckedMaterials] = useState<Record<number, boolean>>({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const images = pattern.galleryImages.length > 0 ? pattern.galleryImages : [pattern.image];

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const toggleMaterial = (index: number) => {
    setCheckedMaterials((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePinterestShare = () => {
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent(window.location.origin + pattern.image);
    const desc = encodeURIComponent(`${pattern.title} - Free & Premium Crochet Patterns on MyCrochify`);
    window.open(
      `https://www.pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${desc}`,
      '_blank'
    );
  };

  const related = allPatterns
    .filter((p) => p.id !== pattern.id && (p.category === pattern.category || p.difficulty === pattern.difficulty))
    .slice(0, 3);

  // Total steps count
  const allStepKeys = pattern.instructions.flatMap((sec, sIdx) =>
    sec.steps.map((_, stepIdx) => `${sIdx}-${stepIdx}`)
  );
  const finishedCount = allStepKeys.filter((k) => completedSteps[k]).length;
  const progressPercent = Math.round((finishedCount / Math.max(allStepKeys.length, 1)) * 100);

  return (
    <div className="bg-[#FFF9F7] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8BFC5]/30">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#49343B] hover:text-[#A65F73] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Collection
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePinterestShare}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#A65F73] rounded-md transition-colors"
              title="Pin to Pinterest"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026l.032-.026z" />
              </svg>
              <span>Pin</span>
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] rounded-md transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Top Product / Pattern Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Image Gallery (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8BFC5]/50 bg-white aspect-4/3 shadow-xs">
              <img
                src={images[activeImageIndex] || pattern.image}
                alt={pattern.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                onClick={(e) => onToggleFavorite(pattern.id, e)}
                aria-label="Save to favorites"
                className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md shadow-xs transition-colors ${
                  isFavorite ? 'bg-[#A65F73] text-white' : 'bg-white/90 text-[#49343B] hover:text-[#A65F73]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-[#A65F73] scale-95 shadow-xs' : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${pattern.title} preview ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Specs Card */}
            <div className="bg-[#F8E7E9]/70 rounded-2xl p-5 border border-[#E8BFC5]/40 space-y-3">
              <h4 className="font-serif text-sm font-semibold text-[#49343B] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A65F73]" /> Project Specifications
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#8E747E] block">Difficulty</span>
                  <span className="font-semibold text-[#49343B]">{pattern.difficulty}</span>
                </div>
                <div>
                  <span className="text-[#8E747E] block">Est. Time</span>
                  <span className="font-semibold text-[#49343B]">{pattern.estimatedTime}</span>
                </div>
                <div>
                  <span className="text-[#8E747E] block">Hook Size</span>
                  <span className="font-semibold text-[#49343B]">{pattern.hookSize}</span>
                </div>
                <div>
                  <span className="text-[#8E747E] block">Yarn Weight</span>
                  <span className="font-semibold text-[#49343B]">{pattern.yarnWeight}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#8E747E] block">Finished Size</span>
                  <span className="font-semibold text-[#49343B]">{pattern.finishedSize}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[#8E747E] block">Gauge</span>
                  <span className="font-medium text-[#49343B]">{pattern.gauge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Purchasing / Free Delivery, Specs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-3 text-xs text-[#6E535C] font-medium mb-3">
                <span className="text-[#A65F73] font-semibold">{pattern.subcategory}</span>
                <span aria-hidden="true">·</span>
                <span>{pattern.isPremium ? 'Premium Digital Pattern' : 'Free Pattern & Tutorial'}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-[#8E747E]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C98796]" /> ★ {pattern.rating} ({pattern.reviewCount} reviews)
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#49343B] leading-tight mb-4">
                {pattern.title}
              </h1>

              {/* Full Description */}
              <p className="text-sm sm:text-base text-[#6E535C] leading-relaxed mb-6">
                {pattern.fullDescription}
              </p>

              {/* Free vs Premium Action Box */}
              <div className="bg-white rounded-2xl border border-[#E8BFC5]/60 p-6 shadow-xs mb-8">
                {pattern.isPremium ? (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-[#E8BFC5]/30">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#8E747E] font-medium">Digital PDF Pattern</div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-3xl font-bold text-[#49343B]">
                            ${pattern.price?.toFixed(2)}
                          </span>
                          <span className="text-xs text-[#6E535C]">USD · Instant digital download</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#6E535C]">
                        <CheckCircle2 className="w-4 h-4 text-[#A65F73]" />
                        <span>{pattern.pdfPageCount}-Page High-Res PDF Included</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2.5 text-xs text-[#6E535C]">
                        <Check className="w-4 h-4 text-[#A65F73] shrink-0 mt-0.5" />
                        <span>Ad-free printable PDF format with full-color tutorial photos and printer-friendly text.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#6E535C]">
                        <Check className="w-4 h-4 text-[#A65F73] shrink-0 mt-0.5" />
                        <span>Both US and UK crochet terminology versions included in separate clean files.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-[#6E535C]">
                        <Check className="w-4 h-4 text-[#A65F73] shrink-0 mt-0.5" />
                        <span>Lifetime updates and access to future pattern clarifications & size expansions.</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => {
                          onAddToCart(pattern);
                          setPurchaseSuccess(true);
                          setTimeout(() => setPurchaseSuccess(false), 3000);
                        }}
                        className="flex-1 py-3.5 px-6 bg-[#A65F73] hover:bg-[#87495B] text-white text-sm font-semibold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {purchaseSuccess ? 'Added to Bag!' : 'Add PDF to Bag'}
                      </button>
                      <button
                        onClick={() => onOpenPrintModal(pattern)}
                        className="py-3.5 px-6 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4 text-[#A65F73]" /> Preview PDF Spec
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E8BFC5]/30">
                      <div>
                        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#A65F73] bg-[#F8E7E9] px-2.5 py-1 rounded-md mb-1">
                          Free Pattern
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-[#49343B]">
                          Complimentary Pattern & Instructions
                        </h4>
                      </div>
                      <span className="text-xs text-[#6E535C]">Available free online & printable</span>
                    </div>

                    <p className="text-xs text-[#6E535C] leading-relaxed mb-5">
                      You can read the entire written pattern below for free, track your stitch progress with our interactive row counter, or download a clean printable PDF copy for your craft basket.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => onOpenPrintModal(pattern)}
                        className="py-3 px-6 bg-[#A65F73] hover:bg-[#87495B] text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                      >
                        <FileDown className="w-4 h-4" /> Download / Print Free PDF
                      </button>
                      <button
                        onClick={() => setActiveTab('instructions')}
                        className="py-3 px-6 bg-[#F8E7E9] hover:bg-[#E8BFC5] text-[#49343B] text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                      >
                        <BookmarkCheck className="w-4 h-4 text-[#A65F73]" /> Jump to Written Pattern
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Progress Bar */}
            <div className="bg-[#FFF9F7] rounded-xl border border-[#E8BFC5]/40 p-4">
              <div className="flex items-center justify-between text-xs font-medium text-[#49343B] mb-2">
                <span className="flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-[#A65F73]" /> Interactive Maker Progress Tracker
                </span>
                <span className="text-[#A65F73] font-semibold">{finishedCount} of {allStepKeys.length} steps checked ({progressPercent}%)</span>
              </div>
              <div className="w-full bg-[#F8E7E9] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#A65F73] h-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation for Detailed Content */}
        <div className="border-b border-[#E8BFC5]/40 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex space-x-1 sm:space-x-4">
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'instructions'
                  ? 'border-[#A65F73] text-[#A65F73] font-semibold'
                  : 'border-transparent text-[#6E535C] hover:text-[#49343B]'
              }`}
            >
              Written Instructions ({pattern.instructions.length} Sections)
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'materials'
                  ? 'border-[#A65F73] text-[#A65F73] font-semibold'
                  : 'border-transparent text-[#6E535C] hover:text-[#49343B]'
              }`}
            >
              Materials & Yarn Checklist
            </button>
            <button
              onClick={() => setActiveTab('abbreviations')}
              className={`pb-3 px-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'abbreviations'
                  ? 'border-[#A65F73] text-[#A65F73] font-semibold'
                  : 'border-transparent text-[#6E535C] hover:text-[#49343B]'
              }`}
            >
              Terminology & Stitches
            </button>
          </div>

          {/* US / UK Terminology Switcher */}
          <div className="flex items-center gap-2 mb-2 text-xs">
            <span className="text-[#8E747E]">Terms:</span>
            <div className="flex items-center bg-[#F8E7E9] p-0.5 rounded-lg border border-[#E8BFC5]/50">
              <button
                onClick={() => setTerminology('US')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  terminology === 'US' ? 'bg-white text-[#A65F73] font-bold shadow-xs' : 'text-[#6E535C]'
                }`}
              >
                US Terms
              </button>
              <button
                onClick={() => setTerminology('UK')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  terminology === 'UK' ? 'bg-white text-[#A65F73] font-bold shadow-xs' : 'text-[#6E535C]'
                }`}
              >
                UK Terms
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Written Instructions */}
        {activeTab === 'instructions' && (
          <div className="space-y-8 max-w-4xl">
            {terminology === 'UK' && (
              <div className="bg-[#F8E7E9] border border-[#E8BFC5] p-3.5 rounded-xl text-xs text-[#6E535C] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#A65F73] shrink-0" />
                <span>Viewing in UK terms: Note that US sc = UK dc, US hdc = UK htr, US dc = UK tr.</span>
              </div>
            )}

            {pattern.instructions.map((section, sIdx) => (
              <div key={sIdx} className="bg-white rounded-2xl border border-[#E8BFC5]/40 p-6 sm:p-8 shadow-xs">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#49343B] mb-2">
                  {section.sectionTitle}
                </h3>
                {section.notes && (
                  <p className="text-xs text-[#8E747E] italic mb-6 pb-3 border-b border-[#E8BFC5]/20">
                    Designer note: {section.notes}
                  </p>
                )}

                <div className="space-y-4">
                  {section.steps.map((step, stepIdx) => {
                    const key = `${sIdx}-${stepIdx}`;
                    const isDone = !!completedSteps[key];

                    return (
                      <div
                        key={stepIdx}
                        onClick={() => toggleStep(key)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isDone
                            ? 'bg-[#F8E7E9]/40 border-[#A65F73]/30 opacity-75'
                            : 'bg-[#FFF9F7]/60 border-[#E8BFC5]/30 hover:border-[#A65F73]/50'
                        }`}
                      >
                        <button
                          type="button"
                          className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                            isDone ? 'bg-[#A65F73] text-white' : 'border border-[#C98796] bg-white'
                          }`}
                        >
                          {isDone && <Check className="w-3.5 h-3.5" />}
                        </button>

                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2 mb-1">
                            <span className="text-xs font-semibold text-[#49343B]">
                              {step.label}
                            </span>
                            {step.stitchCount && (
                              <span className="text-[11px] font-medium text-[#A65F73] bg-[#F8E7E9] px-2 py-0.5 rounded-sm">
                                [{step.stitchCount}]
                              </span>
                            )}
                          </div>
                          <p className={`text-sm text-[#49343B] leading-relaxed ${isDone ? 'line-through text-[#8E747E]' : ''}`}>
                            {step.instruction}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Materials & Tools */}
        {activeTab === 'materials' && (
          <div className="max-w-4xl bg-white rounded-2xl border border-[#E8BFC5]/40 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#49343B] mb-2">
                Materials &amp; Tools Checklist
              </h3>
              <p className="text-xs text-[#6E535C]">
                Check off items you already have in your stash before casting on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pattern.materials.map((mat, idx) => {
                const checked = !!checkedMaterials[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleMaterial(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                      checked
                        ? 'bg-[#F8E7E9]/50 border-[#A65F73]/40 text-[#8E747E]'
                        : 'bg-[#FFF9F7] border-[#E8BFC5]/30 text-[#49343B] hover:border-[#A65F73]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                        checked ? 'bg-[#A65F73] text-white' : 'border border-[#C98796] bg-white'
                      }`}
                    >
                      {checked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span className={`text-xs sm:text-sm ${checked ? 'line-through' : 'font-medium'}`}>
                      {mat}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#E8BFC5]/30 space-y-2 text-xs text-[#6E535C]">
              <p><strong className="text-[#49343B]">Recommended Yarn:</strong> {pattern.yarnDetails}</p>
              <p><strong className="text-[#49343B]">Hook:</strong> {pattern.hookSize}</p>
              <p><strong className="text-[#49343B]">Gauge Swatch:</strong> {pattern.gauge}</p>
            </div>
          </div>
        )}

        {/* Tab 3: Abbreviations & Terminology Key */}
        {activeTab === 'abbreviations' && (
          <div className="max-w-4xl bg-white rounded-2xl border border-[#E8BFC5]/40 p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif text-2xl font-semibold text-[#49343B] mb-2">
              Abbreviations &amp; Stitches Glossary
            </h3>
            <p className="text-xs text-[#6E535C] mb-6">
              Standard crochet stitches and abbreviations referenced throughout this pattern.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8BFC5]/40 text-[#A65F73] font-serif font-semibold">
                    <th className="py-2.5 pr-4">Abbreviation</th>
                    <th className="py-2.5 pr-4">Stitch Name</th>
                    <th className="py-2.5">Instructions / Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8BFC5]/20 text-[#49343B]">
                  {pattern.abbreviations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#FFF9F7]">
                      <td className="py-3 pr-4 font-mono font-bold text-[#A65F73]">{item.abbr}</td>
                      <td className="py-3 pr-4 font-medium">{item.name}</td>
                      <td className="py-3 text-[#6E535C]">{item.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related Patterns Section */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E8BFC5]/30">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#49343B] mb-2">
              You May Also Love
            </h3>
            <p className="text-sm text-[#6E535C] mb-8">
              Coordinating handmade projects crafted in the same romantic aesthetic.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <PatternCard
                  key={rel.id}
                  pattern={rel}
                  isFavorite={false}
                  onToggleFavorite={onToggleFavorite}
                  onSelect={onSelectPattern}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
