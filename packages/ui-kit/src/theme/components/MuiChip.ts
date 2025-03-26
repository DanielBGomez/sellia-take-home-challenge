// Modules
import { Components, Theme } from '@mui/material';

/**
 * MuiChip extended theme values
 */
export const MuiChip: Components<Theme>['MuiChip'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        ...theme.typography.smallest,
        height: 'auto',
        padding: '2px 8px',
        gap: theme.spacing(0.5),
        paddingRight: ownerState.onDelete ? '4px' : undefined,
      };
    },
    label: {
      padding: 0,
      color: 'inherit',
    },
    icon: {
      color: 'inherit',
    },
    deleteIcon: {
      color: 'inherit',
      margin: 'auto',
    },
  },
};
