import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("./Heading").HeadingProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
    tags: string[];
    args: {
        children: string;
        color: "burgundy";
        size: "h1";
    };
    argTypes: {
        color: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Burgundy: Story;
export declare const Teal: Story;
export declare const White: Story;
