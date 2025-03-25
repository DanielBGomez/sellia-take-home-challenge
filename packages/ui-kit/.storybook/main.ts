// Modules
import { StorybookConfig } from '@storybook/react-vite';

// Config
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../static'],
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite', // 👈 Add this
  docs: {
    autodocs: 'tag',
  },
};

export default config;
