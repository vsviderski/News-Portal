import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: { username: 'test name', password: 'test password' },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: { error: 'ERROR' },
        }),
    ],
};

export const Disabled: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            login: { isLoading: true },
        }),
    ],
};
