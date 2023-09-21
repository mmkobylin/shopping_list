import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
            <Row className="align-items-center pb-5">
                <Col>
                    <Form.Control
                        type = "text"
                        placeholder="Add item"
                        aria-label="Item"
                        aria-describedby="basic-addon1"
                        value = { value }
                        onChange = { (e) => setValue( e.target.value ) } 
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="" variant='success'>
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}
