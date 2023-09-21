import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// addItem to shopping List 
export const Input = ( ) => {

    // empty string for user value
    const [ value, setValue ] = useState('')

    const handleSumbit = e => {

        // stop reloading 
        e.preventDefault();
        
        // add the value to list 
        // addItem(value)

        console.log(value); 
        // empty value 
        setValue('')
    }
  return (
    <>
        <Form className="mb-3"  onSubmit = { handleSumbit } >
            <Form.Control
            type = "text"
            placeholder="Add item"
            aria-label="Item"
            aria-describedby="basic-addon1"
            value = { value }
            onChange = { (e) => setValue( e.target.value ) } 
            />
            <Button className="mt-5" type="submit" variant='success'>Add</Button>
        </Form>
    </>
  )
}
