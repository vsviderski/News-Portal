import { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }): JSX.Element => {
    const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
    );
};
