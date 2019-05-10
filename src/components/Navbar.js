import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'




const Navbar = props => {
  return (
          <ul>
              <li>
                  <NavLink exact to="/">HOME</NavLink>
              </li>
              <li>
                  <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                  <NavLink to="/contact">CONTACT</NavLink>
              </li>
              <li>
                  <NavLink to="/topics">TOPICS</NavLink>
              </li>
              <li>
                  <NavLink to="/user/Asabeneh">User Asabeneh</NavLink>
              </li>
              <li>
                  <NavLink to="/user/Brook">User Brook</NavLink>
              </li>
              <li>
                  <NavLink to="/user/David">User David</NavLink>
              </li>
          </ul>
  )
}

Navbar.propTypes = {

}

export default Navbar
