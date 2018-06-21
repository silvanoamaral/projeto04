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

    componentDidMount(){
        if(localStorage.getItem("auth-tokem") !== null){
            this.props.history.replace('/area-restrita');
        }
    }

    consultarMocks () {
        fetch('http://demo8863962.mockable.io/user',{
            method: 'get' //metodo opcional
        })
        .then(response => {
            if(response.ok){
                return response.json()
                //https://braziljs.org/blog/fetch-api-e-o-javascript/
            } else {
                throw new Error('Não foi possível fazer o login');
                /*
                    Ao lançarmos a exception, o fluxo do then() será interrompido. 
                    Porém ainda queremos que a mensagem seja recebida pelo usuário, por isso, 
                    na Promise teremos o método catch().
                */
            }
        })
        .then(data => {            
            const result = this.validarUsuario( data );

            if( result ) {
                //console.info('Sucesso, pode efeturar o login ;)');
                localStorage.setItem('auth-tokem',result);
                this.props.history.replace('/area-restrita');
            } else {
                this.setState({ msg:'Login e Senha Inválidos' });
            }            
        })
        .catch(error => {
            this.setState({msg:error.message});
        });
    }

    validarUsuario (data) {
        return data.user.some(user => {
            if(this.login.value === user.name && this.senha.value === user.pass){ 
                return user.pass;                    
            } 

            return false;
        });
    }

    enviarMocks(event) {
        event.preventDefault();

        if(this.login.value !== '' && this.senha.value) {
            this.consultarMocks();
        } else {
            this.setState({ msg:'Login e Senha Inválidos' });
        }
    }

    render() {
        return (
            <div className="grid-login">
                <div className="login-box">
                <h1 className="header-logo">Login</h1>
                <span>{ this.state.msg }</span>
                <form onSubmit={ this.enviarMocks.bind(this) } >
                        <input type="text" ref={ (input) => this.login = input } />
                        <input type="password" ref={ (input) => this.senha = input } />
                        <input type="submit" value="login"/>
                    </form>
                </div>
            </div>
        )
    }
}