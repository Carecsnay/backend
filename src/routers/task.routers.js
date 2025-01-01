const express = require("express");
const router = express.Router();

const TaskModel = require("../models/task.model");
const TaskController = require("../controllers/task.controller");

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

//recuperando uma tarefa especifica (pelo ID)
router.get("/:id", async (req, res) => {
    try {
        const taskId = req.params.id; //pegando ID da tarefa
        const task = await TaskModel.findById(taskId); //buscando a tarefa pelo ID

        if (!task) {
            return res.status(404).send("A tarefa não foi encontrada!");
        } else {
            return res.status(200).send(task); //retornando a tarefa encontrada
        }
    } catch (error) {
        //Tratamento para caso o banco esteja offline ou algo do tipo
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body); //Criando uma nova tarefa, com o corpo da requisição (description e isCompleted)

        await newTask.save(); //usa o mongoose para salvar uma nova tarefa no banco de dados.
        res.status(201).send(newTask); //status 201 para criação de um novo arquivo no banco de dados
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const taskId = req.params.id; //ID da tarefa
        const taskData = req.body; //Conteúdo da tarefa

        const taskToUpdate = await TaskModel.findById(taskId);
        const allowedUpdate = ["isCompleted"]; //único campo que permite atualização
        const requestedUpdates = Object.keys(taskData); //vai pegar o atributo (key) "description" e "isCompleted" de cada tarefa

        // O loop 'for' percorre cada item na lista `requestedUpdates`.
        for (let update of requestedUpdates) {
            // Verifica se a chave atual (`update`) está contida na lista de chaves permitidas (`allowedUpdate`).
            if (allowedUpdate.includes(update)) {
                // Se a chave (isCompleted) estiver na lista, significa que este campo pode ser atualizado.
                // Então atualizamos o valor correspondente da tarefa com o novo valor obtido da solicitação PATCH.
                taskToUpdate[update] = taskData[update];
            } else {
                res.status(500).send("Campo description não pode ser editado!");
            }
        }

        await taskToUpdate.save();

        res.status(200).send(taskToUpdate);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const taskId = req.params.id; //id da tarefa
        const taskToDelete = await TaskModel.findById(taskId);

        if (!taskToDelete) {
            return res.status(404).send("Não foi possível deletar, pois a tarefa não foi encontrada!");
        } else {
            const deleteTask = await TaskModel.findByIdAndDelete(taskId); //Método do mongoose para deletar algo do banco de dados usando o ID como referencia
            res.status(200).send(deleteTask);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
