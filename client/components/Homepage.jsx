import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Home from './Home.jsx'
import Mission from './Mission.jsx'
import Focus from './Focus.jsx'
import News from './News.jsx'
import Footer from './Footer.jsx'

export class Homepage extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="homepage">
        <Home />
        <Mission />
        <Focus />
        <News />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Homepage)