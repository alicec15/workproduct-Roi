import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Mission from './Mission.jsx'
import Focus from './Focus.jsx'
import News from './News.jsx'
import Footer from './Footer.jsx'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Home />
        <Mission />
        <Focus />
        <News />
        <Footer />
      </div>
    )
  }
}