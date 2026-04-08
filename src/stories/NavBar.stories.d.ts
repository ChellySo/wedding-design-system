import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<import("./NavBar").NavBarProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
    tags: string[];
    args: {
        color: "teal";
    };
    argTypes: {
        color: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
