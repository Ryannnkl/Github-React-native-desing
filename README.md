<p align="center">
    <a href="https://www.codacy.com/gh/Ryannnkl/Github-React-native-desing/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Ryannnkl/Github-React-native-desing&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/99acc7358ff94bc68c84f5b0a4a6c3f3"/></a>
</p>
<p align="center">
   <img src="https://i.ibb.co/bmTBnj3/Screenshot-20200411-181950-Expo.jpg" width="200" height="380">
   <img src="https://i.ibb.co/yQdp1ZF/Screenshot-20200411-181937-Expo.jpg" width="200" height="380">
   <img src="https://i.ibb.co/cL1Yk92/Screenshot-20200413-145729-Expo.jpg" width="200" height="380">
   <br/>
   <img src="https://i.ibb.co/f4fH0Pr/Screenshot-20200413-145719-Expo.jpg" width="200" height="380">
</p>

# Github mobile

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6bfba7f3b8cf40f6b94949c91741b3b6)](https://app.codacy.com/gh/Ryannnkl/Github-React-native-desing?utm_source=github.com&utm_medium=referral&utm_content=Ryannnkl/Github-React-native-desing&utm_campaign=Badge_Grade)

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

## autor

| [<img src="https://avatars1.githubusercontent.com/u/48577990?v=4" width=115><br><sub>@Ryannnkl</sub>](https://github.com/Ryannnkl) |
| :--------------------------------------------------------------------------------------------------------------------------------: |

