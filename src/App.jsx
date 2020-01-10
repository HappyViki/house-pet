import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'

export default function App () {
  const Router = window.ReactRouterDOM.HashRouter
  const Link = window.ReactRouterDOM.Link
  const Switch = window.ReactRouterDOM.Switch
  const Route = window.ReactRouterDOM.Route
  return (
    <Router>
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
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/settings'>
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
    </Router>
  )
}
