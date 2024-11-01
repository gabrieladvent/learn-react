import { createContext, useState } from "react";

const DarkModeContext = createContext();
const DarkModeProvider = ( { children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // {console.log(isDarkMode); }

    return (
        <DarkModeContext.Provider value={ {isDarkMode, setIsDarkMode} }>
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext;
export default DarkModeProvider;