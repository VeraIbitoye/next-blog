'use client';
import { createContext, useEffect, useState } from "react";
// Create the ThemeContext
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme")
        return value || "light"
    }
}

export const ThemeContextProvider = ({ children }) => {
    // Corrected usage of useState
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    } 

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
