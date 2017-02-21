import React from 'react'

import './HomeContentItem.css'

export default (props) => (
  <div className='home-content-item-container'>
    <p>{props.text}</p>
    <i className='material-icons'>{props.icon}</i>
  </div>
)
