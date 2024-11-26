import React, { useMemo } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {   
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);
    const toggleTheme = () => {
        setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
    };
    const defaultProps = useMemo(() => ({ theme, setTheme: toggleTheme }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;