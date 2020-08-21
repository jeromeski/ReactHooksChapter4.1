import React, { useState } from 'react';

const Login = ({dispatch}) => {

const [ username, setUsername ] = useState('');
const [ password, setPassword] = useState('');

const handleUsername = (evt) => {
  setUsername(evt.target.value)
}

const handlePassword = (evt) => {
  setPassword(evt.target.value)
}

return(
  <form onSubmit={e => { e.preventDefault(); dispatch({type: 'LOGIN', username}) }}>
    <label htmlFor='login-username'>Username:</label>
    <input type='text' name='login-username' id='login-username' onChange={handleUsername}  value={username} />
    <label htmlFor='login-password'>Password:</label>
    <input type='password' name='login-password' id='login-password' onChange={handlePassword}  value={password} />
    <input type='submit' value='Login' disabled={username.length === 0}/>
  </form>
  )
}

export default Login;

