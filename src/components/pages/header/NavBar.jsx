import React from 'react'
import { Link } from 'react-router-dom'
function NavBar()
{
  return (
    <div>
      <Link to="/register" >Register</Link>
      <Link to="/login" >Login</Link>
      <Link to="/owner" >owner</Link>
      <Link to="/client" >client</Link>
      <Link to="/logout" >Logout</Link>
    </div>
  )
}

export default NavBar
