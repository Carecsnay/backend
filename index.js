//bibliotecas
const express = require("express");
const dotEnv = require("dotenv");

//arquivos
const connectToDatabase = require("./src/database/mongoose.database");
const TaskModel = require("./src/models/task.model");

dotEnv.config(); //inicializando o dotEnv (é necessário primeiro chamar ela antes do banco de dados para usarmos aquela template string do mongoose.)
const app = express(); //inicializando express
app.use(express.json()); //fala pro express que vamos receber json nas requisições, já converte o json para objeto javascript automaticamente

connectToDatabase();

app.get("/tasks", async (req, res) => {
    try {
        //Usa o task model para procurar determinado registro no banco baseado na condição
        const tasks = await TaskModel.find({}); //pegar todas as tarefas
        //Tudo que enviamos para o send tem que ser em formato JSON
        res.status(200).send(tasks);
    } catch (error) {
        //Tratamento para caso o banco esteja offline ou algo do tipo
        res.status(500).send(error.message);
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body); //Criando uma nova tarefa, com o corpo da requisição (description e isCompleted)

        await newTask.save(); //usa o mongoose para salvar uma nova tarefa no banco de dados.
        res.status(201).send(newTask); //status 201 para criação de um novo arquivo no banco de dados
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Função executada quando iniciar o servidor
app.listen(8000, () => {
    console.log("Listening on port 8000!");
});
