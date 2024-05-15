const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/post')

//Config
    //Template
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars') 
//bodyParser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//rotas
// envia informações por meio da URL----Metodo GET
app.get('/', function(req, res){
    res.render('home')
})
app.get('/cad', function(req,res){
    res.render('formulario')
})
app.post('/add', function(req,res){
   Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
   }).then(function(){
    res.redirect('/')
   }).catch(function(erro){
    res.send("houve um erro: "+ erro)
   })
}) 
app.post('/add', function(req,res){
    res.send('formulario recebido com sucesso')
})




app.listen(8081, function(){
    console.log("servidor rodando na url http://localhost:8081");
})

 