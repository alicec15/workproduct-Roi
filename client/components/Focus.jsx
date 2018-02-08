import React, { Component } from 'react'

export default class Focus extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="info focus">
          <div className="col">
            <h1 className="sectionhead2"> Diabetic Macular Edema </h1>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-2 description">
              <p> Our lead drug is <b>Darapladib</b> used to treat diabetic patients who have developed 
              <b>Diabetic Macular Edema (DME)</b>. <br />
              Diabetic Macular Edema (DME) is an accumulation of fluid in the macula—part of the 
              retina that controls our most detailed vision abilities—due to leaking blood vessels. 
              In order to develop DME, you must first have diabetic retinopathy. 
              Diabetic retinopathy is a disease that damages the blood vessels in the retina, 
              resulting in vision impairment. Left untreated, these blood vessels begin to build up 
              pressure in the eye and leak fluid, causing DME. Diabetic Retinopathy and DME are common problems for diabetics. 
              Roughly 8% of the U.S. population is diabetic, and about 28% of those diabetics have eye trouble 
              because of it.
              </p>
            </div>
          </div>
          <div className="row">
            {/* <button type="button" class="btn btn-outline-dark">DARAPLADIB</button> */}
            <button type="button" className="btn btn-secondary" style={{"opacity": "0.8", "marginBottom": "20px"}}> 
              DARAPLADIB
            </button>
          </div>
      </div>
    )
  }
}

