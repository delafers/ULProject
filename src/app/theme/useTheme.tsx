import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";
import { useContext } from "react";
interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { toggleTheme, theme };
}
