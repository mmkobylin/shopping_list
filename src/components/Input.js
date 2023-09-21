import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// addItem to shopping List 
export const Input = ( {addItem } ) => {

    const [ value, setValue ] = useState("")

    const handleSubmit = e => { 
        // stop reloading
        e.preventDefault();
        // add to list 
        addItem(value)
        //cleanup 
        setValue("")
    }

  return (
    <>
        <Form className="mb-3"  onSubmit = { handleSubmit } >
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
