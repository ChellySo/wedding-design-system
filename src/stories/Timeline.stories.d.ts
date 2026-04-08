import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("./Timeline").TimelineProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    args: {
        title: string;
        text: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Multiple: Story;
