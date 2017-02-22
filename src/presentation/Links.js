import React from 'react'

import './Links.css'

export default (props) => (
  <nav className='links-container'>

    <a href='/recettes' className='link-item'>
      <span className='link-text'>
        Mes Recettes
      </span>
      <span className='link-icon'>
        <i className='material-icons'>local_dining</i>
      </span>
    </a>

    <a href='/liste' className='link-item'>
      <span className='link-text'>
        Ma liste
      </span>
      <span className='link-icon'>
        <i className='material-icons'>shopping_cart</i>
      </span>
    </a>

    <a href='#' className='link-item'>Login</a>

    <a href='https://github.com/MicaMac8/komi-mdl' className='link-icon--github link-item' target='_blank'>
      <i className='fa fa-github' aria-hidden='true' />
    </a>
  </nav>
)
