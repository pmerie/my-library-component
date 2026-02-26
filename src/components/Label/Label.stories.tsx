import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Username', color: "Pink", size: "20px" },
};

export const LargeRed: Story = {
  args: { text: 'Warning!', color: 'red', size: '20px' },
};