import React from 'react'

import './Links.css'

export default (props) => (
  <nav className='links-container'>

    <a href='#' className='link-item'>
      <span className='link-text'>
        Mes Recettes
      </span>
      <span className='link-icon'>
        <i className='material-icons'>local_dining</i>
      </span>
    </a>

    <a href='#' className='link-item'>
      <span className='link-text'>
        Ma liste
      </span>
      <span className='link-icon'>
        <i className='material-icons'>shopping_cart</i>
      </span>
    </a>

    <a href='#' className='link-item'>Login</a>

    <a href='#' className='link-icon--github link-item'>
      <i className='fa fa-github' aria-hidden='true' />
    </a>
  </nav>
)
