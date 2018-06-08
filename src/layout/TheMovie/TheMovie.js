import React, { Component } from 'react'
import FilmeItem from './FilmeItem'

export default class TheMovie extends Component {
    constructor(){
        super();
        this.state = {
            filme: [],
            filmeItens: []
        };
    }

    componentDidMount () {
        const url = "https://api.themoviedb.org/3/list/2?api_key=e2c70d159f475c3cf6bd625fd21f2312&language=en-US";

        fetch(url)
        .then(response => response.json())
        .then(items => {
            console.log(items)
            this.setState({ filmeItens: items.items }),
            this.setState({ filme: items })
        });
    }
    
    render() {
        return (
            <div>
                <h1>{ this.state.filme.description }</h1>
                <h4>{ this.state.filme.name }</h4>
                {
                    this.state.filmeItens.map(items => <FilmeItem key={ items.id } filme={ items } /> )
                }
            </div>
        );
    }
}