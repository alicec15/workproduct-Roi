import React, { Component } from 'react'

export default class Mission extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="info">
        <div className="col"> 
          <h1 className="mission">MISSION FOR INNOVATION</h1>
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