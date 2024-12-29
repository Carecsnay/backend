const { Schema, model } = require("mongoose");

//Criação do modelo de entidade
const taskSchema = Schema({
    description: {
        type: String,
        require: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

//Dando push na entidade para criar de fato a entidade no BD

const TaskModel = model("Task", taskSchema);

module.exports = TaskModel;
