// Modules
import { useMemo } from 'react';
import moment from 'moment';
import { Avatar, Typography } from '@mui/material';

// Icons
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import WhatsappIcon from '../../assets/whatsapp.svg?react';

// Own Imports
import { ChatListItemProps } from '.';
import { Box, ContactSource, Flag, Root } from './ChatListItem.styled';

/**
 * Chat List Item Component
 */
export const ChatListItem = ({
  contact,
  lastMessage,
  status,
  active,
  onClick = () => {},
}: ChatListItemProps) => {
  // Computed
  const showCheckIcon = lastMessage.user.type !== 'Client';
  /**
   * Get the proper status of the item by checking the status
   * and the lastMessage properties.
   */
  const parsedStatus = useMemo(() => {
    if (status === 'done' || status === 'marked') return status;

    const { user, readAt } = lastMessage;

    if (user.type !== 'Client') return 'default';
    if (readAt === null) return 'unread';

    return 'pending';
  }, [status, lastMessage.user.type, lastMessage.readAt]);

  // Render
  return (
    <Root
      className="chat-list-item flex w-full justify-stretch items-stretch"
      onClick={onClick}
    >
      <Flag status={parsedStatus} />
      <Box
        active={active}
        className="flex items-center justify-stretch px-4 py-2 gap-4"
      >
        <div className="relative shrink-0">
          {contact.image ? (
            <Avatar
              alt="User Image"
              src={contact.image}
              sx={{ width: 60, height: 60 }}
            />
          ) : (
            <Avatar
              alt="User Image"
              sx={{ width: 60, height: 60 }}
            >
              <PersonIcon />
            </Avatar>
          )}
          <ContactSource
            alt="Whatsapp"
            title="Whatsapp"
          >
            <WhatsappIcon />
          </ContactSource>
        </div>
        <div className="flex flex-col w-full gap-1">
          <div className="flex w-full justify-space-between items-center gap-2">
            <Typography
              variant="small"
              sx={{
                color: active
                  ? 'tertiaryContainer.contrastText'
                  : 'surface.contrastText',
              }}
            >
              {contact.name || contact.id}
            </Typography>
            <Typography
              variant="smallest"
              color="surfaceDim.contrastText"
            >
              {moment(lastMessage.createdAt).fromNow()}
            </Typography>
          </div>
          <div className="flex justify-start items-center gap-1">
            {showCheckIcon && <CheckIcon sx={{ width: 12, height: 12 }} />}
            <Typography
              variant="small"
              color="surfaceDim.contrastText"
            >
              {lastMessage.text}
            </Typography>
          </div>
        </div>
      </Box>
    </Root>
  );
};
