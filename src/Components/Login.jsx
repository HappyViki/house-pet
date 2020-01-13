import React from 'react'

class Login extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='login'>
        <h1>Login</h1>
        <form method='post' action='/validate-user'>
          <input name='username' type='text' />
          <input name='password' type='text' />
          <input value='submit' type='submit' />
        </form>
      </div>
    )
  }
}

export default Login
