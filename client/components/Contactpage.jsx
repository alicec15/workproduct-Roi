import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Contactform from './Contactform.jsx'
import Address from './Address.jsx'

export class Contactpage extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="container pipeline">
        <Contactform />
        <Address />
      </div>
    )
  }
}

export default withRouter(Contactpage)