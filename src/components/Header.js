import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

export default function Header() {
  return (
    <header style={{backgroundColor:'white'}}>
      <nav>
        <div><Link to='/'>About Me</Link></div>
        <div><Link to='/skills'>Skills</Link></div>
        <div><Link to='/portfolio'>Portfolio</Link></div>
      </nav>
    </header>
  )
}

