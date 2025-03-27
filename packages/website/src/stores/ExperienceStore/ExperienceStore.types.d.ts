// Modules
import { Themes } from '@owl-systems/ui-kit';

// Local Imports
import { Client } from '../../api';

// Interfaces
export interface ExperienceStoreState {
  theme?: Themes;
  changeTheme: (theme: Themes) => void;
  clients: Client[];
  clientsIds: Set<string>;
  addClient: (client: Client) => void;
  // addMultipleClients: (clients: Client[]) => void;
}
