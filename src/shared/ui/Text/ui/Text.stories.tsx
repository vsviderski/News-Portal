import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        theme: TextTheme.ERROR
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
