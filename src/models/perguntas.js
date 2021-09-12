const mongoose = require('mongoose');

const perguntasSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        required: true
    },
    titulo: {
        type: String,
        required: true
    }, 
    descricao: {
        type: String,
        default: false
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("perguntas", perguntasSchema);