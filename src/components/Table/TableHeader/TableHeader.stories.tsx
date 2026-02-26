// src/components/Table/TableHeader/TableHeader.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
  },
};