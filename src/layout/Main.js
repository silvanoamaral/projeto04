import React from 'react'
import { Switch, Route, browserHistory } from 'react-router-dom'

import Home from './Home/Home'
import Marvel from './Marvel/Marvel'
import Contact from './ContactForm/ContactForm'
import TheMovie from './TheMovie/TheMovie'
import Login from './Login/Login'
import Logout from './Login/Logout'
import AreaLogada from './Login/AreaLogada'

import Erro from '../components/Erros/NotFounds'

import Roster from './Roster'
import Schedule from './Schedule'

function verificaAutenticacao(nextState,replace) {
  if(localStorage.getItem('auth-token') === null) {
    replace('/login/?msg=você precisa estar logado para acessar o endereço')
  }
}

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch history={ browserHistory }>
      <Route exact path='/' component={ Home }/>
      <Route exact path='/projeto09' component={ Home }/>
      <Route path='/roster' component={ Roster }/>
      <Route path='/schedule' component={ Schedule }/>
      <Route path='/marvel' component={ Marvel }/>
      <Route path='/contact' component={ Contact } />
      <Route path='/themovie' component={ TheMovie } />
      <Route path="/login" component={ Login }/>
      <Route path="/logout" component={ Logout }/>
      <Route path="/area-restrita" component={ AreaLogada } onEnter={ verificaAutenticacao }/>
      <Route path="*" component={ Erro }/>
    </Switch>
  </main>
)

export default Main
