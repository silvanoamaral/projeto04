import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import './Login.scss'

export default class Login extends Component {

    constructor(props){
        super(props)
        console.log(this.props);
        //this.state = { msg: this.props.location.query.msg }
        this.state = { msg: '' }
    }

    envia(event){
        event.preventDefault();

        //Referencia para entender o Response: https://developer.mozilla.org/pt-BR/docs/Web/API/Response
        
        const requestInfo = {
            method:'POST',
            body:JSON.stringify({name:this.login.value,pass:this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };

        fetch('http://demo5054509.mockable.io/login',requestInfo)
        .then(response => {
            console.log(response);
            if(response.ok){
                
                return response.text();
            } else {
                throw new Error('Não foi possível fazer o login');
                /*
                    Ao lançarmos a exception, o fluxo do then() será interrompido. 
                    Porém ainda queremos que a mensagem seja recebida pelo usuário, por isso, 
                    na Promise teremos o método catch().
                */
            }
        })
        .then(token => {
            localStorage.setItem('auth-tokem',token);

            //E o browserHistory possui o método push(). 
            //Nele, podemos especificar que queremos navegar para um endereço da aplicação, exemplo, /timeline.
            browserHistory.push('/timeline');

            console.log(token);
        })
        .catch(error => {
            this.setState({msg:error.message});
        });
    }

    render() {
        return (
            <div className="grid-login">
                <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{ this.state.msg }</span>
                <form onSubmit={ this.envia.bind(this) }>
                        <input type="text" ref={ (input) => this.login = input } />
                        <input type="password" ref={ (input) => this.senha = input } />
                        <input type="submit" value="login"/>
                    </form>
                </div>
            </div>
        )
    }
}