import React from 'react'
import 'normalize.css'
import 'fontsource-ubuntu'
import './Layout.css'

import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {  
  return (
    <div className='layout-container'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}