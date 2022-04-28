import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="details">Details</Link>
            <Link to="signup">Signup</Link>
        </header>
        <Outlet />
    </div>
  )
}

export default Nav