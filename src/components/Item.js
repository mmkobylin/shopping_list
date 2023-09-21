import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// the actual defaults of the item 
export const Item = ( { item } ) => {

    return (
        <Container className="bg-info border rounded mt-3">
        <Row>
            <Col className="p-4" >{ item.name }</Col>
            <Col className="p-4"> £ { item.price }</Col>
            <Col> <FontAwesomeIcon className="p-4 icon" size='lg' icon = { faCircleCheck }  /></Col>
            <Col> <FontAwesomeIcon className="p-4 icon" size='lg' icon = { faCircleXmark } /></Col>
        </Row>
        </Container>
    );
}
