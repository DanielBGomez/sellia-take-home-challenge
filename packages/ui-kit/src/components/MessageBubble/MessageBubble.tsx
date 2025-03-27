// Modules
import moment from 'moment';

// Own Imports
import { Typography } from '@mui/material';
import { MessageBubbleProps } from '.';
import { Root } from './MessageBubble.styled';

/**
 * MessageBubble Component
 */
export const MessageBubble = ({
  text,
  typeUser,
  createdAt,
  updatedAt,
  deliveredAt,
  readAt,
}: MessageBubbleProps) => {
  // Computed
  const created = moment(createdAt);
  const updated = moment(updatedAt);
  const delivered = moment(deliveredAt);
  const read = moment(readAt);

  // Render
  return (
    <Root
      className="flex flex-col"
      variant={typeUser}
    >
      <div className="flex flex-col gap-0 items-stretch px-3">
        <div className="flex justify-stretch gap-2">
          <Typography
            variant="body"
            component="div"
            className="grow-1"
          >
            {text}
          </Typography>
        </div>
        <div className="flex justify-end gap-2 pb-1">
          <Typography variant="smallest">
            {created.format('hh:mm A')}
          </Typography>
        </div>
      </div>
    </Root>
  );
};
