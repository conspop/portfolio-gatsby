import React, { useEffect } from 'react'
import 'normalize.css'
import 'fontsource-ubuntu'
import './Layout.css'
import favicon from '../images/gatsby-icon.png'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {  

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    let layoutContainerEl = document.querySelector('.layout-container')
    layoutContainerEl.style.setProperty('--vh', `${vh}px`)
  },[])

  return (
    <div className='layout-container'>
        <Helmet>
          <link rel='icon' href={favicon} />
          <meta property="og:image" content="/hi-im-seb.png" />
        </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  )
}