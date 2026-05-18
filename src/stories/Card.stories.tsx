import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Card } from './Card';
import { Typography } from './Typography';

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
        imageSrc: "/src/assets/ballroom.jpg",
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

export const Multiple: Story = {
    args: {
        size: 'lg',
        title: 'Login om de uitnodiging te bekijken',
        children: <>Curious about how the day will unfold? Here you’ll find the timeline of our wedding celebration
            <Button variant='primary' size='md'>
                hoho
            </Button></>,
        buttonText: 'Log in'
    },
    render: () => (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-16'>
            <Card className='h-full flex flex-col' size='sm' buttonText='DETAILS' hrefButtonLink='/' imageSrc="/src/assets/event-location.jpg">
                <Typography className='flex-1' size="md">Everything you need to know about the location and dress code</Typography>
            </Card>

            <Card className='h-full flex flex-col' size='sm' buttonText='SCHEDULE' hrefButtonLink='/' imageSrc="/src/assets/ring-exchange.jpeg">
                <Typography className='flex-1' size="md">Curious about how the day will unfold? Here you’ll find the timeline of our wedding celebration</Typography>
            </Card>

            <Card className='h-full flex flex-col' size='sm' buttonText='GALLERY' hrefButtonLink='/' imageSrc="/src/assets/ballroom.jpg">
                <Typography className='flex-1' size="md">The gallery will be available after the wedding, once our photographer shares the images</Typography>
            </Card>
        </div>
    ),
}