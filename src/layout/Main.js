import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import Marvel from './Marvel/Marvel'
import Contact from './ContactForm/ContactForm'
import TheMovie from './TheMovie/TheMovie'
import Erro from '../components/Erros/NotFounds'

import Roster from './Roster'
import Schedule from './Schedule'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projeto09' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/marvel' component={Marvel}/>
      <Route path='/contact' component={Contact} />
      <Route path='/themovie' component={TheMovie} />
      <Route path="*" component={Erro}/>
    </Switch>
  </main>
)

export default Main
