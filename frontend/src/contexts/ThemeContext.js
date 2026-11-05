import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(prev => !prev)
    }

    return [isDarkMode, toggleTheme]
}