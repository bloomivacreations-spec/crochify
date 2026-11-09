import { Tutorial } from '../types';

export const TUTORIALS: Tutorial[] = [
  {
    id: 'tut-1',
    slug: 'magic-ring-masterclass',
    title: 'The Magic Ring (Adjustable Loop) Masterclass',
    subcategory: 'Beginner Tutorials',
    readTime: '6 min read',
    difficulty: 'Beginner',
    description: 'Learn the foundational technique for every amigurumi project and circular granny square with zero gaps in the center.',
    summary: 'The magic ring (or adjustable loop) is the single most important skill for clean amigurumi, circular hats, and center-out blankets. This masterclass breaks down the finger wrap, loop pull, and tension lock step-by-step.',
    image: '/src/assets/images/cat_crochet_tutorial_1794243901825.jpg',
    toolsNeeded: [
      'Medium worsted weight yarn (light color recommended for visibility)',
      '4.0 mm or 5.0 mm crochet hook',
      'Stitch marker',
      'Yarn needle'
    ],
    keyTips: [
      'Leave a 10 cm (4 inch) yarn tail before forming your initial finger cross loop.',
      'Never pull the ring completely tight until you have completed round 1 and counted your stitches.',
      'Always weave the center tail into the stitches in alternating directions so the hole never works itself open during washing.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Forming the Yarn Wrap Over Fingers',
        description: 'Drape the working yarn over your index and middle fingers, leaving a 10 cm tail facing down toward your palm. Wrap the yarn up and over your fingers from front to back, crossing over the first strand to create an "X" on the top of your fingers.',
        tip: 'Hold the crossed "X" securely with your thumb against your ring finger.'
      },
      {
        stepNumber: 2,
        title: 'Inserting the Hook and Pulling the Loop',
        description: 'Insert your crochet hook under the front lower strand of the "X" from right to left. Catch the upper back strand with your hook tip and pull it forward under the first strand. Rotate your hook slightly upward so you have a loop on your hook.',
        tip: 'Keep this loop relaxed; pulling too tight here will make the chain 1 difficult.'
      },
      {
        stepNumber: 3,
        title: 'Locking Chain (The Anchor)',
        description: 'Yarn over with your working yarn and draw it through the loop on your hook. This creates 1 chain stitch, locking your adjustable loop in place. Note: In US single crochet patterns, this chain does not count as a stitch.',
        tip: 'Slide the ring off your fingers now while maintaining a gentle grip on the base of the chain.'
      },
      {
        stepNumber: 4,
        title: 'Crocheting Single Crochets Over the Double Strand',
        description: 'Insert your hook through the center of the ring, ensuring you go under BOTH the main circle loop and the yarn tail strand. Yarn over, pull up a loop (2 loops on hook), yarn over and pull through both loops. You have completed 1 single crochet! Repeat 5 more times for a standard 6-sc amigurumi start.',
        tip: 'Both the circle and tail must be enclosed inside your stitches.'
      },
      {
        stepNumber: 5,
        title: 'The Satisfying Cinch & Closing',
        description: 'Count your 6 V-shaped stitches on the edge to confirm count. Hold the worked stitches between your fingers and gently pull the yarn tail until the center hole closes completely with zero daylight showing.',
        tip: 'Place a locking stitch marker in the 6th stitch to mark your round end.'
      }
    ]
  },
  {
    id: 'tut-2',
    slug: 'invisible-decrease-amigurumi',
    title: 'The Invisible Decrease Technique for Amigurumi',
    subcategory: 'Crochet Stitches',
    readTime: '5 min read',
    difficulty: 'Easy',
    description: 'Transform your crochet toys from bumpy to seamlessly smooth with the signature invisible decrease (inv dec).',
    summary: 'Standard single crochet decreases (sc2tog) often leave noticeable bumps, ridges, and loose stuffing gaps in 3D stuffed toys. The invisible decrease eliminates gaping holes and makes stitch shaping completely imperceptible.',
    image: '/src/assets/images/cat_crochet_tutorial_1794243901825.jpg',
    toolsNeeded: [
      'DK or Sport weight cotton yarn',
      '2.5 mm or 3.0 mm crochet hook'
    ],
    keyTips: [
      'Only insert your hook into the FRONT loops of the two stitches, never the full V.',
      'Maintain tight, consistent tension on your working yarn as you pull through the front loops.',
      'Invisible decreases are best used on the right side of continuous spiral rounds.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Locating the Front Loops',
        description: 'Look at the top of the next two stitches. Each stitch forms a "V". The loop closest to you on the outside of your work is the Front Loop (FLO).',
        tip: 'Tilt your work slightly toward yourself to see both loops clearly.'
      },
      {
        stepNumber: 2,
        title: 'Picking up First and Second Front Loops',
        description: 'Insert the hook from bottom-to-top through the front loop of the first stitch only. Without yarning over, swing the hook tip downward and insert through the front loop of the second stitch.',
        tip: 'You will now have 3 loops sitting on your crochet hook: your original working loop plus the 2 front loops.'
      },
      {
        stepNumber: 3,
        title: 'Yarn Over and Draw Through Front Loops',
        description: 'Yarn over your hook with working yarn and gently draw the loop through the first two front loops on your hook. You will now have 2 loops remaining on your hook.',
        tip: 'Keep your hook parallel to the fabric to avoid stretching the loops out.'
      },
      {
        stepNumber: 4,
        title: 'Final Yarn Over and Complete Stitch',
        description: 'Yarn over once more and draw through the remaining 2 loops on your hook. The decrease is finished, looking identical to a regular single crochet stitch!',
        tip: 'Notice how the back loops left behind behind the fabric naturally hold the fiberfill stuffing inside!'
      }
    ]
  },
  {
    id: 'tut-3',
    slug: 'how-to-read-crochet-patterns',
    title: 'How to Read Crochet Patterns & Abbreviations Like a Pro',
    subcategory: 'Beginner Tutorials',
    readTime: '8 min read',
    difficulty: 'Beginner',
    description: 'Demystify parentheses, brackets, asterisks, and repeat symbols so you can crochet any designer pattern with confidence.',
    summary: 'Crochet patterns can feel like a foreign language when you first start. This comprehensive breakdown teaches you US vs UK terminology, repeat notations, row math, and gauge checks.',
    image: '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg',
    toolsNeeded: [
      'A printed or digital crochet pattern',
      'Highlighter or notes app',
      'Row counter or paper tally sheet'
    ],
    keyTips: [
      'Check whether the designer uses US or UK terms before making your first stitch.',
      'Asterisks (*) denote repeating sequences: everything between * and ; is worked multiple times.',
      'Numbers in brackets at the end of a round (e.g. [36]) always indicate your target stitch count.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Decoding the Anatomy of a Pattern',
        description: 'Every well-written pattern begins with Materials, Gauge, Finished Dimensions, and an Abbreviations glossary. Never skip the gauge swatch, particularly for garments and fitted baby booties!',
        tip: 'If your swatch is too small, go up a hook size; if too big, go down half a millimeter.'
      },
      {
        stepNumber: 2,
        title: 'US vs. UK Terminology Key',
        description: 'US Single Crochet (sc) = UK Double Crochet (dc). US Half Double (hdc) = UK Half Treble (htr). US Double Crochet (dc) = UK Treble (tr). MyCrochify patterns display both or provide an instant toggle.',
        tip: 'Bookmark the abbreviation table on any pattern page for quick one-tap lookup.'
      },
      {
        stepNumber: 3,
        title: 'Brackets, Parentheses & Asterisks',
        description: '[2 sc, inc] x 6 means you work 2 single crochets in consecutive stitches, followed by an increase (2 sc in one stitch), repeating that entire 3-stitch bracket 6 times for a total of 24 stitches.',
        tip: 'Count your stitches at the end of every increase and decrease round!'
      }
    ]
  },
  {
    id: 'tut-4',
    slug: 'blocking-crochet-lacework',
    title: 'The Art of Blocking: From Bumpy to Boutique Finish',
    subcategory: 'Advanced Techniques',
    readTime: '7 min read',
    difficulty: 'Intermediate',
    description: 'Unlock crisp stitch definition, open up lace shell motifs, and give blankets straight edges with steam and wet blocking.',
    summary: 'Blocking is the magical transformative step that elevates handmade crochet from homemade to luxury heirloom quality. Learn the difference between wet blocking for wool, steam blocking for acrylics, and pin-blocking for lace blankets.',
    image: '/src/assets/images/cat_baby_crochet_1794243901227.jpg',
    toolsNeeded: [
      'Interlocking foam blocking tiles with grid markings',
      'Rust-proof stainless steel T-pins',
      'Gentle no-rinse wool wash (e.g., Eucalan)',
      'Clean white bath towels',
      'Garment steamer or steam iron'
    ],
    keyTips: [
      'Never touch a hot iron directly to acrylic yarn; the high heat will melt ("kill") the synthetic fibers.',
      'Use rust-proof pins only—cheap pins will leave permanent orange rust spots on wet cream and pastel yarn.',
      'Measure diagonally as well as width and length to ensure square corners on blankets.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Gentle Bath Soak',
        description: 'Submerge your finished piece in lukewarm water mixed with a capful of gentle wool wash for 15-20 minutes. Do not wring or agitate roughly.',
        tip: 'Squeeze water out gently between your palms without twisting.'
      },
      {
        stepNumber: 2,
        title: 'The Towel Roll Method',
        description: 'Lay a large clean towel flat, spread your crochet item on top, and roll the towel up like a sushi roll. Step gently along the rolled towel to press excess moisture into the towel.',
        tip: 'This removes 80% of moisture safely without stretching delicate lace stitches.'
      },
      {
        stepNumber: 3,
        title: 'Pinning to Measurements on Grid Mats',
        description: 'Transfer item to blocking mats. Pin the 4 corners first to the schematic measurements. Then pin out every scallop fan or picot point along the borders using grid lines as your straight guide.',
        tip: 'Allow 24 to 36 hours to dry thoroughly before unpinning.'
      }
    ]
  }
];
