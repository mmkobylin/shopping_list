import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const FirstRow = () => {
  return (
    <Container className = "p-3 mb-2 bg-primary text-white border rounded text-center fw-bold" >
        <Row>
            <Col>Product</Col>
            <Col>Price</Col>
            <Col>Purchased</Col>
            <Col>Remove</Col>
        </Row>
    </Container>
  )
}
