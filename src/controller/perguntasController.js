const objectId = require('mongodb').ObjectId;
const perguntas = require('../models/perguntas');
const respostas = require('../models/respostas')


async function index(req, res){
    try {
        const listaDePerguntas = await perguntas.find().sort({data: -1});
        return res.status(200).render('index', {perguntas: listaDePerguntas})
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
        return res.status(201).redirect('/')
    } catch(error){
        return res.status(400).json({ 
            error:error.message 
        })
    }
}

async function view(req, res){
    try {
        const pergunta = await perguntas.find({
            _id: objectId(req.params.idPergunta)
        });

        let resposta = await respostas.find({
            perguntaId: objectId(req.params.idPergunta)
        }).sort({data: -1});

        return res.status(200).render('responder', {
            pergunta: pergunta,
            respostas: resposta,
            formatarData: formatarData
        })
    } catch(error){
        console.log("☭🚩 ~ error", error)
        return res.status(500).redirect('/')
    }
}

function formatarData(data) {
    let dia = data.getDate().toString().padStart(2, '0'),
    mes = (data.getMonth() + 1).toString().padStart(2, '0'),
    ano = data.getFullYear(),
    horas = (data.getUTCHours() - 3).toString().padStart(2, '0'),
    minutos = data.getUTCMinutes(),
    dataCorrigida = `${dia}/${mes}/${ano} - ${horas}h${minutos}`
    return dataCorrigida;
}

module.exports = {
    index, store, view
}