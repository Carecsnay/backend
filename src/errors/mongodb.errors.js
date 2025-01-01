const successfulOperation = (res) => {
    return res.status(200).send("Operação realizada com sucesso!");
};

const resourceCreated = (res) => {
    return res.status(201).send("Dados inseridos no banco com sucesso!");
};

const notFoundError = (res) => {
    return res.status(404).send("A tarefa não foi localizada no banco!");
};

const internalError = (res) => {
    return res.status(500).send("Ops! Ocorreu um erro inesperado no servidor.");
};

module.exports = {
    successfulOperation,
    resourceCreated,
    notFoundError,
    internalError,
};
