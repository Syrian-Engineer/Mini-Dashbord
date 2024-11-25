import { createContext } from "react";

interface ThemeContextType{
    DarkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);