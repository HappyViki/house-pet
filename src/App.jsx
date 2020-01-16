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
        <section className='section'>
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-menu is-active'>
              <span className='navbar-item is-active'>
                <Link to='/'>Home</Link>
              </span>
              <span className='navbar-item'>
                <Link to='/dashboard'>Dashboard</Link>
              </span>
            </div>
          </nav>
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
