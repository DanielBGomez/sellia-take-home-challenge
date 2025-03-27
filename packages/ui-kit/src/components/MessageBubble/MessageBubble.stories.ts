// Modules
import type { Meta, StoryObj } from '@storybook/react';

// Local Imports
import { MessageBubble } from '.';

// Stories Config
const meta: Meta<typeof MessageBubble> = {
  title: 'Message Bubble',
  component: MessageBubble,
  tags: ['MessageBubble', 'UI Kit'],
  argTypes: {},
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories;
export const Default: Story = {
  args: {
    _id: '629f7eb0a45b194cb551c58c',
    type: 'text',
    text: 'hola',
    typeUser: 'Client',
    user: '629e39e8b2d31319081e0650',
    errorCode: null,
    createdAt: '2022-06-07T16:37:04.095Z',
    updatedAt: '2022-06-07T16:37:04.095Z',
    readAt: '2022-06-07T16:40:23.856Z',
  },
};
