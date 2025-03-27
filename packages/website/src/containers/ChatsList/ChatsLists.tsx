// Modules
import { useMemo, useState } from 'react';
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
  const activeConversation = useExperienceStore(
    (state) => state.activeConversation,
  );
  const setActiveConversation = useExperienceStore(
    (state) => state.setActiveConversation,
  );

  // Hooks
  const { getConversationLastMessage } = useConversationAPI();

  // States
  const [activeTab, setActiveTab] = useState(undefined);
  const [filterString, setFilterString] = useState('');

  // Computed
  /**
   * Chats based on the stored Clients.
   */
  const chats = useMemo(
    () =>
      Object.values(clients)
        .filter(() => activeTab === 'chats') // Tab filter
        .filter(
          ({ name }) =>
            filterString === '' || name.match(new RegExp(filterString, 'i')),
        )
        .map(({ _id, name }) => {
          const lastMessage = getConversationLastMessage(_id);
          return (
            <ChatListItem
              key={_id}
              contact={{
                id: _id,
                name,
                source: 'whatsapp',
              }}
              lastMessage={lastMessage}
              active={_id === activeConversation}
              onClick={() => setActiveConversation(_id)}
            />
          );
        }),
    [
      clients,
      activeTab,
      filterString,
      getConversationLastMessage,
      activeConversation,
      setActiveConversation,
    ],
  );

  // Render
  return (
    <TabbedPanel
      onChange={setActiveTab}
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
        <div className="pt-3 px-4 pb-4">
          <Input
            placeholder="Busca por Nombre o número"
            icons={[
              {
                component: <SearchIcon />,
                position: 'right',
              },
            ]}
            value={filterString}
            onChange={setFilterString}
          />
        </div>
      }
    >
      <div className="flex flex-col items-start px-4 pb-6">
        <Typography
          variant="small"
          component="div"
          sx={{
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
          {activeTab === 'chats' ? (
            <>
              <Chip
                label="No Leidos"
                color="primaryDarkContainer"
              />
              <Chip
                label="Pendientes"
                color="primaryDarkContainer"
              />
            </>
          ) : (
            <>
              <Chip
                label="Finalizados"
                color="primaryDarkContainer"
              />
              <Chip
                label="Cerradoss"
                color="primaryDarkContainer"
              />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">{chats}</div>
    </TabbedPanel>
  );
};
