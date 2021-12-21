![Verzel Classroom](screenshots/default.png)

<h3 align="center">
  Verzel Classroom
</h3>

<p align="center">

  <a target="_blank"  href ="">
    <img alt="verzel" src="https://img.shields.io/badge/made%20by-verzel-classroom-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a target="_blank"  href ="https://github.com/jeanbarbosa/verzel-classroom/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jeanbarbosa/verzel-classroom?style=social">
  </a>
</p>

<p align="center">
  <a target="_blank"  href ="#Classroom">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a target="_blank"  href ="#information_source-how-to-use">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a target="_blank"  href ="#tech">Tecnologias usadas</a>
  <a target="_blank"  href ="#memo-license">Licença</a>
</p>

# Verzel Classroom
Verzel classroom

## :information_source: How To Use

```bash

# Clone repository:
$ git clone https://github.com/JeanBarbosa/verzel-classroom.git && cd verzel-classroom

# Install dependencies API
$ cd api && yarn install
$ cp .env.example .env
$ node ace serve --watch

# Install dependencies WEB
$ cd web && yarn install
$ cp .env.example .env
$ yarn start

```
## :information_source: Tecnologias usadas

Front end
Reactjs

Back end
Adonisjs v5

Banco de dados
Sqlite3

Obs: Foi usado sqlite e comitado o banco para facilitar os testes mas poderia se usado qualquer instacia...

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/jeanbarbosa/verzel-classroom/blob/master/LICENSE) for more information.
