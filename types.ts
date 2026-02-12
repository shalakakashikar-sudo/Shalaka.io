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

// Added ChatMessage interface to define the structure of the AI conversation history
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}