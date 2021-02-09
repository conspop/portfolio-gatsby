import React, { useState } from 'react'
import Layout from '../components/Layout'
import PortfolioLayout from '../components/PortfolioLayout'

import projects from '../data/projects'

export default function PortfolioPage() {
  const [projectNumber, setProjectNumber] = useState(0)

  const handleLeft = () => {
    setProjectNumber(projectNumber => {
      if (projectNumber === 0) {
        return projects.length - 1
      } else {
        return projectNumber - 1
      }
    })
  }

  const handleRight = () => {
    setProjectNumber(projectNumber => {
      if (projectNumber === projects.length - 1) {
        return 0
      } else {
        return projectNumber + 1
      }
    })
  }

  return (
    <Layout>
      <PortfolioLayout>
        <div className='title'>{projects[projectNumber].name}</div>
        <div className='icons'>
          {projects[projectNumber].technologies.map(tech => <SmallIcon key={tech.name} icon={tech.icon} name={tech.name} />)}
        </div>
        <div className='description'>{projects[projectNumber].description}</div>
        <div className='video'>{projects[projectNumber].demoVid}</div>
        <div className='links'>
          {projects[projectNumber].github ? <div><a href={projects[projectNumber].github} target='_blank' rel='noreferrer'><i className="fab fa-github-square"></i>&nbsp;&nbsp;Code</a></div> : ''}
          {projects[projectNumber].deployed ? <div><a href={projects[projectNumber].deployed} target='_blank' rel='noreferrer'><i className="fas fa-link"></i>&nbsp;&nbsp;App</a></div> : ''}
        </div>
        <div className='right'>
          <button onClick={handleRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className='left'>
          <button onClick={handleLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </PortfolioLayout>
    </Layout>
  )
}

function SmallIcon({icon, name}) {

  return (
    <div className='small-icon'>
      <div style={{fontSize:'1rem'}}>{icon}</div>
      <div style={{fontSize:'.5rem'}}>{name}</div>
    </div>
  )
}