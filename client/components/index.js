import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}