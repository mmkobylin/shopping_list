import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const BudgetInput = ( { addBudget } ) => {

    // perhaps have set up- budget 
    const [ budget, setBudget ] = useState('');

    const handleSubmit = (e) => {
        // prevent site from reloading
        e.preventDefault();

        setBudget(''); 
    }

  return (
    <>
        <Container>
            <Form onSubmit = { handleSubmit } >
                <Form.Group as = { Row } className="mb-3">
                    <Form.Label column sm="2">Budget</Form.Label>
                    <Col sm="8">
                        {/* control it so it passes only numbers */}
                        <Form.Control type="number" 
                            onChange = { (e) => setBudget( e.target.value ) } 
                            value = { budget } >
                        </Form.Control>
                    </Col>
                    <Col sm ="2" >
                        {/* here is where the info gets passed */}
                        <Button type="submit" onClick = { () => addBudget(budget) }>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container> 
    </>        
  )
}
