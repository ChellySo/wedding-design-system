import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'burgundy',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['burgundy', 'teal', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Burgundy: Story = {
  args: {
    variant: 'burgundy',
    size: 'md',
  },
};

export const Teal: Story = {
  args: {
    variant: 'teal',
    size: 'md',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    size: 'md',
  },
};