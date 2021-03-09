import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'


const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src={logo} className='App-logo' alt='logo'/>
        </NavLink>
        <div className='collapse navbar-collapse text-center ml-5'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/react-level-1'>
                React Level 1
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/react-level-2'>
                React Level 2
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar