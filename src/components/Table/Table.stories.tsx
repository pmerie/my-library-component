import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'City'],
    data: [
      ['Alice', '25', 'Toronto'],
      ['Bob', '30', 'Vancouver'],
      ['Charlie', '22', 'Montreal'],
    ],
  },
};