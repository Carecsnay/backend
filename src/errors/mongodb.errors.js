const notFoundError = (res) => {
    return res.status(404).send("A tarefa não foi localizada no banco!");
};

module.exports = {
    notFoundError,
};
