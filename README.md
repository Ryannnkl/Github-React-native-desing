# Github mobile

## um redesing do app mobile do github funcional

- ### utiliza as segintes bibliotecas e API

> **api do github**
>
> > apesar de muito usual, se for muito usada "muitas requests em um unico dia" ela bloqueia o trafego ate o proximo dia
>
> **redux**
>
> > armazena o resultado de uma request da api no estado global do redux
>
> **styled-component**
>
> > estiliação dos componentes para maior organização para alguma futura atualização

- **login**

  - pega o github_username e põe na url `http://api.github.com/users/{gitgub_username}` que retorna um json que fica <br/> salvo no estado do redux

- **Home**

  - mostra as principais informações que são disponibilizadas do usuario pela API do github

- **Repositorios**

  - Lista todos os repositorios do usuario em uma FlatList com função de reload e scroll infinito e cada repositorio é um item clicavel que ao clicar mostra mais detalhes do repositorio

- **Detalhes**
  - Tela responsavel por mostar os detalhes de um repositorio desejado pela rota `repositorios`

## author

| [<img src="https://avatars1.githubusercontent.com/u/48577990?v=4" width=115><br><sub>@Ryannnkl</sub>](https://github.com/Ryannnkl) |
| :--------------------------------------------------------------------------------------------------------------------------------: |

