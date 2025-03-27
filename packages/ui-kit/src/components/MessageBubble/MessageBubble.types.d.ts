// Modules
import { SxProps } from '@mui/material';

// Local Imports
import { Message, UserType } from '../../global.types';

// Interfaces
export interface MessageBubbleProps extends Message {
  sx?: SxProps;
}

export interface RootElementProps {
  variant: UserType;
}
