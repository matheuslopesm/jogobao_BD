# JogoBão Games - NodeJS + PostgreSQL

Sistema feito com NodeJS + PostgreSQL para o Trabalho Prático da disciplina de Banco de Dados I, com o objetivo de armazenar os dados de uma loja de jogos fictícia. O sistema armazena os produtos, clientes, funcionários e vendas.

Toda a estrutura da API foi feita do zero, utilizando conceitos de Banco de Dados Relacional.

<a href="https://drive.google.com/file/d/12dm59S0qnCxC2734O01JtAL4EsW9Xhv8/view?usp=share_link" style="font-size: 16px">Modelo Entidade-Relacionamento</a>
<br>
<a href="https://drive.google.com/file/d/14y5OiYNiZ48M6UQOm57KpvgWam4ilD79/view?usp=share_link" style="font-size: 16px">Mapeamento Conceitual-Lógico do Sistema</a>

A loja de jogos fictícia é denominada "JogoBão GAMES", e as operações da API são: Create, Read, Update e Delete (CRUD).

Todas as tecnologias utilizadas foram:
<div style="display: inline_block">
    <h3>Web Development:</h3>
    <img align="center" alt="Mat-HTML" height="30" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
    <img align="center" alt="Mat-CSS" height="30" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
    <img align="center" alt="Mat-Js" height="30" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <h3>Frameworks, Platforms and Libraries:</h3>
    <img align="center" alt="Mat-BS" height="30" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white">
    <img align="center" alt="Mat-Node" height="30" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img align="center" alt="Mat-Exp" height="30" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
    <img align="center" alt="Mat-Npm" height="30" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
    <img align="center" alt="Mat-Jest" height="30" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
    <img align="center" alt="Mat-Ins" height="30" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE">
    <h3>Databases:</h3>
    <img align="center" alt="Mat-PGSQL" height="30" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"> 
</div>

# Final Result 🔥 

<img src="frontend\img\web-version.png" alt="Web Version"/> 

## Starting 

Para usar o projeto, siga os passos abaixo:
1. Faça o download de todos arquivos neste repositório;
2. Inicie um servidor de banco de dados no PostgreSQL e execute o arquivo `scripts.sql`;
3. Modifique os campos `user, password, database` no arquivo `api/server/infra/database.js` com os dados de acesso do seu servidor de Banco de Dados.
4. Instale as dependências da API com o comando `npm install`
5. Após todos os passos, inicie o servidor da API com o comando `npm run dev`.
6. Utilize o servidor HTTP `Live Server` e nele abra qualquer um dos arquivos HTML na pasta frontend/view.

--- 

##### Make with 🧠 by Matheus Lopes.