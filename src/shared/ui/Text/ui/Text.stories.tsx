import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum ea pariatur voluptatibus temporibus corporis alias. Incidunt at id, dolores rerum sit odio repellendus error a soluta quia molestias ratione.',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
