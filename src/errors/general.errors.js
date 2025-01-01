const notAllowedEditError = (res) => {
    return res.status(500).send(`Campo "description" não pode ser editado!`);
};
module.exports = {
    notAllowedEditError,
};
