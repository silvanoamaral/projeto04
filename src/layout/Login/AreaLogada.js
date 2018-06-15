import React, { Component } from 'react'

export default class Login extends Component {

    constructor(){
        super();
        this.state = {fotos:[]};
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem("auth-token")')
        .then(response => response.json())
        .then(fotos => {
            this.setState({fotos:fotos});
        });
    }

    render () {
        return (
            <h1>Área Logada</h1>
        );
    }

}