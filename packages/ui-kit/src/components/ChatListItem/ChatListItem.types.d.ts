// Modules
import { BoxProps } from '@mui/material';

// Local Imports
import { Contact, Message } from '../../global.types';

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
