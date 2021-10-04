const objectId = require('mongodb').ObjectId;
const perguntas = require('../models/perguntas');
const respostas = require('../models/respostas')

async function update(req, res){
    try {
        const {corpo, idPergunta} = req.body

        // const pergunta = await perguntas.find({
        //     _id: objectId(idPergunta)
        // }); 
        // TODO: Salvar respostas dentro da própria pergunta

        const resposta = new respostas({
            _id: new objectId(),
            perguntaId: objectId(idPergunta),
            resposta: corpo,
        })

        try{
            await resposta.save();
            return res.status(201).redirect(`/pergunta/${idPergunta}`)
        } catch(error){
            return res.status(400).json({ 
                error: error.message 
            })
        }
    } catch(error){
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    update
}