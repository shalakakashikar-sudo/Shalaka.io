
export enum Category {
  APPS = 'Apps',
  STD_9 = '9th Std English Resources',
  STD_10 = '10th Std English Resources',
  STD_11 = '11th Std English Resources',
  STD_12 = '12th Std English Resources'
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

// Added ChatMessage interface used by the AIAssistant component
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
