import React from 'react'

import './HomeContentItem.css'

export default (props) => (
  <div className='home-content-item-container'>
    <i className='material-icons home-content-item-icon'>{props.icon}</i>
    <p>{props.text}</p>
  </div>
)
