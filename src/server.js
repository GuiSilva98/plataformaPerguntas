const express = require('express');

const app = express();
const routes = require('./routes')
const connectionDb = require('../database/database')
const porta = 8000;

connectionDb();

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(porta, () => {
    console.log("Servidor iniciado em http://localhost:" + porta)
})

