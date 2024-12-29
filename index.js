//bibliotecas
const express = require("express");
const dotEnv = require("dotenv");

//arquivos
const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotEnv.config(); //inicializando o dotEnv (é necessário primeiro chamar ela antes do banco de dados para usarmos aquela template string do mongoose.)
const app = express(); //inicializando express

connectToDatabase();

app.get("/tasks", async (req, res) => {
    //Usa o task model para procurar determinado registro no banco baseado na condição
    const tasks = await TaskModel.find({}); //pegar todas as tarefas
    //Tudo que enviamos para o send tem que ser em formato JSON
    res.status(200).send(tasks);
});

//Função executada quando iniciar o servidor
app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
