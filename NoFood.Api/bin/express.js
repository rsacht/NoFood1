const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//Routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

//Criando/Invocando a Api/Server web do express
const app = express();

//Configurações de Parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Configurando a conexão com banco de dados
mongoose.connect(variables.Database.connection, {useNewUrlParser:true});

//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;