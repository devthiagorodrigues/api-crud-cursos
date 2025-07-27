# 🎓 API de Cursos — Projeto Backend Node.js

Este é um projeto backend simples desenvolvido em Node.js e Express para gerenciar um catálogo de cursos via API RESTful. Foi criado para demonstrar habilidades práticas com conceitos de CRUD (Create, Read, Update, Delete) e estruturação de rotas e controllers.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** — Ambiente de execução JavaScript no servidor
* **Express** — Framework web para criação rápida de APIs
* **Nodemon** — Ferramenta para recarregamento automático durante desenvolvimento

---

## 📂 Estrutura do Projeto

```plaintext
crud/
├── controllers/
│   └── cursoController.js   # Lógica de manipulação dos cursos
├── routes/
│   └── index.js             # Definição das rotas da API
├── index.js                 # Ponto de entrada da aplicação
└── package.json             # Configurações e dependências do projeto
```

---

## 🔥 Funcionalidades da API

* Listar todos os cursos — `GET /curso`
* Criar um novo curso — `POST /curso`
* Atualizar curso existente — `PUT /curso/:id`
* Deletar curso — `DELETE /curso/:id`

---

## ⚙️ Como executar

```bash
# Clone o repositório
git clone https://github.com/devthiagorodrigues/crud.git

# Navegue até a pasta do projeto
cd crud

# Instale as dependências
npm install

# Execute a aplicação em modo desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3000`.

---

## 📬 Rotas disponíveis

| Método | Rota         | Descrição                 |
| ------ | ------------ | ------------------------- |
| GET    | `/curso`     | Retorna a lista de cursos |
| POST   | `/curso`     | Adiciona um novo curso    |
| PUT    | `/curso/:id` | Atualiza curso pelo ID    |
| DELETE | `/curso/:id` | Remove curso pelo ID      |

---

## 📌 Observações

* Dados armazenados em memória, sem persistência em banco de dados.
* Projeto ideal para demonstração e base para futuras melhorias.
* Pode ser expandido para incluir autenticação, banco de dados e middlewares.

---

## 👤 Sobre mim

Feito com amor <3

[LinkedIn](https://www.linkedin.com/in/devthiagorodrigues/) | [GitHub](https://github.com/devthiagorodrigues)