## Portfolio Website

* Portfolio to demonstrate jobs;

## GitHub Pages

Go [here](https://silvanoamaral.github.io/projeto09/) for live demo.

## Developed With

* HTML
* CSS / SASS
* Javascript / ES6
* Webpack
* NodeJS 
* React
* Babel

## Project Structure
```
├── index.html
├── package.json
├── src
│   ├── components
│   │   └── Sass
│   │   └── Home
│   │   │   └── Home.js
│   │   │   └── Home.scss
│   │   └── Navegation
│   │   │   └── Navegation.js
│   │   │   └── Navegation.scss
│   ├── public
│   │   └── imagens
│   └── app.js
├── webpack.config.js
```

* `index.html` file main
* `src/app.js` contains all our cool JavaScript code
* `package.json` defines our dependencies
* `src/sass/main.scss` is our scss / sass entry point
* `webpack.config.js` is our config that tells webpack what to do

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installation of the project

* Clone o repositório na sua máquina: https://github.com/silvanoamaral/projeto09.git;
* Entre na pasta `cd projeto09`;
* Digite o comando `npm install` para instalar as dependências.

## Runs the app in the development mode

* Ao executar o comando `npm run start` roda o server e abre o browser com projeto na url:`http://localhost:8080/` [Link](http://localhost:8080/).

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de lint no console.

## Builds the app for production mode `bundle.js`

* O comando `npm run build` executa o webpack, que olhar para o arquivo de configuração `webpack.config.js` e gerar o bundle.js, que contém todo o código da aplicação e das dependências.
