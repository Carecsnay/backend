//bibliotecas
const express = require("express");
const dotEnv = require("dotenv");

//arquivos
const connectToDatabase = require("./src/database/mongoose.database");
const taskRouter = require("./src/routers/task.routers");

dotEnv.config(); //inicializando o dotEnv (é necessário primeiro chamar ela antes do banco de dados para usarmos aquela template string do mongoose.)
const app = express(); //inicializando express
app.use(express.json()); //fala pro express que vamos receber json nas requisições, já converte o json para objeto javascript automaticamente

connectToDatabase();
//Função executada quando iniciar o servidor

app.use("/tasks", taskRouter); // a partir daqui, vamos utilizar essas rotas a quando acessamos o "/tasks" (desestruturamos as rotas para "task.routers.js")

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
