// Modules
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

// Fonts
import '@fontsource/outfit/100.css';
import '@fontsource/outfit/200.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/outfit/900.css';

// Theme
import { LightTheme } from '../src';

// Tailwind
import '../src/tailwind.css';

/**
 * With Mui Theme decorator
 */
export const withMuiTheme = (Story) => (
  <ThemeProvider theme={LightTheme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};

export default preview;
