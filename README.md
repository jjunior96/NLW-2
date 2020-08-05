<!--
*** Obrigado por estar vendo o nosso README!
*** Se você tiver alguma sugestão que possa melhorá-lo, dê um fork no repositório e crie uma Pull Request
*** ou abra uma Issue com a tag "sugestão". :D
-->

[![NPM](https://img.shields.io/npm/l/react-native-template-rocketseat-advanced.svg)](https://choosealicense.com/licenses/mit)

<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/89240844-b897e700-d5d3-11ea-850d-5f95d08833c7.png" width="320px"/>
<p align="center"><i>Plataforma que conecta professores e alunos.</i></p>
</p>

<h1 align="center">Índice</h1>
 
[Screenshots](#screenshots)  | [Estrutura de Projeto](#estrutura-do-projeto)  | [Como Usar](#como-usar)  | [Tecnologias](#rocket-tecnologias)  |  [Features](#features-implementadas)  |  [Licença](#licença)  
:-------:                  | ------:                                        |:-------:                 | ------:                             | ------:                               | ------:

## Screenshots

### Web

<p align="center">
<img src="https://user-images.githubusercontent.com/30422190/89197232-ca509e80-d581-11ea-9fa4-b0ab23fec2e4.png">
<img src="https://user-images.githubusercontent.com/30422190/89197238-ccb2f880-d581-11ea-8f96-90583fe94b35.png">
</p>

### Mobile

<p align="center">
<img src="https://user-images.githubusercontent.com/30422190/89197242-cde42580-d581-11ea-9e8f-bd0ba7f7ba39.jpg" width="400">
<img src="https://user-images.githubusercontent.com/30422190/89198930-421fc880-d584-11ea-86d5-e0d7863f6ab3.jpg" width="400">
</p>

## Estrutura do projeto

```bash
NLW/server
├── src/
│   ├── controllers/
│   │   ├── ClassesController.ts
│   │   └── ConnectionsController.ts
│   ├── database/
│   │   ├── migrations/
│   │   │   └── 00_create_users.ts
│   │   │   └── 01_create_classes.ts
│   │   │   └── 02_create_class_schedule.ts
│   │   │   └── 03_create_connection.ts
│   │   ├── connection.ts
│   │   └── database.sqlite
│   └── utils/
│       └── convertHoursToMinutes.ts.ts
├── routes.ts
├── server.ts
├── .editorconfig
├── .gitignore
├── knexfile.ts
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Como Usar 👨‍💻️ :

```shell
git clone git@github.com:jjunior96/NLW.git
cd NLW

#Iniciando o Servidor localhost:3333
cd server
yarn install
yarn start

#Iniciando o Web localhost:3000
cd web
yarn install
yarn start
```

## :rocket: Tecnologias

- 🏗️ Backend (API):
  - NodeJs;
  - Express;
  - Knex;
  - Sqlite3;
  - Cors;
- 🏗️ Frontend (Web):
  - ReacJS;
  - React Router DOM;
- 🏗️ Mobile ():
  - React Native;

## Features Implementadas

- Backend:

  - [x] Criação de classes (Professor/aula/horários disponíveis);
  - [x] Listagem de classes;
  - [x] Criador de Conexões;
  - [x] Listagem de conexões.

- Frontend:
  - [x] Criação de classes (Professor/aula/horários disponíveis);
  - [x] Listagem de classes;
  - [x] Criador de Conexões;
  - [x] Listagem de conexões.

## Licença

Distribuído sob a licença MIT.
