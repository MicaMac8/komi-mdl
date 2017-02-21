import React, { Component } from 'react'

import Page from '../presentation/Page'
import Header from '../presentation/Header'
import ButtonCTA from '../presentation/ButtonCTA'
import HomeContent from '../presentation/HomeContent'

export default class HomePage extends Component {
  render () {
    return (
      <Page>
        <Header title='komi' description="de vos recettes à votre liste de course en un clin d'œil" />
        <ButtonCTA text='Créez votre première recette' icon='local_dining' />
        <HomeContent />
      </Page>
    )
  }
}
