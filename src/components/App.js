import React from 'react'
import Header from './Header'
import Navigation from './Navigation/Navigation'
import Main from './Main'
import Footer from './Footer'

import './Sass/Style.scss'

const App = () => (
  <div>
    <Navigation />
    <Main />
    <Footer />
  </div>
)

export default App