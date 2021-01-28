import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <div><Link to='/'>About Me</Link></div>
        <div><Link to='/skills'>Skills</Link></div>
        <div><Link to='/portfolio'>Portfolio</Link></div>
        <div><Link to='/contact'>Contact</Link></div>
      </nav>
    </header>
  )
}

