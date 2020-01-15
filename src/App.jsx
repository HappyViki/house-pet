import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: ''
    }
  }

  render () {
    return (
      <HashRouter>
        <nav className='navbar'>
          <span className='navbar-item'>
            <Link to='/'>Home</Link>
          </span>
          <span className='navbar-item'>
            <Link to='/dashboard'>Dashboard</Link>
          </span>
        </nav>
        <section className='section'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/dashboard' component={Dashboard} exact />
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </section>
      </HashRouter>
    )
  }
}

export default App
