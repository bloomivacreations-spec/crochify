export type DifficultyLevel = 'Beginner' | 'Easy' | 'Intermediate' | 'Advanced';

export type CategoryId = 'baby-crochet' | 'amigurumi' | 'christmas-crochet' | 'tutorials' | 'free-patterns';

export interface Pattern {
  id: string;
  slug: string;
  title: string;
  category: 'baby-crochet' | 'amigurumi' | 'christmas-crochet';
  subcategory: string;
  description: string;
  fullDescription: string;
  isPremium: boolean;
  price?: number; // In USD, e.g. 5.50
  difficulty: DifficultyLevel;
  estimatedTime: string; // e.g. "4-6 hours"
  hookSize: string; // e.g. "3.5 mm (US E/4)"
  yarnWeight: string; // e.g. "Sport Weight (#2) or DK (#3)"
  yarnDetails: string; // e.g. "150g Drops Safran 100% Egyptian Cotton in Dusty Rose and Cream"
  gauge: string; // e.g. "20 sc x 22 rows = 10 x 10 cm (4 x 4 inches)"
  finishedSize: string; // e.g. "Approx. 22 cm (8.5 inches) tall"
  materials: string[];
  abbreviations: { abbr: string; name: string; meaning: string }[];
  instructions: {
    sectionTitle: string;
    notes?: string;
    steps: {
      stepNumber?: number;
      label: string;
      instruction: string;
      stitchCount?: string;
    }[];
  }[];
  image: string;
  galleryImages: string[];
  featured?: boolean;
  trending?: boolean;
  seasonal?: 'spring' | 'summer' | 'fall' | 'winter' | 'christmas' | 'easter' | 'halloween';
  rating: number;
  reviewCount: number;
  pdfPageCount: number;
  pdfUrl?: string;
  dateAdded: string;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  subcategory: 'Beginner Tutorials' | 'Crochet Stitches' | 'Advanced Techniques' | 'Step-by-Step Projects' | 'Tips & Tricks';
  readTime: string;
  difficulty: DifficultyLevel;
  description: string;
  summary: string;
  image: string;
  toolsNeeded: string[];
  keyTips: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  videoUrlPlaceholder?: string;
}

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  subcategories: string[];
}

export interface CartItem {
  pattern: Pattern;
  addedAt: number;
}
