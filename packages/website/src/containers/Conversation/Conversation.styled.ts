// Modules
import { styled } from '@owl-systems/ui-kit/mui-material';

// Elements
export const MessagesWrapper = styled('div')(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(3),
  flexGrow: 1,
  flexShrink: 1,
  display: 'flex',
  overflowY: 'scroll',
  flexDirection: 'column',
  backgroundSize: 'cover',
  justifyContent: 'flex-end',
  backgroundPosition: 'center',
  backgroundImage: "url('/public/chats-bg.png')",
}));
