import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Card } from './Card';

const meta = {
    title: 'Example/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const small: Story = {
    args: {
        size: 'sm',
        imageSrc:"/src/assets/ballroom.jpg",
        children: <>Curious about how the day will unfold? Here you’ll find the timeline of our wedding celebration</>,
        buttonText: 'Click here',
        hrefButtonLink: 'http://localhost:6006/?path=/docs/example-card--docs'
    }
}

export const large: Story = {
    args: {
        size: 'lg',
        title: 'Login om de uitnodiging te bekijken',
        children: <>Curious about how the day will unfold? Here you’ll find the timeline of our wedding celebration
            <Button variant='primary' size='md'>
                hoho
            </Button></>,
        buttonText: 'Log in'
    }
}