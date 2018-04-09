import React from 'react'

/*
  Referencia para responsive
  https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df
*/

const Home = () => (
  <div>
    <div className="banner-home">
      <h1>Welcome to the Website!</h1>
      <p>Está à procura de um Front-End Developer criativo e experiente? Não procure mais :) pois eu estou pronto para desempenhar o cargo!</p>
    </div>
    <div className="content">
      <div className="technology">
        <h1 className="title">
          tecnologia utilizada
        </h1>
        <section className="cards">          
          <article>
            <img className="article-img hide"src="https://www.infinitoag.com/servicos/programacao-web/" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              javascript / Typescript
            </h1>
          </article>
          <article>
            <img className="article-img hide" src="http://placekitten.com/320/220" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              React
            </h1>
          </article>
          <article>
            <img className="article-img hide" src="http://placekitten.com/330/240" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              Webpack
            </h1>
          </article>
          <article>
            <img className="article-img hide" src="http://placekitten.com/280/250" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              HTML
            </h1>
          </article>
          <article>
            <img className="article-img hide" src="http://placekitten.com/310/210" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              CSS
            </h1>
          </article>
          <article>
            <img className="article-img hide" src="http://placekitten.com/430/240" alt=" " />
            <div className="article-img"></div>
            <h1 className="article-title">
              Title of article
            </h1>
          </article>      
        </section> 
      </div>
    </div>
  </div>
)

export default Home
