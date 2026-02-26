import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/1200/400',
    title: 'Welcome',
    subtitle: 'Hero image example',
    height: '300px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://picsum.photos/1200/400',
    title: 'Disabled Hero',
    disabled: true,
  },
};