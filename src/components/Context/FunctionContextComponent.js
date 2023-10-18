import React from 'react'
import { useTheme, useThemeUpdate } from "./ThemeContext"

function FunctionContextComponent( { themeStyles } ) {

  // factoring 
  const darkTheme = useTheme(); 
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <button onClick = { toggleTheme } > Change</button>
      <div style = { themeStyles } >FunctionContextComponent</div>
    </>
  )
}

export default FunctionContextComponent