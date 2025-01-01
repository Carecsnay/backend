const notFoundError = (res) => {
    return res.status(404).send("A tarefa não foi localizada no banco!");
};

const objectIdCastError = (res) => {
    return res.status(500).send("Erro interno, não foi possível recuperar o dado!");
};

module.exports = {
    notFoundError,
    objectIdCastError,
};
