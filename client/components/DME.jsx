import React, { Component } from 'react'
import { withRouter } from 'react-router'


export class DME extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <div className="dme"> </div>
        <div className='container'>
          <div className="row">
            <h1 className="pagehead" style={{'margin-top': '50px'}}> Diabetic Macular Edema </h1>
          </div>
          <div className="row descrip">
            <p className='descrip'> The number of patients with vision related dieases associated 
            with diabetes is increasing each year due to the weaken of blood vessels in the retina. Although this 
            is becoming a more prevelant problem, the therapies that are currently administered to treat DME are 
            insufficent. Laser photocoagulation treats the symptoms of DME and only results in 50% less vision 
            loss. Lucentis (anti-VEGF), on the otherhand, is a monthly injection that targets the growth factor 
            responsible for stimulating blood vessel growth (which leads to high vascular permeability). Although, 
            this treatment tackles the growth pathway, it is invasive and has only a 50% response rate. In pushing
            Darapladib through the clinial trials, we are aiming to provide a DME treatment that is highly effective
            and non-invasive.
            </p>
          </div>
          <div className="row">
            <h2 className="pagehead" style={{'margin-top': '50px'}}> Research </h2>
          </div>
          <div className="row research">
            <div className="col-md-6">
              <p className='descrip'> 
                Improved vascular permeability
              </p>
              <button type="button" className="btn btn-secondary" style={{"opacity": "0.8", "marginBottom": "20px"}}> 
                ARTICLE
              </button>
            </div>
            <div className="col-md-5">
              <img src="img/vascularperm.png" height="300px"/>
            </div>
          </div>
          <div className="row research">
            <div className="col-md-6">
              <p className='descrip'> 
                Darapladib shows improvement of visual acuity score by 5.2 letters
              </p>
              <button type="button" className="btn btn-secondary" style={{"opacity": "0.8", "marginBottom": "20px"}}> 
                ARTICLE
              </button>
            </div>
            <div className="col-md-5">
              <img src="img/compare.png" height="300px"/>
            </div>
          </div>
          <div className='row'>
            <ul className="info--list "> 
              <li>Darapladib DME Study Group. Ophthalmology 122(5): 990-6 (2015).</li>
              <li>The Diabetic Retinopathy Clinical Research Network. Ophthalmology 177(6): 1064-77 (2010)</li>
              <li>Blackie, J. A.,et al. Bioorg Med Chem Lett 13(6): 1067-70. (2003).</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(DME)