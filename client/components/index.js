import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Mission from './Mission.jsx'

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
      </div>
    )
  }
}