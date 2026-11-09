import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { CollectionsSection } from './components/home/CollectionsSection';
import { TrendingSection } from './components/home/TrendingSection';
import { BeginnerSection } from './components/home/BeginnerSection';
import { SeasonalSection } from './components/home/SeasonalSection';
import { FreePatternsSection } from './components/home/FreePatternsSection';
import { NewsletterSection } from './components/home/NewsletterSection';
import { CategoryView } from './components/category/CategoryView';
import { PatternDetail } from './components/patterns/PatternDetail';
import { FreePatternsView } from './components/patterns/FreePatternsView';
import { TutorialsView } from './components/tutorials/TutorialsView';
import { TutorialDetail } from './components/tutorials/TutorialDetail';
import { CartDrawer } from './components/cart/CartDrawer';
import { FavoritesDrawer } from './components/favorites/FavoritesDrawer';
import { SearchModal } from './components/search/SearchModal';
import { PatternPrintModal } from './components/common/PatternPrintModal';
import { InfoModal } from './components/common/InfoModal';

import { CATEGORIES } from './data/categories';
import { PATTERNS } from './data/patterns';
import { TUTORIALS } from './data/tutorials';
import { Pattern, Tutorial, CategoryId, CartItem } from './types';
import {
  getStoredFavorites,
  saveStoredFavorites,
  getStoredCart,
  saveStoredCart,
} from './utils/storage';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>('baby-crochet');
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);

  const [favorites, setFavorites] = useState<string[]>(() => getStoredFavorites());
  const [cart, setCart] = useState<CartItem[]>(() => getStoredCart());

  // Modal / Drawer states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [printPattern, setPrintPattern] = useState<Pattern | null>(null);
  const [infoModalType, setInfoModalType] = useState<'about' | 'contact' | 'privacy' | 'terms' | null>(null);

  // Sync favorites
  useEffect(() => {
    saveStoredFavorites(favorites);
  }, [favorites]);

  // Sync cart
  useEffect(() => {
    saveStoredCart(cart);
  }, [cart]);

  // Keyboard shortcuts (Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsFavoritesOpen(false);
        setIsCartOpen(false);
        setPrintPattern(null);
        setInfoModalType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (pattern: Pattern) => {
    setCart((prev) => {
      if (prev.some((item) => item.pattern.id === pattern.id)) return prev;
      return [...prev, { pattern, addedAt: Date.now() }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (patternId: string) => {
    setCart((prev) => prev.filter((item) => item.pattern.id !== patternId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectPattern = (pattern: Pattern) => {
    setSelectedPattern(pattern);
    setCurrentView('pattern-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCurrentView('tutorial-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: string, id?: string) => {
    if (view === 'category' && id) {
      setSelectedCategoryId(id as CategoryId);
      setCurrentView(`category-${id}`);
    } else if (view === 'tutorials') {
      setCurrentView('tutorials');
    } else if (view === 'free-patterns') {
      setCurrentView('free-patterns');
    } else if (view === 'home') {
      setCurrentView('home');
    } else if (['about', 'contact', 'privacy', 'terms'].includes(view)) {
      setInfoModalType(view as 'about' | 'contact' | 'privacy' | 'terms');
    } else {
      setCurrentView(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeCategory =
    CATEGORIES.find((c) => c.id === selectedCategoryId) || CATEGORIES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F7] text-[#49343B]">
      {/* Top sticky navigation bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        favoritesCount={favorites.length}
        cartCount={cart.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection
              onExplorePatterns={() => handleNavigate('category', 'baby-crochet')}
              onStartCreating={() => handleNavigate('tutorials')}
            />
            <CollectionsSection
              onSelectCategory={(catId) => handleNavigate('category', catId)}
              onSelectTutorials={() => handleNavigate('tutorials')}
            />
            <TrendingSection
              patterns={PATTERNS}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectPattern={handleSelectPattern}
              onViewAllPatterns={() => handleNavigate('category', 'baby-crochet')}
            />
            <BeginnerSection
              onLearnCrochet={() => handleNavigate('tutorials')}
              onExploreBeginnerPatterns={() => handleNavigate('free-patterns')}
            />
            <SeasonalSection
              onSelectSeasonal={(season) => {
                if (season === 'christmas') {
                  handleNavigate('category', 'christmas-crochet');
                } else if (season === 'spring' || season === 'winter') {
                  handleNavigate('category', 'baby-crochet');
                } else {
                  handleNavigate('category', 'amigurumi');
                }
              }}
            />
            <FreePatternsSection
              patterns={PATTERNS}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectPattern={handleSelectPattern}
              onViewAllFree={() => handleNavigate('free-patterns')}
            />
            <NewsletterSection />
          </>
        )}

        {/* Category Views: Baby Crochet, Amigurumi, Christmas Crochet */}
        {currentView.startsWith('category-') && (
          <CategoryView
            category={activeCategory}
            allCategories={CATEGORIES.filter((c) => c.id !== 'tutorials')}
            patterns={PATTERNS}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectPattern={handleSelectPattern}
            onSelectCategory={(id) => handleNavigate('category', id)}
          />
        )}

        {/* Free Patterns Dedicated Catalog */}
        {currentView === 'free-patterns' && (
          <FreePatternsView
            patterns={PATTERNS}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectPattern={handleSelectPattern}
          />
        )}

        {/* Tutorials Catalog */}
        {currentView === 'tutorials' && (
          <TutorialsView
            tutorials={TUTORIALS}
            onSelectTutorial={handleSelectTutorial}
            onExploreBeginner={() => handleNavigate('tutorials')}
          />
        )}

        {/* Individual Pattern Detail Page */}
        {currentView === 'pattern-detail' && selectedPattern && (
          <PatternDetail
            pattern={selectedPattern}
            allPatterns={PATTERNS}
            isFavorite={favorites.includes(selectedPattern.id)}
            onToggleFavorite={handleToggleFavorite}
            onSelectPattern={handleSelectPattern}
            onAddToCart={handleAddToCart}
            onBack={() => handleNavigate('category', selectedPattern.category)}
            onOpenPrintModal={(p) => setPrintPattern(p)}
          />
        )}

        {/* Individual Tutorial Detail Page */}
        {currentView === 'tutorial-detail' && selectedTutorial && (
          <TutorialDetail
            tutorial={selectedTutorial}
            allTutorials={TUTORIALS}
            onBack={() => handleNavigate('tutorials')}
            onSelectTutorial={handleSelectTutorial}
            onExplorePatterns={() => handleNavigate('free-patterns')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Drawers & Interactive Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onDownloadPatternPDF={(pat) => setPrintPattern(pat)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        patterns={PATTERNS}
        onRemoveFavorite={(id) =>
          setFavorites((prev) => prev.filter((item) => item !== id))
        }
        onClearAll={() => setFavorites([])}
        onSelectPattern={handleSelectPattern}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        patterns={PATTERNS}
        tutorials={TUTORIALS}
        onSelectPattern={handleSelectPattern}
        onSelectTutorial={handleSelectTutorial}
      />

      <PatternPrintModal
        pattern={printPattern}
        onClose={() => setPrintPattern(null)}
      />

      <InfoModal
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />
    </div>
  );
}
