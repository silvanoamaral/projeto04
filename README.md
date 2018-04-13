## Portfolio Website

* Portfolio to demonstrate jobs;

## GitHub Pages

[Link](https://silvanoamaral.github.io/projeto09/)

## We are using in the project 

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

## Installation of the project

* Clone o repositório na sua máquina: https://github.com/silvanoamaral/projeto09.git;
* Entre na pasta `cd projeto09`;
* Digite o comando `npm install` para instalar as dependências.

## Gerando o bundle

* O comando `npm run build` irá executar o webpack, que vai olhar o arquivo de configuração e gerar o bundle.js, que contém todo o código da aplicação e das dependências.

## Rodando o projeto

* Ao executar o comando `npm run start` vai rodar o server e abrir o projeto no browser com a URL:`http://localhost:8080/` [Link](http://localhost:8080/). Se houver algum ajuste/mudança no código fonte, o browser vai ter um reload e atualizar o projeto.