import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Title Child',
    color: 'burgundy',
    size: 'h1',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['burgundy', 'teal', 'white'],
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Burgundy: Story = {
  args: {
    color: 'burgundy',
    size: 'h1',
  },
};

export const Teal: Story = {
  args: {
    color: 'teal',
    size: 'h1',
  },
};

export const White: Story = {
  args: {
    color: 'white',
    size: 'h1',
  },
};