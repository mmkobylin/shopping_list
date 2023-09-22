import React, { Component } from 'react'

export default class Total extends Component {

  render() {

    const { total } = this.props; 

    return (
      <div className="mt-4 p-2"> 
        <h3> Total: £ { total } </h3>
      </div>
    )
  }
}

Total.defaultProps = {
    total: 0 
}