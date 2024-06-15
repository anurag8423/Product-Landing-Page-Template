import { createContext, useContext, useState } from "react";

export const ModeContext = createContext(true);

export const ModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <ModeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
}