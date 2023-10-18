import React, { useContext, useState } from 'react';

// shortcut RSF

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// creating custom hook
export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

// giving access 
export default function ThemeProvider( { children } ) {

    const [ darkTheme, setDarkTheme ] = useState(true); 

    function toggleTheme () {
        setDarkTheme( prevTheme => !prevTheme ); 
    }

    return (
        // provider, then context
        <ThemeContext.Provider value = { darkTheme } >
            <ThemeUpdateContext.Provider value = { toggleTheme } >
            { children }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}