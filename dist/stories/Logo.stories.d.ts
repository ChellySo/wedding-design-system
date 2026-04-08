import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: {
        ({ color, ...props }: import("./Logo").LogoProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
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
export declare const Teal: Story;
export declare const White: Story;
