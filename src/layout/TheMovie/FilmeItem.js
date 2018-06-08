import React, { Component } from 'react'

export default class FilmeItem extends Component {
    render(){
        return (
            <p key={ this.props.filme.id }>
                { this.props.filme.original_title }
            </p>
        )
    }
}