import React, { Component } from 'react'
import { withRouter } from 'react-router'

export default class Address extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container" style={{"margin-top": "50px", 'margin-bottom': '100px'}}>
        <div className="row">
          <div className="col-md-6">
            <h3 className='head'> Ocuvant Sciences </h3>
            <p className='descrip'> 
              <b>part of Roivant Sciences</b> <br /><br />
              320 W 37th St <br />
              New York, NY 10018 <br />
              (212) 847-6204<br />
              roivant@roivant.com
            </p>
            <button type="button" className="btn btn-secondary" style={{"opacity": "0.8", "marginBottom": "20px"}}> 
              DIRECTIONS
          </button>
          </div>
          <div className="col-md-5">
            <img src="img/map.png" height="300px"/>
          </div>
        </div>
      </div>
    )
  }
}