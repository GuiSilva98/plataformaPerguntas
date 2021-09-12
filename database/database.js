require('dotenv').config();
const mongoose = require('mongoose');

let url = process.env.MONGO_URL
let config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

function connectionDb() {
    mongoose.connect(url, config);
    const db = mongoose.connection;
    db.on("error", ()=> console.error(error))
    db.once("open", () => console.log("Conectado ao banco de dados!"))
}

module.exports = connectionDb;