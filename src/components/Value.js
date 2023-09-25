import React from 'react'
import Col from 'react-bootstrap/Col'

// i want the spend to be optional variable 
export const Value = ( { label, number, spend = null} ) => {

  return (
    <Col>
        {/* adding addional info about the background */}
        <h3 className = {` p-4 border text-center rounded ${ spend ? "bg-danger text-light" : ""} `}
          onLoa
        >
            { label }: £ { number }
        </h3>
    </Col>
  )
}

Value.defaultProps = {
    number: 0 
}