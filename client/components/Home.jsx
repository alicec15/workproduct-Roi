import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const homepage = document.getElementsByClassName('homepage')[0];
    const rate = 300;
    let last = 0;
    document.addEventListener('scroll', () => {
      const now = Date.now();
      if (now - last > rate) {
        homepage.style.backgroundPositionY = -window.scrollY * 0.5 + 'px'
        last = now;
      }
    });
  }

  render () {
    return (
      <div>
        <div className="image">
        <h1>Innovation in Eye Diseases</h1></div>
      </div>
    )
  }
}

export default withRouter(Home)