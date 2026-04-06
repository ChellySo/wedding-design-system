import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavBar } from './NavBar';
import { LinkInternal } from './LinkInternal';

const meta = {
    title: 'Example/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    args: {   
    }
} satisfies Meta<typeof NavBar>; 

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 
        <div className='grid grid-cols-5 gap-4'><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Home</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Details</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Schedule</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">RSVP</LinkInternal><LinkInternal href='/' className="hover:underline hover:text-burgundy-950">Gallery</LinkInternal></div>
        
    }
}