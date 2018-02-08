import React, { Component } from 'react'

var master = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

export default class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hi: true,
      arr: master
    }
    this.help = this.help.bind(this)
  }

  help(name, location, issue) {
    console.log('pls')
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text">{ location }</p>
            <a href="#" className="btn btn-primary"> click for article </a>
          </div>
        </div>
      </div>

    )
  }

  render() {
    console.log(this.state.arr)

    return (
      <div className="info">
        <div className="col">
          <h1 className="sectionhead"> News </h1>
        </div>
        <div className="card-responsive">

        { this.state.arr.map(tic => {
          return this.help(tic.names, tic.issue)
        }) }

          {/* <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    )
  }

}