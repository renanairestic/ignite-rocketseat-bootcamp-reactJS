# INICIANDO UM NOVO PROJETO REACT:
 - Roteiro do primeiro capítulo Bootcamp Ignite - Rocketseat
 
 * Trilha React - 2021

      Nesse Readme vou incluir minhas anotações e informações que achei necessárias.

      Finalizado os estudos práticos em 17.04.2021 deste capítulo

# SUMÁRIO
- [Introdução ao módulo](#introdução-ao-módulo)
- [Configurando o Babel](#Configurando-o-Babel)
- [Configurando Webpack](#Configurando-WebPack)
- [Estrutura ReactJS](#Estrutura-ReactJS)
- [Servindo HTML estático](#Servindo-HTML-estático)
- [Webpack Dev Server](#Webpack-Dev-Server)
- [Utilizando source maps](#Utilizando-source-maps)
- [Ambinete dev e Produção](#Ambiente-dev-e-produção)
- [Importando arquivos CSS](#Importando-arquivos-css)
- [Utilizando SASS](#Utilizando-SASS)
- [Promeiro Componente React](#Primeiro-componente-React)
- [Propriedades no React](#Propriedades-no-React)
- [Estado de componente](#Estado-de-componente)
- [Imutabilidade](#Imutabilidade)
- [Fast refresh no webpack](#Fast-refresh-no-webpack)
- [Estilização da listagem](#Estilização-da-listagem)
- [Utilizando useEffect](#Utilizando-useEffect)
- [Listando repostórios](#Criando-repostórios) 
- [Fundamentos do TypeScript](#Fundamentos-do-TypeScript)
- [TypeScript no ReactJS](#TypeScript-no-ReactJS)
- [Componentes com TypeScript](#Componentes-com-TypeScript)


 # Introdução ao módulo:

1 - Criar o diretório (Pasta):

2 - Criar o  package.json:
Informações principais do projeto:
- Nome,
- Versão,
- Main (principal),
- Tipo de licença,
- As pendência do projeto:
	- /** Biblioteca de terceiros que são instalados na aplicação **/

> yarn init -y
ou 
> npm init -y
ou
> expo init nome-do-app

## Instalação da primeira Dendência:

### Biblioteca REACT:
/** Comando executado no terminal **/

> yarn add react
ou
> npm install react
ou
> expo instal react

 /** Para usar a biblioteca é preciso importar dentro do projeto. Na página que está sendo usada. **/

 > import React from 'react';

 /** Cria o arquivo 'yarn.lock' e a pasta 'node_modules', que vai está inserido todas as bibliotecas (dependências) utilizadas/instaladas em seu projeto. **/

 ### Instalação do React-dom:

 > yarn add react-dom

 /** React Dom é a forma que existe para trabalhar com react na web. Html convertida em uma sitaxe se objeto (JavaScript) **/

 ### Criação de uma pasta chamada 'src'

 Onde ficará a estrutura de códigos criado na aplicação.

 ### Criação de outra pasta chamada 'public'

 Onde ficarão arquivos públicos.

 ### Dentro do público:

- Criar um arquivo index.html

Se estiver usando VScode utilize o modo de ciração/atalho digitando ! onde apresentará algumas opções, escolha html5

# Configurando o Babel
[Documentação](https://babeljs.io/ 'Site do babel')

O babel é uma ferramenta que traduz de uma forma que seja mais fácil (entendivel o código). Converter o código para uma forma que os navegadores entenda melhor.

### Instalação do Babel:

> yarn add @babel/core @babel/cli @babel/preset-env -D

* @babel/core
   - É o prório babel (biblioteca);

 * @babel/cli
   - Para poder executar o babel através de comandos no terminar. 

* @babel/preset-env
   - biblioteca do babel que identifica com tipo de aplicação para converter melhor o código.

/** -D o sulfixo representa que você não irá levar toda a dependência para produção **/

### Criar um arquivo babel.config.js (na raiz);
* babel.config.js
   > module.exports ={
      presets:{
         '@babel/preset-env'
      }
   }

> yarn add @babel/preset-react -D

/** Para o babel entender o funcionamento react e html **/

 
### Dentro babel.config.js
 * babel.config.js
   > module.exports ={
      presets:{
         '@babel/preset-env'.
         '@babel/preset-react',
      }
   }


 - Criar um arquivo com extensão JS dentro da pasta src (já criada).

Dentro do index.js
   import React from 'react';

   function App(){
      return <h1> Hello World </h1>
   }

### Instalação

> yarn add @babel/preset-react -D

/** Para o babel entender o funcionamento react e html **/

 
### Dentro babel.config.js
 * babel.config.js
   > module.exports ={
      presets:{
         '@babel/preset-env'.
         '@babel/preset-react',
      }
   }


### Criação de arquivo,
dist/bundle.js

>yarn babel src/index.js --out-file dist/bundle.js

/** Diretório e arquivo para tradução do babel **/
 
### usar extensão jsx para os arquivos js (arquivos react com html)


# Configurando Webpack
[WebPack Doc](https://webpack.js.org/ 'site webpack')

Ele vai ensinar para aplicação como ela deve trata cada tipo de arquvios. Convetendo em arquivos entendivel.


> yarn add webpack webpack-cli -D

## Criando arquivo de configuração:

* webpack.config.js (raiz)

/** Adiciona dentro do arquivo criado  e deixando multiplataforma no sentido de leitura de diretório **/

   import path = require('path')

   module.exports = {
      entry: path.resolve(__dirname, 'src' m 'index.jsx'),
      output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
      },
      resolve: {
         extensions: ['.js', '.jsx'],
      },
      module:{
         rules: [
            {
               test:/\.jsx$/,
               exclude: /node_modules/,
               use:'babel-loader',
            }
         ]
      },

   };

> yarn babel-loader -D

## Criar arquivo chamado src/App.jsx
   export function App(){
      return <h1> Hello World</h1>
   }

## Alterando src/index.jsx
   import React from 'react';
   import {App} from './App';

   /** excluir demais conteúdo **/

# Estrutura ReactJS

## No arquivo public/index.html

> body
>     <div id='root'> </div>

## No src/index.jsx

   import { render } from 'react-dom';
   import { App } from './App';

   render(<h1>test</h1>, document.getElementById('roor'))

A cada alteração nesse momento é preciso executar o webpack

> yarn webpack

## No public/index.html
...
   > <script> src='../dist/bundle.js' </script>


## no babel.config.js
* babel.config.js
   > module.exports ={
      presets:{
         '@babel/preset-env',
         ['@babel/present-react', {
          runtime:'automatic'  
         }],
      }
   }

## no src/index.jsx

   import { render } from 'react-dom';
   import { App } from './App';

   render(<App/>, document.getElementById('roor'))

## no webpack.config.js

module.exports={
   mode:'development',
   ...
}

# Servindo HTML estático

## Em public/index.html
Retira a tag script.

## Instação
> yarn add html-webpack-plugin -D

## No webpack.config.js
   const path =require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   ...
   resolve:{...}
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname,'public', 'index.html')
      })
   ],
   ...

   /** vai gerar uma novo arquivo dentro do dist **/

# Webpack Dev Server

## Instalação do Webpack-dev-server 
> yarn add webpack-dev-server -D

## Dentro de webpack.conf.js
...
  devServer: {
      contentBase:path.resolve(__dirname, 'public'),
    },

# Utilizando source maps

## Em webpack.conf.js
   ...
   mode: 'development',
   devtool:  'eval-source-map', 
   ...

# Ambiente dev e produção
## Em webpack.conf.js
   const ...
   const isDevelopment = process.env.NODE_ENV !== 'production'
 
 Alterar mode,
   mode: isDevelopment ? 'development : 'production',
   devetool: isDevelopment ? 'eval-source-map' : 'souce-map',
   ...

### Configurando as alterações:
 - isDevelopment:

   * Linux e Mac:
   no terminal: 
   > NODE_ENV=production yarn webpack

Para funcionar no Windows:
> yarn add cross-env -D

## No package.json

   "license": ...
   "scripts":{
      "dev": "webpack serve",
      "buld": "cros-env NODE_ENV=production webpack"
   },

   /** a partir dessas configurações já é possível executar o projeto com o comando "yarn dev" **/

# Importando arquivoFundamentos do TypeScript
Pré processador que adicionar algumas funcionalidade a mais. 
> yarn add sass-loader -D

## em Webpack.config.js
Adiciona em rules, segundo bloco CSS
add, 'sass-loader'
troca CSS para scss

## instalação sass
> yarn add node-sass -D





# Primeiro componente React
Formas de encapsular estruturas.
* Um componente por arquivo.
* Sempre começa com letra maiuscula. 

## Criação do arquivo components/[RepositoryList.jsx](src/components/RepositoryList.jsx)

Sempre que for usar um código JS dentro do HTML usar chaves {}

# Propriedades no React

Cria o arquivo components/RepositoryItem.jsx

## Utilizando propriedade em componentes
Ao declarar um componente é possível determinar propriedades exclusivas.
Para isso é necessário incluir no componente (arquivo) filho na funçao "props" que recebe todas as propriedades.

Para acessar basta fazer semelhante ao Exemplo:
    <strong>{props.repository?.name ?? 'default'}</strong>

    ? o uso desse artifício faz com o que caso não seja utilizado em todos os componentes  mesmo permita. 
    ?? funciona no sentido de || ou, que caso não esteja definido será usado o valor padrão, nesse exemplo 'default'.

# Estado de componente
## usando hooks (useState)
# Imutabilidade
conceito que não posso incrementar novos componentes a uma lista (por exemplo) e sim criar um novo objeto passando a lista anterior. como no exemplo

lista1 = ['a', 'b','c'] // listas antiga
lista2 - [..., 'd'] // nova lista com todos da anterior mais a nova.
# Fast refresh no webpack
Instalação:
> yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh


Alteração no Webpack para satisfazer alterações. Não perder alterações em desenvolvimento.

# Estilização da listagem
Criação do arquivo repositories.scss (styles)

# Utilizando useEffect

Usar o mesmo tipo de variável dentro da useState
ex. const [lista, setLista] = useState([]); // como vou utilizar lista (array) devo iniciar a minha variável com mesmo tipo.

useEffect: serve para disparar uma função quando algo acontecer na função. Ex. uma variável.

Sintaxe:
Os parâmetros do useEffEct (qual função eu devo executar, quando eu vou executar)

Se a dependência [] for vazio será executado uma única vez.

useEffect(() => {

},[])

Note: Cuidado para não deixar sem o segundo parâmetro.
O componente é executado por completo.

# Listando repostórios

map: toda vez que se utiliza map é necessário ter uma key.

# Fundamentos do TypeScript

SuperSet

TypeScript permite adicionar tipagem ou formato 

# TypeScript no ReactJS
Instalação do TypeScript

> yarn add typescript -D

Iniciar o typescript

> yarn tsc --init

Alterando configurações do arquivo gerado "tsconfig.json"

Alterando para:
         {
         "compilerOptions": {
            "lib": ["dom","dom.iterable","esnext"],                                   
            "allowJs": true,                             
            "jsx": "react-jsx",                           
            "noEmit": true,                              
            "strict": true,                                 
            "moduleResolution": "node",  
            "resolveJsonModule": true,  
            "isolatedModules": true,              
            "allowSyntheticDefaultImports": true,        
            "esModuleInterop": true,                        
            "skipLibCheck": true,                           
            "forceConsistentCasingInFileNames": true        
         },
         "incluede":["src"]
         }

Adicionando:

> yarn add @babel/preset-typescript -D

Alterar arquivo babel.config.js
adicionando 
- '@babel/present-typescript'

Dentro do webpack alterar em rules
modificar a linha  
test: /\.(j|t)sx$/,

E 

 resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx'],

# Componentes com TypeScript

Alterando tipos de arquvios

Mudando extensão do App.jsx para App.tsx

No processp de tipagem não é necessário representar todos os tipos e elementos, apenas os que serão usados. No caso do exemplo desta prática o repositório possui uma descrição com vários componentes, porém só repreento o que será usado.


