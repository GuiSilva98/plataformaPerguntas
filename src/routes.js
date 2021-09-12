const express = require('express');
const routes = express.Router();
const perguntasController = require("./controller/perguntasController")

routes.get('/', (req, res)  => {
    res.render('index')
})
//Rotas para exibir/inserir perguntas
routes.get('/perguntas', perguntasController.index)
routes.post('/salvandoPergunta', perguntasController.store);

//Rota para exibir a página de perguntas
routes.get('/perguntar', (req, res) => {
    res.render('perguntar')
})


module.exports = routes;