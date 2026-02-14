
import { AcademicApp, Category } from './types.ts';

/**
 * ACADEMIC APPS DATA
 * A curated collection of interactive educational tools.
 */

export const ACADEMIC_APPS: AcademicApp[] = [
  {
    id: 'the-milky-way',
    title: 'The Milky Way',
    description: 'Travel through the cosmos with Dr. Moo to master the intricacies of English tenses in this stellar grammatical journey.',
    url: 'https://the-milky-way.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🐄',
    tags: ['Tenses', 'Grammar'],
    isFeatured: true
  },
  {
    id: 'cupcake-clatter',
    title: 'Cupcake Clatter',
    description: 'Explore the delightful world of onomatopoeic sounds with Nan-Ding in this strawberry cupcake-themed linguistic guide.',
    url: 'https://cupcake-clatter.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🧁',
    tags: ['Onomatopoeia', 'Linguistics'],
  },
  {
    id: 'bamboozled-six',
    title: 'Bamboozled',
    description: 'Master Active and Passive voice with MoMo the panda in this interactive bamboo-themed grammatical quest.',
    url: 'https://bamboozled-six.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🐼',
    tags: ['Active Voice', 'Passive Voice'],
  },
  {
    id: 'the-baa-ckground',
    title: 'The Baa-ckground',
    description: 'Master prepositions with Aayu the sheep! Solve visual spatial challenges to perfect your grammar.',
    url: 'https://the-baa-ckground.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🐑',
    tags: ['Prepositions', 'Grammar'],
  },
  {
    id: 'inkly',
    title: 'Inkly',
    description: 'Learn the craft of article writing. Master structure, tone, and professional journalistic techniques.',
    url: 'https://inkly-article-writing.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🪶',
    tags: ['Writing', 'Articles'],
  },
  {
    id: 're-post',
    title: 'Re-Post',
    description: 'Journey with Waffle the post-hamster to master direct and indirect speech in this linguistic adventure.',
    url: 'https://re-post.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🐹',
    tags: ['Speech', 'Grammar'],
  },
  {
    id: 'art-iculate',
    title: 'Articulate',
    description: 'Educational comics and visual materials that simplify complex academic topics through storytelling.',
    url: 'https://art-iculate.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🎨',
    tags: ['Comics', 'Visuals']
  },
  {
    id: 'flip-tag',
    title: 'Flip Tag',
    description: 'Master question tags through interactive flipping challenges and rapid grammatical practice.',
    url: 'https://flip-tag.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🔄',
    tags: ['Grammar', 'Tags']
  },
  {
    id: 'modowl',
    title: 'Modowl',
    description: 'Master English modal verbs—can, could, may, and more—with interactive owl-themed challenges.',
    url: 'https://modowl.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🦉',
    tags: ['Grammar', 'Modals']
  },
  {
    id: 'determiner-den',
    title: 'Determiner Den',
    description: 'Conquer the nuances of determiners, articles, and quantifiers through interactive linguistic quests.',
    url: 'https://determiner-den.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🏰',
    tags: ['Grammar', 'Mastery']
  },
  {
    id: 'gnome-smash',
    title: 'Gnome Smash',
    description: 'A fast-paced game designed to sharpen reflexes and improve focus through interactive play.',
    url: 'https://gnome-smash.vercel.app',
    category: Category.GAMES,
    icon: '🍄',
    tags: ['Game', 'Focus']
  },
  {
    id: 'smartest',
    title: 'SmarTest',
    description: 'A specialized testing platform providing deep, evaluation-based feedback for students.',
    url: 'https://smartest-sk.vercel.app/',
    category: Category.TOOLS,
    icon: '🤖',
    tags: ['Testing', 'AI']
  },
  {
    id: 'english-playground',
    title: 'English Playground (EP)',
    description: 'A vibrant hub for exploring the English language through interactive academic activities.',
    url: 'https://shalakakashikar-sudo.github.io/EP/',
    category: Category.LINGUISTICS,
    icon: '🎡',
    tags: []
  },
  {
    id: 'sva-mastery',
    title: 'Subject-Verb Agreement',
    description: 'Interactive exercises focused on foundational rules of subject-verb grammatical agreement.',
    url: 'https://shalakakashikar-sudo.github.io/SVA/',
    category: Category.GRAMMAR,
    icon: '✍️',
    tags: ['SVA']
  },
  {
    id: 'crowsword',
    title: 'Crowsword',
    description: 'A classic crossword game designed to expand academic vocabulary and test logic.',
    url: 'https://shalakakashikar-sudo.github.io/Crowsword/',
    category: Category.GAMES,
    icon: '🧩',
    tags: ['Vocab']
  },
  {
    id: 'twistopia',
    title: 'Twistopia',
    description: 'Improve pronunciation and speech clarity with a challenging collection of tongue twisters.',
    url: 'https://twistopia.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🌀',
    tags: ['Speech']
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Study and practice "if-then" logic and complex conditional sentence structures.',
    url: 'https://conditionals-sk.vercel.app/',
    category: Category.GRAMMAR,
    icon: '⚖️',
    tags: ['Logic']
  },
  {
    id: 'sentence-safari',
    title: 'Sentence Safari',
    description: 'Sharpen syntax skills by unscrambling jumbled sentences in a fun, wild environment.',
    url: 'https://sentence-safari.vercel.app/',
    category: Category.GAMES,
    icon: '🦁',
    tags: ['Syntax']
  },
  {
    id: 'spanish-playground',
    title: 'Spanish Playground',
    description: 'Interactive tools and exercises for students looking to improve Spanish language proficiency.',
    url: 'https://spanish-playground.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🇪🇸',
    tags: ['Spanish']
  },
  {
    id: 'litmania',
    title: 'Litmania',
    description: 'A portal for mastering literary devices, poetic techniques, and deep text analysis.',
    url: 'https://litmania.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '📜',
    tags: ['Literature']
  },
  {
    id: 'verb-academy',
    title: 'Verb Academy',
    description: 'Master the complexities of verb forms, conjugations, and tenses through focused practice.',
    url: 'https://verb-academy.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🏃',
    tags: ['Verbs']
  },
  {
    id: 'vocab-flashcards',
    title: 'Vocab Flashcards',
    description: 'Enhance academic vocabulary with interactive flashcards designed for rapid learning.',
    url: 'https://vocabflashcards-svm-sk.tiiny.site/',
    category: Category.TOOLS,
    icon: '🗂️',
    tags: ['Vocabulary', 'Flashcards']
  }
];