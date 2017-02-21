import React, { Component } from 'react'

import Page from '../presentation/Page'
import Header from '../presentation/Header'

export default class HomePage extends Component {
  render () {
    return (
      <div className='homePage-container'>
        <Page>
          <Header title='komi' description="de vos recettes à votre liste de course en un clin d'œil" />

        </Page>
      </div>

    )
  }
}
