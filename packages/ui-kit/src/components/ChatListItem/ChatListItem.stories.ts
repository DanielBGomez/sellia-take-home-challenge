// Modules
import type { Meta, StoryObj } from '@storybook/react';

// Local Imports
import { ChatListItem } from '.';

// Stories Config
const meta: Meta<typeof ChatListItem> = {
  title: 'ChatListItem',
  component: ChatListItem,
  tags: ['ChatListItem', 'UI Kit'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'done', 'marked'],
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof ChatListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories;
export const Default: Story = {
  args: {
    active: false,
    status: 'default',
    contact: {
      id: '+52 33 2222 9999',
      name: 'Esteban Dido',
      image: '/static/user.png',
    },
    lastMessage: {
      id: '629f80f3a45b19811651c5ab',
      type: 'text',
      text: 'sí',
      user: {
        id: '629e39e8b2d31319081e0650',
        type: 'Client',
      },
      errorCode: null,
      createdAt: '2022-06-07T16:46:43.903Z',
      updatedAt: '2022-06-07T16:46:45.333Z',
      readAt: '2022-06-07T16:46:45.333Z',
    },
  },
};

export const Active: Story = {
  args: {
    active: true,
    status: 'default',
    contact: {
      id: '+52 33 2222 9999',
      name: 'Esteban Dido',
      image: '/static/user.png',
    },
    lastMessage: {
      id: '629f80f3a45b19811651c5ab',
      type: 'text',
      text: 'sí',
      user: {
        id: '629e39e8b2d31319081e0650',
        type: 'Client',
      },
      errorCode: null,
      createdAt: '2022-06-07T16:46:43.903Z',
      updatedAt: '2022-06-07T16:46:45.333Z',
      readAt: '2022-06-07T16:46:45.333Z',
    },
  },
};

export const NoImage: Story = {
  args: {
    active: false,
    status: 'default',
    contact: {
      id: '+52 33 2222 9999',
      name: 'Esteban Dido',
    },
    lastMessage: {
      id: '629f80f3a45b19811651c5ab',
      type: 'text',
      text: 'sí',
      user: {
        id: '629e39e8b2d31319081e0650',
        type: 'Client',
      },
      errorCode: null,
      createdAt: '2022-06-07T16:46:43.903Z',
      updatedAt: '2022-06-07T16:46:45.333Z',
      readAt: '2022-06-07T16:46:45.333Z',
    },
  },
};
