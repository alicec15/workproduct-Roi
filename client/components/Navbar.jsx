import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'


export class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top fixed-top">
        <NavLink to="/"><a className="navbar-brand" href="#"><img className="logo" src="img/ocuvantlogo.png" /></a></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto w-100 justify-content-end">
            <NavLink to="/pipeline"><a className="nav-item nav-link navbar-right" href="#">PIPELINE</a></NavLink>
            <NavLink to="/DME"><a className="nav-item nav-link" href="#">DIABETIC MACULAR EDEMA</a></NavLink>
            <a className="nav-item nav-link" href="#">NEWS</a>
            <a className="nav-item nav-link" href="#">ABOUT OCUVANT</a>
            <NavLink to="/contact"><a className="nav-item nav-link" href="#">CONTACT</a></NavLink>
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Navbar)