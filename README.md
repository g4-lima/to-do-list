# Lista de Tarefas

<br/>

<p align="center">
  <a href="#Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Validação">Validação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Pesquisa">Pesquisa</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Responsividade">Responsividade</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rodar">Rodar Projeto</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<h1 align="center">
<img align="center" alt="home" width="640px"  src="https://media.giphy.com/media/RrD8BFCQ1p6PbRzNH5/giphy.gif?cid=790b7611d6ce687bc0fd1739a3bb6d004dde15edd74005b6&rid=giphy.gif&ct=g" />
</h1>

---
<br/>

## Funcionalidades

Projeto com a função de criar uma lista de tarefas. <br/>
Para isso, a aplicação é capaz de comunicar-se com a API e realizar as seguintes funcionalidades:

 #### Listar as tarefas:
A aplicação é capaz de renderizar todas as tarefas na Home Page para o usuário, aravés da conexão com a API.

 #### Inlcuir uma nova tarefa:
Novas tareas podem ser criadas,através de um menu. Onde o usuário deve inserir um título e uma descição opcional. <br/>
A tarefa é enviada para o back-end através do método POST.

 #### Remover uma tarefa:
O usuário pode clicar na opção: Remover tarefa - disponível nas opções em todas as caixas de tarefa. <br/>
Cada tarefa contém um ID de identificação único, através do envio desse parâmetro com o método DELETE, a aplicação pode realizar a remoção de uma tarefa.

 #### Editar uma tarefa:
O usuário é capaz de alterar o título, descição ou situação da tarefa (completa ou incompleta). <br/>
Para a alteração é necessário enviar o ID de identificação da tarefa, título, descrição e situação, com o método PUT, a aplicação é capaz de reaizar as alterações e renderizar a tarefa atualizada.

---
<br/>

## Tecnologias

 #### Typescript
A linguagem tipada foi utilizada para a criação de toda a aplicação.

 #### Next.js
A aplicação utiliza o Server Side Rendering, para isso foi utilizada a ferramenta Next.js

 #### Redux toolkit
Para o gerenciamento de estados dos componentes, foi utilizado o Redux toolkit. Uma ferramenta criada pelo Redux, que torna a sua implemetação mais simples no projeto. <br/>
Durante a implementação, ocorreram algumas dificuldades com relação as tipagens do Redux, tais erros foram resolvidos com pesquisa nas documentações disponíveis.

 #### SASS
Foi utilizado o pré-processador de CSS, o SASS. A implementação facilitou a criação da aplicação, pois adiciona algumas funcionalidades, como o encapsulamento das regras de estilo, o que melhora bastante a visualização do projeto.

---
<br/>

## Validação

 #### YUP
 Para a validação dos inputs e tratamento de erros, foi utilizada a biblioteca YUP. <br/>
 Uma biblioteca de simples implementação, que segue as regras da documentação do back-end para a validação, conforme mostrado abaixo:
 
 <img align="left" alt="no-name" width="240px" src="https://media.giphy.com/media/lUTLzHQZZliiYsf1Mk/giphy.gif" />
 <img align="center" alt="title" width="240px" src="https://media.giphy.com/media/nSoWhSPXaF5q7kDZI7/giphy.gif" />
 <h1 align="right">
 <img align="center" alt="description" width="240px" src="https://media.giphy.com/media/qsgIatujhzouxG5q0O/giphy.gif" />
  </h1>
 
---
<br/>

## Pesquisa
O componente de pesquisa criado, filtra os tarefas e atualiza em tempo real os resultados a cada caractere inserido.  <br/>
Sua funcionalidade está demonstrada abaixo:

 <img align="center" width="640px" alt="search"  src="https://media.giphy.com/media/QZ2AKP3sqzJrjtONJa/giphy.gif" />

---
<br/>

## Responsividade
A aplicação conta com responsividade para dispositivos móveis, conforme demostrado: 

 <img align="center" alt="mobile"  src="https://media.giphy.com/media/NAOBx5JbVDM86JbPmi/giphy.gif" />

---
<br/>

## Rodar Projeto
  #### Requerimento

- [Yarn](https://classic.yarnpkg.com/)

**Instalação das dependências**

```sh
$ yarn
```

#### Rodar Web - Modo Desenvolvedor

```sh
$ yarn dev
```
### Deploy
Para testes das funcionalidades, a aplicação está hospedada na Vercel.<br/>
E pode ser acessada através do link:<br/>
<br/>
https://to-do-list-indol.vercel.app/

