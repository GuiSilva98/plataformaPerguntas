const objectId = require('mongodb').ObjectId;
const perguntas = require('../models/perguntas');

async function index(req, res){
    try {
        const listaDePerguntas = await perguntas.find();
        return res.status(200).json({perguntas: listaDePerguntas})
    } catch(error){
        console.log(error)
        return res.status(500).json({error: error.message})
    }
}
async function store(req, res){
    const {titulo, descricao} = req.body

    if (!titulo){
        return res.status(400).json({
            error: "É necessário preencher o título!"
        })
    }

    const perguntar = new perguntas({
        _id: new objectId(),
        titulo,
        descricao,
    })

    try{
        await perguntar.save();

        return res.status(201).json({
            message:"Pergunta criada com sucesso!"
        })
    } catch(error){

        return res.status(400).json({ 
            error:error.message 
        })
    }
}
module.exports = {
    index, store
}