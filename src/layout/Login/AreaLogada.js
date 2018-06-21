import React, { Component } from 'react'

export default class Login extends Component {

    constructor() {
        super();
        this.state = {fotos:[]};
    }

    handleLogout() {
        localStorage.removeItem('auth-tokem');
        this.props.history.replace('/login');
    }

    componentDidMount() {
        if(localStorage.getItem("auth-tokem") === null) {
            this.props.history.replace('/login');
        }
    }

    render () {
        return (
            <div className="area-restrita">
                <h2>Área Restrita</h2>
                <p className="App-intro">
                    <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
                </p>
            </div>
        );
    }
}