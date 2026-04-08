import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavBar } from './NavBar';
import { LinkInternal } from './LinkInternal';

const meta = {
    title: 'Example/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    args: {
        color: 'teal'
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['teal', 'white'],
        },
    },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: 'teal',
        children:
            <><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Home</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Details</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Schedule</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">RSVP</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Gallery</LinkInternal></>

    }
}