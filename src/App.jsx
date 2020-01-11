import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'

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
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/settings' exact>
            <h1>Settings</h1>
            <form method='post' action='/hello/'>
              <input name='username' type='text' />
              <input name='password' type='text' />
              <input value='submit' type='submit' />
            </form>
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  )
}
