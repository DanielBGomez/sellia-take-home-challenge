// Modules
import { styled } from '@mui/material';

// Own Imports
import { TabElement } from './TabbedPanel.types';

// Elements
export const Tab = styled('div')<TabElement>(({ theme, active }) => ({
  // Extended styles
  ...theme.typography.body,

  // Additional Styles
  margin: 0,
  height: 50,
  flexGrow: 1,
  width: '100%',
  flexShrink: 1,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  justifyContent: 'center',
  padding: theme.spacing(1),

  // Children/Events
  '& svg': {
    width: 20,
    height: 20,
  },

  // Conditionals
  cursor: active ? 'default' : 'pointer',
  backgroundColor: theme.palette[active ? 'surface' : 'outlineVariant'].main,
}));
