import React from 'react'

import './Header.css'

export default (props) => (
  <header className='header-container'>
    <div className='header-wrapper'>
      <h1 className='header-title'>{props.title}</h1>
      <h5 className='header-description'>{props.description}</h5>
    </div>
  </header>
)
