import React from 'react'

import './Header.css'

import Links from './Links'

export default (props) => (
  <header className='header-container'>
    <div className='header-wrapper'>
      <h1 className='header-title'>{props.title}</h1>
      <Links />
      <h5 className='header-description'>{props.description}</h5>
    </div>
  </header>
)
