import React, { useState } from 'react';

const Register = ({dispatch}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleUsername = (evt) => {
    setUsername(evt.target.value)
  }
  
  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handlePassword2 = (evt) => {
    setPassword2(evt.target.value)
  }

  return(

    <form onSubmit={e => {e.preventDefault(); dispatch({ type: 'REGISTER', username }); console.log('You\'re registered!')}}>
      <label htmlFor='login-username'>Username:</label>
      <input type='text' name='login-username' id='login-username' value={username} onChange={handleUsername} />
      <label htmlFor='login-password'>Password:</label>
      <input type='password' name='login-password' id='login-password' value={password} onChange={handlePassword} />
      <label htmlFor='register-password-repeat'>Repeat password:</label>
      <input type='password' name='register-password-repeat' id='register-password-repeat' value={password2} onChange={handlePassword2} />
      <input type='submit' value='Register' disabled={username.length === 0 || password.length === 0 || password !== password2}  />
    </form>
    )
  }
  
  export default Register;