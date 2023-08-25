import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import PageError from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: 'Light',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        children: 'Dark',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
