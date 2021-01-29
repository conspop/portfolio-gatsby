import React from 'react'
import resume from '../images/Resume - Sebastien Beitel.pdf'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='connect-container'>
          <p className='connect'>I'd love to connect!</p>
          <a href='https://linkedin.com/in/sebastien-beitel' target='_blank' rel="noreferrer" className='connect-icons'><i aria-label='LinkedIn' className="fab fa-linkedin"></i></a>
          <a href='https://github.com/conspop' target='_blank' rel="noreferrer" className='connect-icons'><i aria-label='GitHub' className="fab fa-github-square"></i></a>
          <a href='mailto: seb.beitel@gmail.com' target='_blank' rel="noreferrer" className='connect-icons'><i aria-label='Email' className="fas fa-envelope-square"></i></a>
          <a href={resume} target='_blank' rel="noreferrer" className='connect-icons'><i aria-label='Resume' className="fas fa-file-pdf"></i></a>
        </div>
        <div className='gatsby-container'>
          <p style={{margin: 0}}>This site was built from scratch using Gatsby</p>
        </div>
      </div>
    </footer>
  )
}