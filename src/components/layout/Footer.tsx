import React, { useState } from 'react';
import { Heart, Mail, CheckCircle2 } from 'lucide-react';
import { CategoryId } from '../../types';

interface FooterProps {
  onNavigate: (view: string, id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail || !footerEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setFooterEmail('');
    }, 4000);
  };

  const handleNav = (view: string, id?: string) => {
    onNavigate(view, id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFF9F7] border-t border-[#E8BFC5]/40 pt-16 pb-12 text-[#49343B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#E8BFC5]/30">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-8 h-8 rounded-full bg-[#EFF4F0] border border-[#CCD8CF] flex items-center justify-center text-[#587261]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 2a5 5 0 0 1 5 5c0 3.5-3 5-5 8-1 1.5-2 3-2 5" />
                  <path d="M7 16c1-1 3-1 5 1s4 2 5 1" />
                  <circle cx="16" cy="7" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#3E2F35] group-hover:text-[#587261] transition-colors">
                MyCrochify
              </span>
            </button>
            <p className="text-sm text-[#655158] leading-relaxed max-w-sm">
              Your Creative World of Crochet. Dedicated to crafting heirloom baby garments, charming amigurumi friends, and festive holiday decor with detailed PDF patterns and masterclass tutorials.
            </p>
            {/* Social Icons (Pinterest & Instagram) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EFF4F0] border border-[#CCD8CF] hover:bg-[#587261] text-[#587261] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Pinterest"
              >
                {/* Clean Pinterest SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026l.032-.026z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#EFF4F0] border border-[#CCD8CF] hover:bg-[#587261] text-[#587261] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                {/* Clean Instagram SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pattern Categories */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#49343B] mb-4">Collections</h4>
            <ul className="space-y-2.5 text-sm text-[#6E535C]">
              <li>
                <button
                  onClick={() => handleNav('category', 'baby-crochet')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Baby Crochet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('category', 'amigurumi')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Amigurumi Patterns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('category', 'christmas-crochet')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Christmas Crochet
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('free-patterns')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Free Patterns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tutorials')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Crochet Tutorials
                </button>
              </li>
            </ul>
          </div>

          {/* Community & Guides */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#49343B] mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm text-[#6E535C]">
              <li>
                <button
                  onClick={() => handleNav('tutorials')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Beginner Basics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tutorials')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Stitch Encyclopedia
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#A65F73] transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Subscribe Column */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#49343B] mb-4">Stay Inspired</h4>
            <p className="text-xs text-[#6E535C] mb-3 leading-relaxed">
              Get our monthly free heirloom pattern and yarn care guide right to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#A65F73] font-medium bg-[#F8E7E9] p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You are in! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full text-xs px-3 py-2 bg-white border border-[#E8BFC5] rounded-md focus:outline-none focus:border-[#A65F73] text-[#49343B]"
                  required
                />
                <button
                  type="submit"
                  className="w-full text-xs font-medium py-2 px-3 bg-[#A65F73] hover:bg-[#87495B] text-white rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E747E] gap-4">
          <p>© {new Date().getFullYear()} MyCrochify.com. All rights reserved. Your Creative World of Crochet.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#A65F73] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('terms')} className="hover:text-[#A65F73] transition-colors">
              Terms and Conditions
            </button>
            <span className="flex items-center gap-1 text-[#6E535C]">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#A65F73] fill-current" /> for crochet lovers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
