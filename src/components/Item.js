import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const Item = ( { item, removeItem, crossItem } ) => {

    return (
        // add a conditional className that will make the image crossed: 
        <Container className = {`bg-success border rounded mt-3 text-center fw-bold ${ item.purchased ? `completed bg-light text-dark` : `` } ` } >
            <Row>
                <Col className="p-4" >{ item.name }</Col>
                <Col className="p-4"> £ { item.price }</Col>
                <Col> <FontAwesomeIcon className="p-4  float-right" size='lg' icon = { faCircleCheck } 
                    onClick = { () => crossItem(item.id) } />
                </Col>
                <Col> <FontAwesomeIcon className="p-4  float-right" size='lg' icon = { faCircleXmark }
                    onClick = { () => removeItem(item.id) } />
                </Col>
            </Row>
        </Container>
    );
}
