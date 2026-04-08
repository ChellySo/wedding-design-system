import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("./Countdown").CountdownProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    args: {};
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CountdownStory: Story;
export declare const EndOfCountdownStory: Story;
