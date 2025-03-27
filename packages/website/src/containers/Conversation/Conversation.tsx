// Modules
import { Avatar, Box, Typography } from '@owl-systems/ui-kit/mui-material';

// Icons
import PersonIcon from '@mui/icons-material/Person';

// Local Imports

// Own Imports
import { MessagesWrapper } from './Conversation.styled';
import { useExperienceStore } from '../../stores';
import { Input } from '@owl-systems/ui-kit';

/**
 * Conversation Container Component
 */
export const ConversationContainer = () => {
  // Stores
  const activeConversation =
    useExperienceStore((store) => store.activeConversation) || '';
  const conversation = useExperienceStore(
    (store) => store.conversations[activeConversation],
  );
  const client = useExperienceStore(
    (store) => store.clients[activeConversation],
  );

  console.log(activeConversation);
  console.log(conversation);
  console.log('client', client);

  // Computed

  // Render
  return (
    <div className="flex flex-col grow-1 shrink-1 m-0">
      <Box
        className="flex py-3 px-6 items-center gap-4"
        sx={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          bgcolor: 'surfaceContainer.main',
          borderBottomColor: 'outlineVariant.main',
        }}
      >
        <Avatar
          alt="User Image"
          sx={{ width: 40, height: 40 }}
        >
          <PersonIcon />
        </Avatar>
        <Typography>{client.name}</Typography>
      </Box>
      <MessagesWrapper>
        {conversation.messages.map(({ _id, text }) => (
          <div
            key={_id}
            className="flex"
          >
            {text}
          </div>
        ))}
      </MessagesWrapper>
      <Input placeholder="Escribe un mensaje" />
    </div>
  );
};
