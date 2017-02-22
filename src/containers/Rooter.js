import React from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import HomePage from './HomePage'
import MesRecettes from './MesRecettes'
import MaListe from './MaListe'

export default () => (
  <BrowserRouter>
    <main>
      <Match exactly pattern='/' component={HomePage} />
      <Match exactly pattern='/recettes' component={MesRecettes} />
      <Match exactly pattern='/liste' component={MaListe} />
    </main>
  </BrowserRouter>
)
