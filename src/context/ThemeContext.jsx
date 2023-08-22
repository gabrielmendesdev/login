import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState({});
    const toggleTheme = (response) => {
        setTheme(response)
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
