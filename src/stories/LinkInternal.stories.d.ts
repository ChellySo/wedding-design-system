import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").FC<import("./LinkInternal").LinkInternalProps>;
    tags: string[];
    args: {
        href: string;
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
