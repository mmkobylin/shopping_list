import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ButtonItem from './ButtonItem';


export const BudgetInput = ( { addBudget } ) => {

    // perhaps have set up- budget 
    const [ budget, setBudget ] = useState('');

    const handleSubmit = e => {
        // prevent site from reloading
        e.preventDefault();

        addBudget(budget);

        setBudget('');
    }

  return (
    <>
        <Container>
            <Form >
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
                        <ButtonItem handleFunction = {  handleSubmit } label = { 'Submit' } theme = { 'warning' } disabled = { !budget } 
 /> 
                    </Col>
                </Form.Group>
            </Form>
        </Container> 
    </>        
  )
}
