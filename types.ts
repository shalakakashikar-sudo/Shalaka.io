
export enum Category {
  APPS = 'Apps'
}

export interface AcademicApp {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  icon: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}