import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class Pipeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div style={{"height": "500px"}}> <h1> PLS SHOW THIS PLS </h1></div>
      </div>
    )
  }
}

export default withRouter(Pipeline)