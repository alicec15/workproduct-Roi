import React, { Component } from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
// import history from './history.js'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Mission from './Mission.jsx'
import Focus from './Focus.jsx'
import News from './News.jsx'
import Footer from './Footer.jsx'
import Homepage from './Homepage.jsx'
import Root from './Root.jsx'
import Pipeline from './Pipeline.jsx'
import Contactpage from './Contactpage.jsx'
import DME from './DME.jsx'

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

export default class App extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    console.log('this', this.props)
  }

  render() {
    return (
        <Router history={ history }>  
          <div className="wrapper">
            <Navbar/>
            <Switch>
              <Route path='/pipeline' component={ Pipeline } />
              <Route path='/contact' component={ Contactpage } />
              <Route path='/dme' component={ DME } />
              <Route exact path='/' component={ Homepage } />
            </Switch>
          </div>
        </Router>
    )
  }
}