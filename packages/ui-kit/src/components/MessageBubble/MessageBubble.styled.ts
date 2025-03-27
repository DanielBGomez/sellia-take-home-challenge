// Modules
import { styled } from '@mui/material';

// Local Imports
import { RootElementProps } from './MessageBubble.types';

// Configs
const VARIANT_MAP_TO_COLOR = {
  Client: 'primaryContainer',
  UserSystem: 'tertiaryContainer',
  User: 'tertiary',
};

// Elements
export const Root = styled('div')<RootElementProps>(
  ({ theme, variant, hasActions }) => ({
    width: 'auto',
    minWidth: 200,
    position: 'relative',
    paddingTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    color: theme.palette[VARIANT_MAP_TO_COLOR[variant]].contrastText,
    backgroundColor: theme.palette[VARIANT_MAP_TO_COLOR[variant]].main,

    // Conditionals
    maxWidth: hasActions ? 300 : 500,
    marginLeft: variant === 'Client' ? 12 : 'auto',
    borderTopRightRadius: theme.spacing(variant === 'User' ? 0 : 1),
    borderTopLeftRadius: theme.spacing(variant === 'Client' ? 0 : 1),
    marginRight:
      variant === 'User' ? 12 : variant === 'UserSystem' ? 0 : 'auto',

    // Children/Events
    '&::before': {
      content: variant !== 'UserSystem' ? "''" : undefined,
      top: 0,
      width: 12,
      height: 12,
      position: 'absolute',
      display: 'inline-block',
      backgroundColor: theme.palette[VARIANT_MAP_TO_COLOR[variant]].main,

      clipPath:
        variant === 'Client'
          ? 'polygon(100% 0, 0 0, 100% 100%)'
          : 'polygon(100% 0, 0 0, 0 100%)',
      left: variant === 'User' ? '100%' : undefined,
      right: variant === 'Client' ? '100%' : undefined,
    },

    '& small': {
      opacity: 0.8,
    },

    '& .message-bubble--action': {
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: theme.palette[VARIANT_MAP_TO_COLOR[variant]].contrastText,
    },
  }),
);
