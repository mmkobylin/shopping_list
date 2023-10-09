import React from 'react'
import { Button } from 'react-bootstrap'

// this will need a function to be added to class 

export const ButtonItem = ( { handleFunction, command, theme, disabled } ) => {
    return (
      <Button variant = { theme } onClick = { handleFunction } disabled = { disabled }> { command } </Button>
    )
  }

export default ButtonItem

ButtonItem.defaultProps = { 
  disabled: false
}