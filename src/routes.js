const express = require('express');
const routes = express.Router();
const perguntasController = require("./controller/perguntasController")
const respostaController = require("./controller/respostaController")

//Rotas para exibir/inserir perguntas
routes.get('/',  perguntasController.index)
routes.post('/salvandoPergunta', perguntasController.store);
routes.get('/pergunta/:idPergunta', perguntasController.view)
routes.post('/salvandoResposta', respostaController.update);

//Rota para exibir a página de perguntas
routes.get('/perguntar', (req, res) => {
    res.render('perguntar')
})


module.exports = routes;