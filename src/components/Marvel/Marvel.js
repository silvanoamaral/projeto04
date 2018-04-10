import React, { Component } from 'react'
import md5 from 'js-md5'

const PUBLIC_KEY = '0e8154dafc6b9c27e6506450a4c3a474'
const PRIVATE_KEY = '02a8e5a15ef04f3468f5e03feef98fd145a8cdcc'

class Marvel extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          marvel: ['teste'],
        };
    }
   
    //é invocado imediatamente depois que um componente é montado. 
    componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const results = fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        .then( (results) => {
            return results.json();
        }).then( data => {
            const marvelJSON = data.data;
            let listMarvel = marvelJSON.results.map((name) => {
                return(
                    <li key={name.id}>
                        Name: {name.name}
                        URL: <img src={name.thumbnail.path+".jpg"} />                       
                    </li>                    
                )
            })
            this.setState({marvel: listMarvel});
        });
    } 

    render(){
        const { marvel } = this.state;      

        return (
            <section>
                <h2>Marvel</h2>
                <p>Your public key: {PUBLIC_KEY}</p>
                <p>Your private key: {PRIVATE_KEY}</p>
                <ul><span>Retorno:</span> {marvel}</ul>
            </section>
        )
    }
}
export default Marvel