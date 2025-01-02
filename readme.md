# Task Manager FSC - Backend

## Descrição

API RESTful para gerenciamento de tarefas, desenvolvida em Node.js com Express e MongoDB. Este projeto é parte de uma aplicação full-stack voltada para o gerenciamento de tarefas, permitindo criar, atualizar, visualizar e deletar tarefas. Em breve terá integração com o front-end (react).

---

## Estrutura do Projeto

```bash
.
├── index.js
├── package.json
├── .github
│   └── workflows
│       └── main.yml
├── src
│   ├── controllers
│   │   └── task.controller.js
│   ├── database
│   │   └── mongoose.database.js
│   ├── errors
│   │   ├── general.errors.js
│   │   └── mongodb.errors.js
│   ├── models
│   │   └── task.model.js
│   └── routers
│       └── task.routers.js
└── .env.example
```

---

## Funcionalidades

-   [x] Criar tarefas (POST `/tasks`)
-   [x] Listar todas as tarefas (GET `/tasks`)
-   [x] Buscar tarefa por ID (GET `/tasks/:id`)
-   [x] Atualizar tarefa (PATCH `/tasks/:id`)
-   [x] Deletar tarefa (DELETE `/tasks/:id`)

---

## Tecnologias Utilizadas

-   Node.js
-   Express
-   Git e GitHub (para versionamento e hospedagem do código)
-   JSON View (para visualização de dados)
-   MongoDB (banco de dados NoSQL)
-   Network Access para MongoDB (para acesso remoto)
-   Dotenv (para gerenciamento de variáveis de ambiente)
-   GitLens (para análise do histórico de commits no GitHub)
-   Mongoose (biblioteca para interação com o banco de dados MongoDB)
-   Entidades de banco de dados (modelos de dados)
-   Padrão de nomenclatura para modelos (entidades): nomeModelo (por exemplo: Tarefa)
-   Schema Mongoose (definição do esquema dos dados)
-   Postman ( ferramenta de teste e desenvolvimento de APIs)
-   Variáveis de ambiente com o Postman (para simular requisições com diferentes valores)
-   Express Middleware (express.json) (para tratamento de JSON em requisições)
-   Router Express (para organizar as rotas da API)
-   MongoDB Compass (para visualização e gerenciamento do banco de dados)
-   Padrão MVC (Model-View-Controller) para estruturação do código
-   GitHub Actions (CI/CD) (para automação do build, testes e deploy)
-   Boa prática para deploy: especificar versão do Node.js para garantir que o site seja executado da mesma forma em diferentes ambientes
-   Render (para hospedagem do aplicativo)

---

## Pré-requisitos

-   Node.js v22.12.0 (mínimo)
-   MongoDB Atlas configurado
-   Postman (para testes)

---

## Variáveis de Ambiente

Crie um arquivo `.env` baseado no modelo `.env.example` e configure as seguintes variáveis:

```plaintext
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_APP_NAME=nome_do_app
PORT=porta_opcional
```

---

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/task-manager-fsc-backend.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd task-manager-fsc-backend
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

---

## Uso

1. Inicie o servidor:

    ```bash
    npm run dev
    ```

2. Acesse a API pelo endpoint base:

    ```bash
    http://localhost:8000/tasks
    ```

---

## Testes com Postman

-   Configure as requisições com o endpoint local.
-   Utilize variáveis de ambiente no Postman para facilitar os testes.

---

## Contribuição

1. Fork o projeto.
2. Crie uma branch com sua feature:

    ```bash
    git checkout -b minha-feature
    ```

3. Commit suas mudanças:

    ```bash
    git commit -m "Minha nova feature"
    ```

4. Faça o push para sua branch:

    ```bash
    git push origin minha-feature
    ```

5. Abra um Pull Request.

---

## Autor

Criado por Bruno Benicio. Sinta-se à vontade para contribuir ou enviar sugestões!
