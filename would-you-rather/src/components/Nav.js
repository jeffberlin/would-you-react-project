import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
      <ul className='nav-bar-main'>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add'>
            New Poll
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
