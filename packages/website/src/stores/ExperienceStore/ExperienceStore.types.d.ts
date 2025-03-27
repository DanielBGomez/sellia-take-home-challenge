// Modules
import { Message, Themes } from '@owl-systems/ui-kit';

// Local Imports
import { Client, Conversation } from '../../api';

// Interfaces
export interface ExperienceStoreState {
  theme?: Themes;
  changeTheme: (theme: Themes) => void;
  clients: Record<string, Client>;
  addClient: (client: Client) => void;
  getClient: (clientId: string) => Client | undefined;
  conversations: Record<string, Conversation>;
  activeConversation?: string;
  addConversation: (conv: Conversation) => void;
  addMessage: (conversationId: string, message: Message) => void;
  setActiveConversation: (conversationId: string) => void;
}
