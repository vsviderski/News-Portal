import { StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => JSX.Element): JSX.Element => (
    <div className={`app ${theme}`}><StoryComponent /></div>
);
