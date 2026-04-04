import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkExternal } from './LinkExternal';

const meta = {
    title: 'Example/LinkExternal',
    component: LinkExternal,
    tags: ['autodocs'],
    args: {
        href: '/example',
        children: 'Example Link'
    },
}satisfies Meta<typeof LinkExternal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '/example',
        children: 'Example Link'
    },
}