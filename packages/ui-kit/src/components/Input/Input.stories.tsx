// Modules
import type { Meta, StoryObj } from '@storybook/react';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';

// Local Imports
import { Input } from '.';

// Stories Config
const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['Input', 'UI Kit'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories;
export const Default: Story = {
  args: {
    label: '',
    placeholder: 'Placeholder',
    hasError: false,
    isValid: false,
    disabled: false,
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: false,
    hasError: false,
    isValid: false,
    disabled: false,
  },
};

export const WithIcons: Story = {
  args: {
    label: '',
    placeholder: 'Filter by name or number',
    icons: [
      {
        component: <SearchIcon />,
        position: 'right',
      },
      {
        component: <GroupsIcon />,
        position: 'right',
      },
    ],
    required: false,
    hasError: false,
    isValid: false,
    disabled: false,
  },
};
