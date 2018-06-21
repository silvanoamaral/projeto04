import React, { Component } from 'react'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {fotos:[]};
    }

    componentDidMount(){
        if(localStorage.getItem("auth-tokem") === null){
            this.props.history.replace('/login');
        }
    }

    render () {
        return (
            <h1>Área Logada</h1>
        );
    }

}