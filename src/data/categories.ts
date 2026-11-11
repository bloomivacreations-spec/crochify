import { CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'baby-crochet',
    title: 'Baby Crochet',
    shortDescription: "Sweet handmade creations for life's little moments.",
    longDescription:
      'Wrap your sweetest little treasures in pure comfort. Our baby crochet collection features soft merino blankets, delicate booties with satin ribbon details, classic cardigans, vintage bonnets, and nursery keepsakes designed to become cherished family heirlooms.',
    image: '/images/cat_baby_crochet.jpg',
    subcategories: [
      'Baby Blankets',
      'Baby Clothes',
      'Baby Booties',
      'Baby Hats & Bonnets',
      'Baby Toys',
      'Nursery Decor',
    ],
  },
  {
    id: 'amigurumi',
    title: 'Amigurumi Patterns',
    shortDescription: 'Meet your next adorable handmade companion.',
    longDescription:
      'Discover an enchanting world of soft crochet creatures. From whimsical woodland bunnies and classic teddy bears to charming dolls and miniature botanical friends, each amigurumi pattern is crafted with clear round-by-round guidance and seamless assembly tips.',
    image: '/images/cat_amigurumi_animals.jpg',
    subcategories: [
      'Crochet Animals',
      'Crochet Dolls',
      'Teddy Bears',
      'Cute Characters',
      'Food Amigurumi',
      'Seasonal Amigurumi',
    ],
  },
  {
    id: 'christmas-crochet',
    title: 'Christmas Crochet',
    shortDescription: 'Make the holidays extra special with handmade magic.',
    longDescription:
      'Fill your home with festive warmth and nostalgia. Browse our signature heirloom Christmas ornaments, delicate lace snowflakes, miniature pine trees, cozy stocking patterns, and charming holiday elves designed to bring handmade holiday cheer year after year.',
    image: '/images/cat_christmas_crochet.jpg',
    subcategories: [
      'Santa Claus',
      'Reindeer',
      'Christmas Elves',
      'Christmas Ornaments',
      'Christmas Trees',
      'Christmas Stockings',
      'Festive Home Decor',
    ],
  },
  {
    id: 'tutorials',
    title: 'Crochet Tutorials',
    shortDescription: 'Learn, practice, and grow your crochet skills.',
    longDescription:
      'Whether you are holding a hook for the very first time or mastering complex lace stitches and invisible decreases, our masterclass guides, photo breakdowns, and essential tips will elevate your crochet artistry.',
    image: '/images/cat_crochet_tutorial.jpg',
    subcategories: [
      'Beginner Tutorials',
      'Crochet Stitches',
      'Advanced Techniques',
      'Step-by-Step Projects',
      'Tips & Tricks',
    ],
  },
];
