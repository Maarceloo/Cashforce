# Desafio Técnico

O Desafio é desenvolver uma tela de notas fiscais que consome informacoes de um banco de dados Mysql.

## 📋 Pré-requisitos

- A aplicação necessita do `Docker` instalado localmente, execute o comando no terminal para verificar a instalação.

```
docker -v
```

- A aplicação necessita que as portas estejam disponiveis:
`Fron-End - 3000`
`Back-End - 3001`
`MySql - 3306`
- Verifique a disponibilidade de portas no terminal executando o seguinte comando:

```
docker ps -a
```

---

### 🔧 Instalação

Rodando a aplicacão.

Clone o repositorio:

```
git clone https://github.com/Maarceloo/Cashforce
```

Acesse `Cashforce/backend` e instale as dependencias:

```
cd Cashforce/backend/ && npm install
```

Suba o container Mysql:

```
docker-compose up -d
```

Suba o banco de dados:

```
npm run db:up
```

Rode o `backend`:

```
npm run dev
```

Acesse o `Cashforce/frontend` e instale as dependencias:

```
cd Cashforce/frontend/ && npm install
```

Execute o frontend:

```
npm start
```

Clique aqui para visualizar a aplicação:

- [Cashforce](http://localhost:3000/)

---


## 🛠️ Tecnologias

- [ReactJS](https://pt-br.reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [React Router]()
- [Node.Js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MySql](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Sequelize(ORM)](https://sequelize.org/)

---
⌨️ Desenvolvido por [Marcelo De Lima](https://github.com/Maarceloo) 🛠️
