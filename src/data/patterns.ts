import { Pattern } from '../types';

export const PATTERNS: Pattern[] = [
  {
    id: 'pat-1',
    slug: 'vintage-rosebud-baby-booties',
    title: 'Vintage Rosebud Baby Booties',
    category: 'baby-crochet',
    subcategory: 'Baby Booties',
    description: 'Charming Victorian-inspired crochet booties with delicate scalloped cuffs and soft satin ribbon ties.',
    fullDescription: 'Craft an unforgettable baby shower keepsake with the Vintage Rosebud Booties. Designed with a structured cushioned sole, a snug ankle cuff decorated with shell scallops, and woven silk ribbons that ensure a secure and comfortable fit on tiny feet. Tested across sizes 0-3 months, 3-6 months, and 6-12 months.',
    isPremium: false,
    difficulty: 'Easy',
    estimatedTime: '2 - 3 hours',
    hookSize: '3.0 mm (US C/2 or D/3)',
    yarnWeight: 'DK / Light Worsted (#3)',
    yarnDetails: '50g Rico Baby Cotton Soft (50% cotton, 50% acrylic) in Soft Ecru & Rosebud Pink',
    gauge: '11 hdc x 9 rows = 5 x 5 cm (2 x 2 inches)',
    finishedSize: 'Sole length: 9.5 cm (0-3m), 10.5 cm (3-6m), 11.5 cm (6-12m)',
    materials: [
      '50g DK Cotton-Blend Yarn in Soft Ecru',
      '20g DK Cotton-Blend Yarn in Rosebud Pink for cuffs',
      '3.0 mm crochet hook (or size needed to obtain gauge)',
      'Tapestry yarn needle for weaving in ends',
      'Two 40 cm lengths of 10 mm wide double-faced satin ribbon in blush pink',
      '2 locking stitch markers',
      'Sharp embroidery scissors'
    ],
    abbreviations: [
      { abbr: 'ch', name: 'Chain', meaning: 'Yarn over and pull loop through' },
      { abbr: 'sc', name: 'Single Crochet', meaning: 'Insert hook, yarn over, pull up loop, yarn over, pull through 2 loops' },
      { abbr: 'hdc', name: 'Half Double Crochet', meaning: 'Yarn over, insert hook, pull up loop, yarn over, pull through all 3 loops' },
      { abbr: 'dc', name: 'Double Crochet', meaning: 'Yarn over, insert hook, pull loop, [yarn over, pull through 2] twice' },
      { abbr: 'sc2tog', name: 'Single Crochet Decrease', meaning: 'Insert into next 2 stitches, pull loops, pull through all 3' },
      { abbr: 'hdc2tog', name: 'Half Double Crochet Decrease', meaning: 'Yarn over, insert into next 2 stitches, pull loops, pull through all 5' },
      { abbr: 'sl st', name: 'Slip Stitch', meaning: 'Insert hook into stitch, pull loop through both work and hook loop' },
      { abbr: 'BLO', name: 'Back Loop Only', meaning: 'Work stitch exclusively through the back loop of the previous round' }
    ],
    instructions: [
      {
        sectionTitle: 'Sole Construction (Worked in continuous oval rounds)',
        notes: 'Do not turn at the end of rounds unless instructed. Use a stitch marker to mark the first stitch.',
        steps: [
          {
            stepNumber: 1,
            label: 'Foundation Chain',
            instruction: 'Using Ecru yarn and 3.0mm hook, ch 11 (13, 15 for larger sizes).',
            stitchCount: '11 chains'
          },
          {
            stepNumber: 2,
            label: 'Round 1 (Sole Base)',
            instruction: '2 hdc in 3rd ch from hook. Hdc in next 7 ch. 6 hdc in the last ch (forming the toe curve). Working down the opposite side of the foundation chain: Hdc in next 7 ch, 2 hdc in starting chain. Sl st to first hdc to join.',
            stitchCount: '24 stitches'
          },
          {
            stepNumber: 3,
            label: 'Round 2 (Sole Expansion)',
            instruction: 'Ch 2 (does not count as st). 2 hdc in next 2 sts. Hdc in next 7 sts. 2 hdc in next 6 sts around toe. Hdc in next 7 sts, 2 hdc in last 2 sts. Sl st to join.',
            stitchCount: '34 stitches'
          },
          {
            stepNumber: 4,
            label: 'Round 3 (Sole Edge Finishing)',
            instruction: 'Ch 1, sc in each st around, slip stitch to first sc. Fasten off Ecru or keep working for upper body.',
            stitchCount: '34 stitches'
          }
        ]
      },
      {
        sectionTitle: 'Upper Bootie & Toe Shaping',
        notes: 'Round 4 is worked into Back Loop Only to create the clean baseline ridge of the bootie.',
        steps: [
          {
            stepNumber: 5,
            label: 'Round 4 (Base Ridge)',
            instruction: 'Attach Ecru yarn in center heel. Ch 1, working in BLO only, sc in each st around. Join with sl st.',
            stitchCount: '34 stitches'
          },
          {
            stepNumber: 6,
            label: 'Round 5 (Side Wall)',
            instruction: 'Ch 1, sc through both loops in each st around. Join with sl st.',
            stitchCount: '34 stitches'
          },
          {
            stepNumber: 7,
            label: 'Round 6 (Toe Decreases)',
            instruction: 'Ch 1, sc in next 10 sts. [Sc2tog] 7 times across the toe curve. Sc in remaining 10 sts. Sl st to join.',
            stitchCount: '27 stitches'
          },
          {
            stepNumber: 8,
            label: 'Round 7 (Final Toe Shaping)',
            instruction: 'Ch 1, sc in next 9 sts. [Hdc2tog] 5 times across front toe. Sc in next 8 sts. Sl st to join.',
            stitchCount: '22 stitches'
          }
        ]
      },
      {
        sectionTitle: 'Ankle Ribbing & Scallop Lace Collar',
        notes: 'Create the eyelet holes for the satin ribbon and finish with soft scalloped shell arches.',
        steps: [
          {
            stepNumber: 9,
            label: 'Round 8 (Ribbon Eyelets)',
            instruction: 'Ch 3 (counts as dc). [Ch 1, skip 1 st, dc in next st] around to end. Ch 1, sl st into 2nd ch of starting ch 3.',
            stitchCount: '11 eyelets'
          },
          {
            stepNumber: 10,
            label: 'Round 9 (Ankle Neck)',
            instruction: 'Ch 1, 2 sc into each ch-1 space around. Sl st to join.',
            stitchCount: '22 stitches'
          },
          {
            stepNumber: 11,
            label: 'Round 10 (Rosebud Scallop Edge)',
            instruction: 'Switch to Rosebud Pink yarn. *Skip 1 st, 5 dc in next st (shell formed), skip 1 st, sl st in next st; repeat from * around. Join and fasten off with invisible join.',
            stitchCount: '5 decorative shells'
          },
          {
            stepNumber: 12,
            label: 'Assembly & Ribbon Weave',
            instruction: 'Weave in all yarn tails on wrong side. Thread satin ribbon through eyelet openings of Round 8 starting from center front, tie into a gentle tailored bow.',
            stitchCount: 'Pair complete'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_baby_crochet_1794243901227.jpg',
    galleryImages: [
      '/src/assets/images/cat_baby_crochet_1794243901227.jpg',
      '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg'
    ],
    featured: true,
    trending: true,
    rating: 4.95,
    reviewCount: 142,
    pdfPageCount: 8,
    dateAdded: '2026-09-12'
  },
  {
    id: 'pat-2',
    slug: 'flora-the-meadow-bunny',
    title: 'Flora the Meadow Amigurumi Bunny',
    category: 'amigurumi',
    subcategory: 'Crochet Animals',
    description: 'An adorable heirloom amigurumi bunny with posable floppy ears, floral blossom crown, and pastel bow.',
    fullDescription: 'Meet Flora, our signature meadow companion. Crocheted in seamless spirals with organic combed cotton, Flora features sweet rosy embroidered cheeks, an interchangeable miniature blossom tiara, and a classic linen bow. Includes detailed photo tutorials for invisible decreases, seamless ear attachment, and facial embroidery.',
    isPremium: true,
    price: 5.80,
    difficulty: 'Intermediate',
    estimatedTime: '6 - 8 hours',
    hookSize: '2.5 mm (US B/1 or C/2)',
    yarnWeight: 'Sport / 4-ply Cotton (#2)',
    yarnDetails: '100g Schachenmayr Catania Cotton (Cream, Dusty Rose, Mint Green, Buttercup Yellow)',
    gauge: '26 sc x 28 rounds = 10 x 10 cm in spiral sc',
    finishedSize: 'Approx. 24 cm (9.5 inches) from toes to ear tips',
    materials: [
      '100g Combed Sport Cotton in Cream (Main Body)',
      '30g Sport Cotton in Vintage Dusty Rose (Bloomers & Bow)',
      'Small scraps of Pink, Butter Yellow, and Mint for flower crown',
      'Safety eyes 8mm (or black cotton thread for embroidery)',
      'Hypoallergenic polyester fiberfill stuffing',
      '2.5 mm ergonomic crochet hook',
      'Long doll sculpting needle',
      'Stitch marker and sewing pins'
    ],
    abbreviations: [
      { abbr: 'mr', name: 'Magic Ring', meaning: 'Adjustable loop to begin circular amigurumi work' },
      { abbr: 'sc', name: 'Single Crochet', meaning: 'Insert hook, yarn over, pull up loop, pull through 2' },
      { abbr: 'inc', name: 'Increase', meaning: 'Work 2 single crochets into the same stitch' },
      { abbr: 'dec', name: 'Invisible Decrease', meaning: 'Pick up front loops of next 2 stitches, yarn over, pull through, pull through 2' },
      { abbr: 'sl st', name: 'Slip Stitch', meaning: 'Insert hook, yarn over, draw through loop on hook' }
    ],
    instructions: [
      {
        sectionTitle: 'Head & Facial Sculpting',
        notes: 'Work in continuous spiral rounds without joining. Stuff firmly as you go, particularly around lower cheeks.',
        steps: [
          {
            stepNumber: 1,
            label: 'Rounds 1 - 3 (Head Crown)',
            instruction: 'Make MR, 6 sc in ring (6). R2: [Inc] 6 times (12). R3: [1 sc, inc] 6 times (18).',
            stitchCount: '18 stitches'
          },
          {
            stepNumber: 2,
            label: 'Rounds 4 - 8 (Crown Expansion)',
            instruction: 'R4: [2 sc, inc] 6 times (24). R5: [3 sc, inc] 6 times (30). R6: [4 sc, inc] 6 times (36). R7: [5 sc, inc] 6 times (42). R8: [6 sc, inc] 6 times (48).',
            stitchCount: '48 stitches'
          },
          {
            stepNumber: 3,
            label: 'Rounds 9 - 15 (Eye Placement & Cheeks)',
            instruction: 'Sc in each of the 48 sts for 7 rounds. Insert safety eyes between Rounds 13 and 14, spacing 9 stitches apart.',
            stitchCount: '48 stitches'
          },
          {
            stepNumber: 4,
            label: 'Rounds 16 - 22 (Cheek Shaping & Base Closure)',
            instruction: 'R16: 12 sc, [inc, 1 sc] 6 times across cheek, 12 sc, [inc, 1 sc] 6 times across cheek (60). R17-18: Sc around (60). R19: [8 sc, dec] 6 times (54). R20: [7 sc, dec] 6 times (48). R21: [4 sc, dec] 8 times (40). R22: [3 sc, dec] 8 times (32). Stuff head firmly.',
            stitchCount: '32 stitches'
          }
        ]
      },
      {
        sectionTitle: 'Floppy Bunny Ears (Make 2)',
        notes: 'Do not stuff the ears to maintain an authentic draped, soft silhouette.',
        steps: [
          {
            stepNumber: 5,
            label: 'Ears Structure',
            instruction: 'R1: MR, 6 sc (6). R2: [1 sc, inc] 3 times (9). R3: [2 sc, inc] 3 times (12). R4: [3 sc, inc] 3 times (15). R5: [4 sc, inc] 3 times (18). R6-15: Sc around (18). R16: [4 sc, dec] 3 times (15). R17-20: Sc around (15). Flatten top opening and sc 7 sts across closed top.',
            stitchCount: '7 flat stitches'
          }
        ]
      },
      {
        sectionTitle: 'Seamless One-Piece Legs & Body',
        notes: 'Legs are crocheted first, then joined with 3 chains to form the body in one seamless transition.',
        steps: [
          {
            stepNumber: 6,
            label: 'Leg Joining',
            instruction: 'After finishing Leg 2, do not cut yarn. Ch 3, join to Leg 1 with sc. Sc around Leg 1 (18 sts), sc in 3 loops of bridge ch, sc around Leg 2 (18 sts), sc in opposite loops of bridge (42 sts total).',
            stitchCount: '42 stitches'
          },
          {
            stepNumber: 7,
            label: 'Body Rounds & Colorwork',
            instruction: 'Switch to Vintage Dusty Rose yarn for bloomers. Work 8 rounds even in sc (42). Gradually decrease by 6 sts every 3 rounds up to the neck opening (20 sts).',
            stitchCount: '20 neck stitches'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_amigurumi_animals_1794243902181.jpg',
    galleryImages: [
      '/src/assets/images/cat_amigurumi_animals_1794243902181.jpg',
      '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg'
    ],
    featured: true,
    trending: true,
    rating: 4.98,
    reviewCount: 318,
    pdfPageCount: 16,
    dateAdded: '2026-08-20'
  },
  {
    id: 'pat-3',
    slug: 'heirloom-scallop-baby-blanket',
    title: 'Heirloom Scallop Shell Baby Blanket',
    category: 'baby-crochet',
    subcategory: 'Baby Blankets',
    description: 'A luxurious heirloom blanket featuring delicate vintage shell lace stitches and a romantic scalloped border.',
    fullDescription: 'The crown jewel of any handmade nursery. This baby blanket combines soothing textured rhythmic stitching with an airy, breathable drape that keeps baby cozy in all seasons. The border features a 4-tier scalloped fan trim inspired by French vintage lace.',
    isPremium: true,
    price: 6.50,
    difficulty: 'Intermediate',
    estimatedTime: '15 - 20 hours',
    hookSize: '4.0 mm (US G/6)',
    yarnWeight: 'DK / Light Worsted (#3)',
    yarnDetails: '400g Cashmere & Merino Blend (80% extrafine merino, 20% cashmere) in Warm Rose Ivory',
    gauge: '4 pattern repeats x 8 rows = 10 x 10 cm in shell pattern',
    finishedSize: '85 x 105 cm (33.5 x 41.5 inches)',
    materials: [
      '8 skeins (50g / 135m each) Luxury Merino/Cashmere yarn in Rose Ivory',
      '4.0 mm crochet hook',
      'Blocking mats and rust-proof T-pins',
      'Tapestry needle and measuring tape'
    ],
    abbreviations: [
      { abbr: 'ch', name: 'Chain', meaning: 'Foundation stitches' },
      { abbr: 'dc', name: 'Double Crochet', meaning: 'Yarn over, pull loop, [yo, pull 2] twice' },
      { abbr: 'shell', name: 'Shell Stitch', meaning: '5 dc in specified stitch' },
      { abbr: 'v-st', name: 'V-Stitch', meaning: '(dc, ch 1, dc) in same stitch' }
    ],
    instructions: [
      {
        sectionTitle: 'Main Blanket Body',
        notes: 'Multiple of 6 + 2 for foundation chain.',
        steps: [
          {
            stepNumber: 1,
            label: 'Foundation Chain',
            instruction: 'Ch 134 loosely using 4.0 mm hook.',
            stitchCount: '134 chains'
          },
          {
            stepNumber: 2,
            label: 'Row 1 (Pattern Setup)',
            instruction: 'Sc in 2nd ch from hook. *Skip 2 ch, 5 dc in next ch (shell), skip 2 ch, sc in next ch; repeat from * across to end. Turn.',
            stitchCount: '22 shells'
          },
          {
            stepNumber: 3,
            label: 'Row 2 (Alternating Fans)',
            instruction: 'Ch 3 (counts as dc), 2 dc in first sc. *Sc in center dc of next shell, 5 dc in next sc; repeat from * across, ending with 3 dc in final sc. Turn.',
            stitchCount: '21 full shells, 2 half shells'
          },
          {
            stepNumber: 4,
            label: 'Rows 3 - 88 (Pattern Continuation)',
            instruction: 'Repeat Rows 1 and 2 until blanket reaches 98 cm from foundation edge, ending with a Row 1 repeat.',
            stitchCount: '88 total rows'
          }
        ]
      },
      {
        sectionTitle: 'Victorian Scallop Border',
        notes: 'Work around all four edges continuously with corner expansions.',
        steps: [
          {
            stepNumber: 5,
            label: 'Border Round 1 (Even Foundation Frame)',
            instruction: 'Ch 1, sc evenly around all four sides of blanket, working (sc, ch 2, sc) in each corner. Sl st to join.',
            stitchCount: 'Even frame'
          },
          {
            stepNumber: 6,
            label: 'Border Round 2 (Picot Shell Trim)',
            instruction: '*Skip 2 sts, [7 dc with picot in 4th dc] in next st, skip 2 sts, sc in next st; repeat around perimeter. Wet block for breathtaking lace definition.',
            stitchCount: 'Border complete'
          }
        ]
      }
    ],
    image: '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg',
    galleryImages: [
      '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg',
      '/src/assets/images/cat_baby_crochet_1794243901227.jpg'
    ],
    featured: true,
    trending: true,
    rating: 5.0,
    reviewCount: 284,
    pdfPageCount: 12,
    dateAdded: '2026-09-01'
  },
  {
    id: 'pat-4',
    slug: 'nostalgic-frosted-snowflake-baubles',
    title: 'Nostalgic Frosted Snowflake Baubles',
    category: 'christmas-crochet',
    subcategory: 'Christmas Ornaments',
    description: 'Delicate lace snowflake ornaments with wooden bead accents and vintage rose and ivory details for a cozy festive tree.',
    fullDescription: 'Add nostalgic timeless beauty to your Christmas tree. This pattern includes 3 coordinating lace bauble motifs: the Winter Rose Star, the Frosted Pine Medallion, and the Starlight Sphere. Perfect for holiday gifting, wreath embellishments, or tree styling.',
    isPremium: false,
    difficulty: 'Easy',
    estimatedTime: '1 - 2 hours per ornament',
    hookSize: '2.25 mm (US Steel 1)',
    yarnWeight: 'Fingering / Lace (#1)',
    yarnDetails: '50g Mercerized Crochet Cotton Thread in Ecru & Vintage Dusty Rose',
    gauge: 'Round 1-3 = 4 cm (1.5 inches) diameter',
    finishedSize: 'Ornament diameter: 8 cm to 10 cm',
    materials: [
      '50g Size 10 or 3-ply Mercerized Cotton in Ecru White & Rose',
      '2.25 mm crochet hook',
      'Natural wooden beads (12mm and 8mm)',
      'Natural jute twine or gold metallic embroidery cord for hanging',
      'Stiffy fabric stiffener or sugar water starch for blocking'
    ],
    abbreviations: [
      { abbr: 'mr', name: 'Magic Ring', meaning: 'Adjustable loop ring' },
      { abbr: 'ch-sp', name: 'Chain Space', meaning: 'Space formed by chains in previous row' },
      { abbr: 'tr', name: 'Treble Crochet', meaning: 'Yarn over twice, insert hook, pull loop, [yo, pull 2] 3 times' },
      { abbr: 'picot', name: 'Picot Stitch', meaning: 'Ch 3, sl st into first ch' }
    ],
    instructions: [
      {
        sectionTitle: 'Winter Snowflake Motif',
        notes: 'Work in joined rounds with slip stitch to top of starting chain.',
        steps: [
          {
            stepNumber: 1,
            label: 'Round 1 (Core Star)',
            instruction: 'Make MR, ch 4 (counts as dc + ch 1), [dc, ch 1] 11 times into ring. Sl st into 3rd ch of starting ch 4.',
            stitchCount: '12 dc, 12 ch-1 spaces'
          },
          {
            stepNumber: 2,
            label: 'Round 2 (Petal Expansion)',
            instruction: 'Sl st into first ch-1 sp. Ch 2, hdc in same space. Ch 2. *2 hdc in next ch-1 sp, ch 2; repeat from * around. Sl st to first hdc.',
            stitchCount: '12 clusters of 2 hdc'
          },
          {
            stepNumber: 3,
            label: 'Round 3 (Snowflake Points)',
            instruction: 'Sl st to ch-2 sp. *Ch 1, in next sp work: (3 dc, ch 3, picot, ch 3, 3 dc), ch 1, sl st in next sp; repeat from * 6 times around to form 6 crystalline points.',
            stitchCount: '6 star points'
          },
          {
            stepNumber: 4,
            label: 'Starching & Hanging Finials',
            instruction: 'Pin out points on foam blocking board, apply starch solution, allow 24h to dry until rigid. Thread top cord through wooden beads with a hanging loop.',
            stitchCount: 'Finished bauble'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_christmas_crochet_1794243901890.jpg',
    galleryImages: [
      '/src/assets/images/cat_christmas_crochet_1794243901890.jpg',
      '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg'
    ],
    featured: true,
    trending: true,
    seasonal: 'christmas',
    rating: 4.96,
    reviewCount: 205,
    pdfPageCount: 6,
    dateAdded: '2026-10-05'
  },
  {
    id: 'pat-5',
    slug: 'miniature-dusty-rose-fir-tree',
    title: 'Miniature Dusty Rose Fir Tree',
    category: 'christmas-crochet',
    subcategory: 'Christmas Trees',
    description: 'Charming tiered tabletop Christmas tree with textured crocodile stitch branches, wooden base, and pearl bead snow.',
    fullDescription: 'Bring Scandinavian holiday elegance to your mantelpiece. Crocheted in concentric tiered layers of dimensional petal stitches, this miniature Christmas tree stands upright on a natural beechwood spool base, crowned with a tiny crochet star.',
    isPremium: true,
    price: 4.90,
    difficulty: 'Easy',
    estimatedTime: '3 - 4 hours',
    hookSize: '3.5 mm (US E/4)',
    yarnWeight: 'Worsted / Aran (#4)',
    yarnDetails: '80g Merino Aran Yarn in Dusty Rose and Frosted White',
    gauge: '18 sc = 10 cm (4 inches)',
    finishedSize: 'Height: 18 cm (7 inches)',
    materials: [
      '80g Worsted Wool in Dusty Rose',
      'Small wooden round slice / wood stand base (5 cm diameter)',
      'Mini faux pearls (4mm) for ornaments',
      'Craft glue or glue gun for mounting onto base',
      '3.5 mm hook'
    ],
    abbreviations: [
      { abbr: 'sc', name: 'Single Crochet', meaning: 'Single crochet' },
      { abbr: 'dc', name: 'Double Crochet', meaning: 'Double crochet' },
      { abbr: 'bpdc', name: 'Back Post Double Crochet', meaning: 'Work dc around the post from back to front' }
    ],
    instructions: [
      {
        sectionTitle: 'Conical Tree Core & Tier Ruffles',
        notes: 'Work cone from top tip downwards, adding ruffle tiers in designated front loop ridges.',
        steps: [
          {
            stepNumber: 1,
            label: 'Cone Base',
            instruction: 'Ch 2, 4 sc in 2nd ch from hook. Increase by 2 sts every other round until reaching 36 stitches at base.',
            stitchCount: '36 stitches'
          },
          {
            stepNumber: 2,
            label: 'Branch Layering',
            instruction: 'Working into front loops of designated tiers, crochet [sc, hdc, 3 dc, hdc, sc] scallops around each tier.',
            stitchCount: '5 branch tiers'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_christmas_crochet_1794243901890.jpg',
    galleryImages: [
      '/src/assets/images/cat_christmas_crochet_1794243901890.jpg'
    ],
    featured: false,
    trending: true,
    seasonal: 'christmas',
    rating: 4.92,
    reviewCount: 97,
    pdfPageCount: 8,
    dateAdded: '2026-10-14'
  },
  {
    id: 'pat-6',
    slug: 'classic-heritage-teddy-bear',
    title: 'Classic Heritage Amigurumi Teddy Bear',
    category: 'amigurumi',
    subcategory: 'Teddy Bears',
    description: 'A timeless vintage-inspired teddy bear with moveable jointed arms, hand-embroidered nose, and gingham necktie.',
    fullDescription: 'Evoking the magic of antique nursery companions, this heritage teddy bear is crafted with ultra-soft organic wool yarn. Featuring perfectly proportioned ears, gentle snout embroidery, and articulated button-jointed limbs.',
    isPremium: false,
    difficulty: 'Easy',
    estimatedTime: '5 - 7 hours',
    hookSize: '3.0 mm (US D/3)',
    yarnWeight: 'Sport / DK Cotton Blend (#3)',
    yarnDetails: '100g Soft Oatmeal Wool & 10g Chocolate Brown for embroidery',
    gauge: '22 sc x 24 rounds = 10 x 10 cm',
    finishedSize: '20 cm (8 inches) sitting',
    materials: [
      '100g Natural Oatmeal DK Yarn',
      '10g Dark Chocolate thread for snout & claws',
      'Safety eyes or embroidered eyes',
      'Gingham bow ribbon (15mm wide)',
      'Fiberfill stuffing'
    ],
    abbreviations: [
      { abbr: 'mr', name: 'Magic Ring', meaning: 'Magic loop' },
      { abbr: 'sc', name: 'Single Crochet', meaning: 'Single crochet' },
      { abbr: 'dec', name: 'Decrease', meaning: 'Single crochet decrease' }
    ],
    instructions: [
      {
        sectionTitle: 'Bear Head & Snout',
        notes: 'Stuff muzzle firmly before completing head decrease rounds.',
        steps: [
          {
            stepNumber: 1,
            label: 'Snout',
            instruction: 'MR, 6 sc (6). Inc in each st (12). [1 sc, inc] around (18). 2 rounds even (18). Fasten off leaving long tail for sewing.',
            stitchCount: '18 stitches'
          },
          {
            stepNumber: 2,
            label: 'Head',
            instruction: 'MR, 6 sc. Expand up to 48 stitches, work 8 rounds even, then decrease down to 18 stitches. Sew snout in center and embroider nose.',
            stitchCount: '48 to 18 stitches'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_amigurumi_animals_1794243902181.jpg',
    galleryImages: [
      '/src/assets/images/cat_amigurumi_animals_1794243902181.jpg'
    ],
    featured: true,
    trending: false,
    rating: 4.97,
    reviewCount: 189,
    pdfPageCount: 10,
    dateAdded: '2026-07-15'
  },
  {
    id: 'pat-7',
    slug: 'sweet-pea-cardigan-and-bonnet',
    title: 'Sweet Pea Bonnet & Cardigan Set',
    category: 'baby-crochet',
    subcategory: 'Baby Clothes',
    description: 'An ethereal newborn cardigan and bonnet set with delicate floral eyelet yoke and mother-of-pearl buttons.',
    fullDescription: 'A sublime heirloom layette piece. The Sweet Pea Cardigan is worked top-down seamlessly with raglan sleeves and delicate floral leaf eyelet clusters along the chest and hem. Accompanied by a matching vintage pixie bonnet with soft ties.',
    isPremium: true,
    price: 6.95,
    difficulty: 'Intermediate',
    estimatedTime: '10 - 14 hours',
    hookSize: '3.5 mm (US E/4)',
    yarnWeight: 'Sport / Baby Merino (#2)',
    yarnDetails: '150g Debbie Bliss Baby Cashmerino in Pale Blush & Vanilla',
    gauge: '22 sts x 12 rows = 10 x 10 cm in dc pattern',
    finishedSize: 'Sizes: Newborn, 0-3m, 3-6m, 6-12m',
    materials: [
      '3 skeins (50g / 125m each) Baby Cashmerino in Blush Pink',
      '3.5 mm hook',
      '4 genuine mother-of-pearl buttons (12mm)',
      'Stitch markers and tapestry needle'
    ],
    abbreviations: [
      { abbr: 'raglan', name: 'Raglan Corner', meaning: '(dc, ch 2, dc) in space' },
      { abbr: 'dc', name: 'Double Crochet', meaning: 'Standard double crochet' }
    ],
    instructions: [
      {
        sectionTitle: 'Seamless Raglan Yoke',
        notes: 'Top-down yoke working both back, shoulders, and front panels simultaneously.',
        steps: [
          {
            stepNumber: 1,
            label: 'Neck Foundation',
            instruction: 'Ch 53. Row 1: Dc in 3rd ch from hook, [7 front sts, raglan, 8 sleeve sts, raglan, 17 back sts, raglan, 8 sleeve sts, raglan, 7 front sts].',
            stitchCount: '55 stitches'
          },
          {
            stepNumber: 2,
            label: 'Yoke Growth & Sleeve Separation',
            instruction: 'Repeat raglan growth for 10 rows. Separate sleeve stitches onto waste yarn. Join body panels and continue down in floral lace stitch.',
            stitchCount: 'Body established'
          }
        ]
      }
    ],
    image: '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg',
    galleryImages: [
      '/src/assets/images/hero_crochet_lifestyle_1794243900429.jpg',
      '/src/assets/images/cat_baby_crochet_1794243901227.jpg'
    ],
    featured: false,
    trending: true,
    rating: 4.99,
    reviewCount: 167,
    pdfPageCount: 14,
    dateAdded: '2026-08-30'
  },
  {
    id: 'pat-8',
    slug: 'clementine-the-christmas-elf',
    title: 'Clementine the Christmas Elf',
    category: 'christmas-crochet',
    subcategory: 'Christmas Elves',
    description: 'A whimsical holiday elf amigurumi with curled pointy shoes, striped stockings, and a jingle bell cap.',
    fullDescription: 'Clementine brings holiday charm to life with her cozy knitted scarf, striped stockings, and oversized floppy pom-pom hat. A joy to craft as an elf-on-the-shelf alternative or treasured holiday companion.',
    isPremium: true,
    price: 5.50,
    difficulty: 'Intermediate',
    estimatedTime: '7 - 9 hours',
    hookSize: '2.75 mm (US C/2)',
    yarnWeight: 'Sport / DK Cotton Blend (#2/#3)',
    yarnDetails: 'Candy Cane Red, Forest Green, Biscuit Cream, and Snow White',
    gauge: '24 sc x 26 rows = 10 x 10 cm',
    finishedSize: '28 cm (11 inches) tall',
    materials: [
      '50g Red, 50g Cream, 30g Forest Green sport cotton',
      'Mini brass jingle bell (10mm)',
      'Safety eyes 9mm',
      'Fiberfill'
    ],
    abbreviations: [
      { abbr: 'sc', name: 'Single Crochet', meaning: 'Single crochet' },
      { abbr: 'flo', name: 'Front Loop Only', meaning: 'Work into front loop' }
    ],
    instructions: [
      {
        sectionTitle: 'Legs & Candy Cane Stripes',
        notes: 'Change colors every 2 rounds without cutting yarn to carry colors neatly inside.',
        steps: [
          {
            stepNumber: 1,
            label: 'Curled Elf Shoe',
            instruction: 'Work from toe point backwards using short-row turning to create the characteristic curved elf toe.',
            stitchCount: 'Shoe complete'
          }
        ]
      }
    ],
    image: '/src/assets/images/cat_christmas_crochet_1794243901890.jpg',
    galleryImages: [
      '/src/assets/images/cat_christmas_crochet_1794243901890.jpg'
    ],
    featured: false,
    trending: false,
    seasonal: 'christmas',
    rating: 4.91,
    reviewCount: 84,
    pdfPageCount: 12,
    dateAdded: '2026-10-20'
  }
];
