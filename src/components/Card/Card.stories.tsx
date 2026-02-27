import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a card component.',
    disabled: false,
    backgroundColor: "#C8D9F0"
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'This card is disabled.',
    disabled: true,
  },
};