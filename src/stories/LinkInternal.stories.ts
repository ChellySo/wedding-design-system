import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkInternal } from './LinkInternal';

const meta = {
    title: 'Example/LinkInternal',
    component: LinkInternal,
    tags: ['autodocs'],
    args: {
        href: '/example',
        children: 'Example Link'
    },
}satisfies Meta<typeof LinkInternal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '/example',
        children: 'Example Link'
    },
}