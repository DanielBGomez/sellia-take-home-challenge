// Modules
import { Message, Themes } from '@owl-systems/ui-kit';

// Local Imports
import { Client, Conversation } from '../../api';

// Interfaces
export interface ExperienceStoreState {
  theme?: Themes;
  changeTheme: (theme: Themes) => void;
  clients: Client[];
  clientsIds: Set<string>;
  addClient: (client: Client) => void;
  conversations: Record<string, Conversation>;
  addConversation: (conv: Conversation) => void;
  addMessage: (conversationId: string, message: Message) => void;
}
