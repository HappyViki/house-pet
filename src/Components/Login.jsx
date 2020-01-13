import React from 'react'

function Login (props) {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form method='post' action='/validate'>
        <label>
            Username:
            <input name='username' type='text' />
        </label>
        <label>
            Password:
            <input name='password' type='text' />
        </label>
        <label>
          <input name='register' type='checkbox' defaultChecked={false} onChange={e => {}} />
            Register
          </label>

        <input value='submit' type='submit' />
      </form>
    </div>
  )
}

export default Login
