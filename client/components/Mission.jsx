import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

export class Mission extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="info" style={{"zIndex": "5"}}>
        <div className="col"> 
          <h1 className="sectionhead">MISSION FOR INNOVATION</h1>
        </div>
        <div className="row">
          <div className="col-md-9 offset-md-2 description">
            <p> Occuvant is dedicated to improving the lives of patients who suffer from vision related diseases. 
            We strive to provide innovative and promising treatments to these diseases, 
            where current therapies are not always effective.
            </p>
          </div>
        </div>
        <div className="col-md-6 offset-md-3"> 
          <ul className="info--list "> 
            <li><b>Transform</b> treatments for vision diseases where current therapies are invasive or ineffective</li>
            <li><b>Provide</b> safe alternative treatments to numerous patients suffering from these dieases  </li>
            <li><b>Improve</b> quality of life in patients with eye diseases </li>
          </ul>
        </div>
      </div>

    )
  }
}
export default withRouter(Mission)