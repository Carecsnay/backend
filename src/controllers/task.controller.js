// para cada router, terá um controller.

const TaskModel = require("../models/task.model");

class TaskController {
    constructor(req, res) {
        //no caso ele precisa do req e res pois ele será responsável também por enviar as responses para o usuário  (mensagens HTTPS 404, 500, 200, etc).
        this.req = req;
        this.res = res;
    }

    async getTasks() {
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
}

module.exports = TaskController;
