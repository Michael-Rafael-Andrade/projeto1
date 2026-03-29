import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    // ✅ ISSO RESOLVE TUDO: Aplica a cor no fundo total do navegador
    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#ffffff'; // Branco para fundo preto
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000'; // Preto para fundo branco
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}