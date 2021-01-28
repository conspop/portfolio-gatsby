import React from "react"
import Layout from '../components/Layout'

export default function SkillsPage() {
  return (
    <Layout>
      <main>
        <h2 style={{color: 'var(--primary-color)', marginBottom:'1rem'}}>I'm most at home using a MERN stack</h2>
        <h3 style={{marginBottom: '2rem'}}>and have experience with many other technologies:</h3>
        <div style={{display:'flex', marginBottom: '2rem' }}>
          <LargeIcon icon={<i class="devicon-mongodb-plain"></i>} name='Mongo' />
          <LargeIcon icon={<i class="devicon-express-original"></i>} name='Express' />
          <LargeIcon icon={<i class="devicon-react-original"></i>} name='React' />
          <LargeIcon icon={<i class="devicon-nodejs-plain"></i>} name='Node' />
          
        </div>
        <div style={{display:'flex', marginBottom: '2rem' }}>
          <SmallIcon icon={<i class="devicon-javascript-plain"></i>} name='JavaScript' />
          <SmallIcon icon={<i class="devicon-html5-plain"></i>} name='HTML5' />
          <SmallIcon icon={<i class="devicon-css3-plain"></i>} name='CSS3' />
          <SmallIcon icon={<i class="devicon-gatsby-plain"></i>} name='Gatsby' />
          <SmallIcon icon={<i class="devicon-python-plain"></i>} name='Python' />
          <SmallIcon icon={<i class="devicon-django-plain"></i>} name='Django' />
          <SmallIcon icon={<i class="devicon-postgresql-plain"></i>} name='PostgreSQL' />
          <SmallIcon icon={<i class="devicon-git-plain"></i>} name='Git' />
        </div>
      </main>
    </Layout>
  )
}

function LargeIcon({icon, name}) {
  const largeIconStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1rem'
  }

  return (
    <div style={largeIconStyle}>
      <div style={{fontSize:'3rem'}}>{icon}</div>
      <div>{name}</div>
    </div>
  )
}

function SmallIcon({icon, name}) {
  const smallIconStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 .5rem'
  }

  return (
    <div style={smallIconStyle}>
      <div style={{fontSize:'1.5rem'}}>{icon}</div>
      <div>{name}</div>
    </div>
  )
}



