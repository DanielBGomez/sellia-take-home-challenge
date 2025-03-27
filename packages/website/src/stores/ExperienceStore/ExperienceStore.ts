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
  clients: [],
  clientsIds: new Set(),
  addClient: (client) => {
    const clients = get().clients;
    const currentClients = get().clientsIds;

    if (!currentClients.has(client._id)) {
      // Update Clients IDs Set
      currentClients.add(client._id);

      // Set both values
      set(() => ({
        clients: [...clients, client],
        clientsIds: new Set([...currentClients]),
      }));
    }
  },
}));
