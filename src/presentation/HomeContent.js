import React from 'react'

import './HomeContent.css'

import HomeContentItem from './HomeContentItem'

export default (props) => (
  <div className='home-content-container'>
    <HomeContentItem text='Créez vos recettes' icon='local_dining' />
    <HomeContentItem text='Selectionez les' icon='add_shopping_cart' />
    <HomeContentItem text='Faites vos courses' icon='shopping_cart' />
  </div>
)
