import React from 'react'

import crosshairGame from '../images/crosshair/game.png'
import crosshairGames from '../images/crosshair/games.png'
import crosshairLobby from '../images/crosshair/lobby.png'
import crosshairLeaderboard from '../images/crosshair/leaderboard.png'
import rosie from '../images/rosiebeitel/rosiebeitel.png'

const projects = [
  {
    name: 'CROSSHAIR',
    technologies: [
      {icon: <i className="devicon-mongodb-plain"></i>, name: 'Mongo'},
      {icon: <i className="devicon-express-original"></i>, name: 'Express'},
      {icon: <i className="devicon-react-original"></i>, name: 'React'},
      {icon: <i className="devicon-nodejs-plain"></i>, name: 'Node'},
      {icon: <i className="devicon-javascript-plain"></i>, name: 'JavaScript'},
      {icon: <i className="devicon-html5-plain"></i>, name: 'HTML5'},
      {icon: <i className="devicon-css3-plain"></i>, name: 'CSS3'},
    ],
    description: 'A turn-based multiplayer card game complete with game lobby and leaderboard. This game is a lot of fun and a great example of how far I\'ve come with React.',
    demoVid:  <div className='thumbnail-container'>
                <a href={crosshairGame} target='_blank' rel="noreferrer"><img alt='Game Thumbnail' src={crosshairGame} className='thumbnail' /></a>
                <a href={crosshairGames} target='_blank' rel="noreferrer"><img alt='Games Thumbnail' src={crosshairGames} className='thumbnail' style={{margin:'0 .25rem'}} /></a>
                <a href={crosshairLobby} target='_blank' rel="noreferrer"><img alt='Lobby Thumbnail' src={crosshairLobby} className='thumbnail' style={{margin:'0 .25rem 0 0'}} /></a>
                <a href={crosshairLeaderboard} target='_blank' rel="noreferrer"><img alt='Lobby Thumbnail' src={crosshairLeaderboard} className='thumbnail' /></a>
              </div>,
    github: 'https://github.com/conspop/crosshair/blob/master/README.md',
    deployed: 'https://crosshairgame.herokuapp.com'
  },
  {
    name: 'ROSIEBEITEL.CA',
    technologies: [
      {icon: <i className="devicon-react-original"></i>, name: 'React'},
      {icon: <i className="devicon-gatsby-plain"></i>, name: 'Gatsby'},
      {icon: <i className="devicon-javascript-plain"></i>, name: 'JavaScript'},
      {icon: <i className="devicon-html5-plain"></i>, name: 'HTML5'},
      {icon: <i className="devicon-css3-plain"></i>, name: 'CSS3'},
    ],
    description: 'A website for a psychotherapist built with Gatsby. The site is fully responsive and I\'ve worked hard to implement best pratices for accessibility and SEO.',
    demoVid:  <div className='thumbnail-container'>
                <a href={rosie} target='_blank' rel='noreferrer'><img alt='rosiebeitel.ca Thumbnail' src={rosie} className='thumbnail' /></a>
              </div>,
    deployed: 'https://rosiebeitel.ca'
  },
  {
  name: 'FITPRO',
  technologies: [
    {icon: <i className="devicon-mongodb-plain"></i>, name: 'Mongo'},
    {icon: <i className="devicon-express-original"></i>, name: 'Express'},
    {icon: <i className="devicon-react-original"></i>, name: 'React'},
    {icon: <i className="devicon-nodejs-plain"></i>, name: 'Node'},
    {icon: <i className="devicon-javascript-plain"></i>, name: 'JavaScript'},
    {icon: <i className="devicon-html5-plain"></i>, name: 'HTML5'},
    {icon: <i className="devicon-css3-plain"></i>, name: 'CSS3'},
  ],
  description: 'Built in one week, this was my capstone project at General Assembly. It is a class scheduling, tracking and invoice creation app designed specifically for group class fitness professionals.',
  demoVid:  <iframe 
              title='Fitpro Demo Vid'
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/S1PM067JtaQ" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>,
  github: 'https://github.com/conspop/fit-pro/blob/main/README.md',
  deployed: 'https://fitproapp.herokuapp.com'
  },
  {
    name: 'GROCREE',
    technologies: [
      {icon: <i className="devicon-mongodb-plain"></i>, name: 'Mongo'},
      {icon: <i className="devicon-express-original"></i>, name: 'Express'},
      {icon: <i className="devicon-nodejs-plain"></i>, name: 'Node'},
      {icon: <i className="devicon-javascript-plain"></i>, name: 'JavaScript'},
      {icon: <i className="devicon-html5-plain"></i>, name: 'HTML5'},
      {icon: <i className="devicon-css3-plain"></i>, name: 'CSS3'},
    ],
    description: 'A grocery list generator so you no longer have to start from scratch each week.',
    demoVid:  <iframe 
                title='Grocree Demo Vid'
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/4PJyd3UY_8o" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>,
    github: 'https://github.com/conspop/grocree/blob/master/README.md',
    deployed: 'https://grocree.herokuapp.com'
    },
    {
      name: 'TRIVIA NIGHT',
      technologies: [
        {icon: <i className="devicon-python-plain"></i>, name: 'Python'},
        {icon: <i className="devicon-django-plain"></i>, name: 'Django'},
        {icon: <i className="devicon-javascript-plain"></i>, name: 'JavaScript'},
        {icon: <i className="devicon-html5-plain"></i>, name: 'HTML5'},
        {icon: <i className="devicon-css3-plain"></i>, name: 'CSS3'},
      ],
      description: 'A real-time multiplayer quiz game that pulls questions from and external API, modelled after bar quiz machines.',
      demoVid:  <iframe 
                  title='Trivia Night Demo Vid'
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/cKA3Hbv7lMA" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
                </iframe>,
      github: 'https://github.com/conspop/trivia_night/blob/main/README.md',
      deployed: 'https://trivia-night-django-app.herokuapp.com'
      },
]

export default projects

