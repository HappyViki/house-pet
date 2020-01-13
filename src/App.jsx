import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Login from './Components/Login.jsx'

export default function App () {
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
