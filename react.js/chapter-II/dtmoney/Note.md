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

  ## React Modal

  [Acesso a documentação no Github](https://github.com/reactjs/react-modal)

  > yarn add react-modal 

  Caso apresente erro no types executar

  > yarn add @types/react-modal -D   

  ## polished   
  Para manipulação de estilo dentro do JavaScript.
  [Acesso a documentação](https://polished.js.org/)
  > yarn add polished



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

  ## Repassando função entre components

  Dica para utilizar funções criando novas **propriedades**.

  1 - Cria uma interface no componente que vai receber a função. Ex.
    
  ```ts
  interface HeaderProps{
  onOpenNewTransactionModal: () => void;
  }
```
2 - Passa como parâmetro na mesma. Ex.
```js
{  onOpenNewTransactionModal }: HeaderProps
```
3 - Insere o tipo de **props** no componente. Ex.
```html
  <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
```
Note: **onOpenNewTrasactionModal** no **onClick**.

4- Dessa forma acabo criando uma propriedade utilizável.

```html
<Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
```









  ## Props - com Styled Components
  [Using custom props](https://styled-components.com/docs/api#using-custom-props)

  Caso queira criar novas propriedades posso usar a componentização do Style Components.
  1 - Cria interface
  ```ts
  interface RadioBoxProps{
  isActive:boolean;
}
  ```

  2 - Sinaliza a tipagem no Component


```ts 
  export const RadioBox =styled.button<RadioBoxProps>`
```
Note: <RadioBoxProps>

3 - utilize o component
```ts 
  <RadioBox />
```
## Context

Usar quando necessário compartilhar estado entre vários components da aplicação.

[Veja mais em React - Context](https://pt-br.reactjs.org/docs/context.html)

## Type - ignorando parte da interface criada

Caso tenha necessidade de ignorar alguns elementos de uma interface existem duas formas. 
### Omit
Vai omitir
```ts
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
```
### Pick
Vai pegar apenas os selecionados.
```ts
type TrasactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category' >;
```

## Editando um vetor (conceito de imutabilidade)

O conceito de imutabilidade sobre vetores indica que não deve alterar, pensando nisso para realizar uma edição na lista é recomendado realizar uma cópia do antigo e adicionar o novo.

```ts
setTransations([
  ...transactions,
  transaction
])
```
Note **...transactions**

