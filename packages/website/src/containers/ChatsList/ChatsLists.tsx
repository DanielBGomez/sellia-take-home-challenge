// Modules
import { useMemo } from 'react';
import { Chip, Input, TabbedPanel, ChatListItem } from '@owl-systems/ui-kit';
import { Typography } from '@owl-systems/ui-kit/mui-material';

// Icons
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

// Local Imports
import { useExperienceStore } from '../../stores';
import { useConversationAPI } from '../../api';

/**
 * Chat Lists Container Component
 */
export const ChatListContainer = () => {
  // Stores
  const clients = useExperienceStore((state) => state.clients);
  const { getConversationLastMessage } = useConversationAPI();

  // Effects

  const chats = useMemo(
    () =>
      clients.map(({ _id, name }) => {
        const lastMessage = getConversationLastMessage(_id);
        console.log(lastMessage);
        return (
          <ChatListItem
            key={_id}
            contact={{
              id: _id,
              name,
              source: 'whatsapp',
            }}
            lastMessage={lastMessage}
          />
        );
      }),
    [clients, getConversationLastMessage],
  );

  // Render
  return (
    <TabbedPanel
      tabs={[
        {
          label: 'Chats',
          value: 'chats',
          icon: <GroupsIcon />,
        },
        {
          label: 'Historial',
          value: 'history',
          icon: <HistoryIcon />,
        },
      ]}
      sx={{
        width: 320,
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: 'outlineVariant.main',
      }}
      header={
        <div className="flex flex-col items-start pt-3 px-4 pb-6">
          <Input
            placeholder="Busca por Nombre o número"
            icons={[
              {
                component: <SearchIcon />,
                position: 'right',
              },
            ]}
          />
          <Typography
            variant="small"
            component="div"
            sx={{
              marginTop: 2,
              marginBottom: 0.5,
            }}
          >
            Mostrar:
          </Typography>
          <div className="flex items-center justify-start gap-2">
            <Chip
              label="Todos"
              color="tertiary"
            />
            <Chip
              label="No Leidos"
              color="primaryDarkContainer"
            />
            <Chip
              label="Pendientes"
              color="primaryDarkContainer"
            />
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-2">{chats}</div>
    </TabbedPanel>
  );
};
