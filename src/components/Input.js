import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ButtonItem } from './ButtonItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// addItem to shopping List 
export const Input = ( { addItem } ) => {

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
        <Form onSubmit = { handleSubmit } >
            <Row className="pb-5">
                <Col>
                    <Form.Control
                        type = "text"
                        placeholder="Add item"
                        value = { value }
                        onChange = { (e) => setValue( e.target.value ) } 
                    />
                </Col>
                <Col xs="auto">
                    <ButtonItem
                        handleFunction = {  handleSubmit } 
                        theme = { 'success' } 
                        label = { 'Add' }
                        disabled = { !value } 
                    />
                </Col>
            </Row>
        </Form>
    </>
  )
}
