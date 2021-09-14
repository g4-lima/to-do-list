# Lista de Tarefas

<br/>

<p align="center">
  <a href="#Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Validação">Validação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Responsividade">Responsividade</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rodar">Rodar Projeto</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

## Funcionalidades

Projeto com a função de criar uma lista de tarefas.
Para isso, a aplicação é capaz de comunicar-se com a API e realizar as seguintes funcionalidades:

### Listar as tarefas:
A aplicação se conecta a API e através do método GET, consegue listas todas as tarefas.

### Inlcuir uma nova tarefa:
Através do método POST, uma nova tarefa pode ser criada.
Contendo um títlo e uma descição opcional.

### Remover uma tarefa:
Cada tarefa contém um ID de identificação único, através do envio desse parâmetro com o método DELETE, a aplicação pode realizar a remoção de uma tarefa.

### Editar uma tarefa:
O usuário é capaz de alterar o título, descição ou situação da tarefa (completa ou incompleta).
Para a alteração é necessário enviar o ID de identificação da tarefa, título, descrição e situação, com o método PUT, a aplicação é capaz de reaizar as alterações e renderizar a tarefa atualizada.

## Tecnologias

### Typescript
A linguagem tipada foi utilizada para a criação de toda a aplicação.

### Next.js
A aplicação utiliza o Server Side Rendering, para isso foi utilizada a ferramenta Next.js

### Redux toolkit
Para o gerenciamento de estados dos componentes, foi utilizado o Redux toolkit, uma ferramenta criada pelo Redux que torna a implemetação mais simples no projeto.
Durante a implementação, ocorreram algumas dificuldades com relação as tipagens do Redux, tais erros foram resolvidos com pesquisa nas documentações disponíveis.

### SASS
Foi utilizado o pré-processador de CSS, o SASS. A implementação facilitou a criação da aplicação, pois adiciona algumas funcionalidades, como o encapsulamento das regras de estilo, o que melhora bastante a visualização do projeto.

## Validação

## Responsividade

## Rodar Projeto

