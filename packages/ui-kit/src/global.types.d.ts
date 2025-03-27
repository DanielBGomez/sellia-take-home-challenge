// Interfaces
export interface Message {
  _id: string;
  type: MessageType;
  text: string;
  user: string;
  typeUser: UserType;
  errorCode: number | null;
  createdAt: string;
  updatedAt: string;
  deliveredAt?: string;
  readAt: string | null;
}

export interface Contact {
  id: string;
  name: string;
  image?: string;
  source?: string;
}

// Types
export type Themes = 'light' | 'dark';
export type MessageType = 'text' | 'tText' | 'video' | 'document';
export type UserType = 'Client' | 'UserSystem' | 'User';
