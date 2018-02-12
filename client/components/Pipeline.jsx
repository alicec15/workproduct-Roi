import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Footer from './Footer.jsx'
// import Timeline from './Timeline.jsx'

export class Pipeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row pipeline">
            <h1 className="pagehead"> Pipeline </h1>
          </div>
          <div className="row">
            <img src="img/pipeline.jpg" width="100%" style={{paddingBottom: "50px"}} />
          </div> 
          <div className="row">
            <p className='descrip' style={{'margin-bottom': '100px'}}>
            Darapladib is an inhibitor that blocks lipoprotein-associated Phospholipase A2 enzyme, which 
            causes retinal capillaries from becoming permeable leading to edema. By applying precision technology 
            to the treatment of DME, we can potentially avoid adverse side effects from this treatment as compared 
            to other standards. Because Lp-PLA2 is upstream of the growth factor responsible for the formation of 
            blood vessels, Darapladib tackles DME at the source of the problem verses just treating the symptoms.
            </p>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <h4 className='head'>Phase 1 </h4>
            </div>
            <div className='col-md-8'>
              <p> (Information about Phase 1)</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <h4 className='head'>Phase 2 </h4>
            </div>
            <div className='col-md-8'>
              <p><ul>
                <li className='descrip'>Orally administered 160mg daily for 2.5 years</li>
                <li className='descrip'>Exceptionally high safety profile developed over 14,000 patients</li>
              </ul>  </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-2'>
              <h4 className='head'>Phase 3 </h4>
            </div>
            <div className='col-md-8'>
              <p> <ul>
                <li className='descrip'>Administer daily oral darapladib (160 mg) as done in previous cardiovascular and DME trials with intraperitoneal injection strategies </li>
                <li className='descrip'>Enroll DME patients with baseline vision worse than 20/40 (rather than 20/32)</li>
                <li className='descrip'>Enroll DME patients who respond poorly to anti-VEGF therapy (50% of DME patients)</li>
              </ul> </p> 
            </div>
          </div>
        </div>
        {/* <Footer  /> */}
      </div>
    )
  }
}

export default withRouter(Pipeline)