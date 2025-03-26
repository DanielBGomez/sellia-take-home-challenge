// Modules
import type { Meta, StoryObj } from '@storybook/react';

// Local Imports
import { Chip } from '.';

// Stories Config
const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  tags: ['Chip', 'UI Kit'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'primaryDark',
        'secondary',
        'tertiary',
        'primaryContainer',
        'primaryDarkContainer',
        'secondaryContainer',
        'tertiaryContainer',
        'error',
      ],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories;
export const Default: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
  },
};
export const WithDelete: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
    onDelete: () => {},
  },
};
export const WithClickAction: Story = {
  args: {
    label: 'Chip',
    color: 'primary',
    onClick: () => {},
  },
};
