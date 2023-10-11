import React from 'react'
import { Button } from 'react-bootstrap'

// this will need a function to be added to class 

export const ButtonItem = ( { handleFunction, label, theme, disabled } ) => {
    return (
      <Button variant = { theme } onClick = { handleFunction } disabled = { disabled }> { label } </Button>
    )
  }

export default ButtonItem

ButtonItem.defaultProps = { 
  disabled: false
}