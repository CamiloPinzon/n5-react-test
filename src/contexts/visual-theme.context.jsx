import { createContext, useState } from "react";


export const VisualThemeContext = createContext({
    defaultTheme: true,
    togleTheme: () => {},
})

export const VisualThemeProvider = ({children}) => {
    const [defaultTheme, setDefaultTheme] = useState(true);
    const togleTheme = () => {
        const isDefaultTheme = defaultTheme ? false : true;
        setDefaultTheme(isDefaultTheme);
    }

    const value = {
        togleTheme,
        defaultTheme
    }

    return <VisualThemeContext.Provider value={value}>{ children }</VisualThemeContext.Provider>
}