import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register'

const UserBar = ({user, dispatch}) => {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />
  }
  return (
    <React.Fragment>
      {user}
      <Login dispatch={dispatch} />
      <Register dispatch={dispatch} />
    </React.Fragment>
  )
}

export default UserBar;