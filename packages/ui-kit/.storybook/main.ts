// Modules
import { mergeConfig } from 'vite';
import { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

// Config
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../static'],
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [svgr()],
    }),
  docs: {
    autodocs: 'tag',
  },
};

export default config;
