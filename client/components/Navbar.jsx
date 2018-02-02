import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <a className="navbar-brand" href="#"><img className="logo" src="img/ocuvantlogo.png" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto w-100 justify-content-end">
            <a className="nav-item nav-link navbar-right" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
          </div>
        </div>
      </nav>
    )
  }

}