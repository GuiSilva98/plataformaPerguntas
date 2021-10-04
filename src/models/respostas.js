const mongoose = require('mongoose');

const respostaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        required: true
    },
    perguntaId: {
        type: mongoose.ObjectId,
        required: true
    },
    resposta: {
        type: String,
        required: true
    }, 
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("respostas", respostaSchema);
