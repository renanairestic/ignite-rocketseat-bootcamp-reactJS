## [Create React App - Doc 🔗 ](https://create-react-app.dev/docs/getting-started/)

Prepara o ambiete React, pré configurado.

## Criando o Projeto

> yarn create react-app dtmoney --template typescript

  Obs. `--template typescript` usado para criar no formato de template TypeScript

# Dependências
  Lista de dependências usadas no projeto.

  ## Styled Components

  Biblioteca para "CSS in JS".

  [Acesse o site oficial](https://styled-components.com/)

  Para instalar no terminal:
  > yarn add styled-components

  Caso apresente erro na importação:
  > yarn add @types/styled-components -D

  Vantagem de utilizar estilização apenas dentro do componente que é utilizada.

  ## JSON Server (não utilizado)

  (Acesso ao github)[https://github.com/typicode/json-server]



  ## Mirage JS

  [Acesso a documentação - 🔗](https://miragejs.com/)

  Comando para instalação no terminal:
  > yarn add miragejs

  Possui banco de dados integrado;
  Realiza relacionamento;
  
  ## Axios
  [Acesso a documentação no GitHub](https://github.com/axios/axios)
  
  Comando para instalação no terminal:

  > yarn add axios


  ## Boas Práticas / Dicas
  
  ### DICA - Fonte Chrome

  Uso do hacker para o navegador chrome detalhar melhor as fontes. (nitido)

  ```css
      --webkit-font-smoothing:antialiased;
  ```

  ### DICA - Dimensionamento de tela (rem)
  1rem = 16px
  16px Padrão rederizado

  ### DICA/Boa Prática -  Utilização de percentagem para tamanho de fonte

  Recomendado usar como medida de tamanho para fonte, porcentagem, pois se o usuário usar opção no dispositivo de aumentar ou diminuir a fonte essa proporção acompanha. 

  ### DICA - Google Fonts

  No React usar o formato de link.
  Colocar o link da fonte gerado pelo Google logo no início para carregamento das configuações mais rápidas. (25% mais rápido em média)

  ### DICA - strong comportando como uma div

  Por padrão strong não absorve margin. Para se comportar como uma div podemos usar a seguinte propriedade css.
  ```css
  display:block;
  ```







