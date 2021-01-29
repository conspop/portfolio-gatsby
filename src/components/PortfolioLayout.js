import React from 'react'
import './PortfolioLayout.css'

export default function PortfolioLayout({children}) {
  return (
    <main style={{width: '100%'}}>
      <div className='portfolio-layout-container'>
        {children}
      </div>
    </main>
    
  )
} 