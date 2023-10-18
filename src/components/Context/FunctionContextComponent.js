import React from 'react'
import { useTheme, useThemeUpdate } from "./ThemeContext"

function FunctionContextComponent() {

  // factoring 
  const darkTheme = useTheme(); 
  const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? `#333` : `#CCC`,
        color: darkTheme ? `#CCC` : `#333`,
        padding: `2rem`,
        margin: '2rem'
    }
  return (
    <>
      <button onClick={ toggleTheme } > Change</button>
      <div style = { themeStyles } >FunctionContextComponent</div>
    </>
  )
}

export default FunctionContextComponent