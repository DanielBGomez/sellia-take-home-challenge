// Modules
import { Chip, Input, TabbedPanel } from '@owl-systems/ui-kit';
import { Typography } from '@owl-systems/ui-kit/mui-material';

// Icons
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

/**
 * Chat Lists Container Component
 */
export const ChatListContainer = () => {
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
      test
    </TabbedPanel>
  );
};
