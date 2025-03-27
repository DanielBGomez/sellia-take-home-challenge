// Modules
import { styled } from '@owl-systems/ui-kit/mui-material';

// Elements
export const MessagesWrapper = styled('div')({
  margin: 0,
  flexGrow: 1,
  flexShrink: 1,
  display: 'flex',
  overflowY: 'scroll',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: "url('/public/chats-bg.png')",
});
