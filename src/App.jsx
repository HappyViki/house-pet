import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Login from './Components/Login.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: ''
    }
  }

  message () {
    // unsafe way, do not do this
    const user = window.localStorage.getItem('username')
    if (user) {
      return `You are logged in as ${user}!`
    } else {
      return 'You are not logged in'
    }
  }

  render () {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
              <li>
                <Link to='/login'>login</Link>
              </li>
              <li>
                {this.message()}
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/dashboard' component={Dashboard} exact />
            <Route path='/login' component={Login} exact />
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
