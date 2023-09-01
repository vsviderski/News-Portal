import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum ea pariatur voluptatibus temporibus corporis alias. Incidunt at id, dolores rerum sit odio repellendus error a soluta quia molestias ratione.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum ea pariatur voluptatibus temporibus corporis alias. Incidunt at id, dolores rerum sit odio repellendus error a soluta quia molestias ratione.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
