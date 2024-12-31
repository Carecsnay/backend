const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ljmw5.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`
        );
        return console.log("Conexão sucedida!");
    } catch (error) {
        console.log("Conexão não sucedida!", error);
    }
};

module.exports = connectToDatabase;
