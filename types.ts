
export enum Category {
  GRAMMAR = 'Grammar',
  GAMES = 'Games',
  LINGUISTICS = 'Linguistics',
  TOOLS = 'Tools'
}

export interface AcademicApp {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  icon: string;
  tags: string[];
  isFeatured?: boolean;
}

/**
 * Interface representing a message in the AI assistant conversation.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
