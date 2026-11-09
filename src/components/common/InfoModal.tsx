import React from 'react';
import { X, Heart, Mail, ShieldCheck, FileText } from 'lucide-react';

interface InfoModalProps {
  type: 'about' | 'contact' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#49343B]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E8BFC5] overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-[#FFF9F7] border-b border-[#E8BFC5]/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'about' && <Heart className="w-5 h-5 text-[#A65F73]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#A65F73]" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#A65F73]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#A65F73]" />}
            <h3 className="font-serif text-xl font-semibold text-[#49343B]">
              {type === 'about' && 'About MyCrochify'}
              {type === 'contact' && 'Contact & Designer Support'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#49343B] hover:text-[#A65F73] rounded-full hover:bg-[#F8E7E9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-[#49343B] space-y-4 leading-relaxed">
          {type === 'about' && (
            <div className="space-y-4">
              <p className="text-[#A65F73] font-serif text-lg italic">
                &ldquo;Your Creative World of Crochet.&rdquo;
              </p>
              <p>
                Founded in 2024 by an independent fiber artist collective, MyCrochify was created with a clear philosophy: crochet should be a serene, luxurious, and deeply fulfilling creative sanctuary.
              </p>
              <p>
                Too many modern craft websites are cluttered with pop-up ads, confusing abbreviations, and low-resolution photos. At MyCrochify, every single pattern is thoroughly tested across different hook gauges and yarn weights, with clear photo guides and printable PDF editions designed to sit comfortably beside your rocking chair.
              </p>
              <div className="p-4 bg-[#F8E7E9]/60 rounded-xl border border-[#E8BFC5]/40 space-y-1">
                <span className="font-semibold text-xs uppercase tracking-wider text-[#A65F73] block">Our Promise</span>
                <p className="text-xs text-[#6E535C]">
                  Clear stitch counts, tested row math, ad-free printable layouts, and dedicated pattern assistance for crafters of all skill levels.
                </p>
              </div>
            </div>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                Have a question about a stitch, need yarn substitution advice, or want to share your finished project photos? We love hearing from our community!
              </p>
              <div className="space-y-2 p-4 bg-[#FFF9F7] rounded-xl border border-[#E8BFC5]/40 text-xs">
                <p><strong>Design Atelier Email:</strong> hello@mycrochify.com</p>
                <p><strong>Pattern Support Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM EST</p>
                <p><strong>Community Hashtag:</strong> #MyCrochifyCreations on Instagram &amp; Pinterest</p>
              </div>
              <p className="text-xs text-[#8E747E]">
                We typically respond to pattern questions and digital delivery support requests within 12–24 business hours.
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-3 text-xs text-[#6E535C]">
              <h4 className="font-semibold text-sm text-[#49343B]">1. Digital Privacy Commitment</h4>
              <p>
                MyCrochify respects your privacy. We never sell, rent, or distribute your email address or personal details to third parties.
              </p>
              <h4 className="font-semibold text-sm text-[#49343B]">2. Newsletter &amp; Digital Downloads</h4>
              <p>
                When you subscribe to our community newsletter or download complimentary pattern files, we use your email exclusively to deliver the requested patterns and weekly project inspiration. You may unsubscribe anytime with a single click.
              </p>
              <h4 className="font-semibold text-sm text-[#49343B]">3. Local Storage &amp; Cookies</h4>
              <p>
                We use browser localStorage strictly to preserve your saved pattern favorites and digital cart between browser visits.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-3 text-xs text-[#6E535C]">
              <h4 className="font-semibold text-sm text-[#49343B]">1. Intellectual Property &amp; Copyright</h4>
              <p>
                All patterns, photographs, written charts, and PDF documents on MyCrochify.com are protected by international copyright laws.
              </p>
              <h4 className="font-semibold text-sm text-[#49343B]">2. Personal Crafting License</h4>
              <p>
                You are granted a personal, non-commercial license to use our patterns. You may sell physical items that you hand-crochet from our patterns in small artisan batches, provided you give design credit to <strong>MyCrochify.com</strong>.
              </p>
              <h4 className="font-semibold text-sm text-[#49343B]">3. Digital File Protection</h4>
              <p>
                You may not resell, redistribute, translate, or duplicate the digital PDF files or written instructions in part or in whole.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FFF9F7] border-t border-[#E8BFC5]/40 text-right">
          <button
            onClick={onClose}
            className="py-2 px-5 bg-[#A65F73] hover:bg-[#87495B] text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
