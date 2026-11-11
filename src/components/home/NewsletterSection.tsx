import React, { useState } from 'react';
import { Mail, CheckCircle2, Download, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const handleDownloadGift = () => {
    setDownloading(true);
    setTimeout(() => {
      // Simulate real file download
      const element = document.createElement('a');
      const file = new Blob(
        [
          `MYCROCHIFY WELCOME GUIDE & BONUS PATTERN\n\nWelcome to MyCrochify: Your Creative World of Crochet!\n\nHere is your complimentary Rose Blossom Coaster pattern:\n- Yarn: DK cotton\n- Hook: 3.5mm\n\nRound 1: Magic ring, ch 2, 12 dc into ring. Join with sl st.\nRound 2: Ch 3, dc in same st, 2 dc in each st around (24 dc). Join.\nRound 3: *Skip 1 st, 5 dc in next st (petal), skip 1 st, sl st in next; repeat 6 times.\nWeave in tails and block flat!\n\nHappy Crocheting from the MyCrochify Design Studio.`
        ],
        { type: 'text/plain' }
      );
      element.href = URL.createObjectURL(file);
      element.download = 'MyCrochify-Welcome-Guide-Bonus-Pattern.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#E5DDD9] relative overflow-hidden">
      {/* Subtle decorative circles in gentle eucalyptus */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#CCD8CF]/25 pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E5DDD9]/30 pointer-events-none blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFF4F0] border border-[#CCD8CF] text-xs font-medium text-[#587261] mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#789480]" />
          <span>The MyCrochify Club</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3E2F35] mb-4">
          A Little Inspiration in Your Inbox
        </h2>

        <p className="text-base text-[#655158] leading-relaxed max-w-xl mx-auto mb-8">
          Join our creative community and receive beautiful crochet patterns, tutorials, and fresh inspiration every Sunday.
        </p>

        {subscribed ? (
          <div className="bg-white rounded-2xl border border-[#CCD8CF] p-8 max-w-lg mx-auto shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EFF4F0] text-[#587261] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#3E2F35]">
              Welcome to the MyCrochify Circle!
            </h3>
            <p className="text-xs text-[#655158]">
              We have reserved your free beginner-to-heirloom starter guide. Download your instant copy below:
            </p>
            <button
              onClick={handleDownloadGift}
              disabled={downloading}
              className="py-3 px-6 bg-[#587261] hover:bg-[#43594B] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Preparing File...' : 'Download Welcome Stitch Guide'}</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3.5 bg-white border border-[#CCD8CF] rounded-xl text-xs sm:text-sm text-[#3E2F35] focus:outline-none focus:border-[#587261] shadow-2xs"
              />
              <button
                type="submit"
                className="py-3.5 px-8 bg-[#587261] hover:bg-[#43594B] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-xs shrink-0 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-[#857279]">
              We treat your inbox with gentle care. No spam, unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
