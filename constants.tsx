
import { AcademicApp, Category } from './types.ts';

/**
 * ACADEMIC APPS DATA
 * A curated collection of interactive educational tools.
 */

export const ACADEMIC_APPS: AcademicApp[] = [
  {
    id: 'modowl',
    title: 'Modowl',
    description: 'Master English modal verbs—can, could, may, might, and more—through interactive grammar exercises and owl-themed challenges.',
    url: 'https://modowl.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🦉',
    tags: ['Grammar', 'Modals'],
    isFeatured: true
  },
  {
    id: 'determiner-den',
    title: 'Determiner Den',
    description: 'Master the nuances of determiners, articles, and quantifiers through interactive challenges and linguistic quests.',
    url: 'https://determiner-den.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🏰',
    tags: ['Grammar', 'Mastery']
  },
  {
    id: 'gnome-smash',
    title: 'Gnome Smash',
    description: 'An engaging game-based tool designed to sharpen reflexes and improve cognitive focus through interactive play.',
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
    description: 'Interactive exercises focused on the foundational rules of grammatical agreement.',
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
    description: 'Improve pronunciation and speech clarity with a collection of challenging tongue twisters.',
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
    description: 'Sharpen syntax skills by unscrambling jumbled sentences in a fun environment.',
    url: 'https://sentence-safari.vercel.app/',
    category: Category.GAMES,
    icon: '🦁',
    tags: ['Syntax']
  },
  {
    id: 'spanish-playground',
    title: 'Spanish Playground',
    description: 'Interactive tools for students looking to practice and improve Spanish proficiency.',
    url: 'https://spanish-playground.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '🇪🇸',
    tags: ['Spanish']
  },
  {
    id: 'litmania',
    title: 'Litmania',
    description: 'Portal for mastering literary devices, poetic techniques, and text analysis.',
    url: 'https://litmania.vercel.app/',
    category: Category.LINGUISTICS,
    icon: '📜',
    tags: ['Literature']
  },
  {
    id: 'verb-academy',
    title: 'Verb Academy',
    description: 'Master complexities of verb forms, conjugations, and tenses through practice.',
    url: 'https://verb-academy.vercel.app/',
    category: Category.GRAMMAR,
    icon: '🏃',
    tags: ['Verbs']
  }
];
