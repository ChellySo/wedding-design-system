import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("./Button").ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    tags: string[];
    args: {
        children: string;
        variant: "primary";
        size: "md";
    };
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        fullWidth: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Small: Story;
export declare const Large: Story;
