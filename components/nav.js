import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List 1dfsd</Link></li>
    </ul>
  )
}

export default Nav
