import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta = {
    title: 'Example/Logo',
    component: Logo,
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
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Teal: Story = {
    args: {
        color: 'teal',
    },
}

export const White: Story = {
    args: {
        color: 'white',
    },
}

export const TealShortName: Story = {
    args: {
        color: 'teal',
        shortName: true,
    },
}

export const WhiteShortName: Story = {
    args: {
        color: 'white',
        shortName: true,
    },
}