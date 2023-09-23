import React from 'react'
import Col from 'react-bootstrap/Col'

export const Value = ( { label, number } ) => {

  return (
    <Col> 
        <h3> { label }: £ { number } </h3>
    </Col>
  )
}

Value.defaultProps = {
    number: 0 
}