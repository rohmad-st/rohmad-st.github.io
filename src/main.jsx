import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Portfolio } from './components/Portfolio'

ReactDOM.render(
  <div>
    <Header />
    <Navigation />
    <Portfolio />
  </div>,
  document.getElementById('root')
)
