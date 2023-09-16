import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme) =>
    (StoryComponent: () => JSX.Element): JSX.Element => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
