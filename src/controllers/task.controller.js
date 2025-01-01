// para cada router, terá um controller.

const TaskModel = require("../models/task.model");
const { notFoundError } = require("../errors/mongodb.errors");

class TaskController {
    constructor(req, res) {
        //no caso ele precisa do req e res pois ele será responsável também por enviar as responses para o usuário  (mensagens HTTPS 404, 500, 200, etc).
        this.req = req;
        this.res = res;
    }

    async getAll() {
        try {
            //Usa o task model para procurar determinado registro no banco baseado na condição
            const tasks = await TaskModel.find({}); //pegar todas as tarefas
            //Tudo que enviamos para o send tem que ser em formato JSON
            this.res.status(200).send(tasks);
        } catch (error) {
            //Tratamento para caso o banco esteja offline ou algo do tipo
            this.res.status(500).send(error.message);
        }
    }

    async getById() {
        try {
            const taskId = this.req.params.id; //pegando ID da tarefa
            const task = await TaskModel.findById(taskId); //buscando a tarefa pelo ID

            if (!task) {
                return notFoundError(this.res);
            } else {
                return this.res.status(200).send(task); //retornando a tarefa encontrada
            }
        } catch (error) {
            //Tratamento para caso o banco esteja offline ou algo do tipo
            this.res.status(500).send(error.message);
        }
    }

    async create() {
        try {
            const newTask = new TaskModel(this.req.body); //Criando uma nova tarefa, com o corpo da requisição (description e isCompleted)

            await newTask.save(); //usa o mongoose para salvar uma nova tarefa no banco de dados.
            this.res.status(201).send(newTask); //status 201 para criação de um novo arquivo no banco de dados
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
    async update() {
        try {
            const taskId = this.req.params.id; //ID da tarefa
            const taskData = this.req.body; //Conteúdo da tarefa

            const taskToUpdate = await TaskModel.findById(taskId);

            if (!taskToUpdate) {
                return notFoundError(this.res);
            } else {
                const allowedUpdate = ["isCompleted"]; //único campo que permite atualização
                const requestedUpdates = Object.keys(taskData); //vai pegar o atributo (key) "description" e "isCompleted" de cada tarefa

                // O loop 'for' percorre cada item na lista `requestedUpdates`.
                for (const update of requestedUpdates) {
                    // Verifica se a chave atual (`update`) está contida na lista de chaves permitidas (`allowedUpdate`).
                    if (allowedUpdate.includes(update)) {
                        // Se a chave (isCompleted) estiver na lista, significa que este campo pode ser atualizado.
                        // Então atualizamos o valor correspondente da tarefa com o novo valor obtido da solicitação PATCH.
                        taskToUpdate[update] = taskData[update];
                    } else {
                        this.res.status(500).send("Campo description não pode ser editado!");
                    }
                }
                await taskToUpdate.save();

                this.res.status(200).send(taskToUpdate);
            }
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
    async delete() {
        try {
            const taskId = this.req.params.id; //id da tarefa
            const taskToDelete = await TaskModel.findById(taskId);

            if (!taskToDelete) {
                return notFoundError(this.res);
            } else {
                const deleteTask = await TaskModel.findByIdAndDelete(taskId); //Método do mongoose para deletar algo do banco de dados usando o ID como referencia
                this.res.status(200).send(deleteTask);
            }
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
