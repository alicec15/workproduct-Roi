import React, { Component } from 'react'

export default class Mission extends Component {
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
            <li><b>Administer</b> daily oral darapladib (160 mg) as  done in previous cardiovascular and DME trials</li>
            <li><b>Enroll</b> DME patients with baseline vision worse  than 20/40 (rather than 20/32)
            Same criteria as Lucentis Phase-3 Trial</li>
            <li><b>Enroll</b> DME patients who respond poorly to  anti-VEGF therapy (50% of DME patients)</li>
          </ul>
        </div>
      </div>

    )
  }
}