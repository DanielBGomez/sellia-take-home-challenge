'use client'; // Next.js Fix

// Modules
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Own Imports
import { ColorPaletteLight } from './theme.light';
import { ColorPaletteDark } from './theme.dark';

import { MuiCssBaseline, MuiTypography } from './components';

// Shared theme options
const BaseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'var(--font-outfit)',
    fontSize: 16,
    body: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    small: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    smallest: {
      fontWeight: 400,
      fontSize: '0.75rem',
      letterSpacing: '0.12px',
    },
  },
  components: {
    MuiCssBaseline,
    MuiTypography,
  },
};

// Theme options objects
export const lightThemeOptions: ThemeOptions = {
  ...BaseThemeOptions,
  palette: {
    ...ColorPaletteLight,
  },
};
export const darkThemeOptions: ThemeOptions = {
  ...BaseThemeOptions,
  palette: {
    ...ColorPaletteDark,
  },
};

// Themes exports
export const LightTheme = createTheme(lightThemeOptions);
export const DarkTheme = createTheme(darkThemeOptions);
