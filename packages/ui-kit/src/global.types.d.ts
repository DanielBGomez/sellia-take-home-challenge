// Modules
import { Moment } from 'moment';

// Interfaces
export interface Contact {
  id: string;
  name: string;
  image: string;
  source: string;
}

export interface Message {
  id: string;
  type: 'text' | 'tText';
  text: string;
  user: {
    id: string;
    type: string;
  };
  errorCode: number | null;
  createdAt: string;
  updatedAt: string;
  readAt: string | null;
}

// Types
