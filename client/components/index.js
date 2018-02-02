import React, { Component } from 'react'
import Navbar from './Navbar.jsx'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}