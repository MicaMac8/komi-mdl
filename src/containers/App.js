import React, { Component } from 'react'

import './App.css'

import Page from '../presentation/Page'
import Header from '../presentation/Header'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Page>
          <Header title='komi' />
        </Page>
      </div>
    )
  }
}
