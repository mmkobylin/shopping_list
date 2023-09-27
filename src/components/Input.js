import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
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
            <Row className="align-items-center pb-5">
                <Col>
                    <Form.Control
                        type = "text"
                        placeholder="Add item"
                        value = { value }
                        onChange = { (e) => setValue( e.target.value ) } 
                    />
                </Col>
                <Col xs="auto">

                    <Button
                        type = "submit"
                        disabled = { !value } 
                        variant="success"> Add
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}
