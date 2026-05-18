import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';
import { LinkInternal } from './LinkInternal';

const meta = {
    title: 'Example/Footer',
    component: Footer,
    tags: ['autodocs'],
    args: {
    },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children:
            <>
                <LinkInternal href='/' className="text-rose-white hover:underline hover:text-rose-white">Details</LinkInternal>
                <LinkInternal href='/' className="text-rose-white hover:underline hover:text-rose-white">Schedule</LinkInternal>
                <LinkInternal href='/' className="text-rose-white hover:underline hover:text-rose-white">RSVP</LinkInternal>
                <LinkInternal href='/' className="text-rose-white hover:underline hover:text-rose-white">Gallery</LinkInternal>
            </>

    }
}