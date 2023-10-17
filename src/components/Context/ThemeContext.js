import React, { useContext, useState } from 'react';

// shortcut RSF

const ThemeContext = React.ThemeContext()
const ThemeUpdateContext = React.createContext()

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