// Modules
import { Message } from '@owl-systems/ui-kit';

// Interfaces
export interface Conversation {
  id: string;
  messages: Message[];
}

export interface RawMessage {
  _id: string;
  type: string;
  client: string;
  message: Message;
  createdAt: string;
}
