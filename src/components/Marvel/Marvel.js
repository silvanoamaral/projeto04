import React, { Component } from 'react'
import md5 from 'js-md5'
import { Loading } from '../Loading/Loading'

const PUBLIC_KEY = '0e8154dafc6b9c27e6506450a4c3a474'
const PRIVATE_KEY = '02a8e5a15ef04f3468f5e03feef98fd145a8cdcc'

class Marvel extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          marvel: null,
        };
    }
   
    //é invocado imediatamente depois que um componente é montado. 
    componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const limit = 10

        /*
            Exemplo
            const comicts = 'https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}'
            const creators = 'https://gateway.marvel.com/v1/public/creators?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}'
        */

        const results = fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        .then( (results) => {
            return results.json();
        }).then( data => {
            const marvelJSON = data.data;
            let listMarvel = marvelJSON.results.map((obj) => {
                return(
                    <li key={obj.id}>
                        <img src={obj.thumbnail.path+".jpg"} />
                        <label>{obj.name}</label>                                             
                    </li>                    
                )
            })
            this.setState({ marvel: listMarvel });
        });
    } 

    render(){
        const { marvel } = this.state;      

        return (
            <section>
                <div className="container">
                    <h2 className="title">TOP MARVEL HEROES</h2>
                    <ul className="marvel">
                        {!this.state.marvel
                            ? <Loading />
                            : {marvel}}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Marvel