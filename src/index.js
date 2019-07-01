import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import './style.css'

import Home from './pages/Home'
import SpotifyHome from './pages/SpotifyHome'
import NetflixHome from './pages/NetflixHome'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/spotify-home" component={SpotifyHome} />
      <Route exact path="/netflix-home" component={NetflixHome} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
