// Modules
import { styled } from '@mui/material';

// Own Imports
import { IconWrapperProps } from './useParseInputIcons.types';

// Elements
export const IconWrapper = styled('div')<IconWrapperProps>(
  ({ theme, size = 18, onClick, disabled }) => ({
    width: size,
    height: size,
    maxWidth: 32,
    maxHeight: 32,

    // Conditionals
    cursor: !disabled && onClick ? 'pointer' : undefined,
    color: theme.palette[disabled ? 'surfaceDim' : 'surface'].contrastText,

    // Animations/Transitions
    transition: 'color 100ms linear',

    // Children/Events
    '& svg': {
      width: 'inherit',
      height: 'inherit',
    },
  }),
);
