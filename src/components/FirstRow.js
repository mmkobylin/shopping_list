import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const FirstRow = () => {
  return (
    <Container className = "p-3 mb-2 bg-primary text-white border rounded text-center fw-bold" >
        <Row>
            <Col className = "text-lg-left" >Product</Col>
            <Col className = "text-lg-left" >Price</Col>
            <Col className = "text-lg-right" >Purchased </Col>
            <Col className = "text-lg-right" >Remove</Col>
        </Row>
    </Container>
  )
}
