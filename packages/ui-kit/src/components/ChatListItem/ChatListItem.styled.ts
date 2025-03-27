// Modules
import { styled, Avatar, Box as BoxComponent } from '@mui/material';

// Own Imports
import { BoxComponentProps, FlagElementProps } from './ChatListItem.types';

// Elements
export const Root = styled('div')(({ onClick }) => ({
  minWidth: 300,
  cursor: onClick ? 'pointer' : 'default',
}));

export const Flag = styled('div')<FlagElementProps>(({ theme, status }) => {
  let color;

  switch (status) {
    case 'done':
      color = theme.palette.secondary.main;
      break;
    case 'marked':
      color = theme.palette.error.main;
      break;
    case 'unread':
      color = theme.palette.primary.main;
      break;
    case 'pending':
      color = theme.palette.tertiary.main;
      break;
    default:
      return {
        display: 'none',
      };
  }

  return {
    height: 'auto',
    backgroundColor: color,
    width: theme.spacing(1),

    // Animations
    transition: 'background 100ms linear',
  };
});

export const Box = styled(BoxComponent)<BoxComponentProps>(
  ({ theme, active }) => ({
    // Conditionals
    backgroundColor:
      theme.palette[active ? 'tertiaryContainer' : 'surfaceContainer'].main,

    // Animations/Transitions
    transition: 'background 100ms linear',
  }),
);

export const ContactSource = styled(Avatar)(({ theme }) => ({
  right: 0,
  bottom: 0,
  width: 20,
  height: 20,
  position: 'absolute',
  backgroundColor: theme.palette.surfaceContainer.main,

  // Children/Events
  '& svg': {
    width: 'inherit',
    height: 'inherit',
  },
}));
