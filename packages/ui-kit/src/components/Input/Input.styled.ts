// Modules
import { styled } from '@mui/material';
import { get } from 'lodash';

// Own Imports
import { InputElementProps } from './Input.types';

// Components
export const Root = styled('div')(() => ({
  width: '100%',
}));

export const InputElement = styled('input')<InputElementProps>(
  ({ theme, hasError, isValid, disabled }) => ({
    // Extended styles
    ...theme.typography.small,

    // Additional styles
    width: '100%',
    borderWidth: 1,
    padding: '8px 12px',
    borderStyle: 'solid',
    borderRadius: theme.spacing(0.5),

    // Conditionals
    borderColor: get(
      theme.palette,
      hasError
        ? 'error.main'
        : isValid
          ? 'success.main'
          : 'outlineVariant.main',
    ),
    backgroundColor:
      theme.palette[disabled ? 'surface' : 'surfaceContainer'].main,
    color:
      theme.palette[disabled ? 'surfaceDim' : 'surfaceContainer'].contrastText,
    outlineColor:
      theme.palette[hasError ? 'error' : isValid ? 'success' : 'primary'].main,

    // Animations/Transitions
    transition: 'all 100ms linear',

    // Children/Events
    '&::placeholder': {
      color: theme.palette.surfaceDim.contrastText,
    },
  }),
);
