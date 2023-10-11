import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonItem from './ButtonTemplate';

export default function InputTemplate( { label, passedFunction, placeholder, type, theme } ) {

    const [ value, setValue ] = useState("")

    const handleSubmit = e => { 
        // stop reloading
        e.preventDefault();
        // add to list 
        passedFunction(value)
        //cleanup 
        setValue("")
    }

  return (
    <>
        <Form onSubmit = { handleSubmit } >
            <Row className="pb-5">
                <Col >
                    <Form.Label>{ label }</Form.Label>
                </Col>
                <Col xs= { 9 } >
                    <Form.Control
                        type = { type }
                        placeholder = { placeholder }
                        value = { value }
                        onChange = { (e) => setValue( e.target.value ) } 
                    />
                </Col>
                <Col xs = { 'auto' } >
                    <ButtonItem
                        handleFunction = { handleSubmit } 
                        theme = { theme } 
                        label = { label }
                        disabled = { !value } 
                    />
                </Col>
            </Row>
        </Form>
    </>
  )
}

InputTemplate.defaultProps = { 
    theme: 'success'
}