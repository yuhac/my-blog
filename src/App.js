import React from 'react'
import Navigation from './components/navigation/Navigation'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import PageRenderer from './router/pageRenderer'
import './app.scss'

const user = {
  name: 'name'
}

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='app-container'>
          <div className='header'>
            <Navigation user={user} />
          </div>
          <div className='main'>
            <Switch>
              <Route path='/:page' component={PageRenderer} />
              <Route path='/' render={() => <Redirect to='home' />} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
