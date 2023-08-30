import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline',
    },
};

export const BackgroundTheme: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Background theme',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Background inverted',
    },
};

export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: '>',
        square: true,
    },
};

export const SizeM: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};
