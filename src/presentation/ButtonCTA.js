import React from 'react'

import './ButtonCTA.css'

export default (props) => (
  <div className='btn-cta-container'>
    <a className='btn-cta'>
      <div className='btn-content'>
        <span className='btn-text'>{props.text}</span>
        <i className='material-icons'>{props.icon}</i>
      </div>
    </a>
  </div>
)
