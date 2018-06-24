import React, { Component } from 'react'
import {Router, browserHistory } from 'react-router'

export default class Logout extends Component {

    componentDidMount () {
        localStorage.removeItem('auth-token');
        //browserHistory.push('/Login');
        //browserHistory.push só da suporte para versão 2/3 do react-router e estou usando a versão 4
        // precisa encontrar uma outra forma para fazer o redirect
    }

    render () {
        return null
    }
}