
export const niches = [
  "Tech Reviews",
  "Gaming",
  "Cooking",
  "Fitness",
  "Travel",
  "Beauty",
  "Finance",
  "Education",
  "DIY/Crafts",
  "Fashion",
] as const;

export type Niche = typeof niches[number];

export const mockContentIdeas: Record<Niche, string[]> = {
  "Tech Reviews": [
    "Honest Review: Is the New [Latest Phone] Worth Your Money?",
    "Budget Tech Finds Under $100 That Are Actually Worth It",
    "Apple vs Android in 2024: Which Ecosystem Is Better For You?",
    "The Truth About [Popular Tech Product] After 6 Months of Use",
    "Hidden Features in [Latest OS Update] That Will Change How You Work",
  ],
  "Gaming": [
    "[Popular Game] Tips That Pros Don't Want You to Know",
    "How to Build a Pro Gaming Setup Under $800 (Complete Guide)",
    "Secret Techniques to Win More Games in [Competitive Game]",
    "The Rise and Fall of [Game Studio]: What Really Happened",
    "10 Underrated Games That Deserve More Attention",
  ],
  "Cooking": [
    "5 One-Pan Meals That Actually Taste Amazing",
    "Restaurant Chef Reacts to Viral Food Hacks",
    "Cook a Week of Meals in 2 Hours (Meal Prep Guide)",
    "The Secret to Restaurant-Quality [Popular Dish] at Home",
    "Budget-Friendly Recipes That Taste Expensive",
  ],
  "Fitness": [
    "The Only Home Workout You Need (No Equipment)",
    "Why You're Not Seeing Results (Common Gym Mistakes)",
    "Science-Based Guide to Building Muscle Fast",
    "15-Minute Morning Workout That Actually Works",
    "The Truth About [Popular Fitness Trend] - Worth The Hype?",
  ],
  "Travel": [
    "Hidden Gems in [Popular City] Tourists Don't Know About",
    "How to Travel Europe for Under $50 a Day",
    "Local Secrets: The Real [Country] Experience",
    "Travel Hacks That Will Save You Thousands",
    "What $100 Gets You in Different Countries",
  ],
  "Beauty": [
    "Drugstore Dupes for Viral High-End Makeup",
    "The Truth About [Popular Skincare Brand] - Worth The Money?",
    "5-Minute Makeup Routine That Looks Professional",
    "Beauty Secrets Professionals Don't Share",
    "Testing Viral Beauty Hacks - Do They Actually Work?",
  ],
  "Finance": [
    "How to Start Investing with Just $100",
    "Passive Income Ideas That Actually Work in 2024",
    "The Truth About [Popular Investment] Explained Simply",
    "How to Build Credit Fast - Complete Beginner's Guide",
    "Save $1000 in 30 Days Challenge (Realistic Method)",
  ],
  "Education": [
    "Study Techniques That Got Me Straight A's",
    "Learn Any Language Fast - Science-Based Method",
    "Memory Tricks Used by Memory Champions",
    "How to Study Less and Get Better Grades",
    "The Perfect Study Schedule for Students",
  ],
  "DIY/Crafts": [
    "Room Makeover Under $100 - Budget DIY Ideas",
    "Craft Projects That Look Expensive But Cost Nothing",
    "Upcycling Thrift Store Finds into Luxury Decor",
    "Easy DIY Projects That Sell Well Online",
    "Transform Your Space with These Weekend Projects",
  ],
  "Fashion": [
    "Build a Capsule Wardrobe on a Budget",
    "Thrift Store Hacks to Find Designer Clothes",
    "Style Tricks That Make You Look Expensive",
    "Transform Basic Clothes into Trendy Pieces",
    "The Only Fashion Rules You Need to Know",
  ],
};
