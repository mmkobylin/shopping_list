// the input will be rendered as a 'budget' 
// we also going to need 'handleSubmit' 

import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


export const BudgetInput = () => {

    // perhaps have set up- budget 
    const [ budget, setBudget ] = useState('');

    const handleSubmit = (e) => {

        // prevent site from reloading
        e.preventDefault(); 

        console.log(budget)
        // pass the budget 'up' 
        setBudget('')
    }

  return (
    <Form onSubmit = { handleSubmit } >
        {/* control it so it passes only numbers */}
        <Form.Control type="number" 
            onChange = { (e) => setBudget( e.target.value ) } 
            value = { budget }    
        >
        </Form.Control>
        <Button type="submit">Submit</Button>
    </Form>
  )
}
