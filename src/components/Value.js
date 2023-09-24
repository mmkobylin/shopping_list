import React from 'react'
import Col from 'react-bootstrap/Col'

// i want the spend to be optional variable 
export const Value = ( { label, number, spend = null } ) => {

  return (
    <Col>
        {/* adding addional info about the background */}
        <h3 className = {`banner ${ spend ? "bg-danger text-light" : ""} `}>
            { label }: £ { number }
        </h3>
    </Col>
  )
}

Value.defaultProps = {
    number: 0 
}