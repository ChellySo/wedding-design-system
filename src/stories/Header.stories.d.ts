import type { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: ({ user }: import("./Header").HeaderProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
