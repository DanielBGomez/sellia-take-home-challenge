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

  const actions = String(text).match(/\|\[([^\[\]]+?)\]/g);
  const parsedText = actions ? text.replace(actions.join(''), '') : text;

  // Render
  return (
    <Root
      className="flex flex-col"
      variant={typeUser}
      hasActions={Boolean(actions && actions.length)}
    >
      <div className="flex flex-col gap-0 items-stretch px-3">
        <div className="flex justify-stretch gap-2">
          <Typography
            variant="body"
            component="div"
            className="grow-1"
          >
            {parsedText}
          </Typography>
        </div>
        <div className="flex justify-end gap-2 pb-1">
          <Typography variant="smallest">
            {created.format('hh:mm A')}
          </Typography>
        </div>
      </div>
      {actions && (
        <div className="flex flex-col mt-2">
          {actions.map((action) => (
            <Typography
              variant="small"
              component="div"
              className="message-bubble--action flex w-full py-2 px-3 justify-center"
            >
              {action.replace(/(?:^\|\[|\]$)/g, '')}
            </Typography>
          ))}
        </div>
      )}
    </Root>
  );
};
