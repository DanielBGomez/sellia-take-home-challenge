// Modules
import { create } from 'zustand';

// Own Imports
import { ExperienceStoreState } from '.';

/**
 * Experience Store - Global Values for the store
 */
export const useExperienceStore = create<ExperienceStoreState>((set, get) => ({
  // Layout
  theme: undefined,
  changeTheme: (theme) => set(() => ({ theme })),
  // Data
  clients: {},
  addClient: (client) =>
    set((state) => ({ clients: { ...state.clients, [client._id]: client } })),
  getClient: (id) => get().clients[id],
  conversations: {},
  activeConversation: undefined,
  addConversation: (conv) =>
    set((state) => ({
      conversations: { ...state.conversations, [conv.id]: conv },
    })),
  addMessage: (id, message) => {
    const prev = get().conversations[id]?.messages ?? [];
    set((state) => ({
      conversations: {
        ...state.conversations,
        [id]: {
          ...state.conversations[id],
          messages: [...prev, message],
        },
      },
    }));
  },
  setActiveConversation: (conversationId) => {
    if (get().conversations[conversationId])
      set(() => ({ activeConversation: conversationId }));
  },
}));
