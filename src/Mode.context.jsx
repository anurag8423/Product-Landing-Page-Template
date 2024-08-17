import { createContext, useContext, useState, useEffect } from "react";

export const ModeContext = createContext(true);

export const ModeProvider = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize the darkMode state from localStorage
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false; // Default to false if no value in localStorage
    });

    // Toggle dark mode and update localStorage
    const toggleMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.body.classList.toggle('dark', newMode);
    };

    // Apply dark mode class when component mounts if darkMode is true
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        setIsInitialized(true); // Ensure initialization is complete
    }, [darkMode]);

    if (!isInitialized) return null; // Prevent rendering until initialization

    return (
        <ModeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export const useMode = () => useContext(ModeContext);
