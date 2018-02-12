import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Footer from './Footer.jsx'
// import Timeline from './Timeline.jsx'

export class Pipeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row pipeline">
            <h1 className="pagehead"> Pipeline </h1>
          </div>
          <div className="row">
            <img src="img/pipeline.jpg" width="100%" style={{paddingBottom: "50px"}} />
          </div> 
          <div className="row">
            <p> hello farewell, what do i write here </p>
          </div>
        </div>
        {/* <Footer  /> */}
      </div>
    )
  }
}

export default withRouter(Pipeline)