// Modules
import { useRef } from 'react';
import { Input, MessageBubble } from '@owl-systems/ui-kit';
import { Avatar, Box, Typography } from '@owl-systems/ui-kit/mui-material';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

// Local Imports

// Own Imports
import { MessagesWrapper } from './Conversation.styled';
import { useExperienceStore } from '../../stores';

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

  // Refs
  const messagesWrapperRef = useRef(null);

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
      <MessagesWrapper ref={messagesWrapperRef}>
        <div className="flex flex-col w-full gap-4 justify-end px-20 py-6 h-fit">
          {conversation.messages.map((message) => (
            <MessageBubble
              key={message._id}
              {...message}
            />
          ))}
        </div>
      </MessagesWrapper>
      <Input
        placeholder="Escribe un mensaje"
        icons={[
          { component: <SendIcon />, position: 'right' },
          { component: <InsertEmoticonIcon />, position: 'right' },
        ]}
      />
    </div>
  );
};
