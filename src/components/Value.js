import React from 'react'
import Col from 'react-bootstrap/Col'

// i want the spend to be optional variable 
export const Value = ( { label, number, spend = null} ) => {

  return (
    <Col>
        {/* adding addional info about the background */}
        <h4 className = {` p-2 border text-center rounded bg-info ${ spend ? "bg-danger text-light" : ""} `} >
            { label }: £ { number }
        </h4>
    </Col>
  )
}

Value.defaultProps = {
    number: 0 
}