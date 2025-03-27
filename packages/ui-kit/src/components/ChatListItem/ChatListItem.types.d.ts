// Modules
import { BoxProps } from '@mui/material';

// Interfaces
export interface ChatListItemProps {
  contact: Contact;
  lastMessage: Message;
  status: 'default' | 'pending' | 'done' | 'marked' | 'unread';
  active: boolean;
  onClick: () => void;
}

export interface FlagElementProps {
  status: 'default' | 'pending' | 'done' | 'marked' | 'unread';
}

export interface BoxComponentProps extends BoxProps {
  active?: boolean;
}

export interface Message {
  _id: string;
  type: 'text' | 'tText' | 'video';
  text: string;
  user: string;
  typeUser: string;
  errorCode: number | null;
  createdAt: string;
  updatedAt: string;
  deliveredAt: string;
  readAt: string | null;
}

export interface Contact {
  id: string;
  name: string;
  image?: string;
  source?: string;
}
