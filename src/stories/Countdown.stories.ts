import type { Meta, StoryObj } from '@storybook/react-vite';
import { Countdown } from './Countdown';

const meta = {
    title: 'Example/Countdown',
    component: Countdown,
    tags: ['autodocs'],
    args: {
      
    },
    argTypes: {
    
    },
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CountdownStory: Story = {
    args: {
       weddingDate: '2026-09-12T00:00:00'
    },
}

export const EndOfCountdownStory: Story = {
    args: {
       weddingDate: '2026-04-08T02:24:00'
    },
}