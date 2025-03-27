// Modules
import { DarkTheme, LightTheme } from '@owl-systems/ui-kit';
import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from '@owl-systems/ui-kit/mui-material';

// Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Local Imports
import { useExperienceStore } from '../../stores';
import { useSystemTheme } from '../../hooks';
import { ChatListContainer } from '../../containers';
import { useClientsAPI, useConversationAPI } from '../../api';
import { useEffect } from 'react';
import {} from '../../api/conversation';

/**
 * HeyCenter Experience
 */
export const HeyCenterExperience = () => {
  // Stores
  const theme = useExperienceStore((state) => state.theme);
  const changeTheme = useExperienceStore((state) => state.changeTheme);
  const clientsIds = useExperienceStore((state) => state.clientsIds);
  const addClient = useExperienceStore((state) => state.addClient);
  const addConversation = useExperienceStore((state) => state.addConversation);

  // Hooks
  useSystemTheme();
  const { getClients } = useClientsAPI();
  const { getConversation } = useConversationAPI();

  // Functions
  /**
   * Toggle Current Theme with the oposite one.
   */
  const toggleTheme = () => changeTheme(theme === 'light' ? 'dark' : 'light');

  // Effects
  /**
   * API Requests
   */
  useEffect(() => {
    getClients()
      .then((clients) => {
        clients.forEach((client) => addClient(client));
      })
      .catch(console.error);
  }, [addClient, getClients]);
  /**
   * Conversations Fetch
   */
  useEffect(() => {
    Array.from(clientsIds).forEach((id) => {
      getConversation(id).then((conversation) => addConversation(conversation));
    });
  }, [addConversation, clientsIds, getConversation]);

  // Render
  return (
    <ThemeProvider theme={!theme || theme === 'light' ? LightTheme : DarkTheme}>
      <CssBaseline />
      <div className="flex flex-col w-full min-h-screen justify-start">
        <Box
          className="flex w-full justify-space-between items-center px-8"
          sx={{
            height: 60,
            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            color: 'primaryDark.contrastText',
            backgroundColor: 'primaryDark.main',
            borderBottomColor: 'outlineVariant.main',
          }}
        >
          HeyCenter
          <IconButton
            size="small"
            onClick={toggleTheme}
            title={`Cambiar a tema ${theme === 'light' ? 'Oscuro' : 'Claro'}`}
            sx={{
              marginRight: 0,
              marginLeft: 'auto',
              color: 'primaryDark.contrastText',
            }}
          >
            {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Box>
        <div className="flex justify-stretch items-stretch w-full m-0 grow-1">
          <ChatListContainer />
        </div>
      </div>
    </ThemeProvider>
  );
};
