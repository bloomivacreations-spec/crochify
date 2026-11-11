import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { CategoryId } from '../../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, id?: string) => void;
  favoritesCount: number;
  cartCount: number;
  onOpenSearch: () => void;
  onOpenFavorites: () => void;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  favoritesCount,
  cartCount,
  onOpenSearch,
  onOpenFavorites,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: string; categoryId?: CategoryId }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Baby Crochet', view: 'category', categoryId: 'baby-crochet' },
    { label: 'Amigurumi', view: 'category', categoryId: 'amigurumi' },
    { label: 'Christmas Crochet', view: 'category', categoryId: 'christmas-crochet' },
    { label: 'Tutorials', view: 'tutorials' },
    { label: 'Free Patterns', view: 'free-patterns' },
  ];

  const handleLinkClick = (view: string, catId?: string) => {
    onNavigate(view, catId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLinkActive = (item: typeof navLinks[0]) => {
    if (item.view === 'home' && currentView === 'home') return true;
    if (item.view === 'tutorials' && currentView === 'tutorials') return true;
    if (item.view === 'free-patterns' && currentView === 'free-patterns') return true;
    if (item.view === 'category' && currentView === `category-${item.categoryId}`) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F7]/95 backdrop-blur-md border-b border-[#E8BFC5]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#EFF4F0] border border-[#C6D6CA] flex items-center justify-center text-[#587261] group-hover:scale-105 transition-transform shadow-2xs">
              {/* Refined crochet hook & yarn loop SVG motif */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2a5 5 0 0 1 5 5c0 3.5-3 5-5 8-1 1.5-2 3-2 5" />
                <path d="M7 16c1-1 3-1 5 1s4 2 5 1" />
                <circle cx="16" cy="7" r="1" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#3E2F35] group-hover:text-[#587261] transition-colors">
                MyCrochify
              </span>
              <span className="hidden lg:block text-[10px] tracking-widest uppercase font-medium text-[#587261]">
                Your Creative World of Crochet
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((item) => {
              const active = isLinkActive(item);
              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item.view, item.categoryId)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative rounded-md ${
                    active
                      ? 'text-[#587261] font-semibold'
                      : 'text-[#3E2F35] hover:text-[#587261]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#587261] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#3E2F35] hover:text-[#587261] hover:bg-[#EFF4F0] rounded-full transition-colors relative"
              title="Search patterns & tutorials (⌘K)"
              aria-label="Search patterns"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites Trigger */}
            <button
              onClick={onOpenFavorites}
              className="p-2.5 text-[#3E2F35] hover:text-[#587261] hover:bg-[#EFF4F0] rounded-full transition-colors relative"
              title="Saved Favorites"
              aria-label="Saved Favorites"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#587261] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2.5 text-[#3E2F35] hover:text-[#587261] hover:bg-[#EFF4F0] rounded-full transition-colors relative"
              title="Digital Pattern Bag"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#587261] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#49343B] hover:text-[#A65F73] rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8BFC5]/40 bg-[#FFF9F7] px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.view, item.categoryId)}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isLinkActive(item)
                    ? 'bg-[#F8E7E9] text-[#A65F73] font-semibold'
                    : 'text-[#49343B] hover:bg-[#F8E7E9]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E8BFC5]/30 flex items-center justify-around text-sm text-[#49343B]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-1.5 py-2 px-3 hover:text-[#A65F73]"
            >
              <Search className="w-4 h-4" /> Search
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFavorites();
              }}
              className="flex items-center gap-1.5 py-2 px-3 hover:text-[#A65F73]"
            >
              <Heart className="w-4 h-4" /> Favorites ({favoritesCount})
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center gap-1.5 py-2 px-3 hover:text-[#A65F73]"
            >
              <ShoppingBag className="w-4 h-4" /> Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
