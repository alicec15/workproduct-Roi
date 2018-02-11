import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Timeline from './Timeline.jsx'

export class Pipeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Timeline />
      </div>
    )
  }
}

export default withRouter(Pipeline)