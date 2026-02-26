import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
    width: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/300',
    alt: 'Placeholder image',
    disabled: false,
    width: '300px',
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/300',
    alt: 'Disabled image',
    disabled: true,
    width: '300px',
  },
};