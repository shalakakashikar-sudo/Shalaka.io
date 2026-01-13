
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

/**
 * Interface representing a message in the AI assistant conversation.
 * roles 'user' and 'model' are compatible with Google Gemini API requirements.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
