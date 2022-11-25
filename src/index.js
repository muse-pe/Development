import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Decor from './views/decor'
import Home from './views/home'
import Paintings from './views/paintings'
import Handicrafts from './views/handicrafts'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Decor} exact path="/decor" />
        <Route component={Home} exact path="/" />
        <Route component={Paintings} exact path="/paintings" />
        <Route component={Handicrafts} exact path="/handicrafts" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
